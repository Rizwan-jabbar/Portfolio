import { useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'mp-theme'

const getInitialTheme = () => {
    if (typeof window === 'undefined') {
        return { theme: 'light', hasStoredPreference: false }
    }

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
        return { theme: stored, hasStoredPreference: true }
    }

    return { theme: 'light', hasStoredPreference: false }
}

function useTheme () {
    const { theme: initialTheme, hasStoredPreference } = getInitialTheme()
    const [theme, setTheme] = useState(initialTheme)
    const [hasPreference, setHasPreference] = useState(hasStoredPreference)

    useEffect(() => {
        if (typeof window === 'undefined') return undefined

        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)

        if (hasPreference) {
            window.localStorage.setItem(THEME_STORAGE_KEY, theme)
        } else {
            window.localStorage.removeItem(THEME_STORAGE_KEY)
        }

        return undefined
    }, [theme, hasPreference])

    useEffect(() => {
        if (typeof window === 'undefined') return undefined

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (event) => {
            if (!hasPreference) {
                setTheme(event.matches ? 'dark' : 'light')
            }
        }

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        }

        mediaQuery.addListener(handleChange)
        return () => mediaQuery.removeListener(handleChange)
    }, [hasPreference])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
        setHasPreference(true)
    }

    const setThemeExplicitly = (value) => {
        if (value === 'light' || value === 'dark') {
            setTheme(value)
            setHasPreference(true)
        }
    }

    return { theme, toggleTheme, setTheme: setThemeExplicitly }
}

export default useTheme
