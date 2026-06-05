'use client'
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ElementType, FormEvent } from 'react';
import {
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    Briefcase,
    Building2,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    Compass,
    Copy,
    Eye,
    GraduationCap,
    LayoutDashboard,
    Lock,
    LogIn,
    Mail,
    MapPin,
    Menu,
    Moon,
    Network,
    Pencil,
    Phone,
    PieChart,
    Send,
    ShieldCheck,
    Sparkles,
    Star,
    Sun,
    Tag,
    Target,
    TrendingUp,
    User,
    Users,
    X,
    Zap,
} from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'motion/react';
import type { MotionValue } from 'motion/react';
import { useTheme } from 'next-themes';
import AnimatedLogoMark from '@/app/AnimatedLogoMark';
import { InfiniteSlider } from '@/app/components/infinite-slider'
import { AnimatedCard, AnimatedHeading, ParallaxSection, RevealOnScroll, StaggerContainer } from '@/app/components/motion/ScrollMotion';
import Link from 'next/link';
import Image from 'next/image';



function ServicesSection({ isDarkMode }: { isDarkMode: boolean }) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 75, damping: 22, mass: 0.45 });
    const headingY = useTransform(smoothProgress, [0, 0.6], [64, 0]);

    const cards = [
        // Recruiter Services First
        {
            title: 'Campus Talent Pools',
            subtitle: 'Curated Student Database',
            badge: 'RECRUITER',
            badgeColor: 'bg-indigo-600',
            body: 'Access verified student profiles from partner colleges through a unified talent marketplace.',
            metrics: ['Verified Profiles', 'Talent Pool'],
            image: '/campus_talent_1780541304771.png',
        },
        {
            title: 'Smart Discovery',
            subtitle: 'AI-Powered Talent Search',
            badge: 'SMART',
            badgeColor: 'bg-pink-600',
            body: 'Search candidates using skills, CGPA, projects, certifications, internships, and placement readiness scores.',
            metrics: ['AI Search', 'Advanced Filters'],
            image: '/smart_discovery_1780541317967.png',
        },
        {
            title: 'Hiring Analytics',
            subtitle: 'Measure Recruitment ROI',
            badge: 'DATA',
            badgeColor: 'bg-blue-600',
            body: 'Monitor hiring performance, offer acceptance rates, recruiter engagement, and sourcing effectiveness.',
            metrics: ['ROI Tracking', 'Reports'],
            image: '/hiring_analytics_1780541331151.png',
        },
        {
            title: 'Drive Automation',
            subtitle: 'End-to-End Management',
            badge: 'AUTO',
            badgeColor: 'bg-yellow-600',
            body: 'Automate job postings, applications, notifications, shortlisting, interviews, and offer rollouts.',
            metrics: ['Automated', 'Efficient'],
            image: '/drive_automation_1780541248122.png',
        },
        {
            title: 'Placement Statistics',
            subtitle: 'Institution Insights',
            badge: 'COLLEGE',
            badgeColor: 'bg-purple-600',
            body: 'Provide colleges with placement trends, department-wise analytics, recruiter engagement, and performance reports.',
            metrics: ['Insights', 'Reports'],
            image: '/placement_stats_1780541262126.png',
        },
        // Student / Community Services
        {
            title: 'Eligibility Checker',
            subtitle: 'Instant Validation',
            badge: 'NEW',
            badgeColor: 'bg-emerald-600',
            body: 'Automatically verify eligibility for jobs based on CGPA, skills, backlogs, certifications, and company criteria.',
            metrics: ['Smart Match', 'Verified'],
            image: '/eligibility_checker_1780541223554.png',
        },
        {
            title: 'Resume Builder',
            subtitle: 'Professional Profiles',
            badge: 'TOOL',
            badgeColor: 'bg-orange-600',
            body: 'Create recruiter-ready resumes automatically using academic, project, and achievement data.',
            metrics: ['ATS Friendly', 'Auto Generated'],
            image: '/resume_builder_1780541234998.png',
        },
        {
            title: 'Community Forums',
            subtitle: 'Collaborative Learning',
            badge: 'COMMUNITY',
            badgeColor: 'bg-teal-600',
            body: 'Discuss opportunities, share experiences, ask questions, and learn from peers and mentors.',
            metrics: ['Discussions', 'Support'],
            image: '/community_forums_1780541278090.png',
        },
        {
            title: 'Alumni Connect',
            subtitle: 'Professional Networking',
            badge: 'NETWORK',
            badgeColor: 'bg-blue-500',
            body: 'Connect with verified alumni for mentorship, referrals, career guidance, and industry insights.',
            metrics: ['Mentorship', 'Referrals'],
            image: '/alumni_connect_1780541292889.png',
        },
        // Original Services
        {
            title: 'Opportunities',
            subtitle: 'Curated Openings',
            badge: 'FRESH',
            badgeColor: 'bg-blue-600',
            body: 'Explore curated placements, internships, and live industry openings matched to your profile.',
            metrics: ['100% Verified', 'Active Daily'],
            image: '/opportunities_service.png',
        },
        {
            title: 'Profile Reviews',
            subtitle: 'Expert Feedback',
            badge: 'PRO',
            badgeColor: 'bg-violet-600',
            body: 'Get expert, personalised feedback on your resume, LinkedIn, and interview presence from industry mentors.',
            metrics: ['Top Mentors', 'Actionable'],
            image: '/profile_reviews_service.png',
        },
    ];

    return (
        <section ref={sectionRef} id="services" className={`relative overflow-hidden border-b px-4 py-12 md:py-24 md:px-6 ${isDarkMode ? 'border-white/10 bg-[#0b0c0f]' : 'border-black/6 bg-white/70 backdrop-blur-sm'}`}>
            <div className="mx-auto max-w-7xl">
                <motion.div style={{ y: headingY }}>
                    <SectionHeader
                        eyebrow="What We Offer"
                        title="Services"
                        copy="End-to-end placement services including placement support, recruiter outreach, profile reviews, and analytics to track progress."
                        isDarkMode={isDarkMode}
                    />
                </motion.div>

                {/* Infinite Carousel Wrapper */}
                <div
                    className="mt-8 md:mt-14 relative w-full overflow-hidden"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)' }}
                >
                    <motion.div
                        className="flex gap-4 md:gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    >
                        {[...cards, ...cards].map((c, i) => {
                            return (
                                <div
                                    key={`${c.title}-${i}`}
                                    className="w-[min(82vw,300px)] md:w-[380px] shrink-0"
                                >
                                    <div
                                        className={`min-h-[390px] md:h-[480px] group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border backdrop-blur-xl ${isDarkMode
                                            ? 'bg-white/[0.04] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                                            : 'bg-white/60 border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
                                            }`}
                                    >
                                        {/* Image taking top portion */}
                                        <div className="relative h-44 w-full overflow-hidden md:absolute md:inset-0 md:h-[65%]">
                                            <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        </div>

                                        {/* Content block overlapping image */}
                                        <div className={`relative z-10 mt-auto w-full rounded-t-3xl p-4 md:p-6 md:absolute md:bottom-0 md:h-[250px] flex flex-col justify-between gap-4 md:gap-6 border-t backdrop-blur-xl ${isDarkMode ? 'bg-black/78 border-white/5' : 'bg-white/88 border-white/60'
                                            }`}>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className={`text-xl md:text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{c.title}</h3>
                                                </div>
                                                <p className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{c.subtitle}</p>

                                                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                                    {c.body}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {c.metrics.map(metric => (
                                                    <span key={metric} className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${isDarkMode ? 'bg-white/5 border-white/10 text-zinc-400' : 'bg-black/5 border-black/10 text-zinc-600'}`}>
                                                        {metric}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

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
        title: 'Verified Profiles',
        subtitle: 'Trusted & Structured',
        description: 'Showcase skills, achievements, projects, and experiences in a structured profile trusted by recruiters.',
        icon: ShieldCheck,
        color: '#f97316', // Orange
        bg: 'rgba(249, 115, 22, 0.1)',
    },
    {
        title: 'Recruiter Access',
        subtitle: 'Direct Connections',
        description: 'Connect students with opportunities through a unified platform designed to improve hiring efficiency.',
        icon: Briefcase,
        color: '#8b5cf6', // Violet
        bg: 'rgba(139, 92, 246, 0.1)',
    },
    {
        title: 'Alumni Network',
        subtitle: 'Professional Growth',
        description: 'Build meaningful connections with industry professionals who can open doors to career growth.',
        icon: Network,
        color: '#3b82f6', // Blue
        bg: 'rgba(59, 130, 246, 0.1)',
    },
    {
        title: 'AI-Powered Placement Readiness',
        subtitle: 'Personalized Growth',
        description: 'Track student preparedness through readiness scores, skill-gap analysis, company-specific eligibility checks, and AI-driven recommendations.',
        icon: Target,
        color: '#f43f5e', // Rose
        bg: 'rgba(244, 63, 94, 0.1)',
    },
    {
        title: 'Placement Analytics',
        subtitle: 'Data-Driven Decisions',
        description: 'Provide colleges with real-time insights into placement performance, recruiter engagement, hiring trends, department-wise statistics, and student outcomes.',
        icon: PieChart,
        color: '#06b6d4', // Cyan
        bg: 'rgba(6, 182, 212, 0.1)',
    },
    {
        title: 'End-to-End Automation',
        subtitle: 'Reduced Manual Effort',
        description: 'Automate eligibility verification, application processing, communication workflows, interview scheduling, offer management, and reporting.',
        icon: Zap,
        color: '#eab308', // Yellow
        bg: 'rgba(234, 179, 8, 0.1)',
    },
    {
        title: 'Secure & Verified Ecosystem',
        subtitle: 'Trusted Platform',
        description: 'Role-based access control, verified profiles, audit logs, secure document storage, and institution-specific data isolation ensure reliability and trust.',
        icon: Lock,
        color: '#10b981', // Emerald
        bg: 'rgba(16, 185, 129, 0.1)',
    },
    {
        title: 'Smart Recruiter Matching',
        subtitle: 'Better Hiring Outcomes',
        description: 'Automatically connect recruiters with the most suitable candidates using eligibility filtering, skill matching, readiness indicators, and academic criteria.',
        icon: Sparkles,
        color: '#d946ef', // Fuchsia
        bg: 'rgba(217, 70, 239, 0.1)',
    },
    {
        title: 'Multi-Stakeholder Collaboration',
        subtitle: 'One Unified Platform',
        description: 'Bring together students, recruiters, placement officers, and alumni in a single ecosystem to streamline communication and improve placement success.',
        icon: Network,
        color: '#84cc16', // Lime
        bg: 'rgba(132, 204, 22, 0.1)',
    },
];

const ABOUT_SLIDES = [
    {
        title: 'Placement Commitment',
        icon: Target,
        body: 'We do not measure success by the number of students we train, but by the number we help place. Our commitment extends beyond preparation—we remain actively engaged until meaningful opportunities translate into successful outcomes.',
        image: '/about_bg_1.png'
    },
    {
        title: 'Transparent Guidance',
        icon: Eye,
        body: 'We believe informed decisions require honest conversations. Students receive clear assessments, constructive feedback, and realistic guidance on their strengths, gaps, and career opportunities.',
        image: '/about_bg_2.png'
    },
    {
        title: 'Meaningful Opportunities',
        icon: Compass,
        body: 'Every opportunity shared through our platform is selected with purpose. We focus on connecting students with credible employers, relevant roles, and pathways that align with their potential.',
        image: '/about_bg_3.png'
    },
    {
        title: 'Long-Term Growth',
        icon: TrendingUp,
        body: 'Our objective extends beyond securing a first role. We focus on enabling continuous professional development and long-term career advancement.',
        image: '/about_bg_4.png'
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
        image: '/term_eligibility_1780542050852.png',
    },
    {
        title: 'Acceptable Use',
        body: 'Users must provide accurate information, use the platform only for placement-related activity, and avoid credential sharing, automation abuse, or unauthorized access.',
        image: '/term_acceptable_1780542063038.png',
    },
    {
        title: 'Privacy & Security',
        body: 'Personal and placement data is stored securely and protected through access controls, encryption in transit, and role-based visibility. We do not sell user data.',
        image: '/term_privacy_security_1780542076044.png',
    },
    {
        title: 'Applications & Deadlines',
        body: 'Users must follow posting deadlines and submission rules. False, incomplete, or misleading information may lead to suspension from placement activity.',
        image: '/term_applications_1780542088947.png',
    },
    {
        title: 'Ownership & IP',
        body: 'Aarambh, its code, design, branding, and infrastructure remain the property of the platform owner. Institutional branding remains the property of the respective institution.',
        image: '/term_ownership_1780542102938.png',
    },
    {
        title: 'Disclaimer',
        body: 'Placement information is provided for guidance only and does not guarantee outcomes. Continued use after policy updates means you accept the revised terms.',
        image: '/term_disclaimer_1780542116712.png',
    },
];

type LoginHandler = (role: 'student' | 'alumni' | 'admin' | 'rep' | null, name: string) => void | Promise<void>;

export function LandingPage({ onLogin }: { onLogin?: LoginHandler }) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [loginInitialType, setLoginInitialType] = useState<'student' | 'alumni' | 'rep' | 'admin' | undefined>(undefined);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    const { resolvedTheme, setTheme } = useTheme();
    const isDarkMode = mounted && resolvedTheme === 'dark';

    const toggleTheme = () => {
        setTheme(isDarkMode ? 'light' : 'dark')
        console.log('Toggled theme to', isDarkMode ? 'light' : 'dark');
    };

    const handleAuthSuccess = (role: 'student' | 'alumni' | 'admin' | 'rep', name: string, uid: string) => {
        if (onLogin) {
            // call parent handler (AppClient.handleLogin expects role,name)
            void onLogin(role, name);
        }
    };



    return (
        <div
            style={{
                '--landing-accent': isDarkMode ? '#7c3aed' : '#2563eb',
                '--landing-accent-strong': isDarkMode ? '#6d28d9' : '#1d4ed8',
                '--landing-soft': isDarkMode ? 'rgba(124,58,237,0.14)' : '#eff6ff',
            } as CSSProperties}
            className={`relative min-h-screen font-sans transition-colors duration-150 ${isDarkMode ? 'bg-[#070509] text-white selection:bg-purple-500/30' : 'bg-slate-100 text-slate-950 selection:bg-blue-100'}`}
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
            <TestimonialsSection isDarkMode={isDarkMode} />
            <WhyChooseUsSection isDarkMode={isDarkMode} />
            <FeaturesSection isDarkMode={isDarkMode} />
            <ServicesSection isDarkMode={isDarkMode} />
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

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#why-choose-us' },
    { label: 'Services', href: '#services' },
];

function Navbar({ onLoginClick, isDarkMode }: { onLoginClick: () => void; isDarkMode: boolean }) {
    const [isCompact, setIsCompact] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsCompact(window.scrollY > 80);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    const glassStyle = {
        backdropFilter: 'blur(28px) saturate(1.9)',
        WebkitBackdropFilter: 'blur(28px) saturate(1.9)',
    };

    const pillClass = (compact: boolean) =>
        isDarkMode
            ? compact
                ? 'bg-white/[0.07] border-white/[0.13] shadow-[0_6px_28px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.09)]'
                : 'bg-white/[0.05] border-white/[0.10] shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]'
            : compact
                ? 'bg-white/[0.72] border-white/[0.75] shadow-[0_6px_28px_rgba(0,0,0,0.09),inset_0_1px_0_rgba(255,255,255,1)]'
                : 'bg-white/[0.60] border-white/[0.65] shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]';

    const shimmer = (
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-white/[0.18] to-transparent' : 'bg-gradient-to-r from-transparent via-white to-transparent'}`} />
    );

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full px-4 pt-3 pointer-events-none">

            {/* ════════════════════════════════
                DESKTOP NAVBAR
                ════════════════════════════════ */}
            <motion.div
                animate={{
                    maxWidth: isCompact ? 580 : 1140,
                    paddingTop: isCompact ? 7 : 10,
                    paddingBottom: isCompact ? 7 : 10,
                    paddingLeft: isCompact ? 14 : 18,
                    paddingRight: isCompact ? 10 : 14,
                    borderRadius: isCompact ? 50 : 20,
                }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className={`hidden md:flex pointer-events-auto relative w-full items-center justify-between border overflow-hidden transition-[background,border-color,box-shadow] duration-300 ${pillClass(isCompact)}`}
                style={glassStyle}
            >
                {shimmer}

                {/* Logo */}
                <motion.a
                    href="#"
                    animate={{ scale: isCompact ? 0.9 : 1 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center shrink-0 origin-left"
                    aria-label="Aarambh home"
                >
                    <AnimatedLogoMark size="sm" role="landing" />
                    <AnimatePresence>
                        {!isCompact && (
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 'auto' }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden whitespace-nowrap"
                            >
                                <div className="flex flex-col leading-none pl-3">
                                    <span className="text-sm font-black uppercase tracking-[0.22em]">Aarambh</span>
                                    <span className="mt-0.5 text-[8px] font-normal tracking-[0.28em] opacity-50">By Ascendio Global</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.a>

                {/* Nav links — always visible on desktop, auto-center */}
                <div className={`flex items-center gap-0.5 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {NAV_LINKS.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                isDarkMode ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-black/[0.06] hover:text-black'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Contact button — text+icon expanded, icon-only compact */}
                <motion.button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    animate={{
                        width: isCompact ? 38 : 'auto' as any,
                        paddingLeft: isCompact ? 0 : 20,
                        paddingRight: isCompact ? 0 : 20,
                        height: isCompact ? 38 : 40,
                    }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className={`group shrink-0 flex items-center justify-center gap-2 rounded-full text-sm font-semibold overflow-hidden transition-colors ${
                        isDarkMode ? 'bg-[#6d28d9] text-white hover:bg-[#5b21b6]' : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                    <AnimatePresence>
                        {!isCompact && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 'auto' }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden whitespace-nowrap"
                            >
                                Contact
                            </motion.span>
                        )}
                    </AnimatePresence>
                    <ArrowRight className="h-[15px] w-[15px] shrink-0 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
            </motion.div>

            {/* ════════════════════════════════
                MOBILE NAVBAR
                ════════════════════════════════ */}
            <motion.div
                initial={{ maxWidth: 600, paddingTop: 10, paddingBottom: 10, paddingLeft: 16, paddingRight: 12, borderRadius: 18 }}
                animate={{
                    maxWidth: isCompact ? 192 : 600,
                    paddingTop: isCompact ? 7 : 10,
                    paddingBottom: isCompact ? 7 : 10,
                    paddingLeft: isCompact ? 12 : 16,
                    paddingRight: isCompact ? 8 : 12,
                    borderRadius: isCompact ? 50 : 18,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`md:hidden pointer-events-auto relative w-full flex items-center justify-between border overflow-hidden ${pillClass(isCompact)}`}
                style={glassStyle}
            >
                {shimmer}
                {/* Logo */}
                <a href="#" className="flex items-center shrink-0" aria-label="Aarambh home">
                    <AnimatedLogoMark size="sm" role="landing" />
                    <AnimatePresence>
                        {!isCompact && (
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 'auto' }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden whitespace-nowrap"
                            >
                                <div className="flex flex-col leading-none pl-3">
                                    <span className="text-sm font-black uppercase tracking-[0.22em]">Aarambh</span>
                                    <span className="mt-0.5 text-[8px] font-normal tracking-[0.28em] opacity-50">By Ascendio Global</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </a>
                {/* Mobile actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className={`grid h-[34px] w-[34px] place-items-center rounded-full transition-colors ${
                            isDarkMode ? 'bg-[#6d28d9] text-white hover:bg-[#5b21b6]' : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                        <ArrowRight className="h-[15px] w-[15px]" />
                    </button>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(o => !o)}
                        className={`grid h-[34px] w-[34px] place-items-center rounded-full border transition-colors ${
                            isDarkMode ? 'border-white/[0.13] bg-white/[0.07] text-white hover:bg-white/[0.13]' : 'border-black/[0.1] bg-black/[0.04] text-slate-700 hover:bg-black/[0.08]'
                        }`}
                    >
                        {mobileMenuOpen ? <X className="h-[15px] w-[15px]" /> : <Menu className="h-[15px] w-[15px]" />}
                    </button>
                </div>
            </motion.div>

            {/* ── Mobile dropdown ── */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        key="dropdown"
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className={`md:hidden pointer-events-auto mt-2 w-full overflow-hidden rounded-2xl border p-2 shadow-2xl ${
                            isDarkMode ? 'border-white/10 bg-[#08080d]/92 text-white' : 'border-black/[0.08] bg-white/[0.95] text-slate-900'
                        }`}
                        style={glassStyle}
                    >
                        <div className="flex flex-col gap-0.5">
                            {NAV_LINKS.map(item => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                                        isDarkMode ? 'text-zinc-200 hover:bg-white/[0.07]' : 'text-slate-700 hover:bg-black/[0.05]'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className={`my-1 mx-1 h-px ${isDarkMode ? 'bg-white/[0.07]' : 'bg-black/[0.07]'}`} />
                            <button
                                onClick={() => { closeMobileMenu(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                                    isDarkMode ? 'bg-violet-500/[0.14] text-violet-200 hover:bg-violet-500/[0.22]' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                }`}
                            >
                                <ArrowRight className="h-4 w-4" />
                                Contact
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
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
    const boardY = useTransform(smoothProgress, [0, 1], [0, 60]);

    return (
        <section ref={heroRef} className={`relative min-h-[82svh] md:min-h-screen overflow-hidden border-b pt-16 md:pt-24 ${isDarkMode ? 'border-white/10 bg-[#070509]' : 'border-slate-100 bg-slate-100'}`}>

            {/* ── Background illustration — absolutely positioned, behind all content ── */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 md:inset-y-0 md:left-auto md:w-[68%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                style={{ y: boardY }}
            >
                {/* Light mode image */}
                <Image
                    src="/hero-city.png"
                    alt=""
                    fill
                    sizes="100vw"
                    priority
                    aria-hidden="true"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover object-center md:object-left-top select-none"
                    style={{
                        opacity: isDarkMode ? 0 : 0.95,
                        mixBlendMode: 'multiply',
                        WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 50%, transparent 100%)',
                        maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 50%, transparent 100%)',
                        filter: 'contrast(1.2) saturate(1.4) brightness(1.03)',
                        transition: 'opacity 500ms ease',
                    }}
                />
                {/* Dark mode image */}
                <Image
                    src="/hero-city-dark.png"
                    alt=""
                    fill
                    sizes="100vw"
                    priority
                    aria-hidden="true"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover object-center md:object-left-top select-none"
                    style={{
                        opacity: isDarkMode ? 0.72 : 0,
                        mixBlendMode: 'screen',
                        WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 50%, transparent 100%)',
                        maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, black 50%, transparent 100%)',
                        filter: 'saturate(1.1) brightness(1.05)',
                        transition: 'opacity 500ms ease',
                    }}
                />
                {/* Left-edge feather — light */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, #f1f5f9 0%, transparent 45%)',
                        opacity: isDarkMode ? 0 : 1,
                        transition: 'opacity 500ms ease',
                    }}
                />
                {/* Left-edge feather — dark */}
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, #070509 0%, transparent 35%)',
                        opacity: isDarkMode ? 1 : 0,
                        transition: 'opacity 500ms ease',
                    }}
                />
                {/* Bottom fade — light */}
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
                    style={{
                        background: 'linear-gradient(to top, #f1f5f9, transparent)',
                        opacity: isDarkMode ? 0 : 1,
                        transition: 'opacity 500ms ease',
                    }}
                />
                {/* Bottom fade — dark */}
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
                    style={{
                        background: 'linear-gradient(to top, #070509, transparent)',
                        opacity: isDarkMode ? 1 : 0,
                        transition: 'opacity 500ms ease',
                    }}
                />
            </motion.div>

            {/* Content — single column, z-10 over the background image */}
            <div className="relative z-10 mx-auto flex min-h-[calc(82svh-64px)] md:min-h-[calc(100vh-96px)] max-w-7xl flex-col justify-center px-5 pb-7 pt-4 md:pt-8 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ y: headlineY, opacity: headlineOpacity }}
                    className="max-w-2xl"
                >

                    <h1 className="mt-2 md:mt-7 text-[clamp(2.05rem,10vw,3.8rem)] md:text-[clamp(3.5rem,8vw,5.6rem)] font-black leading-[1.05] md:leading-[0.96] tracking-tight">
                        Build Careers
                        <span className="block text-(--landing-accent)">With Legendary</span>
                        <span className="block">Placement Outcomes.</span>
                    </h1>

                    <p className={`mt-4 md:mt-6 max-w-lg text-sm md:text-base leading-relaxed md:leading-7 sm:text-lg ${isDarkMode ? 'text-zinc-300' : 'text-slate-600'}`}>
                        We bring together talent, opportunities, and industry connections
                        in one intelligent platform built for placement success.
                    </p>

                    <div className="mt-5 md:mt-9 flex flex-wrap items-center gap-2.5 md:gap-3">
                        <a
                            href="#contact"
                            className={`group inline-flex h-11 md:h-12 items-center gap-2 rounded-xl px-4 md:px-6 text-sm font-bold shadow-lg transition hover:-translate-y-0.5 active:scale-95 ${isDarkMode ? 'bg-[#ffffff] text-[#0a0a0f] shadow-black/40 hover:bg-zinc-200' : 'bg-blue-600 text-white shadow-blue-600/25 hover:bg-blue-700'}`}
                        >
                            Connect With Us
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#why-choose-us"
                            className={`inline-flex h-11 md:h-12 items-center gap-2 rounded-xl border px-4 md:px-6 text-sm font-bold transition hover:-translate-y-0.5 active:scale-95 ${isDarkMode ? 'border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700'}`}
                        >
                            Why Aarambh?
                        </a>
                    </div>

                </motion.div>

                {/* ── Pill strip at bottom ── */}
                <ParallaxSection speed={18} className="mt-7 md:mt-32 w-full">
                    {(pillY) => (
                        <motion.div style={{ y: pillY }}>
                            <HeroPillStrip isDarkMode={isDarkMode} />
                        </motion.div>
                    )}
                </ParallaxSection>
            </div>
        </section>
    );
}


const HERO_PILLS = [
    {
        label: 'Connect',
        sub: 'Talent & Recruiters',
        icon: (
            // Two people / network icon matching the reference
            <svg viewBox="0 0 40 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-11">
                <circle cx="13" cy="9" r="5" />
                <path d="M3 28v-2a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8v2" />
                <circle cx="31" cy="11" r="4" />
                <path d="M37 28v-1.5a5 5 0 0 0-4-4.9" />
                <path d="M25 28v-1.5a5 5 0 0 1 4-4.9" />
            </svg>
        ),
    },
    {
        label: 'Empower',
        sub: 'Students & Colleges',
        icon: (
            // Mortarboard / graduation cap matching the reference
            <svg viewBox="0 0 36 30" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-10">
                <path d="M4 11l14-7 14 7-14 7-14-7z" />
                <path d="M10 14.5v7c3.33 1.67 9.67 1.67 13 0v-7" />
                <line x1="32" y1="11" x2="32" y2="22" />
                <circle cx="32" cy="23" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'Collaborate',
        sub: 'Alumni & Communities',
        icon: (
            // Handshake matching the reference
            <svg viewBox="0 0 40 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-11">
                <path d="M3 18l6-6h6l4-4h6l6 6" />
                <path d="M3 18c0 0 4 4 8 4s5-2 5-2l5 5c0 0 2 2 4 0l8-8c0 0 2-2 0-4" />
                <path d="M15 16l4 4" />
                <path d="M19 12l4 4" />
                <path d="M23 8l4 4" />
            </svg>
        ),
    },
    {
        label: 'Build',
        sub: 'Stronger Futures',
        icon: (
            // Bar chart with upward arrow matching the reference
            <svg viewBox="0 0 36 30" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-10">
                <rect x="3" y="18" width="6" height="9" rx="1" />
                <rect x="13" y="12" width="6" height="15" rx="1" />
                <rect x="23" y="6" width="6" height="21" rx="1" />
                <path d="M31 3l3 3-3 3" />
                <path d="M34 6H29" />
            </svg>
        ),
    },
];

function HeroPillStrip({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: 'easeOut' }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 sm:gap-6"
        >
            {HERO_PILLS.map((pill, i) => (
                <div
                    key={pill.label}
                    className={`flex items-center gap-2 md:gap-4 px-3 py-3 md:px-6 md:py-5 rounded-xl md:rounded-2xl border backdrop-blur-xl ${isDarkMode
                        ? 'bg-white/[0.03] border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
                        : 'bg-white/70 border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
                        }`}
                >
                    <span className={`shrink-0 scale-75 md:scale-100 ${isDarkMode ? 'text-violet-400' : 'text-blue-600'}`}>
                        {pill.icon}
                    </span>
                    <div className="min-w-0">
                        <p className={`text-xs md:text-sm font-bold leading-tight truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            {pill.label}
                        </p>
                        <p className={`mt-0.5 text-[10px] md:text-xs leading-[1.1] md:whitespace-nowrap ${isDarkMode ? 'text-white/45' : 'text-slate-500'}`}>
                            {pill.sub}
                        </p>
                    </div>
                </div>
            ))}
        </motion.div>
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
        <section ref={sectionRef} id="stats" className={`relative -mt-20 overflow-hidden border-b px-4 pb-10 pt-28 md:mt-0 md:py-24 md:px-6 ${isDarkMode ? 'border-white/10 bg-[#0d0e11]' : 'border-black/6 bg-white/80 backdrop-blur-sm'}`}>
            <motion.div
                className="absolute left-0 top-0 h-full w-2 origin-top bg-(--landing-accent)"
                style={{ scaleY: railScale }}
            />
            <div className="pointer-events-none absolute inset-x-0 -top-10 h-[520px] overflow-hidden lg:hidden">
                <img
                    src="/landing-dashboard-light.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                        opacity: isDarkMode ? 0 : 0.58,
                        transition: 'opacity 500ms ease',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 54%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, black 0%, black 54%, transparent 100%)',
                    }}
                />
                <img
                    src="/landing-dashboard-dark.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                        opacity: isDarkMode ? 0.42 : 0,
                        transition: 'opacity 500ms ease',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 54%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, black 0%, black 54%, transparent 100%)',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: isDarkMode
                            ? 'linear-gradient(to bottom, rgba(13,14,17,0.15), rgba(13,14,17,0.82) 58%, #0d0e11 100%)'
                            : 'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0.62) 56%, rgba(255,255,255,0.94) 100%)',
                    }}
                />
            </div>
            <motion.div
                className={`absolute right-[6%] top-20 hidden h-36 w-36 lg:block ${isDarkMode ? 'bg-cyan-400/10' : 'bg-cyan-300/25'}`}
                style={{ y: panelY, rotate: -8 }}
            />
            <div className="relative mx-auto max-w-[90rem]">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Left: Dashboard Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="relative hidden rounded-[1.5rem] border shadow-2xl overflow-hidden lg:block md:rounded-[2rem]"
                        style={{
                            borderColor: isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                        }}
                    >
                        <div
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-32 w-[80%] rounded-full opacity-40 blur-[3rem]"
                            style={{
                                background: isDarkMode ? '#6d28d9' : '#3b82f6',
                            }}
                        />
                        <div className="relative aspect-[16/10] md:aspect-[4/3] w-full bg-black/20">
                            <img
                                src="/landing-dashboard-light.png"
                                alt="Dashboard Light"
                                className="absolute inset-0 h-full w-full object-contain md:object-cover"
                                style={{ opacity: isDarkMode ? 0 : 1, transition: 'opacity 500ms ease' }}
                            />
                            <img
                                src="/landing-dashboard-dark.png"
                                alt="Dashboard Dark"
                                className="absolute inset-0 h-full w-full object-contain md:object-cover"
                                style={{ opacity: isDarkMode ? 1 : 0, transition: 'opacity 500ms ease' }}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="relative z-10">
                        <SectionHeader
                            eyebrow="Who We Are"
                            title="Built Different. Built for You."
                            copy="We started in 2026 with a single objective — get every student placed and trained successfully."
                            isDarkMode={isDarkMode}
                            align="left"
                        />

                        {/* Founding story stats */}
                        <motion.div
                            className={`mt-6 md:mt-12 grid grid-cols-1 border sm:grid-cols-2 backdrop-blur-xl rounded-xl md:rounded-2xl overflow-hidden ${isDarkMode ? 'border-white/8 bg-white/[0.02]' : 'border-black/8 bg-white/60'}`}
                            style={{ y: panelY }}
                        >
                            {FOUNDING_STATS.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                    className={`p-5 md:p-8 min-h-24 sm:min-h-52 flex flex-col justify-center border-white/[0.06] ${index === 0 ? 'border-b sm:border-r' :
                                        index === 1 ? 'border-b sm:border-b-0 sm:row-span-2' :
                                            'sm:border-r'
                                        }`}
                                >
                                    <div className="mb-3 md:mb-6 h-1 md:h-2 w-8 md:w-12 bg-(--landing-accent)" />
                                    <div className="text-3xl font-black text-(--landing-accent) md:text-5xl">
                                        {stat.value}
                                    </div>
                                    <p className={`mt-2 text-xs md:text-sm font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                        {stat.label}
                                    </p>
                                    <p className={`mt-2 md:mt-4 text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                        {stat.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function WhyChooseUsSection({ isDarkMode }: { isDarkMode: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const mobileScrollRef = useRef<HTMLDivElement>(null);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
    const mobileActiveRef = useRef(0);
    const mobileTouchStartXRef = useRef<number | null>(null);
    const mobileTouchStartYRef = useRef<number | null>(null);
    const cardCount = WHY_US_POINTS.length;

    useEffect(() => {
        const container = mobileScrollRef.current;
        if (!container) return;

        const handleTouchStart = (e: TouchEvent) => {
            mobileTouchStartXRef.current = e.touches[0]?.clientX ?? null;
            mobileTouchStartYRef.current = e.touches[0]?.clientY ?? null;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (mobileTouchStartXRef.current === null || mobileTouchStartYRef.current === null) return;
            const endX = e.changedTouches[0]?.clientX ?? mobileTouchStartXRef.current;
            const endY = e.changedTouches[0]?.clientY ?? mobileTouchStartYRef.current;
            const dx = mobileTouchStartXRef.current - endX;
            const dy = Math.abs(mobileTouchStartYRef.current - endY);
            if (Math.abs(dx) < 40 || dy > Math.abs(dx)) return;
            const cur = mobileActiveRef.current;
            if (dx > 0 && cur < cardCount - 1) {
                mobileActiveRef.current = cur + 1;
                setMobileActiveIndex(cur + 1);
            } else if (dx < 0 && cur > 0) {
                mobileActiveRef.current = cur - 1;
                setMobileActiveIndex(cur - 1);
            }
            mobileTouchStartXRef.current = null;
            mobileTouchStartYRef.current = null;
        };

        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });
        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [cardCount]);

    useEffect(() => { mobileActiveRef.current = mobileActiveIndex; }, [mobileActiveIndex]);

    // Mobile section wheel: horizontal card nav first, then allow page scroll
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const handleWheel = (e: WheelEvent) => {
            const isDesktop = window.innerWidth >= 768;
            if (isDesktop) return;
            const cur = mobileActiveRef.current;
            if (e.deltaX !== 0) return; // let horizontal trackpad pass through
            if (e.deltaY > 0 && cur < cardCount - 1) {
                e.preventDefault();
                mobileActiveRef.current = cur + 1;
                setMobileActiveIndex(cur + 1);
            } else if (e.deltaY < 0 && cur > 0) {
                e.preventDefault();
                mobileActiveRef.current = cur - 1;
                setMobileActiveIndex(cur - 1);
            }
        };
        section.addEventListener('wheel', handleWheel, { passive: false });
        return () => section.removeEventListener('wheel', handleWheel);
    }, [cardCount]);

    return (
        <section ref={sectionRef} id="why-choose-us" className={`relative overflow-hidden border-b ${isDarkMode ? 'border-white/10 bg-[#0d0e11]' : 'border-black/6 bg-white/80 backdrop-blur-sm'}`}>
            {/* ── MOBILE (< md) ── */}
            <div className="md:hidden flex flex-col h-screen px-4 py-10">
                <RevealOnScroll variant="fadeDown" className={`mb-6 text-xs font-black uppercase tracking-[0.22em] text-(--landing-accent)`}>
                    Why Choose Us
                </RevealOnScroll>

                {/* Card stack */}
                <div ref={mobileScrollRef} className="relative flex-1 min-h-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {WHY_US_POINTS.map((point, index) => {
                            const Icon = point.icon;
                            const offset = index - mobileActiveIndex;
                            const distance = Math.abs(offset);
                            const isVisible = distance <= 2;
                            const x = offset === 0 ? 0 : offset > 0 ? 100 + (distance - 1) * 8 : -100 - (distance - 1) * 8;
                            const scale = offset === 0 ? 1 : distance === 1 ? 0.9 : 0.8;
                            const opacity = offset === 0 ? 1 : distance === 1 ? 0.4 : 0.15;
                            return (
                                <div
                                    key={point.title}
                                    className="absolute w-[88vw] max-w-[360px] transition-all duration-500 ease-out"
                                    style={{
                                        transform: `translateX(${x}%) scale(${scale})`,
                                        opacity: isVisible ? opacity : 0,
                                        zIndex: cardCount - distance,
                                        pointerEvents: offset === 0 ? 'auto' : 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            '--hover-border': point.color,
                                            '--hover-shadow': isDarkMode ? `${point.color}40` : `${point.color}25`,
                                        } as React.CSSProperties}
                                        className={`group relative min-h-[260px] w-full overflow-hidden rounded-[20px] p-5 border transition-all duration-300 backdrop-blur-2xl ${isDarkMode
                                            ? 'bg-white/[0.055] border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_48px_rgba(0,0,0,0.35)]'
                                            : 'bg-white border-slate-200 shadow-[0_18px_42px_rgba(15,23,42,0.09)]'
                                        }`}
                                    >
                                        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
                                        <div
                                            className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[3rem] opacity-30 pointer-events-none"
                                            style={{ backgroundColor: point.color }}
                                        />
                                        <div className="flex justify-between items-start mb-4">
                                            <div
                                                className="grid h-10 w-10 place-items-center rounded-full"
                                                style={{ backgroundColor: point.bg, color: point.color }}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full`} style={{ background: point.bg, color: point.color }}>
                                                {index + 1}/{cardCount}
                                            </span>
                                        </div>
                                        <h3 className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                                            {point.title}
                                        </h3>
                                        <p className={`mt-1 text-xs font-medium ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                            {point.subtitle}
                                        </p>
                                        <p className={`mt-3 text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Dot indicators + arrows */}
                <div className="shrink-0 flex items-center justify-center gap-4 pb-2 pt-4">
                    <button
                        onClick={() => { const n = Math.max(0, mobileActiveIndex - 1); mobileActiveRef.current = n; setMobileActiveIndex(n); }}
                        disabled={mobileActiveIndex === 0}
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${mobileActiveIndex === 0 ? 'opacity-30 cursor-default' : 'active:scale-90'} ${isDarkMode ? 'border-white/15 bg-white/5 text-white' : 'border-slate-200 bg-white text-slate-700 shadow-sm'}`}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <div className="flex gap-1.5">
                        {WHY_US_POINTS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { mobileActiveRef.current = i; setMobileActiveIndex(i); }}
                                className="h-1.5 rounded-full transition-all duration-300"
                                style={{
                                    width: i === mobileActiveIndex ? 20 : 6,
                                    background: i === mobileActiveIndex ? WHY_US_POINTS[mobileActiveIndex].color : isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => { const n = Math.min(cardCount - 1, mobileActiveIndex + 1); mobileActiveRef.current = n; setMobileActiveIndex(n); }}
                        disabled={mobileActiveIndex === cardCount - 1}
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${mobileActiveIndex === cardCount - 1 ? 'opacity-30 cursor-default' : 'active:scale-90'} ${isDarkMode ? 'border-white/15 bg-white/5 text-white' : 'border-slate-200 bg-white text-slate-700 shadow-sm'}`}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* ── DESKTOP (≥ md) ── */}
            <div className="hidden md:block px-6 py-28">
                <div className="mx-auto max-w-7xl">
                    <RevealOnScroll variant="fadeDown" className={`mb-12 text-sm font-black uppercase tracking-[0.22em] text-(--landing-accent)`}>
                        Why Choose Us
                    </RevealOnScroll>
                    <StaggerContainer className="grid md:grid-cols-3 gap-6" delayChildren={0.12} staggerChildren={0.08}>
                        {WHY_US_POINTS.map((point) => {
                            const Icon = point.icon;
                            return (
                                <AnimatedCard
                                    key={point.title}
                                    variant="scaleIn"
                                    style={{
                                        '--hover-border': point.color,
                                        '--hover-shadow': isDarkMode ? `${point.color}40` : `${point.color}25`,
                                    } as React.CSSProperties}
                                    className={`group relative overflow-hidden rounded-[20px] p-8 border transition-all duration-300 hover:scale-[1.02] backdrop-blur-xl hover:border-[var(--hover-border)] hover:shadow-[0_8px_32px_var(--hover-shadow)] ${isDarkMode
                                        ? 'bg-white/[0.03] border-white/8 hover:bg-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                                        : 'bg-white/60 border-white/70 hover:bg-white/80 shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
                                    }`}
                                >
                                    <div
                                        className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[3rem] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                        style={{ backgroundColor: point.color }}
                                    />
                                    <div className="flex justify-between items-start mb-12">
                                        <div
                                            className="grid h-12 w-12 place-items-center rounded-full"
                                            style={{ backgroundColor: point.bg, color: point.color }}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                                        {point.title}
                                    </h3>
                                    <p className={`mt-1 text-sm font-medium ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                        {point.subtitle}
                                    </p>
                                    <p className={`mt-8 text-sm leading-relaxed ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
                                        {point.description}
                                    </p>
                                </AnimatedCard>
                            );
                        })}
                    </StaggerContainer>
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
    const headingY = useTransform(smoothProgress, [0, 0.45, 1], [40, 0, -40]);

    return (
        <section ref={sectionRef} id="features" className={`relative border-b px-4 md:px-6 py-12 md:py-28 overflow-hidden ${isDarkMode ? 'border-white/10 bg-[#08090b]' : 'border-black/6 bg-[#f7f7f4]/80 backdrop-blur-sm'}`}>
            <div className="mx-auto max-w-[88rem]">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

                    {/* LEFT: Sticky image that spans the full section */}
                    <div className="block lg:sticky lg:top-24">
                        <div className="relative">
                            {/* glow */}
                            <div
                                className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-40 w-4/5 rounded-full blur-[3.5rem]"
                                style={{ background: isDarkMode ? 'rgba(109,40,217,0.45)' : 'rgba(59,130,246,0.3)' }}
                            />
                            <img
                                src="/interview.png"
                                alt="Interview process"
                                className="relative z-10 aspect-[16/10] w-full rounded-2xl object-cover shadow-2xl md:rounded-3xl lg:aspect-[3/4]"
                                style={{
                                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
                                }}
                            />
                        </div>
                    </div>

                    {/* RIGHT: Header + cards */}
                    <div>
                        <motion.div style={{ y: headingY }} className="mb-8 md:mb-12">
                            <p className="text-xs font-black uppercase tracking-[0.28em] text-(--landing-accent)">Core Capabilities</p>
                            <h2 className="mt-2 md:mt-4 text-3xl font-black uppercase leading-[1.05] md:text-7xl md:leading-[0.9]">
                                Seamless<br />Recruitment
                            </h2>
                            <p className={`mt-3 md:mt-6 text-[15px] md:text-lg leading-7 md:leading-8 max-w-lg ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                                }`}>
                                Our advanced tools help you manage every stage of the hiring pipeline, from initial application to final offer letter.
                            </p>
                            <div className="mt-6 md:mt-8 h-1 w-20 bg-(--landing-accent)" />
                        </motion.div>

                        <StaggerContainer className="space-y-4 md:space-y-5" delayChildren={0.12} staggerChildren={0.1}>
                            {FEATURE_CARDS.map((feature, index) => (
                                <FeatureCard
                                    key={feature.title}
                                    {...feature}
                                    index={index}
                                    isDarkMode={isDarkMode}
                                    sectionProgress={smoothProgress}
                                />
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ number, title, description, icon: Icon, index, isDarkMode }: { number: string; title: string; description: string; icon: ElementType; index: number; isDarkMode: boolean; sectionProgress: MotionValue<number> }) {
    return (
        <AnimatedCard
            as="article"
            variant="fadeUp"
            className={`group relative flex items-start gap-4 md:gap-8 rounded-2xl border p-5 md:p-10 transition hover:-translate-y-0.5 hover:shadow-lg backdrop-blur-xl ${isDarkMode
                ? 'border-white/8 bg-white/[0.04] text-white hover:border-white/15 hover:bg-white/[0.07] shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
                : 'border-white/70 bg-white/60 text-slate-900 hover:border-white/90 hover:bg-white/80 hover:shadow-slate-200 shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
                }`}
        >
            {/* Accent bar on left edge */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 md:h-16 w-1 rounded-r-full bg-(--landing-accent) opacity-0 group-hover:opacity-100 transition" />

            {/* Icon box */}
            <div className={`shrink-0 grid h-12 w-12 md:h-16 md:w-16 place-items-center rounded-xl border text-(--landing-accent) ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-blue-100 bg-blue-50'
                }`}>
                <Icon className="h-5 w-5 md:h-7 md:w-7" />
            </div>

            {/* Text */}
            <div className="flex-1">
                <h3 className="mb-1.5 md:mb-3 text-lg md:text-2xl font-black">{title}</h3>
                <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>{description}</p>
            </div>
        </AnimatedCard>
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
    const contentY = useTransform(smoothProgress, [0, 0.5, 1], [50, 0, -50]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % ABOUT_SLIDES.length);
        }, 6000);
        return () => window.clearInterval(interval);
    }, []);

    const goNext = () => setActiveIndex((prev) => (prev + 1) % ABOUT_SLIDES.length);
    const goPrev = () => setActiveIndex((prev) => (prev - 1 + ABOUT_SLIDES.length) % ABOUT_SLIDES.length);

    const ActiveIcon = ABOUT_SLIDES[activeIndex].icon;

    return (
        <section
            id="about"
            ref={sectionRef}
            className={`relative overflow-hidden border-b px-4 py-12 md:py-28 sm:px-6 ${isDarkMode ? 'border-white/10 bg-[#0A0A14]' : 'border-black/6 bg-white'}`}
        >
            {/* Background ambient glow */}
            {isDarkMode && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full blur-[10rem] bg-indigo-600/10 pointer-events-none" />
            )}

            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
                
                {/* ── Left Column — Carousel Card ── */}
                <motion.div
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.28 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: contentY }}
                    className="order-2 lg:order-1"
                >
                    <div className={`group relative overflow-hidden rounded-[22px] md:rounded-[28px] border transition-all duration-500 min-h-[340px] md:min-h-[460px] flex flex-col justify-between hover:-translate-y-1.5 hover:scale-[1.02] ${
                        isDarkMode
                            ? 'border-[rgba(125,125,255,0.25)] hover:border-[rgba(125,125,255,0.5)] bg-[#0B0B14] shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_48px_rgba(125,125,255,0.25)]'
                            : 'border-blue-300 hover:border-blue-500 bg-white shadow-[0_8px_32px_rgba(59,130,246,0.1)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]'
                    }`}>
                        
                        {/* ── Background Images (Cross-fading) ── */}
                        <div className="absolute inset-0 z-0">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 [mask-image:linear-gradient(to_bottom,black_0%,black_42%,transparent_100%)] sm:[mask-image:linear-gradient(to_right,transparent,black_40%)] ${
                                        isDarkMode ? 'opacity-65 group-hover:opacity-100 mix-blend-screen' : 'opacity-45 group-hover:opacity-70 mix-blend-multiply'
                                    }`}
                                >
                                    <div 
                                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-80 md:opacity-60"
                                        style={{ backgroundImage: `url(${isDarkMode ? ABOUT_SLIDES[activeIndex].image : ABOUT_SLIDES[activeIndex].image.replace('about_bg_', 'about_light_bg_')})` }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Background Image/Effects Full (Soft base) */}
                        {isDarkMode && (
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0B0B14]/80 to-[#0B0B14] z-0" />
                        )}
                        {!isDarkMode && (
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/60 via-white/80 to-white z-0" />
                        )}

                        {/* Soft Ambient Glow in Dark Mode */}
                        {isDarkMode && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[7rem] bg-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                        )}

                        {/* Top Row: Icon + Slide Counter */}
                        <div className="relative z-10 flex items-start justify-between p-5 md:p-10 pb-0 mb-4 md:mb-8">
                            <div className={`grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-2xl border transition-all duration-500 backdrop-blur-md ${
                                isDarkMode
                                    ? 'border-indigo-400/40 bg-indigo-500/10 text-indigo-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_20px_rgba(99,102,241,0.25)]'
                                    : 'border-blue-300/50 bg-white/50 text-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.12)]'
                            }`}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.7, rotate: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ActiveIcon className="h-5 w-5 md:h-6 md:w-6" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="flex items-baseline gap-1 bg-black/10 dark:bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                                <span className={`text-xl md:text-2xl font-black tabular-nums ${isDarkMode ? 'text-indigo-400' : 'text-blue-600'}`}>
                                    0{activeIndex + 1}
                                </span>
                                <span className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
                                    / 0{ABOUT_SLIDES.length}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-between p-5 md:p-10 pt-0">
                            <div className="min-h-[140px] md:min-h-[160px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="flex flex-col"
                                    >
                                        <h3 className={`text-xl font-bold tracking-tight md:text-3xl drop-shadow-sm ${
                                            isDarkMode ? 'text-white' : 'text-slate-900'
                                        }`}>
                                            {ABOUT_SLIDES[activeIndex].title}
                                        </h3>

                                        {/* Divider */}
                                        <div className={`mt-3 md:mt-5 h-[2px] w-12 rounded-full ${
                                            isDarkMode ? 'bg-indigo-500/50' : 'bg-blue-500/50'
                                        }`} />

                                        <p className={`mt-3 md:mt-5 text-sm md:text-[15px] leading-relaxed max-w-md ${
                                            isDarkMode ? 'text-zinc-300' : 'text-slate-600'
                                        }`}>
                                            {ABOUT_SLIDES[activeIndex].body}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Bottom Row: Arrows + Dots */}
                            <div className="mt-4 md:mt-8 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <button
                                        onClick={goPrev}
                                        aria-label="Previous slide"
                                        className={`grid h-11 w-11 place-items-center rounded-xl border backdrop-blur-md transition-all hover:-translate-y-0.5 active:scale-95 ${
                                            isDarkMode
                                                ? 'border-white/10 bg-black/20 text-white hover:border-indigo-500/40 hover:bg-indigo-500/20 hover:text-indigo-300'
                                                : 'border-slate-300/50 bg-white/50 text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600'
                                        }`}
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={goNext}
                                        aria-label="Next slide"
                                        className={`grid h-11 w-11 place-items-center rounded-xl border backdrop-blur-md transition-all hover:-translate-y-0.5 active:scale-95 ${
                                            isDarkMode
                                                ? 'border-indigo-500/40 bg-indigo-500/20 text-indigo-300 shadow-[0_0_16px_rgba(99,102,241,0.2)] hover:bg-indigo-500/30'
                                                : 'border-blue-300 bg-blue-600 text-white shadow-[0_4px_12px_rgba(59,130,246,0.25)] hover:bg-blue-700'
                                        }`}
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="flex gap-2 bg-black/10 dark:bg-black/20 p-2 rounded-full backdrop-blur-sm border border-white/5">
                                    {ABOUT_SLIDES.map((slide, index) => (
                                        <button
                                            key={slide.title}
                                            onClick={() => setActiveIndex(index)}
                                            aria-label={`Go to ${slide.title}`}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                index === activeIndex
                                                    ? `w-6 ${isDarkMode ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]' : 'bg-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.5)]'}`
                                                    : `w-2 ${isDarkMode ? 'bg-white/20 hover:bg-white/40' : 'bg-slate-400 hover:bg-slate-600'}`
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Right Column — Heading + Description + Bottom Callout ── */}
                <motion.div
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.28 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                    style={{ y: contentY }}
                    className="flex flex-col order-1 lg:order-2"
                >
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-(--landing-accent)">About Us</p>
                    <h2 className="mt-3 md:mt-5 text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] md:leading-[0.95]">
                        What We<br />Stand For
                    </h2>
                    <p className={`mt-4 md:mt-6 max-w-md text-sm md:text-[16px] leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                        We&apos;re not just here to help you get placed.<br />
                        We&apos;re here to prepare you, guide you, and stay<br />
                        with you until the right opportunity comes your way.
                    </p>

                    {/* Divider */}
                    <div className={`mt-6 md:mt-10 h-px w-16 ${isDarkMode ? 'bg-white/15' : 'bg-black/15'}`} />

                    {/* Bottom Callout */}
                    <div className="mt-6 md:mt-8 flex items-center gap-4">
                        <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border backdrop-blur-sm ${
                            isDarkMode
                                ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400 shadow-[0_0_16px_rgba(99,102,241,0.2)]'
                                : 'border-blue-200 bg-blue-50 text-blue-600 shadow-[0_2px_10px_rgba(59,130,246,0.1)]'
                        }`}>
                            <Check className="h-5 w-5" />
                        </div>
                        <div>
                            <p className={`text-[15px] font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Our Placement Promise</p>
                            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
                                The standard we hold ourselves to —<br />from day one.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}


function TermsSection({ isDarkMode }: { isDarkMode: boolean }) {
    const policyCards = [
        ...TERMS,
        {
            title: 'Privacy',
            body: 'We collect only the information needed for placement operations, communication, and analytics. Data is used to support student profiles, recruiter workflows, and institution-level reporting.',
            image: '/term_privacy_1780542135426.png',
        },
        {
            title: 'Support',
            body: 'Report security issues, bugs, or access problems to the platform administrator. Users should keep their contact details current for important updates and verification.',
            image: '/term_support_1780542146969.png',
        },
    ];

    const cardCount = policyCards.length;
    const sectionRef = useRef<HTMLElement>(null);
    const [activeCard, setActiveCard] = useState(0);
    const currentCard = activeCard;
    const activeCardRef = useRef(0);
    const touchStartYRef = useRef<number | null>(null);

    useEffect(() => { activeCardRef.current = activeCard; }, [activeCard]);

    // Section-scoped wheel + touch — no window hijacking, no extra height
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleWheel = (e: WheelEvent) => {
            const cur = activeCardRef.current;
            if (e.deltaY > 0 && cur < cardCount - 1) {
                e.preventDefault();
                e.stopPropagation();
                activeCardRef.current = cur + 1;
                setActiveCard(cur + 1);
            } else if (e.deltaY < 0 && cur > 0) {
                e.preventDefault();
                e.stopPropagation();
                activeCardRef.current = cur - 1;
                setActiveCard(cur - 1);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartYRef.current = e.touches[0]?.clientY ?? null;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (touchStartYRef.current === null) return;
            const currentY = e.touches[0]?.clientY;
            if (currentY === undefined) return;
            const delta = touchStartYRef.current - currentY;
            if (Math.abs(delta) < 36) return;
            const cur = activeCardRef.current;
            if (delta > 0 && cur < cardCount - 1) {
                e.preventDefault();
                activeCardRef.current = cur + 1;
                setActiveCard(cur + 1);
                touchStartYRef.current = currentY;
            } else if (delta < 0 && cur > 0) {
                e.preventDefault();
                activeCardRef.current = cur - 1;
                setActiveCard(cur - 1);
                touchStartYRef.current = currentY;
            }
        };

        section.addEventListener('wheel', handleWheel, { passive: false });
        section.addEventListener('touchstart', handleTouchStart, { passive: true });
        section.addEventListener('touchmove', handleTouchMove, { passive: false });
        return () => {
            section.removeEventListener('wheel', handleWheel);
            section.removeEventListener('touchstart', handleTouchStart);
            section.removeEventListener('touchmove', handleTouchMove);
        };
    }, [cardCount]);

    return (
        <section
            id="terms"
            ref={sectionRef}
            className={`relative h-screen overflow-hidden ${isDarkMode ? 'bg-[#05050A]' : 'bg-slate-50'}`}
        >
            {/* DESKTOP */}
            <div className="hidden lg:flex h-full w-full">
                <div className="mx-auto w-full max-w-7xl px-8 h-full flex items-center">
                    <div className="flex items-start gap-16 w-full h-[88vh]">
                        {/* Left — Image */}
                        <div className="w-[45%] h-full shrink-0">
                            <div className={`relative w-full h-full rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-2xl border ${isDarkMode ? 'bg-white/[0.03] border-white/8' : 'bg-white/50 border-white/70'}`}>
                                {isDarkMode && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[6rem] bg-indigo-600/20 pointer-events-none" />
                                )}
                                <Image src="/terms&cond.png" alt="Legal & Compliance" fill sizes="(max-width: 1024px) 100vw, 50vw" className={`object-cover ${isDarkMode ? 'opacity-80 mix-blend-lighten' : ''}`} />
                            </div>
                        </div>
                        {/* Right — Heading + Card stack + Nav */}
                        <div className="w-[55%] h-full flex flex-col">
                            <div className="shrink-0 pb-4">
                                <SectionHeader eyebrow="Legal & Policies" title="Terms and Conditions" copy="Last updated: May 2026. These terms apply to all users of Aarambh and define how the platform, data, and placement workflows should be used." isDarkMode={isDarkMode} align="left" />
                            </div>
                            <div
                                className="flex-1 relative overflow-hidden"
                                style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%)' }}
                            >
                                <div className="absolute inset-0 flex items-start justify-center pt-4">
                                    {policyCards.map((card, index) => {
                                        const offset = index - currentCard;
                                        const depth = Math.abs(offset);
                                        const isVisible = offset <= 1 && offset >= -3;
                                        const y = offset <= 0 ? depth * 22 : 42 + offset * 28;
                                        const scale = offset <= 0 ? 1 - depth * 0.045 : 0.94;
                                        const opacity = offset === 0 ? 1 : offset < 0 ? Math.max(0.24, 0.72 - depth * 0.16) : 0;
                                        return (
                                            <motion.div
                                                key={card.title}
                                                className="absolute w-full"
                                                animate={{ opacity: isVisible ? opacity : 0, scale, y }}
                                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                                style={{ zIndex: index <= currentCard ? index + 1 : 0, pointerEvents: offset === 0 ? 'auto' : 'none' }}
                                            >
                                                <PolicyCard index={index} title={card.title} body={card.body} image={card.image} isDarkMode={isDarkMode} />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="flex lg:hidden h-full flex-col w-full py-6 mx-auto max-w-2xl overflow-hidden">
                {/* Header image — compact strip */}
                <div className={`relative mx-4 h-[130px] sm:h-[160px] rounded-[1.25rem] overflow-hidden border mb-3 shrink-0 ${isDarkMode ? 'border-white/10 bg-black/20' : 'border-black/5 bg-white'} shadow-lg`}>
                    <img src="/terms&cond.png" alt="Legal & Compliance" className="w-full h-full object-cover" />
                    {/* overlay text on image */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">Legal & Policies</span>
                        <span className="text-sm font-bold text-white leading-tight">Terms and Conditions</span>
                        <span className={`text-[10px] mt-0.5 ${isDarkMode ? 'text-zinc-300' : 'text-zinc-200'}`}>Last updated: May 2026</span>
                    </div>
                </div>

                {/* Card area with floating side buttons */}
                <div className="relative flex-1 min-h-0">
                    {/* Floating LEFT button */}
                    <button
                        onClick={() => { const n = Math.max(0, activeCard - 1); setActiveCard(n); activeCardRef.current = n; }}
                        disabled={activeCard === 0}
                        className={`absolute left-1.5 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 active:scale-90 ${activeCard === 0 ? 'opacity-20 cursor-default' : 'opacity-80 hover:opacity-100'} ${isDarkMode
                            ? 'border-white/20 bg-white/10 text-white backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                            : 'border-slate-200/80 bg-white/80 text-slate-700 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.12)]'
                        }`}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    {/* Floating RIGHT button */}
                    <button
                        onClick={() => { const n = Math.min(cardCount - 1, activeCard + 1); setActiveCard(n); activeCardRef.current = n; }}
                        disabled={activeCard === cardCount - 1}
                        className={`absolute right-1.5 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 active:scale-90 ${activeCard === cardCount - 1 ? 'opacity-20 cursor-default' : 'opacity-80 hover:opacity-100'} ${isDarkMode
                            ? 'border-white/20 bg-white/10 text-white backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                            : 'border-slate-200/80 bg-white/80 text-slate-700 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.12)]'
                        }`}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>

                    {/* Card stack */}
                    <div className="absolute inset-0 flex items-center justify-center px-12">
                        {policyCards.map((card, index) => {
                            const offset = index - currentCard;
                            const distance = Math.abs(offset);
                            const isVisible = distance <= 2;
                            const x = offset === 0 ? 0 : offset > 0 ? 105 + (distance - 1) * 6 : -105 - (distance - 1) * 6;
                            const scale = offset === 0 ? 1 : distance === 1 ? 0.88 : 0.76;
                            const opacity = offset === 0 ? 1 : distance === 1 ? 0.35 : 0.12;
                            return (
                                <div
                                    key={card.title}
                                    className="absolute w-full max-w-[320px] transition-all duration-500 ease-out"
                                    style={{
                                        transform: `translateX(${x}%) scale(${scale})`,
                                        opacity: isVisible ? opacity : 0,
                                        zIndex: cardCount - distance,
                                        pointerEvents: offset === 0 ? 'auto' : 'none',
                                    }}
                                >
                                    <PolicyCard index={index} title={card.title} body={card.body} image={card.image} isDarkMode={isDarkMode} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Dot indicator strip */}
                <div className="shrink-0 flex items-center justify-center gap-1.5 pt-3 pb-1">
                    {policyCards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setActiveCard(i); activeCardRef.current = i; }}
                            className="h-1.5 rounded-full transition-all duration-300"
                            style={{
                                width: i === activeCard ? 18 : 5,
                                background: i === activeCard
                                    ? (isDarkMode ? '#818cf8' : '#2563eb')
                                    : (isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'),
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PolicyCard({ index, title, body, image, isDarkMode }: {
    index: number;
    title: string;
    body: string;
    image?: string;
    isDarkMode: boolean;
}) {
    const bulletPoints = body.split('. ').filter(Boolean).map(s => s.trim() + (s.endsWith('.') ? '' : '.'));

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className={`group relative min-h-[352px] w-full overflow-hidden rounded-[20px] border transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] md:min-h-0 md:rounded-[28px] md:backdrop-blur-2xl ${
                isDarkMode
                    ? 'border-[rgba(160,160,255,0.34)] hover:border-[rgba(125,125,255,0.5)] bg-[#121218] shadow-[0_18px_52px_rgba(0,0,0,0.65)] hover:bg-[#171722] hover:shadow-[0_16px_48px_rgba(125,125,255,0.25)] md:border-[rgba(125,125,255,0.25)] md:bg-[#0B0B14] md:shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
                    : 'border-slate-200 hover:border-blue-500 bg-white shadow-[0_18px_42px_rgba(59,130,246,0.13)] hover:bg-white hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] md:border-blue-300 md:shadow-[0_8px_32px_rgba(59,130,246,0.1)]'
            }`}
        >
            <div className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70 md:hidden" />
            {/* Background Image/Effects Full (Soft base) */}
            {isDarkMode && (
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/24 via-[#0B0B14]/65 to-[#0B0B14]/90 md:from-indigo-900/20 md:via-[#0B0B14]/80 md:to-[#0B0B14] z-0" />
            )}
            {!isDarkMode && (
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/65 via-white/70 to-white/85 md:from-blue-100/60 md:via-white/80 md:to-white z-0" />
            )}

            {/* Soft Ambient Glow in Dark Mode */}
            {isDarkMode && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[7rem] bg-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            )}

            {/* Floating image (desktop) / Top image (mobile) */}
            {image && (
                <div className={`
                    relative w-full h-40 md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[55%] md:h-auto z-0 pointer-events-none transition-opacity duration-700 
                    [mask-image:linear-gradient(to_bottom,black_72%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_40%)]
                    ${isDarkMode ? 'opacity-90 md:opacity-40 group-hover:opacity-100' : 'opacity-100 md:opacity-80 group-hover:opacity-100'}
                `}>
                     <img src={isDarkMode ? image : `/term_${index + 1}.png`} alt={title} className={`w-full h-full object-cover ${isDarkMode ? 'md:mix-blend-screen opacity-90 md:opacity-50' : 'md:mix-blend-multiply opacity-100 md:opacity-90'} group-hover:scale-105 transition-transform duration-700`} />
                </div>
            )}
            
            <div className="relative z-10 p-5 md:p-10 flex flex-col h-full w-full lg:w-[85%]">
                
                {/* Header Row: Icon + Title */}
                <div className="flex items-start gap-4 md:gap-6">
                    <div className={`shrink-0 grid h-10 w-10 md:h-16 md:w-16 place-items-center rounded-xl md:rounded-2xl border transition-all duration-500 ${
                        isDarkMode
                            ? 'border-indigo-400/40 bg-gradient-to-br from-indigo-500/30 to-violet-600/10 text-indigo-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(99,102,241,0.2)] group-hover:border-indigo-400/70 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]'
                            : 'border-blue-400 bg-white text-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.1)] group-hover:border-blue-500 group-hover:shadow-[0_8px_24px_rgba(59,130,246,0.2)]'
                    }`}>
                        <svg className="w-5 h-5 md:w-7 md:h-7 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            <circle cx="12" cy="10" r="2.5" />
                            <path d="M16 16.5c0-1.5-2-2.5-4-2.5s-4 1-4 2.5" />
                        </svg>
                    </div>

                    <div className="pt-0.5 md:pt-1">
                        <h3 className={`text-xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                            isDarkMode ? 'text-white drop-shadow-md' : 'text-slate-900 drop-shadow-sm'
                        }`}>
                            {title}
                        </h3>
                        <p className={`mt-2 md:mt-3 text-[13px] md:text-[15px] leading-relaxed max-w-xl transition-colors duration-300 ${
                            isDarkMode ? 'text-zinc-300' : 'text-slate-600'
                        }`}>
                            {bulletPoints[0]}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className={`my-4 md:my-8 h-px w-full max-w-xl ${
                    isDarkMode ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'
                }`} />

                {/* List Items */}
                <div className="flex-1 flex flex-col gap-3 md:gap-4 max-w-md">
                    {bulletPoints.slice(1).map((pt, i) => (
                        <div key={i} className="flex items-center gap-3 md:gap-4">
                            <div className={`shrink-0 grid h-6 w-6 md:h-8 md:w-8 place-items-center rounded-full border ${
                                isDarkMode 
                                    ? 'border-indigo-500/20 bg-indigo-500/10 text-indigo-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' 
                                    : 'border-blue-200 bg-blue-50 text-blue-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]'
                            }`}>
                                {i === 0 ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : i === 1 ? <User className="w-3 h-3 md:w-4 md:h-4" /> : <Tag className="w-3 h-3 md:w-4 md:h-4" />}
                            </div>
                            <span className={`text-[13px] md:text-[15px] ${
                                isDarkMode ? 'text-zinc-300' : 'text-slate-600'
                            }`}>
                                {pt}
                            </span>
                        </div>
                    ))}
                    {/* Fallback items if there are not enough sentences in body */}
                    {bulletPoints.length <= 1 && (
                         <>
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className={`shrink-0 grid h-6 w-6 md:h-8 md:w-8 place-items-center rounded-full border ${
                                    isDarkMode 
                                        ? 'border-indigo-500/20 bg-indigo-500/10 text-indigo-400' 
                                        : 'border-blue-200 bg-blue-50 text-blue-600'
                                }`}>
                                    <Check className="w-3 h-3 md:w-4 md:h-4" />
                                </div>
                                <span className={`text-[13px] md:text-[15px] ${isDarkMode ? 'text-zinc-300' : 'text-slate-600'}`}>Strict compliance guidelines applied</span>
                            </div>
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className={`shrink-0 grid h-6 w-6 md:h-8 md:w-8 place-items-center rounded-full border ${
                                    isDarkMode 
                                        ? 'border-indigo-500/20 bg-indigo-500/10 text-indigo-400' 
                                        : 'border-blue-200 bg-blue-50 text-blue-600'
                                }`}>
                                    <User className="w-3 h-3 md:w-4 md:h-4" />
                                </div>
                                <span className={`text-[13px] md:text-[15px] ${isDarkMode ? 'text-zinc-300' : 'text-slate-600'}`}>Role-based access permissions</span>
                            </div>
                         </>
                    )}
                </div>

                {/* Bottom Tags */}
                <div className="mt-5 md:mt-8 flex flex-wrap gap-3 md:gap-4 shrink-0">
                    <div className={`flex items-center gap-1.5 md:gap-2 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold border transition-all duration-300 ${
                        isDarkMode
                            ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
                            : 'border-blue-200 bg-blue-50/50 text-blue-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]'
                    }`}>
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        Compliance
                    </div>
                    <div className={`flex items-center gap-1.5 md:gap-2 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold border transition-all duration-300 ${
                        isDarkMode
                            ? 'border-white/10 bg-white/[0.03] text-zinc-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
                            : 'border-black/5 bg-black/[0.02] text-slate-600 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]'
                    }`}>
                        <User className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        Access Control
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function SectionHeader({ eyebrow, title, copy, isDarkMode, align = 'center' }: { eyebrow: string; title: string; copy: string; isDarkMode: boolean; align?: 'left' | 'center' }) {
    return (
        <AnimatedHeading eyebrow={eyebrow} title={title} copy={copy} isDarkMode={isDarkMode} align={align} />
    );
}


function InputBlock({ label, icon: Icon, isTextArea, isDarkMode, ...props }: { label: string, icon?: ElementType, isTextArea?: boolean, isDarkMode: boolean } & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className={`relative rounded-xl border px-3 py-2.5 md:px-4 md:py-3 transition-all backdrop-blur-sm ${isDarkMode ? 'border-white/10 bg-white/[0.04] focus-within:border-violet-500/50 focus-within:bg-white/[0.06]' : 'border-white/60 bg-white/60 focus-within:border-blue-500/50 focus-within:bg-white/90'}`}>
            <label className={`block text-xs mb-1 font-medium ${isDarkMode ? 'text-zinc-400' : 'text-slate-500'}`}>{label}</label>
            <div className="flex items-start">
                {isTextArea ? (
                    <textarea 
                        className={`w-full bg-transparent text-sm outline-none resize-none ${isDarkMode ? 'text-white placeholder:text-zinc-600' : 'text-slate-900 placeholder:text-slate-400'}`} 
                        rows={4}
                        {...props} 
                    />
                ) : (
                    <input 
                        className={`w-full bg-transparent text-sm outline-none ${isDarkMode ? 'text-white placeholder:text-zinc-600' : 'text-slate-900 placeholder:text-slate-400'}`} 
                        {...props} 
                    />
                )}
                {Icon && <Icon className={`h-4 w-4 mt-0.5 ml-2 ${isDarkMode ? 'text-zinc-500' : 'text-slate-400'}`} />}
            </div>
        </div>
    );
}

function ContactRow({ icon: Icon, title, value, link, isDarkMode }: { icon: ElementType, title: string, value: string, link?: string, isDarkMode: boolean }) {
    return (
        <div className="flex items-center gap-4">
            <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full backdrop-blur-sm border ${isDarkMode ? 'bg-white/[0.06] border-white/10 text-violet-400' : 'bg-white/70 border-white/80 text-blue-600 shadow-sm'}`}>
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <div className={`text-[15px] font-semibold mb-0.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{title}</div>
                {link ? (
                    <a href={link} className={`text-[15px] ${isDarkMode ? 'text-violet-400 hover:text-violet-300' : 'text-blue-600 hover:text-blue-700'}`}>{value}</a>
                ) : (
                    <div className={`text-[15px] ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>{value}</div>
                )}
            </div>
        </div>
    );
}

