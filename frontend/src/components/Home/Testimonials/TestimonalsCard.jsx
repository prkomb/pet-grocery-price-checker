import { Avatar, Rating } from "@mui/material";

function TestimonalsCard({ name, location, rating, quote, image }) {
  return (
    <figure className="card-lift flex h-full w-full max-w-[350px] flex-col items-center rounded-[var(--radius-card)] border border-border bg-surface p-7 text-center shadow-card">
      <Avatar alt="" src={image} sx={{ width: 56, height: 56 }} />
      <Rating
        value={rating}
        readOnly
        max={rating}
        sx={{ mt: 2, color: "#d97706" }}
      />
      <blockquote className="mt-3 text-base text-ink">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-4">
        <span className="block font-heading font-bold text-ink">{name}</span>
        <span className="block text-sm text-muted-foreground">{location}</span>
      </figcaption>
    </figure>
  );
}

export default TestimonalsCard;
