import Head from 'next/head';
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export default function Layout({ title = 'CrownOps Dashboard', children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="flex w-full">
          <Sidebar />
          <main className="flex-1 p-6 lg:p-10">
            <header className="mb-8 flex flex-col gap-2 border-b border-slate-800 pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">CrownOps</p>
                <h1 className="text-3xl font-semibold text-white lg:text-4xl">Executive Command Center</h1>
              </div>
              <div className="flex gap-3">
                <button className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500">
                  Trigger Deploy
                </button>
                <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-slate-500">
                  Daily Briefing
                </button>
              </div>
            </header>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
