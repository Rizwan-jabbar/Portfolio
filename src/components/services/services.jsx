import { motion } from 'framer-motion'
import {
    FiMonitor,
    FiCode,
    FiFigma,
    FiShield,
    FiSmartphone,
    FiTrendingUp,
    FiServer,
    FiZap
} from 'react-icons/fi'

const services = [
    {
        title: 'UI/UX & Product Strategy',
        description: 'Customer research, journeys, and UX audits translated into pragmatic wireframes and prototypes.',
        icon: FiFigma,
        items: ['Experience mapping + journeys', 'Design system blueprints', 'Clickable prototypes']
    },
    {
        title: 'Front-End Engineering',
        description: 'Component-driven React builds with Tailwind, TypeScript, and motion for premium interactions.',
        icon: FiCode,
        items: ['Reusable UI kits + docs', 'Animation & micro-interactions', 'API-ready integration support']
    },
    {
        title: 'Responsive & Mobile Web',
        description: 'Polished layouts that adapt to every breakpoint, focused on speed, accessibility, and SEO.',
        icon: FiSmartphone,
        items: ['Performance budgets', 'WCAG + SEO best practices', 'Offline-first PWA options']
    },
    {
        title: 'Launch & Optimization',
        description: 'Analytics-driven experiments, lighthouse improvements, and growth-focused iteration after ship.',
        icon: FiTrendingUp,
        items: ['A/B & funnel testing', 'Speed + Core Web Vitals', 'Ongoing retainer support']
    }
]

const addOns = [
    { label: 'Design Systems', icon: FiMonitor },
    { label: 'Headless CMS', icon: FiServer },
    { label: 'Security Hardening', icon: FiShield },
    { label: 'Automation Scripts', icon: FiZap }
]

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function Services () {
    return (
        <section id="services" className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950" />
                <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-indigo-300/20 blur-[140px] dark:bg-indigo-500/10" />
                <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-emerald-300/25 blur-[120px] dark:bg-emerald-400/10" />
            </div>

            <div className="mx-auto max-w-6xl px-4">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-2xl font-semibold uppercase tracking-[0.35em] text-slate-500 dark:border-white/15 dark:text-white/70">
                        Services
                    </p>
                    <h2 className="mt-6 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl dark:text-white">
                        Full-stack web support—from discovery to launch and beyond.
                    </h2>
                    <p className="mt-4 text-base text-slate-600 dark:text-white/70">
                        I partner with founders, studios, and product teams to plan, design, build, and optimize modern web experiences.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-16 grid gap-8 md:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map(({ title, description, icon: Icon, items }) => (
                        <motion.article
                            key={title}
                            variants={cardVariants}
                            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_15px_50px_rgba(15,23,42,0.35)] dark:hover:border-white/20"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 dark:bg-white/10 dark:text-emerald-300">
                                    <Icon className="text-xl" />
                                </span>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
                            </div>
                            <p className="mt-4 text-sm text-slate-600 dark:text-white/70">{description}</p>
                            <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-white/75">
                                {items.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-white/10 dark:bg-white/5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500 dark:text-emerald-300">Also Available</p>
                    <div className="mt-4 grid gap-4 md:grid-cols-4">
                        {addOns.map(({ label, icon: Icon }) => (
                            <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 dark:bg-white/10 dark:text-emerald-200">
                                    <Icon />
                                </span>
                                {label}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services