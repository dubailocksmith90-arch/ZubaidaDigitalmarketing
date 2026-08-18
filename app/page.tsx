import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Clock3,
  KeyRound,
  Lock,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Lock Repair & Replacement',
    description: 'Fast repair and replacement for faulty, damaged, or worn-out locks in homes and businesses.',
    icon: Wrench,
  },
  {
    title: 'Door Opening',
    description: 'Quick non-destructive entry for locked doors when you need urgent access without damage.',
    icon: Lock,
  },
  {
    title: 'Lock Installation',
    description: 'Professional lock fitting for doors, gates, and offices using secure, reliable locking systems.',
    icon: ShieldCheck,
  },
  {
    title: 'Key Services',
    description: 'Replacement keys, copies, lock rekeying, and key cutting for residential and commercial needs.',
    icon: KeyRound,
  },
  {
    title: 'Emergency Locksmith',
    description: 'Immediate assistance for lockouts, broken locks, and urgent security issues across Dubai.',
    icon: AlertTriangle,
  },
];

const reasons = [
  { title: 'Fast Response', description: 'Rapid arrival for urgent repairs and lockouts across Satwa and nearby areas.', icon: Clock3 },
  { title: 'Professional Service', description: 'Skilled technicians who handle every job with precision and care.', icon: BadgeCheck },
  { title: 'Affordable Pricing', description: 'Transparent quotes with fair pricing and no hidden surprises.', icon: Sparkles },
  { title: 'Customer Satisfaction', description: 'Trusted service built on reliability, honesty, and dependable workmanship.', icon: ShieldCheck },
];

