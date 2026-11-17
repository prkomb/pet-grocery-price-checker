import CategoryRounded from "@mui/icons-material/CategoryRounded";

const CategoryCard = ({ category }) => {
  return (
    <div className="card-lift flex aspect-square flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-4 text-center shadow-card">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary">
        <CategoryRounded fontSize="large" aria-hidden="true" />
      </span>
      <p className="font-heading text-base font-bold capitalize text-ink">
        {category}
      </p>
    </div>
  );
};

export default CategoryCard;
