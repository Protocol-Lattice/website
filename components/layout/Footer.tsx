import React from 'react';
import { SOCIAL_LINKS, COMPANY_INFO, NAV_ITEMS } from '../../constants';
import { Icons } from '../Icons';

function Footer() {
    return (
        <footer
            className="mt-auto"
            style={{
                background: 'hsl(var(--color-bg-secondary))',
                borderTop: '1px solid hsl(var(--color-border-subtle))'
            }}
        >
            <div className="container mx-auto max-w-6xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="p-2 rounded-lg"
                                style={{
                                    background: 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.15) 0%, hsla(192, 91%, 50%, 0.1) 100%)',
                                }}
                            >
                                <img
                                    src="/logo.png"
                                    alt="Protocol Lattice"
                                    className="h-6 w-6"
                                />
                            </div>
                            <span
                                className="font-bold text-lg gradient-text"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {COMPANY_INFO.name}
                            </span>
                        </div>
                        <p
                            className="text-sm max-w-md mb-4"
                            style={{ color: 'hsl(var(--color-text-secondary))', lineHeight: '1.7' }}
                        >
                            {COMPANY_INFO.shortPitch}. Building open source tools that developers love.
                        </p>
                        <div className="flex items-center space-x-3">
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2 rounded-lg transition-all duration-300"
                                style={{
                                    background: 'hsl(var(--color-bg-elevated))',
                                    color: 'hsl(var(--color-text-muted))'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'hsl(var(--color-accent-emerald))';
                                    e.currentTarget.style.background = 'hsla(var(--color-accent-emerald), 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'hsl(var(--color-text-muted))';
                                    e.currentTarget.style.background = 'hsl(var(--color-bg-elevated))';
                                }}
                            >
                                <Icons.github className="h-5 w-5" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.utcpWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="UTCP"
                                className="p-2 rounded-lg transition-all duration-300"
                                style={{
                                    background: 'hsl(var(--color-bg-elevated))',
                                    color: 'hsl(var(--color-text-muted))'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'hsl(var(--color-accent-violet))';
                                    e.currentTarget.style.background = 'hsla(var(--color-accent-violet), 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'hsl(var(--color-text-muted))';
                                    e.currentTarget.style.background = 'hsl(var(--color-bg-elevated))';
                                }}
                            >
                                <Icons.utcp className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4
                            className="font-semibold mb-4"
                            style={{ color: 'hsl(var(--color-text-primary))', fontFamily: 'var(--font-display)' }}
                        >
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-sm transition-colors"
                                        style={{ color: 'hsl(var(--color-text-secondary))' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-accent-emerald))'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--color-text-secondary))'}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4
                            className="font-semibold mb-4"
                            style={{ color: 'hsl(var(--color-text-primary))', fontFamily: 'var(--font-display)' }}
                        >
                            Resources
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm transition-colors"
                                    style={{ color: 'hsl(var(--color-text-secondary))' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-accent-emerald))'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--color-text-secondary))'}
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SOCIAL_LINKS.utcpWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm transition-colors"
                                    style={{ color: 'hsl(var(--color-text-secondary))' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-accent-emerald))'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--color-text-secondary))'}
                                >
                                    UTCP
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{ borderTop: '1px solid hsl(var(--color-border-subtle))' }}
                >
                    <p
                        className="text-sm"
                        style={{ color: 'hsl(var(--color-text-muted))' }}
                    >
                        &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Open source with ❤️
                    </p>
                    <p
                        className="text-sm"
                        style={{ color: 'hsl(var(--color-text-muted))' }}
                    >
                        MIT License
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;