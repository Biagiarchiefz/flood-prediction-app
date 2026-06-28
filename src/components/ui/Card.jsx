/**
 * Card — kartu Neo Brutalism: border hitam tebal, sudut membulat,
 * bayangan offset solid. Mendukung prop `as` (mis. render sebagai <form>).
 */
function Card({ as: Component = "div", className = "", children, ...props }) {
  return (
    <Component
      className={`rounded-xl border-2 border-ink bg-surface p-6 shadow-brutal ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;
