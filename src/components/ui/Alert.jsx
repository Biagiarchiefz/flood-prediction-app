/**
 * Alert — pesan ber-kode warna (error/success/info) dengan ikon.
 */
import { CircleAlert, CircleCheck, Info } from "lucide-react";

const CONFIG = {
  error: { icon: CircleAlert, bg: "bg-danger/15" },
  success: { icon: CircleCheck, bg: "bg-success/15" },
  info: { icon: Info, bg: "bg-primary/25" },
};

function Alert({ variant = "info", children }) {
  const { icon: Icon, bg } = CONFIG[variant];
  return (
    <div
      role="alert"
      className={`flex items-start gap-3 rounded-xl border-2 border-ink p-4 font-medium shadow-brutal-sm ${bg}`}
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={2.5} />
      <div>{children}</div>
    </div>
  );
}

export default Alert;
