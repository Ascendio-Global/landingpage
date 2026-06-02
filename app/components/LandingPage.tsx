'use client'
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { ElementType } from 'react';
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Crown,
    GraduationCap,
    LayoutDashboard,
    Menu,
    Moon,
    Sun,
    Target,
    X,
} from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'motion/react';
import type { MotionValue } from 'motion/react';
import { useTheme } from 'next-themes';
import AnimatedLogoMark from '@/app/AnimatedLogoMark';
import { InfiniteSlider } from '@/app/components/infinite-slider'
import Link from 'next/link';



function ServicesSection({ isDarkMode }: { isDarkMode: boolean }) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 75, damping: 22, mass: 0.45 });
    const headingY = useTransform(smoothProgress, [0, 0.6], [64, 0]);

    const cards = [
        { title: 'Opportunities', body: 'Explore placements, internships, and industry openings.' },
        { title: 'Profile Reviews', body: 'Expert feedback on resumes and interview readiness.' },
        { title: 'Analytics', body: 'Placement analytics to measure outcomes and improve strategies.' },
    ];

    return (
        <section ref={sectionRef} id="services" className={`relative overflow-hidden border-b px-4 py-20 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#0b0c0f]' : 'border-black/10 bg-white'}`}>
            <div className="mx-auto max-w-7xl">
                <motion.div style={{ y: headingY }}>
                    <SectionHeader
                        eyebrow="What We Offer"
                        title="Services"
                        copy="End-to-end placement services including placement support, recruiter outreach, profile reviews, and analytics to track progress."
                        isDarkMode={isDarkMode}
                    />
                </motion.div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            className={`rounded-lg border p-6 ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-[#f7f7f4]'}`}
                        >
                            <h3 className="text-xl font-bold">{c.title}</h3>
                            <p className="mt-2 text-sm">{c.body}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutSection({ isDarkMode }: { isDarkMode: boolean }) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 75, damping: 22, mass: 0.45 });
    const headingY = useTransform(smoothProgress, [0, 0.6], [48, 0]);

    return (
        <section ref={sectionRef} id="about" className={`relative border-b px-4 py-20 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#08090b]' : 'border-black/10 bg-[#f7f7f4]'}`}>
            <div className="mx-auto max-w-4xl text-center">
                <motion.div style={{ y: headingY }}>
                    <SectionHeader
                        eyebrow="About Us"
                        title="About Aarambh"
                        copy="Aarambh is a career launchpad dedicated to helping students convert potential into placement outcomes."
                        isDarkMode={isDarkMode}
                    />
                </motion.div>
            </div>
        </section>
    );
}

const HERO_CLIENTS = [
    { name: 'Learning', icon: Target },
    { name: 'Resume Review', icon: CheckCircle2 },
    { name: 'Placements', icon: GraduationCap },
    { name: 'Recruiter Connect', icon: Building2 },
    { name: 'Progress Tracking', icon: LayoutDashboard },
    { name: 'Career Pathways', icon: Crown },
];



const FEATURE_CARDS = [
    {
        number: '01',
        title: 'Identity & Profile',
        description: 'Build a comprehensive professional profile that goes beyond a resume. Showcase your skills, projects, and achievements.',
        icon: GraduationCap,
    },
    {
        number: '02',
        title: 'Recruitment Suite',
        description: 'Powerful filtering and AI-driven matching to identify the perfect candidates for your specific job requirements instantly.',
        icon: Building2,
    },
    {
        number: '03',
        title: 'Analytics Dashboard',
        description: 'Real-time insights into placement trends, salary statistics, and recruitment funnel performance.',
        icon: LayoutDashboard,
    },
];

const FOUNDING_STATS = [
    { value: '1', label: 'Unified Mission', description: 'Bridge the gap between talent and opportunity — everything we build serves this.' },
    { value: '2026', label: 'Year Founded', description: 'A fresh start with a bold, placement-first vision built for today\'s hiring landscape.' },
    { value: '100%', label: 'Committed', description: 'Every session, and feature exists solely to get you placed.' },
];

const WHY_US_POINTS = [
    {
        title: 'Verified Student Profiles',
        description: 'Showcase skills, achievements, projects, certifications, and experiences in a structured profile trusted by recruiters.',
    },
    {
        title: 'Direct Recruiter Access',
        description: 'Connect students with recruiters and opportunities through a unified platform designed to improve visibility and hiring efficiency.',
    },
    {
        title: 'Alumni & Professional Networks',
        description: 'Build meaningful connections with alumni and industry professionals who can open doors to opportunities and career growth.',
    },
];

const COMMITMENTS = [
    {
        name: 'Our Placement Promise',
        role: 'The standard we hold ourselves to — from day one',
        quote: 'We don\'t just prepare you and wish you luck. We stay engaged until you have an offer in hand.',
    },
    {
        name: 'Our Responsibility',
        role: 'What you must expect from us',
        quote: 'We prioritize user privacy, communicate clearly, and design experiences centered on people.',
    },
    {
        name: 'Our Principle',
        role: 'How everything is built',
        quote: 'We pursue practical innovation that improves people\'s lives and delivers measurable impact.',
    },
    {
        name: 'Our Honesty Pledge',
        role: 'What you can always expect from us',
        quote: 'We will tell you the truth about where you stand, what needs work, and what opportunities look like for your profile.',
    },

];

const PARTNERS = [
    'Software Engineering',
    'Data Science',
    'Product Management',
    'UI/UX Design',
    'DevOps',
    'Cloud Computing',
    'Full Stack Dev',
    'Machine Learning',
    'Business Analysis',
    'QA Engineering',
    'Cybersecurity',
    'FinTech',
];

const TERMS = [
    {
        title: 'Eligibility & Access',
        body: 'Aarambh is intended for students, alumni, recruiters, and authorized institutional staff. Access requires valid authentication and role-based approval where applicable.',
    },
    {
        title: 'Acceptable Use',
        body: 'Users must provide accurate information, use the platform only for placement-related activity, and avoid credential sharing, automation abuse, or unauthorized access.',
    },
    {
        title: 'Privacy & Security',
        body: 'Personal and placement data is stored securely and protected through access controls, encryption in transit, and role-based visibility. We do not sell user data.',
    },
    {
        title: 'Applications & Deadlines',
        body: 'Users must follow posting deadlines and submission rules. False, incomplete, or misleading information may lead to suspension from placement activity.',
    },
    {
        title: 'Ownership & IP',
        body: 'Aarambh, its code, design, branding, and infrastructure remain the property of the platform owner. Institutional branding remains the property of the respective institution.',
    },
    {
        title: 'Disclaimer',
        body: 'Placement information is provided for guidance only and does not guarantee outcomes. Continued use after policy updates means you accept the revised terms.',
    },
];

export function LandingPage() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [loginInitialType, setLoginInitialType] = useState<'student' | 'alumni' | 'rep' | 'admin' | undefined>(undefined);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const isDarkMode = resolvedTheme === 'dark';

    const toggleTheme = () => {
        setTheme(isDarkMode ? 'light' : 'dark')
        console.log('Toggled theme to', isDarkMode ? 'light' : 'dark');
    };

    useEffect(() => {
        const previousBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.documentElement.style.scrollBehavior = previousBehavior;
        };
    }, []);



    return (
        <div
            style={{
                '--landing-accent': isDarkMode ? '#22d3ee' : '#2563eb',
                '--landing-accent-strong': isDarkMode ? '#0891b2' : '#1d4ed8',
                '--landing-soft': isDarkMode ? 'rgba(8,145,178,0.12)' : '#eff6ff',
            } as CSSProperties}
            className={`relative min-h-screen font-sans transition-colors duration-500 ${isDarkMode ? 'bg-[#06080f] text-white selection:bg-cyan-500/30' : 'bg-slate-100 text-slate-950 selection:bg-blue-100'}`}
        >
            <Navbar
                onLoginClick={() => {
                    setLoginInitialType(undefined);
                    setIsLoginOpen(true);
                }}
                isDarkMode={isDarkMode}
            />

            <Hero isDarkMode={isDarkMode} onExploreClick={() => { setLoginInitialType(undefined); setIsLoginOpen(true); }} />
            <StatsSection isDarkMode={isDarkMode} />
            <FeaturesSection isDarkMode={isDarkMode} />
            <ServicesSection isDarkMode={isDarkMode} />
            <AboutSection isDarkMode={isDarkMode} />
            <TestimonialsSection isDarkMode={isDarkMode} />
            <PartnersSection isDarkMode={isDarkMode} />
            <TermsSection isDarkMode={isDarkMode} />
            <ContactSection isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} onOpenSupport={() => setIsContactOpen(true)} onOpenPrivacy={() => setIsPrivacyOpen(true)} />

            <button
                onClick={toggleTheme}
                className={`fixed bottom-6 left-6 z-50 grid h-12 w-12 place-items-center rounded-lg border shadow-xl transition hover:-translate-y-0.5 active:scale-95 ${isDarkMode ? 'border-white/10 bg-white/10 text-yellow-300' : 'border-blue-100 bg-white text-slate-800'}`}
                aria-label="Toggle Theme"
            >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* <AuthModal
                isOpen={isLoginOpen}
                onClose={() => {
                    setIsLoginOpen(false);
                    setLoginInitialType(undefined);
                }}
                onSuccess={handleAuthSuccess}
                initialUserType={loginInitialType}
                portalMode="student"
            /> */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        </div>
    );
}

