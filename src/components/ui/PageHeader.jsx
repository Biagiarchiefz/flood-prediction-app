/**
 * PageHeader — judul halaman dengan ikon kotak dan subjudul opsional.
 */
function PageHeader({ icon: Icon, title, subtitle }) {
  return (
    <header className="mb-2">
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-2 border-ink bg-primary shadow-brutal-sm">
            <Icon className="h-6 w-6" strokeWidth={2.5} />
          </span>
        )}
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>
      {subtitle && <p className="mt-2 font-medium text-muted">{subtitle}</p>}
    </header>
  );
}

export default PageHeader;
