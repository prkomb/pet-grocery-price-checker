import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import CategoryCard from "./CategoryCard";

import { useState } from "react";

export default function TopCategories() {
  const [categories] = useState([
    { icon: "🥩", label: "Meat & Poultry", id: "1" },
    { icon: "🍞", label: "Breads & Grains", id: "2" },
    { icon: "🍏", label: "Fruits & Vegetables", id: "3" },
    { icon: "🧃", label: "Beverages", id: "4" },
  ]);
  return (
    <Box>
      <h2 className="text-2xl text-center mt-[64px]">Top Categories</h2>

      <div className="flex justify-center gap-6 mt-[58px] ">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              label={category.label}
            ></CategoryCard>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Button
          sx={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
            px: 2.25,
            py: 0.875,
            color: "black",
            fontFamily: "Poppins",
            textTransform: "none",
            cursor: "pointer",
            transition: "all 0.2s linear",
            "&:hover": {
              bgcolor: "#34D399",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
              color: "white",
            },
          }}
        >
          Show More
        </Button>
      </div>
    </Box>
  );
}
