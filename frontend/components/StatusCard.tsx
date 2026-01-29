interface StatusCardProps {
  title: string;
  status: 'operational' | 'degraded' | 'incident';
  description: string;
  timestamp: string;
}

const statusStyles: Record<StatusCardProps['status'], string> = {
  operational: 'text-success',
  degraded: 'text-warning',
  incident: 'text-danger'
};

export default function StatusCard({ title, status, description, timestamp }: StatusCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className={`text-xs uppercase tracking-wider ${statusStyles[status]}`}>{status}</span>
      </div>
      <p className="text-sm text-slate-300">{description}</p>
      <span className="text-xs text-slate-500">Updated {timestamp}</span>
    </div>
  );
}