const trustPills = ['24/7 Support', 'Licensed Experts', 'Residential & Commercial', 'Secure Solutions'];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#f6f4ef] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f6f4ef]/90 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <Link href="#home" className="flex items-center gap-3" aria-label="Lock Repair Satwa home">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#c7a35c] text-lg font-black text-white shadow-lg shadow-[#c7a35c]/20">
              <Lock size={20} />
            </div>
            <div>
              <span className="block text-base font-extrabold tracking-wide text-slate-900">Lock Repair Satwa</span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-slate-500">Trusted locksmith UAE</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-[#b78b37]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="tel:+971526426161"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:bg-[#1f2937]"
            >
              <PhoneCall size={16} />
              Call Now
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#f7f5f0] via-white to-[#f1efe9]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,163,92,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.07),transparent_35%)]" />
        <div className="container relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d2b77d]/40 bg-[#fffaf0] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b6d2f]">
              <Zap size={12} />
              Satwa Locksmith Experts
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
              Fast & Reliable Locksmith Services in Satwa, Dubai
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Professional lock repair, lock replacement, door opening, key services, and emergency locksmith assistance.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+971526426161"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#1f2937]"
              >
                <PhoneCall size={18} />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2b77d] bg-[#fffaf0] px-6 py-3.5 text-sm font-semibold text-[#6f5528] transition hover:-translate-y-0.5 hover:border-[#c7a35c] hover:bg-[#f9f1dd]"
              >
                <ArrowRight size={18} />
                Get Help Fast
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
              {trustPills.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                  <BadgeCheck size={16} className="text-[#c7a35c]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.04)] w-fit">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0e2b7] text-[#7a5c1d]">
                <PhoneCall size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Call us now</p>
                <a href="tel:+971526426161" className="mt-1 block text-lg font-bold text-slate-900 hover:text-[#8b6d2f]">
                  +971 52 642 6161
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-[#111827] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] p-6">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c7a35c]" />
                    Available Now
                  </span>
                  <span>Satwa, Dubai</span>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8e7b6] text-[#1f2937] shadow-[0_20px_40px_rgba(199,163,92,0.3)]">
                    <Lock size={30} />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-white">Locksmith Services for Homes, Offices & Shops</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Reliable lock repairs, key replacement, emergency access, and secure lock upgrades for every property.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Response</p>
                      <p className="mt-2 text-lg font-bold text-white">Fast</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Support</p>
                      <p className="mt-2 text-lg font-bold text-white">24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container py-20 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a77d2d]">Our Services</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
            Trusted locksmith solutions built for speed and security
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:border-[#d9c38a] hover:shadow-[0_24px_60px_rgba(19,24,38,0.09)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6efe1] text-[#7a5c1d] shadow-sm transition group-hover:bg-[#efe0b8]">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="bg-[#f1efe9] py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a77d2d]">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Security you can trust, service you can rely on
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#dcc58d] hover:shadow-[0_14px_32px_rgba(15,23,42,0.06)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6efe1] text-[#7a5c1d]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#0f172a] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#1f2937] to-[#0f172a] p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#d2b77d]/40 bg-[#fffaf0] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7a5c1d]">
                  <ShieldCheck size={12} />
                  Secure & Safe
                </span>
                <span className="text-sm text-slate-300">Satwa Team</span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Coverage</p>
                  <p className="mt-2 text-lg font-bold text-white">Residential, commercial, and vehicle locks</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Service Type</p>
                  <p className="mt-2 text-lg font-bold text-white">Repair, replacement, installation, and key service</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Availability</p>
                  <p className="mt-2 text-lg font-bold text-white">Fast response for urgent and scheduled calls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-20 text-white sm:py-24">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ba73]">Emergency Service</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
            Locked Out? Need Immediate Assistance?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            We respond quickly to lockouts, broken locks, and urgent security issues in Satwa and surrounding areas.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+971526426161"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6ba73] px-7 py-3.5 text-sm font-semibold text-[#111827] shadow-[0_15px_30px_rgba(214,186,115,0.35)] transition hover:-translate-y-0.5 hover:bg-[#e3c883]"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ArrowRight size={18} />
              Get Help Fast
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="container py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a77d2d]">Contact</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Lock Repair Satwa
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Need a locksmith in Satwa, Dubai? Call for trusted lock repair, emergency access, and security upgrades.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+971526426161"
                className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#d9c38a] hover:bg-[#fffaf0]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6efe1] text-[#7a5c1d]">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Phone</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">+971 52 642 6161</p>
                </div>
              </a>

              <a
                href="https://locksmith-dubai.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-[#d9c38a] hover:bg-[#fffaf0]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6efe1] text-[#7a5c1d]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Website</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">locksmith-dubai.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.06)] sm:p-8">
            <div className="rounded-[1.5rem] bg-[#f7f5f0] p-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f172a] text-white shadow-lg shadow-slate-200">
                <Lock size={26} />
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-slate-900">Need a locksmith today?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Reach out now for a quick assessment, honest pricing, and dependable service in Satwa, Dubai.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="tel:+971526426161"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f2937]"
                >
                  <PhoneCall size={18} />
                  +971 52 642 6161
                </a>
                <a
                  href="https://locksmith-dubai.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  locksmith-dubai.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#c7a35c] text-white">
                  <Lock size={18} />
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900">Lock Repair Satwa</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm text-slate-600 md:items-end">
              <a href="tel:+971526426161" className="font-medium text-slate-800 hover:text-[#8b6d2f]">
                +971 52 642 6161
              </a>
              <a href="https://locksmith-dubai.com" target="_blank" rel="noreferrer" className="font-medium text-slate-800 hover:text-[#8b6d2f]">
                locksmith-dubai.com
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            © 2026 Lock Repair Satwa. All rights reserved.
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm md:hidden">
        <a
          href="tel:+971526426161"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f172a] px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-slate-200"
        >
          <PhoneCall size={18} />
          Call +971 52 642 6161
        </a>
      </div>
    </main>
  );
}

              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">© 2026 Zubaida Digital Marketing Specialist. All rights reserved.</p>
      </footer>
    </main>
  );
}
