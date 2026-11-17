import { NavLink } from "react-router-dom";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import CategoryCard from "./CategoryCard";

import { useSelector } from "react-redux";

export default function TopCategories() {
  const topCategories = (
    useSelector((state) => state?.products?.categories) ?? []
  ).slice(0, 4);

  return (
    <section
      aria-labelledby="categories-title"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="section-eyebrow">Browse</span>
          <h2 id="categories-title" className="section-title mt-2 !text-left">
            Top categories
          </h2>
        </div>
        <NavLink
          to="/categories"
          className="inline-flex min-h-11 items-center gap-1 font-heading font-bold text-primary hover:text-primary-hover"
        >
          Show all
          <ArrowForwardRounded fontSize="small" aria-hidden="true" />
        </NavLink>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {topCategories.map((category) => (
          <li key={category}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
}
