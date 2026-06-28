/**
 * EmptyState — placeholder saat belum ada data/aksi (border putus-putus).
 */
function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-ink bg-surface p-10 text-center">
      {Icon && (
        <span className="grid h-14 w-14 place-items-center rounded-xl border-2 border-ink bg-primary shadow-brutal-sm">
          <Icon className="h-7 w-7" strokeWidth={2.5} />
        </span>
      )}
      <h3 className="text-lg font-bold">{title}</h3>
      {description && <p className="max-w-sm font-medium text-muted">{description}</p>}
    </div>
  );
}

export default EmptyState;
