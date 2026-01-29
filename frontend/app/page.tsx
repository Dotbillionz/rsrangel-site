import { BoltIcon, CheckCircleIcon, CubeTransparentIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const summaryCards = [
  { title: 'Uptime', value: '99.982%', trend: '+0.01%', icon: ShieldCheckIcon, color: 'from-green-500/80 to-green-500/30' },
  { title: 'Deploy Velocity', value: '42 / week', trend: '+8%', icon: BoltIcon, color: 'from-accent to-purple-500/30' },
  { title: 'Security Alerts', value: '2 open', trend: '-3', icon: ShieldCheckIcon, color: 'from-red-500/80 to-red-500/30' },
  { title: 'Innovation Sprints', value: '5 active', trend: '+2', icon: CubeTransparentIcon, color: 'from-blue-500/80 to-blue-500/30' }
]

const paymentSources = [
  { name: 'Stripe Connect', status: 'Operational', volume: '$1.2M', change: '+12%' },
  { name: 'Coinbase Commerce', status: 'Operational', volume: '$420K', change: '+8%' },
  { name: 'NowPayments', status: 'Degraded', volume: '$85K', change: '-5%' },
  { name: 'Binance Pay', status: 'Operational', volume: '$210K', change: '+3%' }
]

const complianceChecks = [
  { name: 'PCI DSS', status: 'Passing', owner: 'Payments Team', updatedAt: '3h ago' },
  { name: 'GDPR', status: 'Attention', owner: 'Legal Ops', updatedAt: '6h ago' },
  { name: 'KYC/AML', status: 'Passing', owner: 'Risk Ops', updatedAt: '1d ago' }
]

export default function DashboardPage () {
  return (
    <main className="px-10 py-12 space-y-10">
      <header className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-wide text-slate-400">CrownOps</p>
        <h1 className="text-4xl font-semibold">Executive Command Center</h1>
        <p className="text-slate-400 max-w-2xl">
          Unified visibility into engineering velocity, financial operations, and compliance safeguards across the CrownOps fintech and blockchain ecosystem.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <article key={card.title} className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br p-6 shadow-lg shadow-slate-950/50" style={{ backgroundImage: undefined }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-20 pointer-events-none`} />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-400">{card.title}</p>
                <p className="mt-2 text-3xl font-semibold">{card.value}</p>
                <p className="mt-1 text-xs text-emerald-300">{card.trend}</p>
              </div>
              <card.icon className="h-10 w-10 text-slate-200" aria-hidden="true" />
            </div>
          </article>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="col-span-2 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <header className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Live Deployment Timeline</h2>
            <span className="text-xs text-slate-400">Synced from GitHub Actions &amp; Vercel</span>
          </header>
          <div className="space-y-4">
            {[1, 2, 3].map((release) => (
              <article key={release} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <div>
                  <p className="text-sm font-medium text-slate-100">Deployment #{release} · main</p>
                  <p className="text-xs text-slate-400">Vercel • {new Date().toLocaleTimeString()}</p>
                  <p className="mt-2 text-xs text-slate-300">
                    Committers: OpsBot, LeadEngineer — rollout healthy with zero regressions detected.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <header className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Security Command Log</h2>
            <span className="text-xs text-slate-400">Security &amp; Compliance</span>
          </header>
          <ul className="space-y-3">
            {complianceChecks.map((check) => (
              <li key={check.name} className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{check.name}</p>
                  <span className="flex items-center gap-1 text-xs text-emerald-300">
                    <CheckCircleIcon className="h-4 w-4" aria-hidden="true" />
                    {check.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">Owner: {check.owner}</p>
                <p className="text-xs text-slate-500">Updated {check.updatedAt}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <header className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Payment Gateway Health</h2>
            <span className="text-xs text-slate-400">Live transaction telemetry</span>
          </header>
          <div className="mt-4 space-y-3">
            {paymentSources.map((source) => (
              <div key={source.name} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <div>
                  <p className="text-sm font-semibold">{source.name}</p>
                  <p className="text-xs text-slate-500">Status: {source.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{source.volume}</p>
                  <p className="text-xs text-emerald-300">{source.change}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <header className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Automation Signals</h2>
            <span className="text-xs text-slate-400">Slack · Telegram · Notion</span>
          </header>
          <div className="mt-4 space-y-3">
            {[{ name: 'Daily Executive Briefing', status: 'Scheduled 06:00 UTC' }, { name: 'Incident Escalation', status: 'Real-time via OpsBot' }, { name: 'Notion Sync', status: 'Every 15 minutes' }].map((automation) => (
              <div key={automation.name} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <div>
                  <p className="text-sm font-semibold">{automation.name}</p>
                  <p className="text-xs text-slate-500">{automation.status}</p>
                </div>
                <BoltIcon className="h-5 w-5 text-amber-300" aria-hidden="true" />
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}
