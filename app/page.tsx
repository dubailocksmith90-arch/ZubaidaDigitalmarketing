'use client';

import { ArrowRight, BarChart3, Briefcase, CheckCircle2, MessageSquare, Search, ShieldCheck, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { ServiceCard } from '@/components/ServiceCard';

const trustItems = [
  'Local SEO',
  'Google Business Profile',
  'Technical SEO',
  'On-Page SEO',
  'Keyword Research',
  'Local Citations',
  'Web Development',
  'Content Strategy',
];

const services = [
  {
    title: 'Local SEO',
    description: 'Build stronger local visibility and attract customers searching for your services.',
  },
  {
    title: 'Google Business Profile',
    description: 'Optimize your GBP for better local relevance, visibility, and customer actions.',
  },
  {
    title: 'Technical SEO',
    description: 'Fix technical issues that prevent search engines from properly crawling and understanding your website.',
  },
  {
    title: 'On-Page SEO',
    description: 'Optimize pages around search intent, entities, topical relevance, and conversions.',
  },
  {
    title: 'Local Citations & Authority',
    description: 'Strengthen your local presence with consistent business information and relevant authority signals.',
  },
  {
    title: 'SEO-Focused Web Development',
    description: 'Build fast, modern websites designed for search visibility, user experience, and conversions.',
  },
];

const approachSteps = [
  {
    title: 'Research',
    description: 'Understand your market, competitors, customers, and search demand.',
  },
  {
    title: 'Optimize',
    description: 'Improve your website, Google Business Profile, content, and technical foundation.',
  },
  {
    title: 'Build Authority',
    description: 'Develop topical relevance, local signals, citations, and quality backlinks.',
  },
  {
    title: 'Grow',
    description: 'Track rankings, traffic, leads, and continuously improve performance.',
  },
];

const skills = ['SEO', 'Local SEO', 'Google Business Profile', 'WordPress', 'Next.js', 'React', 'Tailwind CSS', 'Google Search Console', 'Google Analytics', 'Technical SEO'];
const industries = ['Locksmiths', 'Pressure Washing', 'Cleaning Companies', 'Car Detailing', 'Home Services', 'Roofing', 'Plumbing', 'Electricians', 'Small Local Businesses'];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />

      <section className="container py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700 shadow-sm">
              LOCAL SEO • DIGITAL MARKETING
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Get Found on Google. Get More Local Customers.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                I help local businesses improve Google rankings, dominate local search, and turn online visibility into real calls, leads, and customers.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Get Free SEO Audit
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-indigo-300 hover:text-indigo-700">
                View My Services
              </a>
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">Local SEO • Google Business Profile • Technical SEO • Web Development</p>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Typical Growth Metrics</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">SEO Performance Snapshot</h2>
                </div>
                <div className="rounded-3xl bg-indigo-50 px-4 py-3 text-indigo-700">Dashboard</div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Google Rankings', value: '+127%', color: 'from-indigo-500 to-violet-500' },
                  { label: 'Organic Traffic', value: '+84%', color: 'from-sky-500 to-blue-500' },
                  { label: 'Local Leads', value: '+63%', color: 'from-emerald-500 to-teal-500' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-slate-200/90 bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                    <p className="mt-4 text-3xl font-semibold text-slate-950">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-slate-200/70 bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/5 p-6">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Visibility</span>
                  <span>Growth</span>
                </div>
                <div className="mt-5 h-40 rounded-[1.5rem] bg-slate-950/95 p-5 text-white shadow-inner">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-300">
                    <span>Organic Search</span>
                    <span>Weekly</span>
                  </div>
                  <div className="mt-5 flex h-full items-end gap-3">
                    <div className="h-12 w-full rounded-3xl bg-slate-800" />
                    <div className="h-24 w-full rounded-3xl bg-gradient-to-t from-indigo-500 to-sky-400" />
                    <div className="h-32 w-full rounded-3xl bg-gradient-to-t from-violet-500 to-fuchsia-400" />
                    <div className="h-20 w-full rounded-3xl bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <div className="container flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600">
          {trustItems.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">{item}</span>
          ))}
        </div>
      </section>

      <section id="services" className="container py-20 sm:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-700">Everything You Need to Win Local Search</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Services built for local visibility and growth.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      <section id="results" className="bg-slate-950 py-20 sm:py-24 text-white">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">My Approach to Local SEO</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Strategy, optimization, authority, and growth.</h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Every campaign is built to improve visibility in local search, Google Business Profile performance, and on-site conversions with a measurable process.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {approachSteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6">
                  <div className="flex items-center gap-3 text-sky-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-base font-semibold">0{index + 1}</div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/70 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between rounded-3xl bg-slate-950/75 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Local search progress</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Growth chart</h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-800 px-4 py-2 text-sm text-slate-300">
                <TrendingUp size={18} /> Results
              </div>
            </div>
            <div className="space-y-5">
              {['Visibility', 'Leads', 'Traffic', 'Authority'].map((metric, index) => (
                <div key={metric} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{metric}</span>
                    <span>{50 + index * 12}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div className={`h-full rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-sky-400 to-indigo-500' : 'from-violet-500 to-fuchsia-500'}`} style={{ width: `${60 + index * 9}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-700">Why Work With Zubaida?</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Complete local growth systems that convert visibility into customers.</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              I combine Local SEO, technical SEO, web development, and digital marketing to create complete growth systems for local businesses. My focus is simple: better visibility, stronger online presence, and more opportunities to generate customers.
            </p>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-700">Highlight</p>
              <p className="mt-4 text-xl font-semibold text-slate-950">SEO Strategy + Website + Google Visibility = Local Growth</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
                <div className="flex items-center gap-3 text-indigo-600">
                  <ShieldCheck size={18} />
                  <span className="font-semibold">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 text-white">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Helping Local Businesses Get Discovered</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Ideal clients I help scale with local search.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold text-slate-100 shadow-sm backdrop-blur-xl">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 sm:py-24" id="contact">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-700">Ready to Get More Customers From Google?</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Let's find the opportunities your business is missing in local search.</h2>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              I deliver practical, measurable SEO and local search support for businesses that need more leads, calls, and qualified traffic from Google.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">
                Request Free SEO Audit
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-indigo-300">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <form action="/api/contact" method="POST" className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-700">
                  <span>Name</span>
                  <input name="name" type="text" required className="input-field" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  <span>Business Name</span>
                  <input name="business" type="text" required className="input-field" placeholder="Company name" />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-700">
                  <span>Website</span>
                  <input name="website" type="url" className="input-field" placeholder="https://" />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  <span>Email</span>
                  <input name="email" type="email" required className="input-field" placeholder="you@example.com" />
                </label>
              </div>

              <label className="space-y-2 text-sm text-slate-700">
                <span>What service do you need?</span>
                <select name="service" required className="input-field">
                  <option value="">Select a service</option>
                  <option>Local SEO</option>
                  <option>Google Business Profile</option>
                  <option>Technical SEO</option>
                  <option>On-Page SEO</option>
                  <option>Web Development</option>
                </select>
              </label>

              <label className="space-y-2 text-sm text-slate-700">
                <span>Message</span>
                <textarea name="message" rows={5} className="input-field" placeholder="Tell me about your goals"></textarea>
              </label>

              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
                Request Free SEO Audit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 py-12 text-slate-300">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-8">
          <div>
            <p className="text-lg font-semibold text-white">Zubaida Digital Marketing Specialist</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">Local SEO & Digital Marketing for Growth-Focused Businesses</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Links</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <a href="#home" className="block hover:text-white">Home</a>
                <a href="#services" className="block hover:text-white">Services</a>
                <a href="#about" className="block hover:text-white">About</a>
                <a href="#contact" className="block hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Social</p>
              <div className="mt-4 flex flex-wrap gap-3 text-slate-300">
                <a href="#" className="inline-flex items-center gap-2 text-sm hover:text-white">LinkedIn</a>
                <a href="#" className="inline-flex items-center gap-2 text-sm hover:text-white">Facebook</a>
                <a href="#" className="inline-flex items-center gap-2 text-sm hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">© 2026 Zubaida Digital Marketing Specialist. All rights reserved.</p>
      </footer>
    </main>
  );
}
