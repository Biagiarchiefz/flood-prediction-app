/**
 * Container — pembungkus lebar konten yang konsisten & terpusat.
 */
function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-5 ${className}`}>{children}</div>
  );
}

export default Container;
