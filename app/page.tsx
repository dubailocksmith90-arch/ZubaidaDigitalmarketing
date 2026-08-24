import Image from 'next/image';
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
import HeroBackground from '@/components/HeroBackground';
import { locksmithPhotos } from '@/lib/locksmith-photos';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
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

      <section className="relative overflow-hidden border-b border-slate-200">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/92 via-[#0b1220]/78 to-[#0b1220]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/70 via-transparent to-[#0b1220]/30" />
        <div className="container relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f0d48a] backdrop-blur-sm">
              <Zap size={12} />
              Satwa Locksmith Experts
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Fast & Reliable Locksmith Services in Satwa, Dubai
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Professional lock repair, lock replacement, door opening, key services, and emergency locksmith assistance.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+971526426161"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6ba73] px-6 py-3.5 text-sm font-semibold text-[#111827] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#e3c883]"
              >
                <PhoneCall size={18} />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <ArrowRight size={18} />
                Get Help Fast
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white">
              {trustPills.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm">
                  <BadgeCheck size={16} className="text-[#d6ba73]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex w-fit items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0e2b7] text-[#7a5c1d]">
                <PhoneCall size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-300">Call us now</p>
                <a href="tel:+971526426161" className="mt-1 block text-lg font-bold text-white hover:text-[#d6ba73]">
                  +971 52 642 6161
                </a>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-3">
            {locksmithPhotos.slice(0, 4).map((photo) => (
              <div key={photo.src} className="relative overflow-hidden rounded-[1.5rem] border border-white/20 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  quality={70}
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="h-36 w-full object-cover sm:h-44 lg:h-52"
                />
              </div>
            ))}
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

      <section id="work" className="bg-white py-20 sm:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a77d2d]">Our Work</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Real locksmith work, from door repairs to key cutting
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locksmithPhotos.map((photo, index) => (
              <figure
                key={photo.src}
                className={`relative overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ${
                  index === 0 || index === locksmithPhotos.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  quality={70}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="h-64 w-full object-cover sm:h-72"
                />
              </figure>
            ))}
          </div>
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

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
            <Image
              src={locksmithPhotos[2].src}
              alt={locksmithPhotos[2].alt}
              width={locksmithPhotos[2].width}
              height={locksmithPhotos[2].height}
              quality={70}
              sizes="(max-width: 1024px) 100vw, 540px"
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d2b77d]/40 bg-[#fffaf0] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7a5c1d]">
                <ShieldCheck size={12} />
                Secure & Safe
              </span>
              <p className="text-lg font-bold text-white">Residential, commercial, and vehicle locks</p>
              <p className="text-sm leading-6 text-slate-200">Repair, replacement, installation, and key service with fast response in Satwa.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-white sm:py-24">
        <Image
          src={locksmithPhotos[6].src}
          alt=""
          fill
          sizes="100vw"
          quality={70}
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0f172a]/82" />
        <div className="container relative text-center">
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
<section className="py-12 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8">Our Locksmith Work</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
      <Image src="/images/locksmith/commercial-door.jpg" alt="Commercial Door Lock" fill className="object-cover" />
    </div>
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
      <Image src="/images/locksmith/key-cutting.jpg" alt="Key Cutting" fill className="object-cover" />
    </div>
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
      <Image src="/images/locksmith/lockbox-workbench.jpg" alt="Lock Box" fill className="object-cover" />
    </div>
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
      <Image src="/images/locksmith/lock-mechanism.jpg" alt="Lock Mechanism" fill className="object-cover" />
    </div>
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
      <Image src="/images/locksmith/lock-repair-mortise.jpg" alt="Lock Repair" fill className="object-cover" />
    </div>
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
      <Image src="/images/locksmith/locksmith-technician.jpg" alt="Locksmith Technician" fill className="object-cover" />
    </div>
  </div>
</section>