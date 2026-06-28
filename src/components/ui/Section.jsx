/**
 * Section — elemen <section> semantik dengan jarak vertikal antar-anak.
 */
function Section({ className = "", children }) {
  return <section className={`space-y-5 ${className}`}>{children}</section>;
}

export default Section;
