/**
 * Navbar — bilah navigasi sticky Neo Brutalism, responsif (ada menu mobile).
 */

import { useState } from "react";
import { NavLink } from "react-router";
import { Waves, Home, Activity, Menu, X } from "lucide-react";

import Container from "./ui/Container";

const LINKS = [
  { to: "/", label: "Beranda", icon: Home, end: true },
  { to: "/predict", label: "Prediksi", icon: Activity },
];

const linkClass = ({ isActive }) =>
  `inline-flex items-center gap-2 rounded-lg border-2 px-3.5 py-1.5 font-bold transition-all ${
    isActive
      ? "border-ink bg-primary shadow-brutal-sm"
      : "border-transparent text-muted hover:border-ink hover:bg-surface hover:text-ink"
  }`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b-2 border-ink bg-surface">
      <Container className="flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-primary shadow-brutal-sm">
            <Waves className="h-5 w-5" strokeWidth={2.5} />
          </span>
          FloodPredict
        </NavLink>

        {/* Navigasi desktop */}
        <nav className="hidden items-center gap-2 sm:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              <link.icon className="h-4 w-4" strokeWidth={2.5} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Tombol menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Buka menu navigasi"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink bg-surface shadow-brutal-sm transition-all hover:bg-primary active:translate-x-0.5 active:translate-y-0.5 active:shadow-none sm:hidden"
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={2.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2.5} />
          )}
        </button>
      </Container>

      {/* Menu mobile (muncul saat di-toggle) */}
      {open && (
        <nav className="border-t-2 border-ink bg-surface sm:hidden">
          <Container className="flex flex-col gap-2 py-3">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                <link.icon className="h-4 w-4" strokeWidth={2.5} />
                {link.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
