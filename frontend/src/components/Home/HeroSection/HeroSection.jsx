import SearchRounded from "@mui/icons-material/SearchRounded";
import PetsRounded from "@mui/icons-material/PetsRounded";
import ShoppingBasketRounded from "@mui/icons-material/ShoppingBasketRounded";
import "./HeroSection.css";

const stats = [
  { value: "Compare", label: "prices across stores" },
  { value: "Track", label: "price drops" },
  { value: "Save", label: "on every shop" },
];

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero-section relative mx-4 mt-4 overflow-hidden rounded-[28px] px-5 py-14 sm:mx-6 sm:py-20 lg:py-24"
    >
      <div className="hero-blob hero-blob--a" aria-hidden="true" />
      <div className="hero-blob hero-blob--b" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
          <ShoppingBasketRounded fontSize="small" aria-hidden="true" />
          <PetsRounded fontSize="small" aria-hidden="true" />
          Groceries &amp; pet supplies
        </p>

        <h1
          id="hero-title"
          className="!text-white text-[clamp(2rem,1.2rem+3.6vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight"
        >
          Find the best grocery prices in your area
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-teal-50 sm:text-lg">
          Compare prices across stores in seconds and stop overpaying for
          everyday essentials.
        </p>

        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-3xl bg-white p-2 shadow-xl sm:flex-row sm:items-center"
        >
          <label htmlFor="hero-search" className="sr-only">
            Search for a product
          </label>
          <div className="flex flex-1 items-center gap-2 px-3">
            <SearchRounded className="text-primary" aria-hidden="true" />
            <input
              id="hero-search"
              type="search"
              placeholder="Search a product, e.g. milk, bread"
              className="h-12 w-full bg-transparent text-base text-ink placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>

        <dl className="mt-10 grid grid-cols-3 gap-4 text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-2xl font-extrabold sm:text-3xl">
                {s.value}
              </dd>
              <dd className="text-xs text-teal-50 sm:text-sm" aria-hidden="true">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
};

export default HeroSection;
