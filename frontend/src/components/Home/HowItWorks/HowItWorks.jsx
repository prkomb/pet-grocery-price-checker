import SearchIcon from "@mui/icons-material/SearchRounded";
import CompareIcon from "@mui/icons-material/CompareArrowsRounded";
import TrackChangesIcon from "@mui/icons-material/NotificationsActiveRounded";
import StepCard from "./StepCard";

const features = [
  {
    id: 1,
    icon: <SearchIcon fontSize="large" aria-hidden="true" />,
    title: "Search product",
    description: "Quickly find products by name or barcode.",
  },
  {
    id: 2,
    icon: <CompareIcon fontSize="large" aria-hidden="true" />,
    title: "Compare prices",
    description: "See prices across stores side by side and spot the best deal.",
  },
  {
    id: 3,
    icon: <TrackChangesIcon fontSize="large" aria-hidden="true" />,
    title: "Track & save",
    description: "Set alerts and track price drops for saved products.",
  },
];

const HowItWorks = () => {
  return (
    <section
      aria-labelledby="how-title"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <div className="text-center">
        <span className="section-eyebrow">Simple as 1-2-3</span>
        <h2 id="how-title" className="section-title mt-2">
          How it works
        </h2>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <StepCard key={f.id} step={i + 1} {...f} />
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
