interface KPIWidgetProps {
  label: string;
  value: string;
  delta?: {
    direction: 'up' | 'down';
    value: string;
  };
  tone?: 'accent' | 'success' | 'warning' | 'danger';
}

const toneToColor: Record<NonNullable<KPIWidgetProps['tone']>, string> = {
  accent: 'text-accent',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger'
};

export default function KPIWidget({ label, value, delta, tone = 'accent' }: KPIWidgetProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/20">
      <p className="text-sm uppercase tracking-widest text-slate-400">{label}</p>
      <div className="mt-3 flex items-end justify-between">
        <span className={`text-3xl font-semibold ${toneToColor[tone]}`}>{value}</span>
        {delta ? (
          <span
            className={`text-xs font-medium ${
              delta.direction === 'up' ? 'text-success' : 'text-danger'
            }`}
          >
            {delta.direction === 'up' ? '▲' : '▼'} {delta.value}
          </span>
        ) : null}
      </div>
    </div>
  );
}
