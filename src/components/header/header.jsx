import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
    FiMenu,
    FiX,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiHome,
    FiLayers,
    FiUser,
    FiBriefcase,
    FiPhone,
    FiArrowUpRight,
    FiSun,
    FiMoon
} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'

const navLinks = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Services', path: '/services', icon: FiLayers },
    { name: 'About', path: '/about', icon: FiUser },
    { name: 'Projects', path: '/projects', icon: FiBriefcase },
    { name: 'Contact', path: '/contact', icon: FiPhone }
]

const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: FiLinkedin },
    { name: 'GitHub', href: 'https://github.com', icon: FiGithub },
    { name: 'Email', href: 'mailto:hello@example.com', icon: FiMail }
]

const fadeIn = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}

const dropdown = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.25 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
}

function NavItems ({ variant = 'desktop', onNavigate }) {
    const baseClasses = {
        desktop: 'flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white',
        mobile: 'flex items-center gap-3 rounded-xl px-3 py-2 text-base text-slate-800 hover:bg-slate-100/80 dark:text-white dark:hover:bg-white/10'
    }

    return navLinks.map(({ name, path, icon: Icon }) => (
        <motion.li key={name} variants={fadeIn}>
            <NavLink
                to={path}
                className={({ isActive }) => {
                    const activeClasses = isActive
                        ? 'text-slate-900 dark:text-white'
                        : ''
                    return `${baseClasses[variant]} ${activeClasses}`.trim()
                }}
                onClick={variant === 'mobile' && onNavigate ? onNavigate : undefined}
            >
                <Icon className="text-base text-emerald-500 dark:text-emerald-300" />
                {name}
            </NavLink>
        </motion.li>
    ))
}

function SocialIcons ({ className = '' }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/20 dark:text-white/70 dark:hover:border-white/60 dark:hover:text-white"
                >
                    <Icon className="text-base" />
                </a>
            ))}
        </div>
    )
}

function Header () {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const { theme, toggleTheme } = useTheme()

    const toggleMenu = () => setMenuOpen((prev) => !prev)
    const closeMenu = () => setMenuOpen(false)

    useEffect(() => {
        const handleScroll = () => {
            const shouldStick = window.scrollY > 40
            setIsSticky((prev) => (prev !== shouldStick ? shouldStick : prev))
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`relative overflow-hidden bg-slate-50/95 py-2 text-slate-900 transition-all duration-300 dark:bg-slate-950 dark:text-white ${
            isSticky ? 'sticky top-0 z-50 shadow-md' : 'z-30'
        }`}>
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
                <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-emerald-400/25 blur-[140px] dark:bg-emerald-500/15" />
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-400/25 blur-[150px] dark:bg-indigo-500/20" />
            </div>

            <div className="mx-auto flex max-w-6xl flex-col px-4">
                <motion.nav
                    className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200/70 bg-white/80 px-5 py-4 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold uppercase tracking-widest text-white dark:bg-white/90 dark:text-slate-900">
                            MP
                        </span>
                        <div>
                            <p className="text-base font-semibold text-slate-900 dark:text-white">My Portfolio</p>
                            <p className="text-xs text-slate-500 dark:text-white/60">Design · Code · Build</p>
                        </div>
                    </div>

                    <motion.ul
                        className="hidden items-center gap-7 md:flex"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        <NavItems />
                    </motion.ul>

                    <div className="hidden items-center gap-3 md:flex">
                        <button
                            type="button"
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/20 dark:text-white/80 dark:hover:border-white/60 dark:hover:text-white"
                        >
                            {theme === 'dark' ? <FiSun /> : <FiMoon />}
                        </button>
                        <SocialIcons />
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
                        >
                            Let’s Talk
                            <FiArrowUpRight />
                        </a>
                    </div>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-900 md:hidden dark:border-white/20 dark:text-white"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </motion.nav>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            key="mobile-nav"
                            className="md:hidden"
                            variants={dropdown}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.ul
                                className="mt-4 space-y-2 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur dark:border-white/15 dark:bg-white/10"
                                variants={fadeIn}
                                initial="hidden"
                                animate="visible"
                            >
                                <NavItems variant="mobile" onNavigate={closeMenu} />
                                <motion.li variants={fadeIn} className="pt-2">
                                    <a
                                        href="/contact"
                                        onClick={closeMenu}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
                                    >
                                        Let’s Talk
                                        <FiArrowUpRight />
                                    </a>
                                </motion.li>
                                <motion.li variants={fadeIn} className="pt-3">
                                    <button
                                        type="button"
                                        onClick={toggleTheme}
                                        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-white/30 dark:text-white"
                                    >
                                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                                    </button>
                                </motion.li>
                                <motion.li variants={fadeIn} className="pt-3">
                                    <SocialIcons className="justify-center" />
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Header