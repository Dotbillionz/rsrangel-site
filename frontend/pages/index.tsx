import Layout from '@/components/Layout';
import KPIWidget from '@/components/KPIWidget';
import StatusCard from '@/components/StatusCard';

export default function Home() {
  return (
    <Layout>
      <section className="grid gap-6 lg:grid-cols-4">
        <KPIWidget label="Uptime" value="99.982%" delta={{ direction: 'up', value: '0.002%' }} tone="success" />
        <KPIWidget label="Deploy Velocity" value="28/week" delta={{ direction: 'up', value: '3.7%' }} />
        <KPIWidget label="Revenue Processed" value="$4.2M" delta={{ direction: 'up', value: '$210k' }} tone="success" />
        <KPIWidget label="Open Incidents" value="2" delta={{ direction: 'down', value: '1' }} tone="warning" />
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">CI/CD Activity</h2>
            <button className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-200">
              View Logs
            </button>
          </div>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start justify-between gap-3 rounded-xl border border-slate-800/60 bg-slate-950/60 p-4">
              <div>
                <p className="font-semibold text-white">main · Success</p>
                <p className="text-xs text-slate-400">Deployed to Vercel · 12 min ago</p>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">pass</span>
            </li>
            <li className="flex items-start justify-between gap-3 rounded-xl border border-slate-800/60 bg-slate-950/60 p-4">
              <div>
                <p className="font-semibold text-white">api/hotfix-ledger · Failed</p>
                <p className="text-xs text-slate-400">Rollback triggered · 43 min ago</p>
              </div>
              <span className="rounded-full bg-danger/10 px-3 py-1 text-xs font-medium text-danger">fail</span>
            </li>
            <li className="flex items-start justify-between gap-3 rounded-xl border border-slate-800/60 bg-slate-950/60 p-4">
              <div>
                <p className="font-semibold text-white">frontend/daily-briefing · Success</p>
                <p className="text-xs text-slate-400">Auto-published briefing · 2h ago</p>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">pass</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <StatusCard
            title="Security Monitoring"
            status="operational"
            description="All PCI DSS checks passing. Next audit window in 3 days."
            timestamp="15 minutes ago"
          />
          <StatusCard
            title="Payments Mesh"
            status="degraded"
            description="SumUp gift card API latency elevated. Fallback routing active."
            timestamp="7 minutes ago"
          />
          <StatusCard
            title="Automation Agents"
            status="operational"
            description="Telegram alerts synced and incident bot on standby."
            timestamp="3 minutes ago"
          />
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Innovation Lab</h2>
          <button className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-200">
            Manage Initiatives
          </button>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {["AI Trade Desk", "Chain Compliance", "Treasury Automation"].map((initiative) => (
            <div
              key={initiative}
              className="rounded-xl border border-slate-800/60 bg-slate-950/60 p-5 text-sm text-slate-300"
            >
              <p className="mb-2 text-base font-semibold text-white">{initiative}</p>
              <p className="mb-3 text-xs text-slate-400">Sprint 4 in progress · Executive sponsor assigned</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-success">72% complete</span>
                <button className="text-accent hover:text-indigo-400">View roadmap</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
