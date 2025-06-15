import { Typography } from "@mui/material";

const benefits = [
  {
    icon: "🐝",
    title: "Save up to 30%",
    description: "Compare prices and find the best deals every day.",
  },
  {
    icon: "⚡",
    title: "Real-Time Updates",
    description: "Get fresh data from stores with no delays.",
  },
  {
    icon: "🙌",
    title: "Quick Sign-Up, Full Access",
    description:
      "Create an account in seconds and unlock personalized features",
  },
];

export default function WhyPriceHunt() {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <Typography
        className=" md:text-3xl font-bold text-gray-800 mb-12"
        sx={{ fontFamily: "Poppins", fontWeight: "600" }}
      >
        Why PriceHunt?
      </Typography>

      <ul className="grid-cols-1 md:grid-cols-4  gap-4 max-w-6xl mx-auto mt-15 flex justify-center m-auto flex-wrap">
        {benefits.map((item, index) => (
          <li
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-start text-center hover:shadow-lg transition"
          >
            <Typography
              className="text-lg font-bold text-gray-900 mb-3"
              sx={{ fontFamily: "Poppins", fontWeight: "600" }}
            >
              {item.icon} {item.title}
            </Typography>
            <p className="text-gray-500 mt-[85px] text-sm w-[224px]  leading-relaxed">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
