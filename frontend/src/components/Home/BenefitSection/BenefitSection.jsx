import SavingsRounded from "@mui/icons-material/SavingsRounded";
import BoltRounded from "@mui/icons-material/BoltRounded";
import HowToRegRounded from "@mui/icons-material/HowToRegRounded";

const benefits = [
  {
    icon: <SavingsRounded aria-hidden="true" />,
    title: "Save on every shop",
    description: "Compare prices and find the best deals every day.",
  },
  {
    icon: <BoltRounded aria-hidden="true" />,
    title: "Fresh price data",
    description: "Prices are pulled from stores and kept up to date.",
  },
  {
    icon: <HowToRegRounded aria-hidden="true" />,
    title: "Quick sign-up, full access",
    description:
      "Create an account in seconds and unlock personalised features.",
  },
];

export default function WhyPriceHunt() {
  return (
    <section
      aria-labelledby="why-title"
      className="bg-surface px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="section-eyebrow">Why us</span>
          <h2 id="why-title" className="section-title mt-2">
            Why PriceHunt?
          </h2>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon, title, description }) => (
            <li
              key={title}
              className="card-lift flex flex-col items-start gap-4 rounded-[var(--radius-card)] border border-border bg-background p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                {icon}
              </span>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-base text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
