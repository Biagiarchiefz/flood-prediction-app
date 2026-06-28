import { forwardRef } from "react";

/**
 * Button — tombol Neo Brutalism.
 * - hover: sedikit terangkat + bayangan membesar
 * - active: "ditekan" (kembali ke posisi awal, bayangan hilang)
 * Mendukung prop `as` agar bisa dirender sebagai <Link> dll.
 */
const VARIANTS = {
  primary: "bg-primary text-ink hover:bg-primary-hover",
  secondary: "bg-surface text-ink hover:bg-bg",
  danger: "bg-danger text-white",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink px-5 py-2.5 text-base font-bold shadow-brutal transition-all duration-150 " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg " +
  "active:translate-x-0 active:translate-y-0 active:shadow-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
  "disabled:pointer-events-none disabled:opacity-50";

const Button = forwardRef(function Button(
  { as: Component = "button", variant = "primary", className = "", ...props },
  ref
) {
  return (
    <Component
      ref={ref}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
});

export default Button;
