import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#tools" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = ({ cartCount = 0 }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="navbar sticky top-0 z-100 bg-white/80 backdrop-blur-lg shadow-sm items-center lg:px-25 py-3 transition-all duration-300">
      <div className="navbar-start">
        <h2 className="lg:text-4xl text-3xl font-bold bg-linear-to-br from-violet-800 to-violet-500 bg-clip-text text-transparent py-2 select-none cursor-pointer transition-transform duration-200 hover:scale-[1.03]">
          DigiTools
        </h2>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-7 text-black/80">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative py-1 font-medium transition-colors duration-200 hover:text-violet-700 focus:text-violet-700 focus:outline-none after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-600 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-5">
        <button
          aria-label="Shopping cart"
          className="relative hidden lg:flex items-center justify-center p-2 rounded-full transition-colors duration-200 hover:bg-violet-50 hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300 cursor-pointer"
        >
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-violet-600 text-white text-[10px] font-bold rounded-full px-1 animate-[bounce_0.3s_ease-in-out]">
              {cartCount}
            </span>
          )}
        </button>
        <a
          href="#login"
          className="font-medium hidden lg:flex items-center transition-colors duration-200 hover:text-violet-700 focus:outline-none focus:text-violet-700 cursor-pointer"
        >
          Login
        </a>
        <button className="hidden lg:inline-flex bg-linear-to-r from-violet-800 to-violet-500 text-white font-semibold py-3 px-5 rounded-full text-lg cursor-pointer shadow-md shadow-violet-300/40 hover:shadow-lg hover:shadow-violet-400/50 hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2">
          Get Started
        </button>

        {/* Mobile Cart + Hamburger */}
        <button
          aria-label="Shopping cart"
          className="relative lg:hidden flex items-center justify-center p-2 rounded-full transition-colors duration-200 hover:bg-violet-50 hover:text-violet-700 cursor-pointer"
        >
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-violet-600 text-white text-[10px] font-bold rounded-full px-1">
              {cartCount}
            </span>
          )}
        </button>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-300 cursor-pointer"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-96 border-t border-violet-100"
            : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col py-2 px-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-black/80 font-medium border-b border-gray-100 last:border-b-0 transition-colors duration-200 hover:text-violet-700 hover:pl-2 focus:text-violet-700 focus:outline-none"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#login"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-black/80 font-medium border-b border-gray-100 transition-colors duration-200 hover:text-violet-700 hover:pl-2 focus:text-violet-700 focus:outline-none"
            >
              Login
            </a>
          </li>
          <li className="pt-3 pb-1">
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full bg-linear-to-r from-violet-800 to-violet-500 text-white font-semibold py-3 rounded-full text-sm cursor-pointer shadow-md shadow-violet-300/40 hover:shadow-lg hover:shadow-violet-400/50 active:scale-[0.98] transition-all duration-200"
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
