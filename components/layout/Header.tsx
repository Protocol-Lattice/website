import React, { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NAV_ITEMS, COMPANY_INFO, SOCIAL_LINKS } from '../../constants';
import { useTheme } from '../../hooks/useTheme';
import { Icons } from '../Icons';

function Header() {
    const { setCommandPaletteOpen } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-40 w-full glass"
            style={{ borderBottom: '1px solid hsla(var(--color-border-subtle), 0.5)' }}
        >
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* Logo */}
                <a href="/#" className="flex items-center space-x-3 group">
                    <div
                        className="relative p-1.5 rounded-lg transition-all duration-300 group-hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.15) 0%, hsla(192, 91%, 50%, 0.1) 100%)',
                        }}
                    >
                        <img
                            src="/logo.png"
                            alt="Protocol Lattice Logo"
                            className="h-7 w-7"
                        />
                    </div>
                    <span
                        className="font-bold text-lg gradient-text hidden sm:inline"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {COMPANY_INFO.name}
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-1 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="nav-link"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                    {/* Search Button (Desktop) */}
                    <button
                        className="hidden h-9 items-center justify-between gap-4 px-3 rounded-lg md:flex transition-all duration-300"
                        onClick={() => setCommandPaletteOpen(true)}
                        style={{
                            background: 'hsl(var(--color-bg-secondary))',
                            border: '1px solid hsl(var(--color-border-subtle))',
                            color: 'hsl(var(--color-text-muted))'
                        }}
                    >
                        <span className="flex items-center gap-2">
                            <Icons.search className="w-4 h-4" />
                            <span className="text-sm">Search...</span>
                        </span>
                        <kbd
                            className="inline-flex h-5 items-center gap-1 rounded px-1.5 font-mono text-[10px] font-medium"
                            style={{
                                background: 'hsl(var(--color-bg-elevated))',
                                border: '1px solid hsl(var(--color-border-subtle))',
                                color: 'hsl(var(--color-text-muted))'
                            }}
                        >
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>

                    {/* GitHub Link */}
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300"
                        style={{
                            background: 'hsl(var(--color-bg-secondary))',
                            border: '1px solid hsl(var(--color-border-subtle))',
                            color: 'hsl(var(--color-text-muted))'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'hsl(var(--color-accent-emerald))';
                            e.currentTarget.style.color = 'hsl(var(--color-accent-emerald))';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'hsl(var(--color-border-subtle))';
                            e.currentTarget.style.color = 'hsl(var(--color-text-muted))';
                        }}
                    >
                        <Icons.github className="w-4 h-4" />
                    </a>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg transition-all duration-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            background: 'hsl(var(--color-bg-secondary))',
                            border: '1px solid hsl(var(--color-border-subtle))',
                            color: 'hsl(var(--color-text-muted))'
                        }}
                    >
                        {mobileMenuOpen ? (
                            <Icons.x className="w-4 h-4" />
                        ) : (
                            <Icons.menu className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden glass-strong animate-fade-in"
                    style={{ borderTop: '1px solid hsl(var(--color-border-subtle))' }}
                >
                    <nav className="container mx-auto max-w-6xl px-4 py-4 flex flex-col space-y-2">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="nav-link py-3"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-4 border-t" style={{ borderColor: 'hsl(var(--color-border-subtle))' }}>
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 py-3"
                                style={{ color: 'hsl(var(--color-text-secondary))' }}
                            >
                                <Icons.github className="w-5 h-5" />
                                GitHub
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
