function StepCard({ icon, title, description, step }) {
  return (
    <li className="card-lift relative rounded-[var(--radius-card)] bg-surface p-7 text-center shadow-card">
      <span
        aria-hidden="true"
        className="absolute left-5 top-5 font-heading text-sm font-extrabold text-primary/60"
      >
        0{step}
      </span>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mx-auto mt-2 max-w-[260px] text-base text-muted-foreground">
        {description}
      </p>
    </li>
  );
}

export default StepCard;