function Navbar({ onLoginClick, isDarkMode }: { onLoginClick: () => void; isDarkMode: boolean }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <nav className={`fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-300 sm:px-6 ${scrolled ? (isDarkMode ? 'border-b border-white/10 bg-[#06080f]/86 backdrop-blur-xl' : 'border-b border-blue-100 bg-white/86 backdrop-blur-xl') : 'bg-transparent'}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <a href="#" className="flex items-center gap-3" aria-label="Aarambh home">
                    <AnimatedLogoMark size="sm" role="landing" />
                    <div className="flex flex-col leading-none">
                        <span className="text-sm font-black uppercase tracking-[0.22em]">Aarambh</span>
                        <span className="mt-0.5 font-Cinzel	 text-[8px] font-normal tracking-[0.28em] opacity-55">By Ascendio Global</span>
                    </div>
                </a>

                <div className={`hidden items-center gap-7 text-sm font-semibold md:flex ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {['Features', 'Services', 'About'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className={`group relative transition ${isDarkMode ? 'hover:text-white' : 'hover:text-blue-700'}`}>
                            {item}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-500 transition-all group-hover:w-full" />
                        </a>
                    ))}
                    {/* Admin link removed per design request */}
                </div>

                <button
                    type="button"
                    onClick={() => setMobileMenuOpen((open) => !open)}
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 transition active:scale-95 md:hidden ${isDarkMode ? 'border-white/10 bg-white/5 text-white ring-white/10' : 'border-black/10 bg-white text-slate-900 ring-black/10'}`}
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <Target className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                {/* <button
                    onClick={onLoginClick}
                    className={`group hidden h-11 items-center gap-2 rounded-lg px-4 text-m font-bold transition active:scale-95 md:inline-flex ${isDarkMode ? '  hover:text-white ring-1 ring-white/10 ' : ' text-black ring-1 ring-black/10 '}`}
                >
                    Log In
                    <LogIn className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button> */}
                <Link
                    href="#contact"
                    className={`group hidden h-11 items-center gap-2 rounded-lg px-4 text-m font-bold transition active:scale-95 md:inline-flex ${isDarkMode ? '  hover:text-white ring-1 ring-white/10 ' : ' text-black ring-1 ring-black/10 '}`}
                >
                    Contact Us
                </Link>
            </div>

            <AnimatePresence>
                {mobileMenuOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border p-4 shadow-2xl md:hidden ${isDarkMode ? 'border-white/10 bg-[#090a0f]/96 text-white' : 'border-blue-100 bg-white/96 text-slate-900'}`}
                    >
                        <div className="grid gap-2">
                            {['Features', 'Services', 'About'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={closeMobileMenu}
                                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-100'}`}
                                >
                                    {item}
                                </a>
                            ))}
                            <Link
                                href="#contact"
                                onClick={closeMobileMenu}
                                className={`mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-bold transition ${isDarkMode ? 'bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/20' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </nav>
    );
}

function Hero({ isDarkMode, onExploreClick }: { isDarkMode: boolean; onExploreClick?: () => void }) {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 });
    const headlineY = useTransform(smoothProgress, [0, 1], [0, -72]);
    const headlineOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0.58]);
    const boardY = useTransform(smoothProgress, [0, 1], [0, 120]);
    const boardScale = useTransform(smoothProgress, [0, 1], [1, 0.9]);
    const redPanelX = useTransform(smoothProgress, [0, 1], ['8%', '-10%']);
    const gridY = useTransform(smoothProgress, [0, 1], [0, 42]);

    return (
        <section ref={heroRef} className={`relative min-h-screen overflow-hidden border-b pt-24 ${isDarkMode ? 'border-white/10 bg-[#08090b]' : 'border-black/10 bg-[#f7f7f4]'}`}>
            <div className={`absolute inset-0 ${isDarkMode ? 'opacity-25' : 'opacity-70'} bg-[linear-gradient(90deg,transparent_0,transparent_31px,rgba(120,120,120,0.10)_32px),linear-gradient(180deg,transparent_0,transparent_31px,rgba(120,120,120,0.10)_32px)] bg-size-[32px_32px]`} />
            <motion.div
                className="absolute right-0 top-0 h-full w-[34vw] bg-(--landing-accent)/15"
                style={{ x: redPanelX }}
                animate={{ opacity: [0.72, 1, 0.72] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className={`absolute left-0 top-[14%] h-28 w-[42vw] ${isDarkMode ? 'bg-cyan-400/8' : 'bg-cyan-300/18'}`}
                style={{ y: gridY }}
            />

            <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-start gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_1.1fr] xl:gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ y: headlineY, opacity: headlineOpacity }}
                    className="z-10 max-w-4xl"
                >


                    <h1 className="max-w-4xl text-[clamp(2.8rem,6.4vw,6.4rem)] font-black uppercase leading-[0.88] tracking-normal xl:text-[clamp(3rem,5.8vw,6.8rem)]">
                        Build Careers
                        <span className="block text-(--landing-accent)">With Legendary</span>
                        <span className="block">Placement Outcomes</span>
                    </h1>

                    <p className={`mt-7 max-w-xl border-l-4 border-(--landing-accent) pl-5 text-base leading-7 sm:text-lg ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        Bringing together talent, opportunities, and industry connections in one platform.
                    </p>


                    {/* <div className="mt-8">
                        <button onClick={() => { onExploreClick && onExploreClick(); }} className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-(--landing-accent) px-6 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(8,145,178,0.25)] transition hover:-translate-y-0.5 hover:bg-(--landing-accent-strong) active:scale-95">
                            Explore Opportunities
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </button>
                    </div> */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    style={{ y: boardY, scale: boardScale }}
                    className="relative z-10 mx-auto w-full max-w-xl self-start lg:max-w-2xl lg:justify-self-end"
                >
                    <HeroMotionBoard isDarkMode={isDarkMode} />
                </motion.div>
            </div>
        </section>
    );
}

