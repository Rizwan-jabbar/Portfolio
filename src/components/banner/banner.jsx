import { motion } from 'framer-motion'
import { FiZap, FiLayout, FiCheckCircle, FiFigma, FiCode, FiPlay } from 'react-icons/fi'

const highlights = [
    { text: 'Pixel-perfect UI systems in React + Tailwind.', icon: FiZap },
    { text: 'Clean design handoffs with component documentation.', icon: FiLayout },
    { text: 'Performance-first builds with accessibility baked in.', icon: FiCheckCircle }
]

const stats = [
    { value: '08+', label: 'Years Building UIs' },
    { value: '30+', label: 'Web Apps Shipped' },
    { value: '4x', label: 'Avg. KPI Lift' }
]

const toolStack = [
    { label: 'Figma Systems', icon: FiFigma },
    { label: 'Clean Code', icon: FiCode },
    { label: 'Micro-interactions', icon: FiPlay }
]

const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
}

function Banner () {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 text-white sm:py-24">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.7),_rgba(2,6,23,0.95))]" />
                <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-emerald-500/25 blur-[160px]" />
                <div className="absolute bottom-0 left-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[180px]" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 35%)' }} />
            </div>

            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center lg:gap-16">
                <motion.div
                    className="order-1 flex w-full justify-center lg:order-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="relative w-full max-w-[420px]">
                        <div className="absolute -inset-6 rounded-[50px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 opacity-60 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                            <div className="absolute -top-8 left-6 hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xs uppercase tracking-[0.4em] text-white/80 shadow-lg backdrop-blur lg:flex">
                                Trusted Partner
                            </div>
                            <motion.div
                                className="relative w-full overflow-hidden rounded-[28px] border border-white/10"
                                style={{ aspectRatio: '4 / 5' }}
                                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.7 }}
                                transition={{ duration: 0.9, ease: 'easeOut' }}
                            >
                                <motion.img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
                                    alt="Portrait of a confident front-end engineer"
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                    initial={{ scale: 1.08, y: 12 }}
                                    whileInView={{ scale: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.95, ease: 'easeOut', delay: 0.1 }}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent" />
                                <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                            </motion.div>

                            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-xs text-white/70 shadow-lg">
                                <div>
                                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-emerald-300">Currently shipping</p>
                                    <p className="text-sm font-semibold text-white">AI dashboard UI</p>
                                </div>
                                <span className="rounded-full bg-emerald-400/20 px-4 py-1 text-[0.65rem] font-semibold tracking-[0.3em] text-emerald-200">Live</span>
                            </div>

                            <div className="absolute -bottom-7 right-6 hidden w-max rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-white/80 shadow-xl backdrop-blur md:flex">
                                <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-base text-emerald-300">2026</div>
                                <div>
                                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/60">Sprint ready</p>
                                    <p className="text-sm font-semibold text-white">14 components shipped</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="order-2 space-y-8 lg:order-1" initial="hidden" animate="visible" variants={stagger}>
                    <motion.p variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-emerald-200">
                        Human-centered front-end architect
                    </motion.p>

                    <motion.h1 variants={fadeIn} className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
                        Bold digital canvases engineered for fast-moving product teams.
                    </motion.h1>

                    <motion.p variants={fadeIn} className="text-base leading-relaxed text-white/70 sm:text-lg">
                        I blend motion, systems thinking, and robust React foundations to turn rough Figma boards into responsive experiences that feel alive on every screen size.
                    </motion.p>

                    <motion.ul variants={fadeIn} className="grid gap-4 sm:grid-cols-2">
                        {highlights.map(({ text, icon: Icon }) => (
                            <li key={text} className="group rounded-3xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_15px_45px_rgba(8,15,40,0.45)] transition hover:border-emerald-300/50 hover:bg-white/10">
                                <div className="mb-3 flex items-center gap-2 text-emerald-300">
                                    <Icon className="text-lg" />
                                    <span className="text-[0.6rem] uppercase tracking-[0.4em] text-white/60">Focus</span>
                                </div>
                                <p className="text-base text-white/90">{text}</p>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                        <a
                            href="/projects"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-lg transition hover:scale-105"
                        >
                            <FiPlay className="text-base" />
                            View Work
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/60"
                        >
                            <FiCheckCircle className="text-base text-emerald-300" />
                            Book a Call
                        </a>
                    </motion.div>

                    <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
                        {toolStack.map(({ label, icon: Icon }) => (
                            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/70">
                                <Icon className="text-sm text-emerald-300" />
                                {label}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeIn} className="grid gap-4 pt-4 sm:grid-cols-3">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center shadow-[0_10px_35px_rgba(15,23,42,0.6)]">
                                <p className="text-3xl font-semibold text-white">{value}</p>
                                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.4em] text-white/60">{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Banner