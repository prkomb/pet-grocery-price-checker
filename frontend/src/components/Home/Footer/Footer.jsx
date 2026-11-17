import { Link, Form } from "react-router-dom";
import { navLinks, rulesLinks } from "./FooterData";
import Brand from "@/assets/images/Brand.png";

const Footer = () => {
  return (
    <footer className="bg-ink text-teal-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={Brand} alt="" className="h-7 w-7" />
              <span className="font-heading text-xl font-extrabold text-white">
                PriceHunt
              </span>
            </Link>
            <nav aria-label="Footer" className="mt-6">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="inline-flex min-h-11 items-center text-teal-100 hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="w-full max-w-sm">
            <h2 className="!text-white text-base font-bold">
              Get the best deals straight to your inbox
            </h2>
            <Form
              method="post"
              className="mt-3 flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="h-11 w-full rounded-full border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-teal-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              />
              <button type="submit" className="btn-primary shrink-0">
                Subscribe
              </button>
            </Form>
          </div>
        </div>

        <hr className="my-8 border-white/15" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-teal-100 md:flex-row">
          <p>&copy; {new Date().getFullYear()} PriceHunt. All rights reserved.</p>
          <ul className="flex items-center gap-2">
            {rulesLinks.map((rule) => (
              <li key={rule.id}>
                <Link
                  to={rule.path}
                  className="inline-flex min-h-11 items-center px-2 hover:text-white hover:underline"
                >
                  {rule.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