function HeroMotionBoard({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <div className={`relative overflow-hidden border p-4 shadow-2xl lg:p-5 ${isDarkMode ? 'border-white/10 bg-[#111318]' : 'border-black/10 bg-white'}`}>
            <div className={`absolute inset-x-3 top-3 h-24 ${isDarkMode ? 'bg-(--landing-accent)/20' : 'bg-(--landing-accent)/12'}`} />
            <motion.div
                className="absolute left-1/2 top-8 z-20 h-32 w-px bg-zinc-400"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="  border-zinc-400 bg-white shadow-sm"
                animate={{ y: [0, 14, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative grid gap-4 sm:grid-cols-[1fr_0.98fr]">
                <div className="min-h-107.5 overflow-hidden border border-current/10 bg-[#f1f1ed] p-5 text-[#111111] dark:bg-[#f3f4f6] lg:min-h-117.5">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="h-5 w-5 bg-(--landing-accent)" />
                            <span className="max-w-32 text-[10px] font-black uppercase leading-4 tracking-[0.24em] lg:max-w-none lg:text-xs">Trusted by Industry Leaders</span>
                        </div>
                        <span className="rounded-lg bg-[#111111] px-3 py-2 text-xs font-bold text-white">ACTIVE</span>
                    </div>

                    <div className="relative min-h-77.5">
                        <motion.div
                            className="absolute bottom-10 left-1/2 h-40 w-[88%] -translate-x-1/2 skew-x-[-8deg] bg-(--landing-accent) shadow-[20px_24px_0_rgba(17,17,17,0.12)]"
                            animate={{ x: ['-54%', '-50%', '-54%'], y: [0, -10, 0] }}
                            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="absolute bottom-16 left-[0.7%] z-10 text-[2.55rem] font-black leading-[0.9] lg:text-[3.3rem]"
                            style={{ color: '#000' }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <span className="inline-block" style={{ color: '#000' }}>
                                Build Careers
                            </span>
                        </motion.div>
                        <motion.div
                            className="absolute bottom-16 right-[10%] z-10 flex gap-2 lg:right-[12%]"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
                        >

                        </motion.div>
                        <motion.div
                            className="absolute left-4 top-18 max-w-28 text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-zinc-500"
                            animate={{ opacity: [0.55, 1, 0.55], x: [0, 8, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            Opportunities
                        </motion.div>
                        <motion.div
                            className="absolute right-4 top-24 max-w-24 text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-zinc-500"
                            animate={{ opacity: [1, 0.55, 1], x: [0, -8, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            Recruiter matching
                        </motion.div>
                    </div>
                </div>

                <div className={`grid gap-3 ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>
                    <div className={`border p-5 ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-[#fafafa]'}`}>
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-xs font-black uppercase tracking-[0.22em]">Placement Focus</span>
                            <Target className="h-5 w-5 text-(--landing-accent)" />
                        </div>

                        <div className="mb-4 flex items-end justify-between">
                            <div>
                                <div className="text-4xl font-black lg:text-[3.4rem]">100%</div>
                                <div className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Dedicated</div>
                            </div>
                            <div className="rounded-lg bg-(--landing-accent) px-3 py-1 text-xs font-black text-white">LIVE</div>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex justify-between text-sm">
                                <span className={isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}>Platform Readiness</span>
                                <span className="font-bold">100%</span>
                            </div>
                            <div className={`h-2 overflow-hidden rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-zinc-200'}`}>
                                <motion.div
                                    className="h-full rounded-full bg-(--landing-accent)"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.4, delay: 0.35, ease: 'easeOut' }}
                                />
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-3 border-t border-current/10 pt-4 text-center">
                            <HeroStatItem value="2026" label="Founded" isDarkMode={isDarkMode} />
                            <HeroStatItem value="1:1" label="Assistance" isDarkMode={isDarkMode} />
                            <HeroStatItem value="24/7" label="Support" isDarkMode={isDarkMode} />
                        </div>
                    </div>

                    <div className={`overflow-hidden border py-4 ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-[#fafafa]'}`}>
                        <InfiniteSlider speedOnHover={20} speed={35} gap={76}>
                            {[...HERO_CLIENTS, ...HERO_CLIENTS].map((client, index) => (
                                <div key={`${client.name}-${index}`} className="flex items-center gap-2">
                                    <client.icon className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-[#111111]'}`} />
                                    <span className="text-sm font-black tracking-wide">{client.name}</span>
                                </div>
                            ))}
                        </InfiniteSlider>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeroStatItem({ value, label, isDarkMode }: { value: string; label: string; isDarkMode: boolean }) {
    return (
        <div className="flex cursor-default flex-col items-center justify-center">
            <span className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>{value}</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>{label}</span>
        </div>
    );
}

function StatsSection({ isDarkMode }: { isDarkMode: boolean }) {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
    const railScale = useTransform(smoothProgress, [0.05, 0.85], [0, 1]);
    const panelY = useTransform(smoothProgress, [0, 1], [64, -36]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsInView(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={`relative overflow-hidden border-b px-4 py-24 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#0d0e11]' : 'border-black/10 bg-white'}`}>
            <motion.div
                className="absolute left-0 top-0 h-full w-2 origin-top bg-(--landing-accent)"
                style={{ scaleY: railScale }}
            />
            <motion.div
                className={`absolute right-[6%] top-20 hidden h-36 w-36 lg:block ${isDarkMode ? 'bg-cyan-400/10' : 'bg-cyan-300/25'}`}
                style={{ y: panelY, rotate: -8 }}
            />
            <div className="relative mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Who We Are"
                    title="Built Different. Built for You."
                    copy="We started in 2026 with a single objective — get every student placed and trained successfully."
                    isDarkMode={isDarkMode}
                />

                {/* Founding story stats */}
                <motion.div
                    className="mt-12 grid grid-cols-1 border border-current/10 sm:grid-cols-3"
                    style={{ y: panelY }}
                >
                    {FOUNDING_STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 28 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            className="border-b border-r border-current/10 p-6 last:border-r-0 sm:min-h-52 lg:border-b-0"
                        >
                            <div className="mb-6 h-2 w-12 bg-(--landing-accent)" />
                            <div className="text-5xl font-black text-(--landing-accent) md:text-6xl">
                                {stat.value}
                            </div>
                            <p className={`mt-2 text-sm font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                {stat.label}
                            </p>
                            <p className={`mt-3 text-sm leading-relaxed ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Why Us differentiators */}
                <div className="mt-16">
                    <p className={`mb-8 text-center text-xs font-black uppercase tracking-[0.22em] text-(--landing-accent)`}>
                        Why Choose Us
                    </p>
                    <div className="grid grid-cols-1 gap-px border border-current/10 md:grid-cols-3">
                        {WHY_US_POINTS.map((point, index) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                                className={`p-8 ${isDarkMode ? 'bg-white/3' : 'bg-zinc-50/60'}`}
                            >
                                <div className="mb-4 h-2 w-8 bg-(--landing-accent)" />
                                <h3 className={`mb-3 text-base font-black uppercase tracking-wide ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                                    {point.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                    {point.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturesSection({ isDarkMode }: { isDarkMode: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 75, damping: 22, mass: 0.45 });
    const headingY = useTransform(smoothProgress, [0, 0.45, 1], [80, 0, -80]);

    return (
        <section ref={sectionRef} id="features" className={`relative border-b px-4 py-28 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#08090b]' : 'border-black/10 bg-[#f7f7f4]'}`}>
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                <motion.div style={{ y: headingY }} className="lg:sticky lg:top-28 lg:h-fit">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-(--landing-accent)">Core Capabilities</p>
                    <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] md:text-6xl">
                        Seamless
                        <br />
                        Recruitment
                    </h2>
                    <p className={`mt-6 max-w-md text-lg leading-8 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Our advanced tools help you manage every stage of the hiring pipeline, from initial application to final offer letter.
                    </p>
                    <div className="mt-8 h-1 w-20 bg-(--landing-accent)" />
                </motion.div>

                <div className="relative space-y-10 lg:px-6 lg:pb-0">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 100 360"
                        preserveAspectRatio="none"
                        className="pointer-events-none absolute inset-y-0 left-0 hidden w-full text-(--landing-accent)/70 lg:block"
                    >
                        <line x1="8" y1="0" x2="8" y2="155" stroke="currentColor" strokeWidth="0.4" opacity="0.42" />
                        <line x1="92" y1="0" x2="92" y2="155" stroke="currentColor" strokeWidth="0.4" opacity="0.42" />
                    </svg>
                    {FEATURE_CARDS.map((feature, index) => (
                        <FeatureCard key={feature.title} {...feature} index={index} isDarkMode={isDarkMode} sectionProgress={smoothProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ number, title, description, icon: Icon, index, isDarkMode, sectionProgress }: { number: string; title: string; description: string; icon: ElementType; index: number; isDarkMode: boolean; sectionProgress: MotionValue<number> }) {
    const start = 0.12 + index * 0.18;
    const end = start + 0.34;
    const y = useTransform(sectionProgress, [start, end], [88 - index * 18, -34 - index * 16]);
    const scale = useTransform(sectionProgress, [start, end], [0.96, 1]);
    const redX = useTransform(sectionProgress, [start, end], ['100%', index === 0 ? '18%' : '58%']);

    return (
        <motion.article
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            style={{ y, scale, top: 112 + index * 28 }}
            className={`sticky min-h-86 overflow-hidden border p-7 shadow-2xl md:p-9 ${index === 0 ? 'bg-[#111111] text-white' : isDarkMode ? 'border-white/10 bg-white/8 text-white backdrop-blur-xl' : 'border-black/10 bg-white text-[#111111]'}`}
        >
            <motion.div
                className="absolute right-0 top-0 h-full w-32 bg-(--landing-accent)"
                initial={{ x: '100%' }}
                style={{ x: redX }}
            />
            <motion.div
                className={`absolute left-0 top-0 h-full w-20 ${isDarkMode ? 'bg-cyan-400/10' : 'bg-cyan-200/40'}`}
                animate={{ y: ['-20%', '12%', '-20%'] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative z-10 flex h-full min-h-64 flex-col justify-between">
                <div className="flex items-start justify-between">
                    <span className="font-mono text-5xl font-black opacity-30">{number}</span>
                    <div className={`grid h-14 w-14 place-items-center rounded-lg border ${index === 0 ? 'border-white/15 bg-white/10' : isDarkMode ? 'border-white/10 bg-black/20' : 'border-black/10 bg-[#f7f7f4]'}`}>
                        <Icon className="h-7 w-7" />
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-black md:text-5xl">{title}</h3>
                    <p className={`mt-5 max-w-xl text-lg leading-8 ${index === 0 ? 'text-white/70' : isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{description}</p>
                </div>
            </div>
        </motion.article>
    );
}

function TestimonialsSection({ isDarkMode }: { isDarkMode: boolean }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.4 });
    const cardY = useTransform(smoothProgress, [0, 0.5, 1], [70, 0, -70]);
    const redX = useTransform(smoothProgress, [0, 1], ['-24%', '18%']);
    const quoteScale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1, 0.97]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % COMMITMENTS.length);
        }, 5000);
        return () => window.clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className={`relative overflow-hidden border-b px-4 py-24 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#0d0e11]' : 'border-black/10 bg-white'}`}>
            <motion.div
                className={`absolute right-0 top-20 hidden h-44 w-[30vw] lg:block ${isDarkMode ? 'bg-cyan-400/8' : 'bg-cyan-300/25'}`}
                style={{ y: cardY }}
            />
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <SectionHeader
                    eyebrow="Our Commitments"
                    title="What We Stand For"
                    copy="Not testimonials — promises. This is how we operate, from day one."
                    isDarkMode={isDarkMode}
                    align="left"
                />

                <motion.div style={{ y: cardY, scale: quoteScale }} className={`relative min-h-96 overflow-hidden border ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-[#f7f7f4]'}`}>
                    <motion.div
                        className="absolute left-0 top-0 h-full w-36 bg-(--landing-accent)"
                        style={{ x: redX }}
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -80 }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 overflow-hidden"
                        >
                            <p className="relative z-10 max-w-3xl text-2xl font-black leading-snug md:text-4xl wrap-break-word">
                                "{COMMITMENTS[activeIndex].quote}"
                            </p>
                            <div className="relative z-10">
                                <p className="text-lg font-black">{COMMITMENTS[activeIndex].name}</p>
                                <p className={`text-sm font-semibold ${isDarkMode ? 'text-zinc-100' : 'text-black'}`}>{COMMITMENTS[activeIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                        {COMMITMENTS.map((testimonial, index) => (
                            <button
                                key={testimonial.name}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show ${testimonial.name}`}
                                className={`h-2.5 transition-all ${index === activeIndex ? 'w-10 bg-(--landing-accent)' : isDarkMode ? 'w-2.5 bg-white/25' : 'w-2.5 bg-black/20'}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function PartnersSection({ isDarkMode }: { isDarkMode: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.42 });
    const titleX = useTransform(smoothProgress, [0, 0.7], [-48, 0]);
    const stripY = useTransform(smoothProgress, [0, 1], [56, -26]);

    return (
        <section ref={sectionRef} className={`relative overflow-hidden border-b px-4 py-20 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#08090b]' : 'border-black/10 bg-[#f7f7f4]'}`}>
            <div className="mx-auto max-w-7xl">
                <motion.div className="mb-8" style={{ x: titleX }}>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-(--landing-accent)">Domains We Cover</p>
                    <h2 className="mt-3 text-3xl font-black uppercase leading-none md:text-5xl">We Place You Across Industries</h2>
                    <p className={`mt-4 text-lg ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>From core tech to emerging fields — we prepare and place you where you belong</p>
                </motion.div>

                <motion.div style={{ y: stripY }} className={`border py-5 ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white'}`}>
                    <InfiniteSlider speed={34} speedOnHover={18} gap={72}>
                        {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                            <div key={`${partner}-${index}`} className="flex items-center gap-3">
                                <span className="h-3 w-3 bg-(--landing-accent)" />
                                <span className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>{partner}</span>
                            </div>
                        ))}
                    </InfiniteSlider>
                </motion.div>
            </div>
        </section>
    );
}

function TermsSection({ isDarkMode }: { isDarkMode: boolean }) {
    const [scrollTop, setScrollTop] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sidebarListRef = useRef<HTMLDivElement>(null);

    const policyCards = [
        ...TERMS,
        {
            title: 'Privacy',
            body: 'We collect only the information needed for placement operations, communication, and analytics. Data is used to support student profiles, recruiter workflows, and institution-level reporting.',
            id: 'privacy',
        },
        {
            title: 'Support',
            body: 'Report security issues, bugs, or access problems to the platform administrator. Users should keep their contact details current for important updates and verification.',
            id: 'support',
        },
    ];

    const cardSpacing = 356; // Calculated card height + gap - sticky overlap offset

    const activeCardIndex = Math.min(
        policyCards.length - 1,
        Math.max(0, Math.floor((scrollTop + cardSpacing / 2) / cardSpacing))
    );

    useEffect(() => {
        if (!sidebarListRef.current) return;
        const container = sidebarListRef.current;
        const activeItem = container.children[activeCardIndex] as HTMLElement;
        if (activeItem) {
            const containerHeight = container.clientHeight;
            const itemHeight = activeItem.clientHeight;
            const itemTop = activeItem.offsetTop;
            const targetScrollTop = itemTop - (containerHeight / 2) + (itemHeight / 2);
            container.scrollTo({
                top: Math.max(0, targetScrollTop),
                behavior: 'smooth',
            });
        }
    }, [activeCardIndex]);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        setScrollTop(scrollContainerRef.current.scrollTop);
    };

    const scrollToCard = (index: number) => {
        if (!scrollContainerRef.current) return;
        scrollContainerRef.current.scrollTo({
            top: index * cardSpacing,
            behavior: 'smooth',
        });
    };

    const getCardOpacity = (index: number) => {
        const fadeWindow = cardSpacing * 0.18;

        if (index === 0) {
            const progress = scrollTop / fadeWindow;
            return Math.max(0, Math.min(1, 1 - progress));
        }
        if (index === policyCards.length - 1) {
            if (scrollTop >= index * cardSpacing) return 1;
        }
        if (scrollTop < (index - 1) * cardSpacing) return 0;
        if (scrollTop < index * cardSpacing) {
            const progress = (scrollTop - (index - 1) * cardSpacing) / fadeWindow;
            return Math.max(0, Math.min(1, progress));
        }
        const progress = (scrollTop - index * cardSpacing) / fadeWindow;
        return Math.max(0, Math.min(1, 1 - progress));
    };

    const getCardScale = (index: number) => {
        const opacity = getCardOpacity(index);
        return 0.95 + opacity * 0.05;
    };

    const getCardRotate = (index: number, total: number) => {
        const baseRotate = (index - (total - 1) / 2) * 0.55;
        const opacity = getCardOpacity(index);
        const wobble = (index % 2 === 0 ? -1.5 : 1.5) * (1 - opacity);
        return baseRotate + wobble;
    };

    return (
        <section id="terms" className={`relative min-h-screen overflow-visible px-4 py-24 sm:px-6 ${isDarkMode ? 'bg-[#0d0e11]' : 'bg-white'}`}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
            <div
                className="absolute left-0 top-24 bottom-24 w-1 origin-top bg-(--landing-accent) transition-transform duration-300"
                style={{ transform: `scaleY(${(activeCardIndex + 1) / policyCards.length})` }}
            />
            <div className="mx-auto grid max-w-7xl gap-10 py-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                <div className="lg:h-fit lg:sticky lg:top-28">
                    <SectionHeader
                        eyebrow="Legal"
                        title="Aarambh Terms & Conditions"
                        copy="Last updated: May 2026. These terms apply to all users of Aarambh and define how the platform, data, and placement workflows should be used."
                        isDarkMode={isDarkMode}
                        align="left"
                    />
                    <div className={`mt-8 overflow-hidden border ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-blue-100 bg-blue-50'}`}>
                        <div className="bg-(--landing-accent) px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white">
                            Policy Stack
                        </div>
                        <div
                            ref={sidebarListRef}
                            className="relative flex h-60 flex-col gap-2 overflow-y-auto scroll-smooth p-4 no-scrollbar"
                        >
                            {policyCards.map((card, index) => {
                                const isActive = activeCardIndex === index;
                                return (
                                    <button
                                        key={card.title}
                                        onClick={() => scrollToCard(index)}
                                        className={`flex items-center gap-4 shrink-0 rounded-xl p-3 text-sm font-bold text-left transition-all duration-300 ${isActive
                                            ? isDarkMode
                                                ? 'bg-cyan-500/15 border-l-4 border-cyan-400 text-white pl-4'
                                                : 'bg-blue-50 border-l-4 border-blue-600 text-blue-700 pl-4'
                                            : isDarkMode
                                                ? 'hover:bg-white/5 border-l-4 border-transparent text-zinc-400 hover:text-zinc-200 pl-2'
                                                : 'hover:bg-slate-50 border-l-4 border-transparent text-slate-600 hover:text-slate-900 pl-2'
                                            }`}
                                    >
                                        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-black transition-colors duration-300 ${isActive
                                            ? 'bg-(--landing-accent) text-white'
                                            : isDarkMode
                                                ? 'bg-zinc-800 text-zinc-400'
                                                : 'bg-slate-200 text-slate-600'
                                            }`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="transition-colors duration-300">{card.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="relative h-152 overflow-y-auto scroll-smooth no-scrollbar"
                >
                    <div className="relative flex flex-col gap-6 pb-29">
                        {policyCards.map((section, index) => {
                            const opacity = getCardOpacity(index);
                            const scale = getCardScale(index);
                            const rotate = getCardRotate(index, policyCards.length);
                            return (
                                <PolicyStackCard
                                    key={section.title}
                                    id={'id' in section ? section.id : undefined}
                                    index={index}
                                    title={section.title}
                                    body={section.body}
                                    isDarkMode={isDarkMode}
                                    total={policyCards.length}
                                    opacity={opacity}
                                    scale={scale}
                                    rotate={rotate}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PolicyStackCard({
    id,
    index,
    title,
    body,
    isDarkMode,
    total,
    opacity,
    scale,
    rotate
}: {
    id?: string;
    index: number;
    title: string;
    body: string;
    isDarkMode: boolean;
    total: number;
    opacity: number;
    scale: number;
    rotate: number;
}) {
    return (
        <motion.article
            id={`policy-card-${index}`}
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            style={{
                position: 'sticky',
                top: `${index * 20}px`,
                zIndex: 10 + index,
                opacity: opacity,
                scale: scale,
                rotate: rotate,
            }}
            className={`w-full min-h-88 overflow-hidden rounded-2xl border p-7 shadow-2xl transition-all duration-300 ease-out origin-center md:p-9 ${index === 0
                ? 'bg-(--landing-accent) text-white'
                : isDarkMode
                    ? 'border-white/10 bg-[#101624]/95 text-white backdrop-blur-xl'
                    : 'border-blue-100 bg-white text-slate-950'
                }`}
        >
            {index !== 0 && (
                <div
                    className="absolute right-0 top-0 h-full w-40 pointer-events-none bg-(--landing-soft) opacity-40"
                    style={{ transform: 'translateX(10%) skewX(-12deg)' }}
                />
            )}
            <div className="relative z-10 flex min-h-72 flex-col justify-between">
                <div className="flex items-start justify-between gap-6">
                    <span className={`font-mono text-6xl font-black ${index === 0 ? 'text-white/45' : isDarkMode ? 'text-cyan-300/35' : 'text-blue-200'}`}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className={`rounded-lg border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${index === 0 ? 'border-white/25 bg-white/10 text-white' : isDarkMode ? 'border-cyan-300/20 bg-cyan-300/10 text-cyan-200' : 'border-blue-200 bg-blue-50 text-blue-700'}`}>
                        {index + 1} / {total}
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-black md:text-5xl">{title}</h3>
                    <p className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${index === 0 ? 'text-white/80' : isDarkMode ? 'text-zinc-300' : 'text-slate-600'}`}>{body}</p>
                </div>
            </div>
        </motion.article>
    );
}

function SectionHeader({ eyebrow, title, copy, isDarkMode, align = 'center' }: { eyebrow: string; title: string; copy: string; isDarkMode: boolean; align?: 'left' | 'center' }) {
    return (
        <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-(--landing-accent)">{eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] md:text-6xl">{title}</h2>
            <p className={`mt-5 text-base leading-7 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{copy}</p>
        </div>
    );
}

function ContactSection({ isDarkMode }: { isDarkMode: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 75, damping: 22, mass: 0.45 });
    const railScale = useTransform(smoothProgress, [0.05, 0.85], [0, 1]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:ascendiollp@gmail.com?subject=${subject}&body=${body}`;
        setName(''); setEmail(''); setMessage('');
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section ref={sectionRef} id="contact" className={`relative overflow-hidden border-b px-4 py-24 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#0d0e11]' : 'border-black/10 bg-white'}`}>
            <motion.div
                className="absolute left-0 top-0 h-full w-2 origin-top bg-(--landing-accent)"
                style={{ scaleY: railScale }}
            />
            <div className="relative mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Get in Touch"
                    title="Contact Us"
                    copy="Have a question or want to get started? Reach out — we respond within 24 hours."
                    isDarkMode={isDarkMode}
                />

                <div className="mt-12 grid gap-px border border-current/10 md:grid-cols-2">
                    {/* Contact info */}
                    <div className={`p-8 ${isDarkMode ? 'bg-white/3' : 'bg-zinc-50/60'}`}>
                        <div className="mb-6 h-2 w-12 bg-(--landing-accent)" />
                        <h3 className={`mb-6 text-base font-black uppercase tracking-wide ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                            Reach Us Directly
                        </h3>
                        <div className={`space-y-5 text-sm ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            <div>
                                <p className={`mb-1 text-xs font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Location</p>
                                <p>Trivandrum, Kerala</p>
                            </div>
                            <div>
                                <p className={`mb-1 text-xs font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Email</p>
                                <Link href="mailto:ascendiollp@gmail.com" className="text-(--landing-accent) hover:underline">ascendiollp@gmail.com</Link>
                            </div>
                            <div>
                                <p className={`mb-1 text-xs font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Phone</p>
                                <Link href="tel:+918281891391" className="block hover:text-(--landing-accent)">+91 82818 91391</Link>
                                <Link href="tel:+918921519949" className="mt-1 block hover:text-(--landing-accent)">+91 89215 19949</Link>
                            </div>
                            {/* <div>
                                <p className={`mb-1 text-xs font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Response Time</p>
                                <p>Within 24 hours on business days</p>
                            </div> */}
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className={`p-8 ${isDarkMode ? 'bg-white/3' : 'bg-zinc-50/60'}`}>
                        <div className="mb-6 h-2 w-12 bg-(--landing-accent)" />
                        <h3 className={`mb-6 text-base font-black uppercase tracking-wide ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                            Send a Message
                        </h3>
                        {sent ? (
                            <div className={`flex h-48 items-center justify-center text-center ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                                <div>
                                    <div className="mb-2 text-2xl font-black text-(--landing-accent)">Sent!</div>
                                    <p className="text-sm">We'll get back to you soon.</p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your name"
                                    required
                                    className={`w-full border px-4 py-3 text-sm outline-none focus:border-(--landing-accent) ${isDarkMode ? 'border-white/10 bg-white/5 text-white placeholder:text-zinc-500' : 'border-black/10 bg-white text-zinc-900 placeholder:text-zinc-400'}`}
                                />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    type="email"
                                    required
                                    className={`w-full border px-4 py-3 text-sm outline-none focus:border-(--landing-accent) ${isDarkMode ? 'border-white/10 bg-white/5 text-white placeholder:text-zinc-500' : 'border-black/10 bg-white text-zinc-900 placeholder:text-zinc-400'}`}
                                />
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Your message"
                                    required
                                    rows={5}
                                    className={`w-full border px-4 py-3 text-sm outline-none focus:border-(--landing-accent) ${isDarkMode ? 'border-white/10 bg-white/5 text-white placeholder:text-zinc-500' : 'border-black/10 bg-white text-zinc-900 placeholder:text-zinc-400'}`}
                                />
                                <button
                                    type="submit"
                                    className="group inline-flex h-11 items-center gap-2 bg-(--landing-accent) px-6 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-(--landing-accent-strong) active:scale-95"
                                >
                                    Send Message
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer({ isDarkMode, onOpenSupport, onOpenPrivacy }: { isDarkMode: boolean; onOpenSupport?: () => void; onOpenPrivacy?: () => void }) {
    return (
        <section id="footer">
            <footer className={`border-t px-4 py-8 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#08090b] text-white' : 'border-black/10 bg-white text-slate-900'}`}>
                <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/0 rounded-lg p-1 shadow-sm">
                                <AnimatedLogoMark size="sm" role="landing" />
                            </div>
                            <div className="hidden sm:flex flex-col leading-none">
                                <span className="block text-sm font-black uppercase tracking-[0.22em]">Aarambh</span>
                                <span className="mt-0.5 font-Cinzel	 text-[8px] font-normal tracking-[0.28em] opacity-55">By Ascendio Global</span>
                            </div>
                        </div>
                        <div className="ml-2 text-sm text-slate-600">
                            {/* <div className="font-semibold text-slate-800">Aarambh Platform</div> */}
                            {/* <div className="mt-1">123 Innovation Drive</div> */}
                            <div>Trivandrum, Kerala</div>
                            <div className="mt-1">Phone: <Link href="tel:+918281891391">+91 82818 91391</Link></div>
                            <div className="mt-1">Phone: <Link href="tel:+918921519949">+91 89215 19949</Link></div>
                            <div>Email: <Link href="mailto:ascendiollp@gmail.com">ascendiollp@gmail.com</Link></div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 md:items-center">
                        <p className="text-sm text-slate-500">© 2026 Aarambh by Ascendio LLP. All rights reserved.</p>

                        <div className="flex gap-2">
                            <Link href="https://linkedin.com/company/aarambhofficial" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                className={`grid h-9 w-9 place-items-center rounded-lg border transition hover:border-(--landing-accent) hover:text-(--landing-accent) ${isDarkMode ? 'border-white/10 text-zinc-400' : 'border-black/10 text-zinc-500'}`}>
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </Link>
                            <Link href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X"
                                className={` hidden grid h-9 w-9 place-items-center rounded-lg border transition hover:border-(--landing-accent) hover:text-(--landing-accent) ${isDarkMode ? 'border-white/10 text-zinc-400' : 'border-black/10 text-zinc-500'}`}>
                                <X className="h-4 w-4" />
                            </Link>
                            <Link href="https://instagram.com/ascendio_global" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                                className={`grid h-9 w-9 place-items-center rounded-lg border transition hover:border-(--landing-accent) hover:text-(--landing-accent) ${isDarkMode ? 'border-white/10 text-zinc-400' : 'border-black/10 text-zinc-500'}`}>
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="flex gap-6 text-sm font-semibold text-slate-700">
                        <button onClick={(e) => { e.preventDefault(); onOpenPrivacy && onOpenPrivacy(); }} className="transition hover:text-(--landing-accent)">Privacy</button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('terms')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="transition hover:text-(--landing-accent)"
                        >
                            Terms
                        </button>
                        <button onClick={(e) => { e.preventDefault(); onOpenSupport && onOpenSupport(); }} className="transition hover:text-(--landing-accent)">Support</button>
                    </div>
                </div>
            </footer>
        </section>
    );
}

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => nameRef.current?.focus(), 50);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            // TODO: wire to real API endpoint. For now just simulate success.
            await new Promise((r) => setTimeout(r, 700));
            setName(''); setEmail(''); setMessage('');
            onClose();
            // Optionally show toast
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative z-70 w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
                <h3 className="text-lg font-bold">Contact Us</h3>
                <p className="mt-2 text-sm text-slate-600">Send us a message and we'll get back to you soon.</p>
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <input ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full rounded border px-3 py-2" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" type="email" required className="w-full rounded border px-3 py-2" />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required className="w-full rounded border px-3 py-2 h-28" />
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="rounded px-4 py-2">Cancel</button>
                        <button type="submit" disabled={submitting} className="rounded bg-(--landing-accent) px-4 py-2 text-white">{submitting ? 'Sending...' : 'Send'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function PrivacyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative z-70 w-full max-w-2xl rounded-lg bg-white p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Privacy & Terms</h3>
                    <button onClick={onClose} className="text-sm text-slate-500">Close</button>
                </div>

                <div className="mt-4 max-h-[60vh] overflow-y-auto text-sm leading-6 text-slate-700">
                    <h4 className="font-semibold">Privacy Policy</h4>
                    <p className="mt-2">We collect and use personal data to provide and improve our services. By using Aarambh, you consent to the collection and processing described in this policy.</p>

                    <h4 className="mt-4 font-semibold">Terms & Conditions</h4>
                    <p className="mt-2">Use of the platform is subject to the following terms: you agree to provide accurate information, respect other users, and follow all applicable laws. Aarambh is not responsible for placement guarantees.</p>

                    <h4 className="mt-4 font-semibold">Contact</h4>
                    <p className="mt-2">If you have questions, please contact us at <Link href="mailto:ascendiollp@gmail.com">ascendiollp@gmail.com</Link>.</p>
                </div>
            </div>
        </div>
    );
}
