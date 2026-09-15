'use client';
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedLogoMark from '@/app/AnimatedLogoMark';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'motion/react';
import JourneySection from './JourneySection';
import {
  Menu, X, ArrowRight, Code2, Smartphone, Server,
  Brain, Palette, Wrench, Users, Handshake, ShieldCheck, HeadphonesIcon,
  Globe, Mail, Rocket, Sun, Moon, Phone, Camera, Check, Clock, MapPin, Pencil, Send, Tag, User, Briefcase
} from 'lucide-react';

/* ───────── data ───────── */
const PRODUCTS = [
  { name: 'Aarambh', desc: 'Student Placement Platform', href: '/products/aarambh' },
];

const VALUE_PROPS = [
  { icon: '🔄', title: 'End-to-End Solutions', desc: 'From idea to deployment, we handle it all.' },
  { icon: '🎯', title: 'Tailored for You', desc: 'Customized solutions that fit your goals.' },
  { icon: '📈', title: 'Built for Growth', desc: 'Scalable, secure & future-ready technology.' },
];

const WHY_PARTNER = [
  { Icon: Users, title: 'Experienced Team', subtitle: 'Real-World Expertise', desc: 'Skilled professionals with hands-on experience in real-world projects.', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
  { Icon: Handshake, title: 'Client-Centric Approach', subtitle: 'Built Around You', desc: 'We listen, understand and deliver exactly what you need.', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
  { Icon: ShieldCheck, title: 'Quality & Reliability', subtitle: 'Secure by Design', desc: 'High-quality solutions that are secure, scalable and reliable.', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
  { Icon: HeadphonesIcon, title: 'Continuous Support', subtitle: 'Here for the Long Run', desc: 'We stay with you – before, during and after project delivery.', color: '#f97316', bg: 'rgba(249, 115, 22, 0.1)' },
];

const SERVICES = [
  { Icon: Code2, title: 'Web Development', desc: 'Build modern, responsive and high-performing websites tailored to your business.', color: '#f97316', bg: 'rgba(249, 115, 22, 0.1)' },
  { Icon: Smartphone, title: 'App Development', desc: 'Create seamless and engaging mobile applications for Android & iOS platforms.', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
  { Icon: Server, title: 'Custom Software', desc: 'Develop scalable and secure software solutions designed to fit your unique needs.', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
  { Icon: Brain, title: 'AI/ML & Automation', desc: 'Leverage intelligent technologies to automate processes, analyze data and drive better decisions.', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)' },
  { Icon: Palette, title: 'UI/UX Designing', desc: 'Design intuitive and beautiful interfaces that deliver exceptional user experiences.', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)' },
  { Icon: Wrench, title: 'Deployment, Maintenance & Support', desc: 'Reliable deployment, regular maintenance and ongoing support to ensure smooth performance.', color: '#eab308', bg: 'rgba(234, 179, 8, 0.1)' },
];

const PILLARS = ['Innovation', 'Reliability', 'Impact'];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label={mounted && resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="grid h-12 w-12 place-items-center rounded-lg border border-blue-200 bg-white/95 text-[#263a8f] shadow-xl shadow-blue-900/10 backdrop-blur-md dark:border-indigo-300/20 dark:bg-[#111a43]/90 dark:text-[#b9c5ff] dark:shadow-indigo-950/40 hover:-translate-y-0.5 transition active:scale-95"
    >
      {mounted && resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

/* ───────── Navbar ───────── */
function AscendioNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h(); window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-5 md:px-8">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 md:px-7 md:py-3 ${scrolled ? 'border-white/80 bg-white/90 shadow-xl shadow-indigo-500/10 dark:border-white/10 dark:bg-[#0a0a1a]/90' : 'border-white/60 bg-white/65 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-[#0a0a1a]/65'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 shrink-0">
            <Image src="/Logos/landing-light.png" alt="Ascendio Global LLP" fill sizes="44px" className="object-contain dark:hidden" priority />
            <Image src="/Logos/landing-dark.jpeg" alt="Ascendio Global LLP" fill sizes="44px" className="hidden object-contain dark:block" priority />
          </div>
          <div className="hidden leading-none sm:block">
            <span className="block text-[17px] font-black tracking-tight text-slate-950 dark:text-white">ASCENDIO</span>
            <span className="mt-1 block text-[9px] font-bold tracking-[0.3em] text-[#3947e8] dark:text-[#a8aaff]">GLOBAL LLP</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <a href="#about" className="px-4 py-2 text-sm font-semibold text-[#26345f] dark:text-[#dbe4ff] rounded-lg hover:bg-blue-100/70 dark:hover:bg-indigo-400/15 transition">About</a>
          <a href="#why-choose-us" className="px-4 py-2 text-sm font-semibold text-[#26345f] dark:text-[#dbe4ff] rounded-lg hover:bg-blue-100/70 dark:hover:bg-indigo-400/15 transition">Why Us</a>
          <a href="#services" className="px-4 py-2 text-sm font-semibold text-[#26345f] dark:text-[#dbe4ff] rounded-lg hover:bg-blue-100/70 dark:hover:bg-indigo-400/15 transition">Services</a>

          <a href="#products" className="px-4 py-2 text-sm font-semibold text-[#26345f] dark:text-[#dbe4ff] rounded-lg hover:bg-blue-100/70 dark:hover:bg-indigo-400/15 transition">Products</a>

          <a href="#contact" className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#3155e8] dark:bg-gradient-to-r dark:from-[#5965ff] dark:to-[#8b5cf6] shadow-lg shadow-blue-500/25 dark:shadow-indigo-500/25 hover:bg-[#2445d0] dark:hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-95 transition-all">
            Contact Us <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(o => !o)} className="md:hidden h-10 w-10 grid place-items-center rounded-xl border border-blue-200 dark:border-indigo-300/20 text-[#263a8f] dark:text-[#dbe4ff]">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#0a0a1a]">
            <div className="px-5 py-4 space-y-1">
              <a href="#about" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5">About</a>
              <a href="#why-choose-us" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5">Why Us</a>
              <a href="#services" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5">Services</a>
              <a href="#products" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5">Products</a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-center px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#3155e8] dark:bg-gradient-to-r dark:from-[#5965ff] dark:to-[#8b5cf6]">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ───────── Hero ───────── */
function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[720px] items-start overflow-hidden bg-[#dcecff] dark:bg-[#090a18] md:min-h-screen">
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/ascendio-bg-light.png')" }} />
      <div aria-hidden="true" className="absolute inset-0 z-[1] hidden bg-cover bg-center dark:block" style={{ backgroundImage: "url('/ascendio-bg-dark.png')" }} />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-white/78 via-white/25 to-transparent dark:from-[#060b24]/70 dark:via-[#060b24]/20 dark:to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-white/10 via-transparent to-white/15 dark:from-[#05091e]/20 dark:to-transparent" />
      <div className="relative z-10 w-full px-8 pt-28 sm:px-12 md:pt-32 lg:px-[8.5vw] lg:pt-56">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#2642bd] dark:text-[#c4ccff]">Built to Ascend</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
            Turning Ideas<br />Into Real-World<br /><span className="text-[#3947e8] dark:text-[#8e91ff]">Solutions.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-[#334267] dark:text-[#e2e8ff] md:text-lg">We design, build and deploy technology that helps businesses, institutions and ideas move forward.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-3 rounded-xl bg-[#3155e8] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/30 transition hover:-translate-y-1 hover:bg-[#2445d0] dark:bg-[#5965ff] dark:hover:bg-[#4b55e8]">Let&apos;s Build Together <ArrowRight className="h-4 w-4" /></a>
            <a href="#services" className="inline-flex items-center gap-3 rounded-xl border border-blue-200/90 bg-white/65 px-6 py-4 text-sm font-bold text-[#1d2d55] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/85 dark:border-indigo-200/25 dark:bg-[#101a3f]/65 dark:text-[#eef1ff] dark:hover:bg-[#17245a]/80"><span className="grid h-5 w-5 place-items-center rounded-full border border-current"><Briefcase className="h-3.5 w-3.5" /></span>Explore Our Work</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f7f8fc] dark:bg-[#090a12]">
      <div className="relative isolate overflow-hidden px-5 py-20 md:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-left dark:hidden md:left-1/2" style={{ backgroundImage: "url('/64811547-2c05-4eed-9725-4648112c42ba.png')" }} />
        <div aria-hidden="true" className="absolute inset-0 -z-20 hidden bg-cover bg-left brightness-125 contrast-110 dark:block md:left-1/2" style={{ backgroundImage: "url('/1467f7e6-22e0-409c-94ef-93539abfc55c.png')" }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/15 dark:hidden" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#090a12] via-[#090a12]/35 to-transparent dark:block" />
        <div className="relative z-10 mx-auto max-w-6xl lg:ml-[8.5vw] lg:mr-0 lg:max-w-[38rem]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.32em] text-[#7c3aed] dark:text-[#c4b5fd]">About Us</p>
          <h2 className="max-w-[30rem] text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950 dark:text-white md:text-[4rem]">Building What Matters</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 md:mt-14">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-200 md:text-lg">
            <p>Ascendio Global LLP is a technology-driven team dedicated to building innovative digital solutions that create real impact.</p>
            <p>We work at the intersection of technology, design and problem-solving to help institutions, businesses, startups and individuals bring their ideas to life.</p>
          </div>
        </motion.div>
        </div>
      </div>

    </section>
  );
}


function VisionSection() {
  return (
    <section id="vision" className="relative isolate overflow-hidden bg-white dark:bg-[#090a12]">
      <div className="absolute inset-y-0 left-0 w-full bg-cover bg-center dark:hidden lg:w-1/2" style={{ backgroundImage: "url('/d8670779-bc25-4ad5-8309-92d026dde93e.png')" }} />
      <div className="absolute inset-y-0 left-0 hidden w-full bg-cover bg-center dark:block lg:w-1/2" style={{ backgroundImage: "url('/eabbf25f-fa56-4538-9fc4-63398011a94f.png')" }} />
      <div className="absolute inset-0 bg-white/85 dark:bg-[#090a12]/88 lg:hidden" />
      <div className="absolute inset-y-0 left-0 hidden w-3/4 bg-gradient-to-r from-transparent to-white lg:block dark:to-[#090a12]" />

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:px-12">
        <div className="hidden lg:block" aria-hidden="true" />
        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="lg:pl-10">
          <p className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] text-[#6555e8] dark:text-[#a99cff]"><span className="h-0.5 w-8 bg-current" />Our Vision</p>
          <h2 className="mt-7 max-w-xl text-4xl font-black leading-[1.03] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl">Empower people and organizations through technology.</h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">We envision a future where technology creates equal opportunities, simplifies complexity and enables individuals, businesses and institutions to achieve more.</p>

          <div className="mt-10 grid max-w-xl grid-cols-1 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/15 dark:border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ['01', 'EMPOWER PEOPLE'],
              ['02', 'SOLVE WHAT MATTERS'],
              ['03', 'CREATE LASTING IMPACT'],
            ].map(([number, label]) => (
              <div key={number} className="flex gap-3 py-5 sm:block sm:px-5 sm:first:pl-0 sm:last:pr-0">
                <span className="text-xs font-black tracking-[0.2em] text-[#6555e8] dark:text-[#a99cff]">{number}</span>
                <p className="mt-0 text-sm font-bold leading-snug text-slate-800 dark:text-slate-100 sm:mt-3">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailSubject = encodeURIComponent(subject || `Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ascendiollp@gmail.com?subject=${mailSubject}&body=${body}`;
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  };

  const contactRows = [
    [Mail, 'Email', 'ascendiollp@gmail.com', 'mailto:ascendiollp@gmail.com'],
    [Phone, 'Phone', '+91 82818 91391', 'tel:+918281891391'],
    [MapPin, 'Address', 'Trivandrum, Kerala', undefined],
    [Clock, 'Business Hours', 'Mon - Fri: 9:00 AM - 6:00 PM (IST)', undefined],
  ] as const;

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50/80 px-4 py-12 dark:bg-[#0d0e11] md:px-6 md:py-24">
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col pt-4">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:mb-4 md:text-4xl">Let&apos;s Talk</h2>
          <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-zinc-400 md:mb-12 md:text-base">Have a project, idea, or requirement? Let&apos;s turn it into a powerful digital solution.</p>
          <div className="flex flex-col gap-4 md:gap-6">
            {contactRows.map(([Icon, title, value, href], index) => (
              <div key={title}>
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/80 bg-white/70 text-blue-600 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-violet-400"><Icon className="h-5 w-5" /></div>
                  <div><div className="mb-0.5 text-[15px] font-semibold text-slate-900 dark:text-white">{title}</div>{href ? <a href={href} className="text-[15px] text-blue-600 hover:text-blue-700 dark:text-violet-400 dark:hover:text-violet-300">{value}</a> : <div className="text-[15px] text-slate-600 dark:text-zinc-400">{value}</div>}</div>
                </div>
                {index < contactRows.length - 1 && <div className="mt-4 h-px w-full bg-black/5 dark:bg-white/5 md:mt-6" />}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-2xl dark:shadow-black/50 md:rounded-3xl md:p-10">
          <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white md:mb-3 md:text-2xl">Send us a message</h2>
          <p className="mb-6 text-xs text-slate-600 dark:text-zinc-400 md:mb-8 md:text-sm">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
          {sent ? (
            <div className="flex h-52 flex-col items-center justify-center text-center md:h-64"><div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 md:h-16 md:w-16"><Check className="h-6 w-6 md:h-8 md:w-8" /></div><div className="mb-2 text-xl font-bold text-emerald-500 md:text-2xl">Message Sent!</div><p className="text-xs text-slate-600 dark:text-zinc-400 md:text-sm">Thank you for reaching out. We will get back to you soon.</p></div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
                <label className="rounded-xl border border-white/60 bg-white/60 px-3 py-2.5 backdrop-blur-sm focus-within:border-blue-500/50 focus-within:bg-white/90 dark:border-white/10 dark:bg-white/[0.04] dark:focus-within:border-violet-500/50"><span className="mb-1 block text-xs font-medium text-slate-500 dark:text-zinc-400">Full Name</span><span className="flex items-start"><input value={name} onChange={event => setName(event.target.value)} placeholder="Enter your name" required className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-zinc-600" /><User className="ml-2 mt-0.5 h-4 w-4 text-slate-400 dark:text-zinc-500" /></span></label>
                <label className="rounded-xl border border-white/60 bg-white/60 px-3 py-2.5 backdrop-blur-sm focus-within:border-blue-500/50 focus-within:bg-white/90 dark:border-white/10 dark:bg-white/[0.04] dark:focus-within:border-violet-500/50"><span className="mb-1 block text-xs font-medium text-slate-500 dark:text-zinc-400">Email Address</span><span className="flex items-start"><input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Enter your email" required className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-zinc-600" /><Mail className="ml-2 mt-0.5 h-4 w-4 text-slate-400 dark:text-zinc-500" /></span></label>
              </div>
              <label className="rounded-xl border border-white/60 bg-white/60 px-3 py-2.5 backdrop-blur-sm focus-within:border-blue-500/50 focus-within:bg-white/90 dark:border-white/10 dark:bg-white/[0.04] dark:focus-within:border-violet-500/50"><span className="mb-1 block text-xs font-medium text-slate-500 dark:text-zinc-400">Subject</span><span className="flex items-start"><input value={subject} onChange={event => setSubject(event.target.value)} placeholder="What is this regarding?" required className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-zinc-600" /><Tag className="ml-2 mt-0.5 h-4 w-4 text-slate-400 dark:text-zinc-500" /></span></label>
              <label className="rounded-xl border border-white/60 bg-white/60 px-3 py-2.5 backdrop-blur-sm focus-within:border-blue-500/50 focus-within:bg-white/90 dark:border-white/10 dark:bg-white/[0.04] dark:focus-within:border-violet-500/50"><span className="mb-1 block text-xs font-medium text-slate-500 dark:text-zinc-400">Message</span><span className="flex items-start"><textarea value={message} onChange={event => setMessage(event.target.value)} placeholder="Type your message here..." required rows={4} className="w-full resize-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-zinc-600" /><Pencil className="ml-2 mt-0.5 h-4 w-4 text-slate-400 dark:text-zinc-500" /></span></label>
              <button type="submit" className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95 dark:bg-violet-600 dark:hover:bg-violet-500 dark:shadow-[0_0_20px_rgba(124,58,237,0.3)] md:h-14 md:text-[15px]"><Send className="h-4 w-4 md:h-[18px] md:w-[18px]" />Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ───────── Why Partner ───────── */
function WhyPartnerSection() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-[#f7f8fc] px-5 py-20 dark:bg-[#090a12] md:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative min-h-[520px] h-full overflow-hidden rounded-[22px] border border-white/70 bg-slate-900 shadow-2xl shadow-indigo-950/20 dark:border-white/10">
          <Image src="/ascendio-support.png" alt="Ascendio support team helping turn ideas into solutions" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover object-center transition duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080a20]/75 via-transparent to-transparent" />
          <div className="absolute bottom-7 left-7 right-7"><p className="text-xs font-bold uppercase tracking-[0.28em] text-indigo-200">Ascendio Global</p><p className="mt-2 text-2xl font-black text-white">Technology that moves your ambition forward.</p></div>
        </motion.div>
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#7c63e8] dark:text-[#aa99ff]">Why Choose Us</p>
            <h2 className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 dark:text-white md:text-5xl">Built for progress.<br />Ready for what&apos;s next.</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-zinc-400">From the first conversation to long-term support, we bring clarity, craft and dependable technology to every engagement.</p>
            <div className="mt-7 h-1 w-16 bg-[#8b72ef]" />
          </motion.div>
          <div className="mt-9 space-y-4">
            {WHY_PARTNER.map((item, i) => (
              <div key={item.title} className="group relative">
                <div className="pointer-events-none absolute -inset-3 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundColor: item.color }} />
                <motion.article initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ '--why-color': item.color, '--why-shadow': `${item.color}38` } as React.CSSProperties} className="group relative z-10 overflow-hidden rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--why-color)] hover:shadow-[0_8px_28px_var(--why-shadow)] dark:border-white/[0.1] dark:bg-white/[0.035] dark:hover:bg-white/[0.06] md:p-6">
                  <div className="relative z-10 flex items-start gap-5"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: item.bg, color: item.color }}><item.Icon className="h-6 w-6" /></div><div><h3 className="text-lg font-bold tracking-tight text-slate-950 dark:text-white">{item.title}</h3><p className="mt-1 text-sm font-medium text-slate-500 dark:text-zinc-400">{item.subtitle}</p><p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{item.desc}</p></div></div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Services / What We Can Build ───────── */
function ServicesSection() {
  const serviceSubtitles = [
    'Build digital experiences that perform.',
    'Seamless mobile experiences.',
    'Scalable software for unique needs.',
    'Intelligence that drives better decisions.',
    'Interfaces designed around people.',
    'Reliable technology for the long run.',
  ];

  return (
    <section id="services" className="relative overflow-hidden border-b border-black/6 bg-[#f8faff] px-5 py-16 dark:border-white/10 dark:bg-[#08090f] md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 9% 34%, rgba(99,102,241,0.16) 0 1px, transparent 1px), linear-gradient(135deg, transparent 0 48%, rgba(99,102,241,0.08) 48.2%, transparent 48.5%)', backgroundSize: '24px 24px, 100% 100%' }} />
      <div className="relative mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="mb-10 flex items-end justify-between gap-8 md:mb-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#5138d8] dark:text-[#a99cff]">Services</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 dark:text-white md:text-7xl">What We <span className="text-[#6246e5] dark:text-[#a99cff]">Do.</span></h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">End-to-end technology solutions to help you build, grow and stay ahead.</p>
          </div>
          <div className="hidden pb-2 text-right text-[10px] font-bold uppercase leading-[1.5] tracking-[0.3em] text-slate-400 dark:text-slate-600 md:block">Ideas<br />into<br />impact<br /><span className="mt-3 block h-px w-6 bg-[#6246e5]" /></div>
        </motion.div>

        <div className="overflow-hidden rounded-[1.5rem] border border-[#765cff]/50 bg-white/60 shadow-[0_24px_70px_rgba(91,70,229,0.12)] backdrop-blur-xl dark:border-[#8b7cff]/30 dark:bg-white/[0.035] dark:shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
          {SERVICES.map((service, serviceIndex) => {
              const Icon = service.Icon;
              return <button key={service.title} type="button" style={{ '--service-hover': `${service.color}20` } as React.CSSProperties} className="group relative flex h-24 w-full overflow-hidden border-b border-slate-200/80 px-5 text-left transition-[height,background-color] duration-300 last:border-b-0 hover:h-[300px] hover:bg-[var(--service-hover)] dark:border-white/[0.08] md:px-8 md:hover:h-[320px]">
                <div className="relative z-10 grid h-full w-full grid-cols-[2.5rem_1px_minmax(0,1fr)_1.5rem] items-center gap-5 md:grid-cols-[3rem_1px_minmax(0,1fr)_2rem] md:gap-7">
                  <span className="grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12" style={{ backgroundColor: service.bg, color: service.color }}><Icon className="h-5 w-5 md:h-6 md:w-6" /></span>
                  <span className="h-7 w-px bg-slate-200 dark:bg-white/[0.08]" />
                  <span className="flex min-w-0 max-w-3xl self-center flex-col justify-center pl-4 translate-y-6 transition-transform duration-300 group-hover:translate-y-0 md:pl-8 md:translate-y-7">
                    <span className="block text-xl font-black leading-tight tracking-tight text-slate-900 transition-all duration-300 group-hover:text-3xl dark:text-white md:group-hover:text-5xl">{service.title}</span>
                    <span className="mt-0 block max-h-0 overflow-hidden text-sm font-bold text-[#8067ed] opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-8 group-hover:opacity-100 dark:text-[#b4a8ff]">{serviceSubtitles[serviceIndex]}</span>
                    <span className="mt-0 block max-w-2xl text-sm leading-relaxed text-slate-600 opacity-0 transition-all duration-300 group-hover:mt-5 group-hover:opacity-100 md:text-base dark:text-slate-300">{service.desc}</span>
                    <span className="mt-0 flex flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:mt-6 group-hover:opacity-100"><span className="rounded-full border border-[#b9adff] bg-white/50 px-3 py-1.5 text-xs font-semibold text-[#5b43d1] dark:border-[#8174e8]/40 dark:bg-black/10 dark:text-[#c5beff]">Tailored solutions</span><span className="rounded-full border border-[#b9adff] bg-white/50 px-3 py-1.5 text-xs font-semibold text-[#5b43d1] dark:border-[#8174e8]/40 dark:bg-black/10 dark:text-[#c5beff]">Future ready</span></span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 self-center text-slate-400 opacity-100 transition-opacity duration-200 group-hover:opacity-0 dark:text-slate-500 md:h-6 md:w-6" />
                </div>
                <div className="pointer-events-none absolute right-[10%] top-1/2 hidden -translate-y-1/2 opacity-0 transition duration-500 group-hover:opacity-20 md:block" style={{ color: service.color }}><Icon className="h-64 w-64" strokeWidth={0.7} /></div>
              </button>;
          })}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="relative aspect-[1721/914] overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/5c1a07ad-bd7f-4534-b4fd-cc95d81c6ee0.png')" }} />
      <div aria-hidden="true" className="absolute inset-0 hidden bg-cover bg-center dark:block" style={{ backgroundImage: "url('/e75fc16a-cb73-465b-bad5-8171565b9627.png')" }} />
      <Link href="/products/aarambh" aria-label="Open Aarambh" className="absolute inset-0 z-10 dark:hidden" />
      <Link href="/products/aarambh" aria-label="Open Aarambh" className="absolute inset-0 z-10 hidden dark:block" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-indigo-500/15 to-transparent dark:hidden" />
      <div className="relative mx-auto hidden max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#b8adff]">Our Products</p>
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">Meet Aarambh.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-indigo-100/80">A flagship product by Ascendio, built to connect institutions, students, alumni and opportunities through one intelligent platform.</p>
        </div>
        <Link href="/products/aarambh" className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#dbe7ff] px-6 py-4 font-bold text-[#1d2d55] transition hover:-translate-y-1 hover:bg-white"><Rocket className="h-5 w-5" /> Explore Aarambh <ArrowRight className="h-5 w-5" /></Link>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function AscendioFooter() {
  return (
    <section id="footer">
      <footer className="border-t border-black/8 bg-white/80 px-4 py-8 text-slate-900 backdrop-blur-xl dark:border-white/10 dark:bg-black/60 dark:text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center md:flex-row md:items-start md:justify-between md:gap-8 md:text-left">
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="scale-90 md:scale-100">
                <AnimatedLogoMark size="sm" role="landing" />
              </div>
              <span className="hidden text-sm font-black uppercase tracking-[0.22em] sm:block">Ascendio</span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 md:ml-2 md:text-sm">
              <div>Trivandrum, Kerala</div>
              <div className="mt-1">Phone: <Link href="tel:+918281891391">+91 82818 91391</Link></div>
              <div className="mt-1">Phone: <Link href="tel:+918921519949">+91 89215 19949</Link></div>
              <div>Email: <Link href="mailto:ascendiollp@gmail.com">ascendiollp@gmail.com</Link></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 md:text-sm">© 2026 Ascendio Global LLP. All rights reserved.</p>
            <div className="flex gap-2">
              <Link href="https://linkedin.com/company/aarambhofficial" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-lg border border-black/10 text-zinc-500 transition hover:border-[#3155e8] hover:text-[#3155e8] dark:border-white/10 dark:text-zinc-400 dark:hover:border-[#a78bfa] dark:hover:text-[#a78bfa] md:h-9 md:w-9">
                <svg className="h-3.5 w-3.5 md:h-4 md:w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </Link>
              <Link href="https://x.com/ascendioglobal" target="_blank" rel="noopener noreferrer" aria-label="X" className="grid h-8 w-8 place-items-center rounded-lg border border-black/10 text-zinc-500 transition hover:border-[#3155e8] hover:text-[#3155e8] dark:border-white/10 dark:text-zinc-400 dark:hover:border-[#a78bfa] dark:hover:text-[#a78bfa] md:h-9 md:w-9">
                <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Link>
              <Link href="https://instagram.com/ascendio_global" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-8 w-8 place-items-center rounded-lg border border-black/10 text-zinc-500 transition hover:border-[#3155e8] hover:text-[#3155e8] dark:border-white/10 dark:text-zinc-400 dark:hover:border-[#a78bfa] dark:hover:text-[#a78bfa] md:h-9 md:w-9">
                <Camera className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 md:gap-6 md:text-sm">
            <a href="#about" className="transition hover:text-[#3155e8] dark:hover:text-[#a78bfa]">Privacy</a>
            <a href="#about" className="transition hover:text-[#3155e8] dark:hover:text-[#a78bfa]">Terms</a>
            <a href="#contact" className="transition hover:text-[#3155e8] dark:hover:text-[#a78bfa]">Support</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

/* ───────── Main Export ───────── */
export default function AscendioLanding() {
  return (
    <div className="relative min-h-screen font-[var(--font-poppins)] bg-white dark:bg-[#070510] text-slate-950 dark:text-white selection:bg-indigo-100 dark:selection:bg-purple-500/30">
      <AscendioNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <JourneySection />
        <WhyPartnerSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <AscendioFooter />
      <div className="fixed bottom-6 left-6 z-50"><ThemeToggle /></div>
    </div>
  );
}