function ContactSection({ isDarkMode }: { isDarkMode: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mailSubject = encodeURIComponent(subject || `Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:ascendiollp@gmail.com?subject=${mailSubject}&body=${body}`;
        setName(''); setEmail(''); setSubject(''); setMessage('');
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };



    return (
        <section ref={sectionRef} id="contact" className={`relative overflow-hidden px-4 py-12 md:py-24 md:px-6 ${isDarkMode ? 'bg-[#0d0e11]' : 'bg-slate-50/80'}`}>
            <div className="relative mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column */}
                    <RevealOnScroll variant="fadeRight" className="flex flex-col pt-4">
                        <h3 className={`text-3xl md:text-4xl font-bold tracking-tight mb-2 md:mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Let's Talk</h3>
                        <p className={`mb-6 md:mb-12 max-w-sm text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                            Have a question or want to work together? We&apos;d love to hear from you.
                        </p>

                        <div className="flex flex-col gap-4 md:gap-6">
                            <ContactRow icon={Mail} title="Email" value="ascendiollp@gmail.com" link="mailto:ascendiollp@gmail.com" isDarkMode={isDarkMode} />
                            <div className={`h-px w-full ${isDarkMode ? 'bg-white/5' : 'bg-black/5'}`} />
                            <ContactRow icon={Phone} title="Phone" value="+91 82818 91391" link="tel:+918281891391" isDarkMode={isDarkMode} />
                            <div className={`h-px w-full ${isDarkMode ? 'bg-white/5' : 'bg-black/5'}`} />
                            <ContactRow icon={MapPin} title="Address" value="Trivandrum, Kerala" isDarkMode={isDarkMode} />
                            <div className={`h-px w-full ${isDarkMode ? 'bg-white/5' : 'bg-black/5'}`} />
                            <ContactRow icon={Clock} title="Business Hours" value="Mon - Fri: 9:00 AM - 6:00 PM (IST)" isDarkMode={isDarkMode} />
                        </div>
                    </RevealOnScroll>

                    {/* Right Column (Form) */}
                    <RevealOnScroll variant="fadeLeft" delay={0.08} className={`p-5 md:p-10 rounded-2xl md:rounded-3xl border backdrop-blur-2xl ${isDarkMode ? 'bg-white/[0.04] border-white/8 shadow-2xl shadow-black/50' : 'bg-white/70 border-white/80 shadow-xl shadow-slate-200/50'}`}>
                        <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Send us a message</h3>
                        <p className={`mb-6 md:mb-8 text-xs md:text-sm ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                            Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>

                        {sent ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex h-52 md:h-64 flex-col items-center justify-center text-center"
                            >
                                <div className={`grid h-12 w-12 md:h-16 md:w-16 place-items-center rounded-full border mb-4 ${isDarkMode ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-emerald-200 bg-emerald-50 text-emerald-600'}`}>
                                    <Check className="h-6 w-6 md:h-8 md:w-8" />
                                </div>
                                <div className="mb-2 text-xl md:text-2xl font-bold text-emerald-500">Message Sent!</div>
                                <p className={`text-xs md:text-sm ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                                    Thank you for reaching out. We will get back to you soon.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                    <InputBlock label="Full Name" placeholder="Enter your name" icon={User} value={name} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setName(e.target.value)} required isDarkMode={isDarkMode} />
                                    <InputBlock label="Email Address" placeholder="Enter your email" type="email" icon={Mail} value={email} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(e.target.value)} required isDarkMode={isDarkMode} />
                                </div>
                                <InputBlock label="Subject" placeholder="What is this regarding?" icon={Tag} value={subject} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSubject(e.target.value)} required isDarkMode={isDarkMode} />
                                <InputBlock label="Message" placeholder="Type your message here..." icon={Pencil} isTextArea value={message} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setMessage(e.target.value)} required isDarkMode={isDarkMode} />

                                <button
                                    type="submit"
                                    className={`mt-2 flex h-12 md:h-14 w-full items-center justify-center gap-2 rounded-xl text-sm md:text-[15px] font-semibold transition-all hover:-translate-y-0.5 active:scale-95 ${isDarkMode ? 'bg-violet-600 text-white hover:bg-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.3)]' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20'}`}
                                >
                                    <Send className="h-4 w-4 md:h-[18px] md:w-[18px]" />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}

function Footer({ isDarkMode, onOpenSupport, onOpenPrivacy }: { isDarkMode: boolean; onOpenSupport?: () => void; onOpenPrivacy?: () => void }) {
    return (
        <section id="footer">
            <footer className={`border-t px-4 py-8 sm:px-6 backdrop-blur-xl ${isDarkMode ? 'border-white/10 bg-black/60 text-white' : 'border-black/8 bg-white/80 text-slate-900'}`}>
                <div className="mx-auto flex max-w-7xl flex-col gap-6 md:gap-8 text-center md:text-left md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-3 md:gap-4">
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="bg-white/0 rounded-lg p-1 shadow-sm scale-90 md:scale-100">
                                <AnimatedLogoMark size="sm" role="landing" />
                            </div>
                            <span className="hidden sm:block text-sm font-black uppercase tracking-[0.22em]">Aarambh</span>
                        </div>
                        <div className="md:ml-2 text-xs md:text-sm text-slate-600">
                            {/* <div className="font-semibold text-slate-800">Aarambh Platform</div> */}
                            {/* <div className="mt-1">123 Innovation Drive</div> */}
                            <div>Trivandrum, Kerala</div>
                            <div className="mt-1">Phone: <Link href="tel:+918281891391">+91 82818 91391</Link></div>
                            <div className="mt-1">Phone: <Link href="tel:+918921519949">+91 89215 19949</Link></div>
                            <div>Email: <Link href="mailto:ascendiollp@gmail.com">ascendiollp@gmail.com</Link></div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 md:gap-4">
                        <p className="text-xs md:text-sm text-slate-500">© 2026 Aarambh by Ascendio LLP. All rights reserved.</p>

                        <div className="flex gap-2">
                            <Link href="https://linkedin.com/company/aarambhofficial" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                className={`grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-lg border transition hover:border-(--landing-accent) hover:text-(--landing-accent) ${isDarkMode ? 'border-white/10 text-zinc-400' : 'border-black/10 text-zinc-500'}`}>
                                <svg className="h-3.5 w-3.5 md:h-4 md:w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </Link>
                            <Link href="https://x.com/ascendioglobal" target="_blank" rel="noopener noreferrer" aria-label="X"
                                className={`grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-lg border transition hover:border-(--landing-accent) hover:text-(--landing-accent) ${isDarkMode ? 'border-white/10 text-zinc-400' : 'border-black/10 text-zinc-500'}`}>
                                <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
                            </Link>
                            <Link href="https://instagram.com/ascendio_global" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                                className={`grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-lg border transition hover:border-(--landing-accent) hover:text-(--landing-accent) ${isDarkMode ? 'border-white/10 text-zinc-400' : 'border-black/10 text-zinc-500'}`}>
                                <svg className="h-3.5 w-3.5 md:h-4 md:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-semibold text-slate-700">
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                <p className="mt-2 text-sm text-slate-600">Send us a message and we&apos;ll get back to you soon.</p>
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
