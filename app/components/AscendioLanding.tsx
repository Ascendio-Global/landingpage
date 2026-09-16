'use client';
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedLogoMark from '@/app/AnimatedLogoMark';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'motion/react';
import { BlurReveal, StaggerContainer, StaggerItem, ParallaxImage } from './motion/Animations';
import JourneySection from './JourneySection';
import {
  Menu, X, ArrowRight, Code2, Smartphone, Server,
  Brain, Palette, Wrench, Users, Handshake, ShieldCheck, HeadphonesIcon,
  Globe, Mail, Rocket, Sun, Moon, Phone, Check, Clock, MapPin, Pencil, Send, Tag, User, Briefcase,
  Sparkles, Cpu, BarChart3, Database, Cloud, ChevronRight, Award, Settings, Layers
} from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
  { Icon: Code2, title: 'Web Development', desc: 'Build modern, responsive and high-performing websites tailored to your business.', color: '#f97316', bg: 'rgba(249, 115, 22, 0.1)', tags: ['Responsive by design', 'Performance focused'] },
  { Icon: Smartphone, title: 'App Development', desc: 'Create seamless and engaging mobile applications for Android & iOS platforms.', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)', tags: ['Mobile first', 'Built to scale'] },
  { Icon: Server, title: 'Custom Software', desc: 'Develop scalable and secure software solutions designed to fit your unique needs.', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)', tags: ['Tailored solutions', 'Future ready'] },
  { Icon: Brain, title: 'AI/ML & Automation', desc: 'Leverage intelligent technologies to automate processes, analyze data and drive better decisions.', color: '#f43f5e', bg: 'rgba(244, 63, 94, 0.1)', tags: ['AI powered', 'Workflow automation'] },
  { Icon: Palette, title: 'UI/UX Designing', desc: 'Design intuitive and beautiful interfaces that deliver exceptional user experiences.', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.1)', tags: ['User centered', 'Conversion focused'] },
  { Icon: Wrench, title: 'Deployment, Maintenance & Support', desc: 'Reliable deployment, regular maintenance and ongoing support to ensure smooth performance.', color: '#eab308', bg: 'rgba(234, 179, 8, 0.1)', tags: ['Always reliable', 'Continuous support'] },
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
      className="grid h-[52px] w-[52px] place-items-center rounded-[18px] border border-blue-100/80 bg-[#f4f7fb] text-[#1e293b] shadow-sm transition-transform hover:scale-105 active:scale-95 dark:border-[#2a2a2a] dark:bg-[#1f1f22] dark:text-yellow-400 dark:shadow-none"
    >
      {mounted && resolvedTheme === 'dark' ? <Sun className="h-6 w-6" strokeWidth={2.25} /> : <Moon className="h-6 w-6" strokeWidth={2.25} />}
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
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-2xl transition-all duration-500 md:px-7 md:py-3 ${scrolled ? 'border-white/80 bg-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:border-white/[0.08] dark:bg-[#0a0a1a]/40 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' : 'border-white/50 bg-white/40 shadow-lg shadow-slate-900/5 dark:border-white/[0.04] dark:bg-white/[0.02]'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-10 w-10 shrink-0">
            <Image src="/Logos/landing-light.png" alt="Ascendio Global LLP" fill sizes="40px" className="object-contain dark:hidden" priority />
            <Image src="/Logos/landing-dark.jpeg" alt="Ascendio Global LLP" fill sizes="40px" className="hidden object-contain dark:block" priority />
          </div>
          <div className="hidden flex-col gap-1 sm:flex">
            <span className="text-[17px] font-black tracking-wide text-slate-950 dark:text-white leading-none">ASCENDIO</span>
            <span className="text-[8.5px] font-bold tracking-[0.35em] text-[#3947e8] dark:text-[#a8aaff] leading-none">GLOBAL LLP</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <a href="#about" data-instant className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-[#dbe4ff] rounded-lg hover:bg-white/60 dark:hover:bg-white/10 transition">About</a>
          <a href="#why-choose-us" data-instant className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-[#dbe4ff] rounded-lg hover:bg-white/60 dark:hover:bg-white/10 transition">Why Us</a>
          <a href="#services" data-instant className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-[#dbe4ff] rounded-lg hover:bg-white/60 dark:hover:bg-white/10 transition">Services</a>
          <a href="#products" data-instant className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-[#dbe4ff] rounded-lg hover:bg-white/60 dark:hover:bg-white/10 transition">Products</a>

          <a href="#contact" data-instant className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#3155e8] hover:bg-[#2445d0] dark:bg-[#5965ff] dark:hover:bg-[#4b55e8] shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20 border border-transparent dark:border-[#5965ff]/30 hover:-translate-y-0.5 active:scale-95 transition-all">
            Contact Us <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(o => !o)} className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-blue-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[#263a8f] dark:text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white/80 dark:hover:bg-white/10">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -20, scale: 0.95 }} 
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/60 backdrop-blur-2xl shadow-[0_24px_64px_0_rgba(31,38,135,0.15)] dark:border-white/[0.08] dark:bg-[#05050f]/60 dark:shadow-[0_24px_64px_0_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col p-3">
              <a href="#about" data-instant onClick={() => setMobileOpen(false)} className="group flex items-center justify-between rounded-2xl p-1.5 transition hover:bg-white/50 dark:hover:bg-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <User className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-800 dark:text-slate-200">About</span>
                </div>
                <ChevronRight className="mr-2 h-4 w-4 text-slate-400 transition group-hover:text-slate-800 dark:text-slate-500 dark:group-hover:text-slate-200" />
              </a>

              <a href="#why-choose-us" data-instant onClick={() => setMobileOpen(false)} className="group flex items-center justify-between rounded-2xl p-1.5 transition hover:bg-white/50 dark:hover:bg-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <Award className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-800 dark:text-slate-200">Why Us</span>
                </div>
                <ChevronRight className="mr-2 h-4 w-4 text-slate-400 transition group-hover:text-slate-800 dark:text-slate-500 dark:group-hover:text-slate-200" />
              </a>

              <a href="#services" data-instant onClick={() => setMobileOpen(false)} className="group flex items-center justify-between rounded-2xl p-1.5 transition hover:bg-white/50 dark:hover:bg-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <Settings className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-800 dark:text-slate-200">Services</span>
                </div>
                <ChevronRight className="mr-2 h-4 w-4 text-slate-400 transition group-hover:text-slate-800 dark:text-slate-500 dark:group-hover:text-slate-200" />
              </a>

              <a href="#products" data-instant onClick={() => setMobileOpen(false)} className="group flex items-center justify-between rounded-2xl p-1.5 transition hover:bg-white/50 dark:hover:bg-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/80 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <Layers className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-800 dark:text-slate-200">Products</span>
                </div>
                <ChevronRight className="mr-2 h-4 w-4 text-slate-400 transition group-hover:text-slate-800 dark:text-slate-500 dark:group-hover:text-slate-200" />
              </a>

              <div className="mx-2 my-2 h-px bg-slate-200/50 dark:bg-white/5" />

              <a href="#contact" data-instant onClick={() => setMobileOpen(false)} className="group flex items-center justify-between rounded-[1.25rem] p-2 transition bg-[#3155e8] hover:bg-[#2445d0] dark:bg-[#5965ff] dark:hover:bg-[#4b55e8] shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20 border border-transparent dark:border-[#5965ff]/30">
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/20 shadow-sm">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[15px] font-medium text-white">Contact Us</span>
                </div>
                <ChevronRight className="mr-2 h-4 w-4 text-white/70 transition group-hover:text-white" />
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
      <div className="relative z-10 w-full px-5 pt-44 sm:px-12 md:px-8 md:pt-32 lg:px-[8.5vw] lg:pt-56">
        <StaggerContainer className="max-w-2xl" delay={0.1}>
          <StaggerItem>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#2642bd] dark:text-[#c4ccff]">Built to Ascend</p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl md:text-7xl lg:text-[5rem]">
              Turning Ideas<br />Into Real-World<br /><span className="text-[#3947e8] dark:text-[#8e91ff]">Solutions.</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#334267] dark:text-[#e2e8ff] md:text-lg">We design, build and deploy technology that helps businesses, institutions and ideas move forward.</p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#contact" data-instant className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#3155e8] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/30 transition hover:-translate-y-1 hover:bg-[#2445d0] dark:bg-[#5965ff] dark:hover:bg-[#4b55e8] sm:w-auto">Let&apos;s Build Together <ArrowRight className="h-4 w-4" /></a>
              <a href="#products" data-instant className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-blue-200/90 bg-white/65 px-6 py-4 text-sm font-bold text-[#1d2d55] backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/85 dark:border-indigo-200/25 dark:bg-[#101a3f]/65 dark:text-[#eef1ff] dark:hover:bg-[#17245a]/80 sm:w-auto">Explore Our Products</a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f7f8fc] dark:bg-[#090a12]">
      <div className="relative isolate overflow-hidden px-5 py-16 md:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-cover bg-left dark:hidden md:left-1/2" style={{ backgroundImage: "url('/64811547-2c05-4eed-9725-4648112c42ba.png')" }} />
        <div aria-hidden="true" className="absolute inset-0 -z-20 hidden bg-cover bg-left brightness-125 contrast-110 dark:block md:left-1/2" style={{ backgroundImage: "url('/1467f7e6-22e0-409c-94ef-93539abfc55c.png')" }} />
        
        {/* Mobile Overlays */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/85 dark:hidden md:hidden" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-[#090a12]/85 dark:block md:dark:hidden" />
        
        {/* Desktop Overlays */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-white via-white/90 to-white/15 dark:hidden md:block" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden md:dark:block bg-gradient-to-r from-[#090a12] via-[#090a12]/35 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-6xl lg:ml-[8.5vw] lg:mr-0 lg:max-w-[38rem]">
        <StaggerContainer>
          <StaggerItem>
            <p className="mb-7 text-sm font-bold uppercase tracking-[0.32em] text-[#7c3aed] dark:text-[#c4b5fd]">About Us</p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="max-w-[30rem] text-3xl font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl md:text-[4rem]">Building What Matters</h2>
          </StaggerItem>
        </StaggerContainer>

        <BlurReveal delay={0.1} className="mt-10 md:mt-14">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-200 md:text-lg">
            <p>Ascendio Global LLP is a technology-driven team dedicated to building innovative digital solutions that create real impact.</p>
            <p>We work at the intersection of technology, design and problem-solving to help institutions, businesses, startups and individuals bring their ideas to life.</p>
          </div>
        </BlurReveal>
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

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center px-5 py-16 sm:px-8 md:py-28 lg:grid-cols-2 lg:px-12">
        <div className="hidden lg:block" aria-hidden="true" />
        <StaggerContainer className="lg:pl-10">
          <StaggerItem>
            <p className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] text-[#6555e8] dark:text-[#a99cff]"><span className="h-0.5 w-8 bg-current" />Our Vision</p>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-7 max-w-xl text-3xl font-black leading-[1.03] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">Empower people and organizations through technology.</h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">We envision a future where technology creates equal opportunities, simplifies complexity and enables individuals, businesses and institutions to achieve more.</p>
          </StaggerItem>

          <StaggerItem>
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
          </StaggerItem>
        </StaggerContainer>
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
        <BlurReveal className="flex flex-col pt-4">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:mb-4 md:text-4xl">Let&apos;s Talk</h2>
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
        </BlurReveal>

        <BlurReveal delay={0.2} className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-2xl dark:shadow-black/50 md:rounded-3xl md:p-10">
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
        </BlurReveal>
      </div>
    </section>
  );
}

/* ───────── Why Partner ───────── */
function WhyPartnerSection() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-[#f7f8fc] px-5 py-16 dark:bg-[#090a12] md:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative min-h-[350px] h-full overflow-hidden rounded-[22px] border border-white/70 bg-slate-900 shadow-2xl shadow-indigo-950/20 dark:border-white/10 md:min-h-[520px]">
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
              <button key={item.title} type="button" className="group relative block w-full text-left focus:outline-none">
                <div className="pointer-events-none absolute -inset-3 rounded-2xl opacity-0 blur-2xl transition-opacity duration-[2500ms] group-active:duration-300 md:group-hover:duration-500 group-active:opacity-60 dark:group-active:opacity-50 md:group-hover:opacity-50 md:dark:group-hover:opacity-40" style={{ backgroundColor: item.color }} />
                <motion.article initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group/card relative z-10 overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 group-active:scale-[0.98] dark:border-white/[0.1] dark:bg-[#0e0f17] md:p-6">
                  <div className="relative z-10 flex items-start gap-5"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: item.bg, color: item.color }}><item.Icon className="h-6 w-6" /></div><div><h3 className="text-lg font-bold tracking-tight text-slate-950 dark:text-white">{item.title}</h3><p className="mt-1 text-sm font-medium text-slate-500 dark:text-zinc-400">{item.subtitle}</p><p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{item.desc}</p></div></div>
                </motion.article>
              </button>
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
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 dark:text-white md:text-7xl">What We <span className="text-[#6246e5] dark:text-[#a99cff]">Do.</span></h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">End-to-end technology solutions to help you build, grow and stay ahead.</p>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-[1.5rem] border border-[#765cff]/50 bg-white/60 shadow-[0_24px_70px_rgba(91,70,229,0.12)] backdrop-blur-xl dark:border-[#8b7cff]/30 dark:bg-white/[0.035] dark:shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
          {SERVICES.map((service, serviceIndex) => {
              const Icon = service.Icon;
              const mobileHeights = ['300px', '300px', '280px', '320px', '260px', '340px'];
              return <button 
                key={service.title} 
                type="button" 
                onClick={(e) => {
                  if (e.detail > 0 && window.innerWidth >= 768) {
                    e.currentTarget.blur();
                  }
                }}
                style={{ '--service-hover': `${service.color}35`, '--mobile-height': mobileHeights[serviceIndex] } as React.CSSProperties} 
                className="group relative flex h-[5.5rem] w-full overflow-hidden border-b border-slate-200/80 px-5 text-left transition-[height,background-color] duration-300 last:border-b-0 hover:h-[var(--mobile-height)] focus:h-[var(--mobile-height)] hover:bg-[var(--service-hover)] focus:bg-[var(--service-hover)] focus:outline-none dark:border-white/[0.08] md:h-24 md:px-8 md:hover:h-[320px] md:focus:h-[320px]">
                <div className="relative z-10 grid h-full w-full content-center items-center grid-cols-[2rem_1px_minmax(0,1fr)] gap-x-4 gap-y-0 md:grid-cols-[3rem_1px_minmax(0,1fr)_2rem] md:gap-x-7">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 group-focus:scale-110 md:h-12 md:w-12" style={{ backgroundColor: service.bg, color: service.color }}><Icon className="h-5 w-5 md:h-6 md:w-6" /></span>
                  
                  <span className="h-7 w-px shrink-0 bg-slate-200 dark:bg-white/[0.08]" />
                  
                  <span className="block text-xl font-black leading-tight tracking-tight text-slate-900 transition-all duration-300 group-hover:text-3xl group-focus:text-3xl dark:text-white md:group-hover:text-5xl md:group-focus:text-5xl pl-2 md:pl-8">{service.title}</span>

                  <div className="col-start-3 flex flex-col pl-2 md:pl-8">
                    <span className="mt-0 block max-h-0 overflow-hidden text-sm font-bold opacity-0 transition-all duration-300 group-hover:mt-3 group-focus:mt-3 group-hover:max-h-20 group-focus:max-h-20 group-hover:opacity-100 group-focus:opacity-100" style={{ color: service.color }}>{serviceSubtitles[serviceIndex]}</span>
                    <span className="mt-0 block max-h-0 overflow-hidden max-w-2xl text-sm leading-relaxed text-slate-600 opacity-0 transition-all duration-300 group-hover:mt-5 group-focus:mt-5 group-hover:max-h-40 group-focus:max-h-40 group-hover:opacity-100 group-focus:opacity-100 md:text-base dark:text-slate-300">{service.desc}</span>
                    <span className="mt-0 hidden max-h-0 overflow-hidden flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:mt-6 group-focus:mt-6 group-hover:max-h-20 group-focus:max-h-20 group-hover:opacity-100 group-focus:opacity-100 md:flex">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full border px-3 py-1.5 text-xs font-semibold" style={{ color: service.color, borderColor: `${service.color}60`, backgroundColor: `${service.color}15` }}>{tag}</span>
                      ))}
                    </span>
                  </div>

                  <div className="hidden shrink-0 place-items-center justify-end md:flex md:h-12 md:w-12 row-start-1 row-span-2 col-start-4">
                    <ArrowRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:translate-x-2 group-focus:translate-x-2 group-hover:text-[#6555e8] group-focus:text-[#6555e8] dark:text-slate-600 dark:group-hover:text-[#a99cff] dark:group-focus:text-[#a99cff] md:h-6 md:w-6" />
                  </div>
                </div>
                <div className="pointer-events-none absolute right-[10%] top-1/2 hidden -translate-y-1/2 opacity-0 transition duration-500 group-hover:opacity-40 group-focus:opacity-40 md:block" style={{ color: service.color }}><Icon className="h-64 w-64" strokeWidth={0.7} /></div>
              </button>;
          })}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="relative min-h-[450px] overflow-hidden bg-[#f8faff] px-6 py-12 text-slate-950 dark:bg-black dark:text-white md:min-h-0 md:aspect-[1721/914] md:p-0">
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center dark:hidden" style={{ backgroundImage: "url('/5c1a07ad-bd7f-4534-b4fd-cc95d81c6ee0.png')" }} />
      <div aria-hidden="true" className="absolute inset-0 hidden bg-cover bg-center dark:block" style={{ backgroundImage: "url('/e75fc16a-cb73-465b-bad5-8171565b9627.png')" }} />
      
      {/* Mobile Overlays for text visibility */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#f8faff]/85 dark:hidden md:hidden" />
      <div aria-hidden="true" className="absolute inset-0 hidden bg-black/85 dark:block md:dark:hidden" />
      
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-indigo-500/15 to-transparent dark:hidden" />
      <div className="relative flex h-full w-full flex-col justify-center px-5 sm:px-12 md:px-8 lg:px-[8.5vw]">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-indigo-600 dark:text-[#b8adff]">Our Products</p>
          <h2 className="text-3xl font-black tracking-tight md:text-6xl">Meet Aarambh.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-indigo-100/80 md:text-lg">A flagship product by Ascendio, built to connect institutions, students, alumni and opportunities through one intelligent platform.</p>
          <div className="mt-8 md:mt-10">
            <Link href="/products/aarambh" className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-[#3155e8] to-[#8b5cf6] px-6 py-4 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40 hover:from-[#2445d0] hover:to-[#7c3aed] active:scale-95">
              <Rocket className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> 
              Explore Aarambh 
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
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
                <InstagramIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
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
