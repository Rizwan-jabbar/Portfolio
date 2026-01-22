import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'Aurora Analytics Platform',
        type: 'SaaS Dashboard',
        description: 'Realtime analytics hub with AI-assisted insights, theming, and team permissions.',
        stack: ['React 19', 'Tailwind', 'Framer Motion'],
        metrics: 'System launch in 4 weeks · 60% faster experiments',
        cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        live: 'https://example.com/aurora',
        repo: 'https://github.com/example/aurora'
    },
    {
        title: 'Neon Commerce Experience',
        type: 'E-commerce Rebrand',
        description: 'Headless storefront with shoppable stories, localized content, and API-first CMS.',
        stack: ['Next.js', 'Sanity', 'Stripe'],
        metrics: '3.2x conversion lift · 6 week timeline',
        cover: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80',
        live: 'https://example.com/neon',
        repo: 'https://github.com/example/neon'
    },
    {
        title: 'Waypoint Marketing OS',
        type: 'Marketing Microsites',
        description: 'Modular kit letting marketing launch bespoke pages without dev intervention.',
        stack: ['Remix', 'Contentful', 'GSAP'],
        metrics: '12 launches/quarter · 98+ Lighthouse score',
        cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        live: 'https://example.com/waypoint',
        repo: 'https://github.com/example/waypoint'
    },
    {
        title: 'Pulse Health Portal',
        type: 'Patient Platform',
        description: 'HIPAA-ready portal for scheduling, lab results, and telehealth visits.',
        stack: ['Vue', 'Vite', 'Supabase'],
        metrics: 'Onboarded 25 clinics · 24/7 uptime',
        cover: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80',
        live: 'https://example.com/pulse',
        repo: 'https://github.com/example/pulse'
    }
]

const PROJECTS_PER_PAGE = 2

const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

function Projects () {
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
    const startIndex = (page - 1) * PROJECTS_PER_PAGE
    const visibleProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

    const paginate = (direction) => {
        setPage((prev) => {
            const nextPage = prev + direction
            if (nextPage < 1) return 1
            if (nextPage > totalPages) return totalPages
            return nextPage
        })
    }

    const goToPage = (targetPage) => {
        if (targetPage >= 1 && targetPage <= totalPages) {
            setPage(targetPage)
        }
    }

    return (
        <section id="projects" className="relative overflow-hidden bg-slate-50 py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
                <div className="absolute left-6 top-10 h-56 w-56 rounded-full bg-indigo-300/20 blur-[120px] dark:bg-indigo-500/15" />
                <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-[110px] dark:bg-cyan-400/10" />
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
                        Selected Work
                    </p>
                    <h2 className="mt-6 text-3xl font-semibold text-slate-900 md:text-4xl dark:text-white">
                        Launch-ready builds, purpose-made for modern teams.
                    </h2>
                    <p className="mt-4 text-base text-slate-600 dark:text-white/70">
                        A snapshot of recent engagements blending strategy, UI systems, and production code.
                    </p>
                </motion.div>

                <motion.div
                    key={page}
                    className="mt-14 grid gap-6 md:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    {visibleProjects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            variants={fadeIn}
                            className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-white/5 dark:shadow-[0_12px_40px_rgba(15,23,42,0.45)]"
                        >
                            <motion.div
                                className="relative h-48 overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                <img src={project.cover} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                                <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-800 dark:border-white/25 dark:bg-white/10 dark:text-white/80">
                                    {String(startIndex + index + 1).padStart(2, '0')}
                                </div>
                                <div className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 dark:bg-white/90">
                                    Case Study
                                </div>
                            </motion.div>

                            <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.4em] text-emerald-500 dark:text-emerald-300">{project.type}</p>
                                    <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-white/75">{project.description}</p>
                                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/15">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-white/60">{project.metrics}</p>
                                <div className="mt-auto flex flex-wrap gap-3">
                                    <a
                                        href={project.live}
                                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
                                    >
                                        Visit
                                        <FiExternalLink />
                                    </a>
                                    <a
                                        href={project.repo}
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-900 dark:border-white/20 dark:text-white/80 dark:hover:text-white"
                                    >
                                        Code
                                        <FiGithub />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="mt-12 flex flex-col gap-6 text-slate-600 dark:text-white/70 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => paginate(-1)}
                            disabled={page === 1}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition disabled:opacity-40 dark:border-white/20"
                        >
                            Prev
                            <FiArrowUpRight style={{ transform: 'rotate(225deg)' }} />
                        </button>
                        <button
                            type="button"
                            onClick={() => paginate(1)}
                            disabled={page === totalPages}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition disabled:opacity-40 dark:border-white/20"
                        >
                            Next
                            <FiArrowUpRight />
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">Page {page} of {totalPages}</span>
                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }).map((_, idx) => {
                                const pageNumber = idx + 1
                                const isActive = pageNumber === page
                                return (
                                    <button
                                        key={`page-${pageNumber}`}
                                        type="button"
                                        aria-label={`Go to page ${pageNumber}`}
                                        onClick={() => goToPage(pageNumber)}
                                        className={`h-2.5 w-8 rounded-full transition ${
                                            isActive
                                                ? 'bg-slate-900 dark:bg-white'
                                                : 'bg-slate-200 hover:bg-slate-300 dark:bg-white/20 dark:hover:bg-white/40'
                                        }`}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects