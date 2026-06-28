/**
 * HomePage — hero Neo Brutalism + kartu sorotan fitur.
 */

import { Link } from "react-router";
import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: "20 Faktor",
    text: "Menganalisis faktor lingkungan & infrastruktur penyebab banjir.",
  },
  {
    icon: Cpu,
    title: "Ridge Regression",
    text: "Model regresi terlatih dengan akurasi R² sekitar 0.84.",
  },
  {
    icon: Zap,
    title: "Hasil Instan",
    text: "Memprediksi probabilitas banjir dalam hitungan milidetik.",
  },
];

function HomePage() {
  return (
    <Section className="space-y-8">
      {/* Hero */}
      <Card className="bg-primary text-center shadow-brutal-lg">
        <span className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-surface px-3 py-1 text-sm font-bold">
          Machine Learning · Regresi
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Prediksi Probabilitas Banjir dengan Sekali Klik
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-ink/80">
          Masukkan kondisi lingkungan suatu wilayah, dan sistem memperkirakan
          probabilitas terjadinya banjir menggunakan model Machine Learning
          terlatih.
        </p>
        <div className="mt-7 flex justify-center">
          <Button as={Link} to="/predict" variant="secondary">
            Mulai Prediksi
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </Button>
        </div>
      </Card>

      {/* Sorotan */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <Card key={item.title}>
            <span className="grid h-12 w-12 place-items-center rounded-xl border-2 border-ink bg-primary shadow-brutal-sm">
              <item.icon className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
            <p className="mt-1 font-medium text-muted">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default HomePage;
