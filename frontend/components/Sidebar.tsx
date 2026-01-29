import { useMemo } from 'react';
import { useRouter } from 'next/router';

interface NavItem {
  label: string;
  href: string;
}

export default function Sidebar() {
  const router = useRouter();
  const navItems: NavItem[] = useMemo(
    () => [
      { label: 'Overview', href: '/' },
      { label: 'Deployments', href: '/deployments' },
      { label: 'Payments', href: '/payments' },
      { label: 'Security', href: '/security' },
      { label: 'Automation', href: '/automation' },
      { label: 'Innovation Lab', href: '/innovation' }
    ],
    []
  );

  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-900 bg-slate-950/80 px-6 py-10 lg:block">
      <div className="mb-10 flex items-center gap-3 text-lg font-semibold tracking-wide">
        <span className="rounded-md bg-accent/10 px-3 py-1 text-accent">CrownOps</span>
        <span>Command</span>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = router.pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
