import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
]

const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: FiLinkedin },
    { label: 'GitHub', href: 'https://github.com', icon: FiGithub },
    { label: 'Email', href: 'mailto:hello@example.com', icon: FiMail }
]

function Footer () {
    return (
        <footer className="relative overflow-hidden bg-slate-100 py-12 text-slate-900 dark:bg-slate-950 dark:text-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
                <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-emerald-300/20 blur-[120px] dark:bg-emerald-500/10" />
            </div>

            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-4">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">My Portfolio Studio</p>
                    <p className="text-sm text-slate-600 dark:text-white/70">Crafting intentional interfaces, systems, and launches for ambitious product teams.</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white dark:bg-white dark:text-slate-900"
                    >
                        Let’s talk
                        <FiArrowUpRight />
                    </a>
                </div>

                <div className="grid gap-6 text-sm text-slate-600 dark:text-white/70 md:grid-cols-2">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">Navigate</p>
                        <ul className="mt-3 space-y-2">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} className="transition hover:text-slate-900 dark:hover:text-white">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">Connect</p>
                        <div className="mt-3 flex items-center gap-3">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <a key={label} href={href} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/15 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white">
                                    <Icon className="text-base" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-slate-200 px-4 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-white/60 md:flex-row md:items-center md:justify-between">
                <span>© {new Date().getFullYear()} My Portfolio Studio</span>
                <span>Available for remote collaborations worldwide.</span>
            </div>
        </footer>
    )
}

export default Footer