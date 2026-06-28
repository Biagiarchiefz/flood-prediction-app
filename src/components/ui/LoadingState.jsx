/**
 * LoadingState — indikator proses memakai ikon berputar (Lucide Loader2).
 */
import { Loader2 } from "lucide-react";

function LoadingState({ label = "Memproses..." }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center justify-center gap-3 rounded-xl border-2 border-ink bg-surface p-6 font-bold shadow-brutal"
    >
      <Loader2 className="h-6 w-6 animate-spin" strokeWidth={2.5} />
      <span>{label}</span>
    </div>
  );
}

export default LoadingState;
