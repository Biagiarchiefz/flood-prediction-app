/**
 * Badge — label kecil berwarna datar dengan border tebal & ikon opsional.
 */
const TONES = {
  default: "bg-surface text-ink",
  primary: "bg-primary text-ink",
  success: "bg-success text-white",
  danger: "bg-danger text-white",
};

function Badge({ tone = "default", icon: Icon, children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border-2 border-ink px-3 py-1 text-sm font-bold ${TONES[tone]} ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" strokeWidth={2.5} />}
      {children}
    </span>
  );
}

export default Badge;
