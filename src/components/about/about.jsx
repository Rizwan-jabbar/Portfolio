import { motion } from 'framer-motion'
import { FiAward, FiClock, FiGlobe, FiHeart, FiPenTool, FiUsers } from 'react-icons/fi'

const pillars = [
    {
        title: 'Design-Led Engineering',
        description: 'Blend pixel-perfect visuals with scalable component systems and clean code handoffs.',
        icon: FiPenTool
    },
    {
        title: 'Collaborative Partner',
        description: 'Plug into founders, agencies, or in-house teams with async-friendly workflows and docs.',
        icon: FiUsers
    },
    {
        title: 'Impact Focused',
        description: 'Ship measurable outcomes via experiments, performance budgets, and accessibility reviews.',
        icon: FiAward
    }
]

const stats = [
    { label: 'Years crafting interfaces', value: '08+', icon: FiClock },
    { label: 'Products shipped', value: '32', icon: FiGlobe },
    { label: 'Client satisfaction', value: '4.9/5', icon: FiHeart }
]

function About () {
    return (
        <section id="about" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.35),_rgba(248,250,252,0.95))] dark:hidden" />
                <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),_rgba(2,6,23,0.98))]" />
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-emerald-300/20 via-transparent dark:from-emerald-400/15" />
                <div className="absolute -left-12 top-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-[160px] dark:bg-emerald-500/20" />
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[200px] dark:bg-indigo-500/20" />
                <div className="absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,23,42,0.08) 0%, transparent 45%)' }} />
                <div className="absolute inset-0 hidden opacity-20 dark:block" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 45%)' }} />
            </div>

            <div className="mx-auto max-w-6xl space-y-16 px-4">
                <motion.div
                    className="space-y-4 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-[0.5em] text-emerald-600 shadow-sm dark:border-white/20 dark:bg-white/5 dark:text-emerald-200">
                        About
                    </span>
                    <h2 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[3rem]">
                        Hybrid designer-engineer charting the path from spark to polished shipping.
                    </h2>
                    <p className="mx-auto max-w-3xl text-base text-slate-600 dark:text-white/70 sm:text-lg">
                        I help SaaS founders, agencies, and product orgs translate insight into immersive UI systems. Discovery, prototyping, and production-ready React builds stay under one roof so teams move quicker and ship with confidence.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-stretch">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="rounded-3xl border border-slate-200 bg-white/85 p-6 text-sm text-slate-600 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-white/75 dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-300">Working cadence</p>
                            <p className="mt-3 text-base text-slate-900 dark:text-white">
                                Discovery, north-star prototype, and systems-ready build phases keep teams aligned. Async updates land in Notion + Loom so stakeholders stay looped without calendar overload.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {pillars.map(({ title, description, icon: Icon }) => (
                                <div key={title} className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white/85 px-5 py-4 shadow-[0_15px_45px_rgba(15,23,42,0.12)] transition hover:border-emerald-300/60 hover:shadow-[0_20px_55px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_15px_50px_rgba(5,10,40,0.45)]">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                                        <Icon className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                                        <p className="text-sm text-slate-600 dark:text-white/70">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6 rounded-[40px] border border-slate-200 bg-white/85 p-6 shadow-[0_35px_120px_rgba(15,23,42,0.15)] backdrop-blur dark:border-white/15 dark:bg-white/5 dark:shadow-[0_35px_120px_rgba(0,0,0,0.55)]"
                    >
                        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
                            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-300">What to expect</p>
                            <ul className="mt-4 space-y-3 text-left">
                                <li className="flex items-start gap-2 text-slate-700 dark:text-white/80">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    Structured discovery calls + collaborative Figma boards
                                </li>
                                <li className="flex items-start gap-2 text-slate-700 dark:text-white/80">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    Roadmaps with async Loom recaps + Notion status tracking
                                </li>
                                <li className="flex items-start gap-2 text-slate-700 dark:text-white/80">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    Engineering-ready deliverables (Storybook, docs, QA passes)
                                </li>
                            </ul>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            {stats.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-center shadow-[0_12px_40px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/5">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                                        <Icon />
                                    </div>
                                    <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
                                    <p className="text-[0.6rem] uppercase tracking-[0.35em] text-slate-500 dark:text-white/60">{label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-6 text-sm text-slate-600 shadow-[0_15px_55px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-gradient-to-br dark:from-white/10 dark:via-transparent dark:to-transparent dark:text-white/80">
                            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-300">Currently collaborating with</p>
                            <p className="mt-3 text-base text-slate-900 dark:text-white">B2B SaaS, health tech, climate tech, and boutique agencies across NA + EU.</p>
                            <p className="text-sm text-slate-600 dark:text-white/70">Open for fractional product squads, agency partnerships, and direct-to-founder engagements.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About