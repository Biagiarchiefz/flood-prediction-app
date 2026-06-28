/**
 * MainLayout — kerangka tampilan bersama: Navbar → isi (children) → Footer.
 * Dirender sekali di AppRouter, sehingga Navbar/Footer tetap stabil saat
 * halaman berganti (yang beranimasi hanya area konten).
 */

import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <Container>{children}</Container>
      </main>

      <footer className="border-t-2 border-ink bg-surface">
        <Container className="py-6 text-sm font-medium text-muted">
          © 2026 FloodPredict — Tugas Besar Machine Learning
        </Container>
      </footer>
    </div>
  );
}

export default MainLayout;
