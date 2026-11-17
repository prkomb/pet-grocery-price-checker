import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import CategoryRounded from "@mui/icons-material/CategoryRounded";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductsList } from "../store/features/products/productsSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state?.products?.categories) ?? [];

  function getCategoryItems(categoryTitle) {
    dispatch(getProductsList(categoryTitle));
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
      <NavLink
        to="/home"
        className="inline-flex min-h-11 items-center gap-1 font-heading font-bold text-primary hover:text-primary-hover"
      >
        <ArrowBackRounded fontSize="small" aria-hidden="true" />
        Back home
      </NavLink>

      <header className="mb-10 mt-4 text-center">
        <h1 className="text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-extrabold tracking-tight">
          <span className="text-primary">PriceHunt</span> categories
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Pick a category to compare prices across stores.
        </p>
      </header>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4">
        {categories.map((category) => (
          <li key={category}>
            <NavLink
              to="/category-products"
              onClick={() => getCategoryItems(category)}
              className="card-lift flex h-full flex-col items-center gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-6 text-center shadow-card"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <CategoryRounded fontSize="large" aria-hidden="true" />
              </span>
              <span className="font-heading text-base font-bold capitalize text-ink">
                {category}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
