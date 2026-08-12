import { Sparkles } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 shadow-soft transition hover:-translate-y-1 hover:border-indigo-300/50 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-50 text-indigo-600 shadow-sm transition group-hover:bg-indigo-100">
        <Sparkles size={20} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
