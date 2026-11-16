import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Chip,
  Container,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";

const STORE_NAMES = { aldi: "Aldi", sainsburys: "Sainsbury's", tesco: "Tesco" };
const LIMIT = 24;
const money = (n) => `£${n.toFixed(2)}`;

function ProductCard({ product }) {
  const cheapest = Math.min(...product.prices.map((p) => p.price));
  return (
    <Box
      component="a"
      href={`https://www.trolley.co.uk${product.path}`}
      target="_blank"
      rel="noreferrer"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        p: 2.5,
        borderRadius: "16px",
        bgcolor: "#fff",
        textDecoration: "none",
        boxShadow: "0 2px 12px rgba(27,31,59,0.08)",
        transition: "all .25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 28px rgba(27,31,59,0.18)",
        },
      }}
    >
      <Box
        sx={{
          height: 160,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#fff",
        }}
      >
        <img
          src={`https://www.trolley.co.uk/img/product/${product.id}`}
          alt={product.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </Box>
      <Typography
        sx={{ fontFamily: "Poppins", fontWeight: 600, color: "#1B1F3B", minHeight: 48 }}
      >
        {product.title}
      </Typography>
      <Typography sx={{ fontFamily: "Poppins", fontSize: 12, color: "#6B7280" }}>
        {product.category}
      </Typography>
      <Box display="flex" flexDirection="column" gap={0.75}>
        {product.prices.map((p) => (
          <Box
            key={p.store}
            display="flex"
            justifyContent="space-between"
            sx={{
              fontFamily: "Poppins",
              fontSize: 14,
              color: p.price === cheapest ? "#047857" : "#1B1F3B",
              fontWeight: p.price === cheapest ? 700 : 400,
            }}
          >
            <span>{STORE_NAMES[p.store]}</span>
            <span>{money(p.price)}</span>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function StoreProducts() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/api/trolley/categories")
      .then((r) => setCategories(r.data))
      .catch(() => setError(true));
  }, []);

  // debounce search box
  useEffect(() => {
    const t = setTimeout(() => setSearch(query.trim()), 300);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    axios
      .get("/api/trolley/products", {
        params: { category, q: search, page, limit: LIMIT },
      })
      .then((r) => {
        if (cancelled) return;
        setTotal(r.data.total);
        setItems((prev) => (page === 1 ? r.data.items : [...prev, ...r.data.items]));
        setError(false);
      })
      .catch(() => !cancelled && setError(true))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [category, search, page]);

  const pick = (slug) => {
    setCategory(slug);
    setPage(1);
  };

  return (
    <Box sx={{ minHeight: "100vh", py: { xs: 4, md: 8 }, bgcolor: "#F9FAFB" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          textAlign="center"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: { xs: 28, md: 40 },
            color: "#1B1F3B",
            mb: 1,
          }}
        >
          <Box component="span" sx={{ color: "#34D399" }}>
            PriceHunt
          </Box>{" "}
          Products
        </Typography>
        <Typography textAlign="center" sx={{ fontFamily: "Poppins", color: "#6B7280", mb: 4 }}>
          Compare Aldi, Sainsbury&apos;s and Tesco prices. Cheapest in green.
        </Typography>

        <TextField
          fullWidth
          placeholder="Search products"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          sx={{ mb: 3, bgcolor: "#fff", borderRadius: 1 }}
        />

        <Box display="flex" gap={1} flexWrap="wrap" mb={4}>
          <Chip
            label="All"
            clickable
            onClick={() => pick("")}
            color={category === "" ? "success" : "default"}
          />
          {categories.map((c) => (
            <Chip
              key={c.slug}
              label={`${c.name} (${c.count})`}
              clickable
              onClick={() => pick(c.slug)}
              color={category === c.slug ? "success" : "default"}
            />
          ))}
        </Box>

        {error && (
          <Typography textAlign="center" color="error" mb={3}>
            Could not load products. Try again later.
          </Typography>
        )}

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {items.map((p) => (
            <ProductCard key={`${p.categorySlug}-${p.id}`} product={p} />
          ))}
          {loading &&
            Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} variant="rounded" height={340} sx={{ borderRadius: "16px" }} />
            ))}
        </Box>

        {!loading && !error && items.length === 0 && (
          <Typography textAlign="center" sx={{ color: "#6B7280" }}>
            No products found. Run <code>npm run crawl</code> in backend to fill data.
          </Typography>
        )}

        {items.length < total && !loading && (
          <Box textAlign="center" mt={5}>
            <Button
              onClick={() => setPage((p) => p + 1)}
              sx={{
                background: "#34D399",
                color: "#fff",
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontWeight: "bold",
                px: 6,
                borderRadius: "10px",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
