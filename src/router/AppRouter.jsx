/**
 * AppRouter — peta URL aplikasi + animasi transisi antar halaman.
 *
 * Pola:
 *  - MainLayout (Navbar + Footer) dirender SEKALI di luar Routes, sehingga
 *    tidak ikut beranimasi/remount setiap pindah halaman.
 *  - <AnimatePresence> + <Routes location key={pathname}> membuat halaman lama
 *    beranimasi keluar sebelum halaman baru masuk (mode="wait").
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";

import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/PageTransition";
import HomePage from "../pages/HomePage";
import PredictPage from "../pages/PredictPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/predict"
          element={
            <PageTransition>
              <PredictPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;
