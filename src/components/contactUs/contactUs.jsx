import { motion } from 'framer-motion'
import { FiSend, FiLinkedin, FiGithub, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const contactReasons = [
    'Product design + front-end build',
    'Design system / component audit',
    'Performance or accessibility review',
    'Fractional product partnership'
]

const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: FiLinkedin },
    { label: 'GitHub', href: 'https://github.com', icon: FiGithub },
    { label: 'Email', href: 'mailto:hello@example.com', icon: FiMail }
]

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function ContactUs () {
    return (
        <section id="contact" className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
                <div className="absolute left-8 top-12 h-72 w-72 rounded-full bg-emerald-300/25 blur-[140px] dark:bg-emerald-500/15" />
                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-300/25 blur-[150px] dark:bg-indigo-500/15" />
            </div>

            <div className="mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-2xl font-semibold uppercase tracking-[0.35em] text-slate-500 dark:border-white/15 dark:text-white/70">
                        Contact
                    </p>
                    <h2 className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl dark:text-white">
                        Tell me about your product, project, or team.
                    </h2>
                    <p className="mt-3 text-base text-slate-600 dark:text-white/70">
                        I take on a few high-impact collaborations each quarter. Drop the essentials below and I’ll reply within 2 business days.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-10 lg:grid-cols-[1fr,0.85fr]">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
                    >
                        <form className="space-y-5">
                            <div className="grid gap-5 md:grid-cols-2">
                                <label className="space-y-2 text-sm font-semibold text-slate-700 dark:text-white/80">
                                    Full name
                                    <input type="text" name="name" required placeholder="Samira Khan" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-white/40 dark:focus:border-emerald-400" />
                                </label>
                                <label className="space-y-2 text-sm font-semibold text-slate-700 dark:text-white/80">
                                    Company / Organization
                                    <input type="text" name="company" required placeholder="Atlas Labs" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-white/40 dark:focus:border-emerald-400" />
                                </label>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <label className="space-y-2 text-sm font-semibold text-slate-700 dark:text-white/80">
                                    Work email
                                    <input type="email" name="email" required placeholder="samira@atlaslabs.com" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-white/40 dark:focus:border-emerald-400" />
                                </label>
                                <label className="space-y-2 text-sm font-semibold text-slate-700 dark:text-white/80">
                                    Project budget (USD)
                                    <select name="budget" required className="w-full appearance-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:focus:border-emerald-400">
                                        <option value="" className="bg-white text-slate-600 dark:bg-slate-900">Select range</option>
                                        <option className="bg-white text-slate-600 dark:bg-slate-900">Below 5k</option>
                                        <option className="bg-white text-slate-600 dark:bg-slate-900">5k - 15k</option>
                                        <option className="bg-white text-slate-600 dark:bg-slate-900">15k - 30k</option>
                                        <option className="bg-white text-slate-600 dark:bg-slate-900">30k+</option>
                                    </select>
                                </label>
                            </div>

                            <label className="space-y-2 text-sm font-semibold text-slate-700 dark:text-white/80">
                                Engagement focus
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {contactReasons.map((reason) => (
                                        <label key={reason} className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900/40 dark:text-white/80">
                                            <input type="checkbox" name="reason" value={reason} className="h-4 w-4 rounded border-slate-400 bg-white text-emerald-500 focus:ring-emerald-500 dark:border-white/30 dark:bg-transparent dark:text-emerald-400 dark:focus:ring-emerald-400" />
                                            {reason}
                                        </label>
                                    ))}
                                </div>
                            </label>

                            <label className="space-y-2 text-sm font-semibold text-slate-700 dark:text-white/80">
                                Tell me about the timeline + goals
                                <textarea name="details" rows="4" required placeholder="Context, success metrics, current blockers…" className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:placeholder:text-white/40 dark:focus:border-emerald-400" />
                            </label>

                            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 dark:bg-emerald-400/90 dark:text-slate-900">
                                Send request
                                <FiSend />
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-slate-900/70"
                    >
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                            <p className="text-xs uppercase tracking-[0.4em] text-emerald-500 dark:text-emerald-300">Availability</p>
                            <p className="mt-3 text-base text-slate-800 dark:text-white">Booking new collaborations for March 2026 starts.</p>
                        </div>

                        <div className="space-y-4 text-sm text-slate-700 dark:text-white/75">
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5">
                                <FiMail className="text-lg text-emerald-500 dark:text-emerald-300" />
                                hello@example.com
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5">
                                <FiPhone className="text-lg text-emerald-500 dark:text-emerald-300" />
                                +1 (555) 123-9876
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5">
                                <FiMapPin className="text-lg text-emerald-500 dark:text-emerald-300" />
                                Remote • EST / CET overlap
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                            <p className="text-xs uppercase tracking-[0.35em] text-emerald-500 dark:text-emerald-300">Connect</p>
                            <div className="mt-4 flex items-center gap-3">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <a key={label} href={href} aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/15 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white">
                                        <Icon className="text-lg" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs