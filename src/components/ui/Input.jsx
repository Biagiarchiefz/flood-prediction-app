/**
 * Input — kolom isian Neo Brutalism dengan label terintegrasi.
 * Fokus ditandai jelas (terangkat + bayangan) untuk aksesibilitas.
 */
function Input({ label, id, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-bold text-ink">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full rounded-xl border-2 border-ink bg-surface px-4 py-2.5 text-base font-medium text-ink shadow-brutal-sm outline-none transition-all placeholder:text-muted focus:-translate-y-0.5 focus:shadow-brutal ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;
