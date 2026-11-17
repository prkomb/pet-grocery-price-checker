const Subscribe = () => {
  return (
    <section
      aria-labelledby="subscribe-title"
      className="px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-[28px] bg-ink px-6 py-12 text-center md:flex-row md:px-14 md:text-left">
        <div className="max-w-lg">
          <h2
            id="subscribe-title"
            className="!text-white text-2xl font-extrabold md:text-3xl"
          >
            Don&apos;t miss out on discounts
          </h2>
          <p className="mt-2 text-base text-teal-100">
            Subscribe to notifications and get alerted when prices drop.
          </p>
        </div>
        <button type="button" className="btn-primary shrink-0">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
