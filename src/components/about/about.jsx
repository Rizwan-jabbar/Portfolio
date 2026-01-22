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
        <section id="about" className="relative overflow-hidden bg-slate-950 py-24 text-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),_rgba(2,6,23,0.98))]" />
                <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-emerald-400/15 via-transparent" />
                <div className="absolute -left-12 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-[160px]" />
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[200px]" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 45%)' }} />
            </div>

            <div className="mx-auto max-w-6xl px-4 space-y-16">
                <motion.div
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-2xl font-semibold uppercase tracking-[0.5em] text-emerald-200">
                        About
                    </span>
                    <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[3rem]">
                        Hybrid designer-engineer charting the path from spark to polished shipping.
                    </h2>
                    <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
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
                        <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-sm text-white/75 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-emerald-300">Working cadence</p>
                            <p className="mt-3 text-base text-white">
                                Discovery, north-star prototype, and systems-ready build phases keep teams aligned. Async updates land in Notion + Loom so stakeholders stay looped without calendar overload.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {pillars.map(({ title, description, icon: Icon }) => (
                                <div key={title} className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_15px_50px_rgba(5,10,40,0.45)] transition hover:border-emerald-300/40 hover:bg-white/10">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                                        <Icon className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{title}</h3>
                                        <p className="text-sm text-white/70">{description}</p>
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
                        className="space-y-6 rounded-[40px] border border-white/15 bg-white/5 p-6 shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur"
                    >
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
                            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-emerald-300">What to expect</p>
                            <ul className="mt-4 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                    Structured discovery calls + collaborative Figma boards
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                    Roadmaps with async Loom recaps + Notion status tracking
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                    Engineering-ready deliverables (Storybook, docs, QA passes)
                                </li>
                            </ul>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            {stats.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                                        <Icon />
                                    </div>
                                    <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
                                    <p className="text-[0.6rem] uppercase tracking-[0.35em] text-white/60">{label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 text-sm text-white/80">
                            <p className="text-[0.6rem] uppercase tracking-[0.35em] text-emerald-300">Currently collaborating with</p>
                            <p className="mt-3 text-base text-white">B2B SaaS, health tech, climate tech, and boutique agencies across NA + EU.</p>
                            <p className="text-sm text-white/70">Open for fractional product squads, agency partnerships, and direct-to-founder engagements.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About