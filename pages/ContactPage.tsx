import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../constants';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { Icons } from '../components/Icons';

function ContactPage() {
    const [isCopied, copy] = useCopyToClipboard();

    return (
        <div className="gradient-bg min-h-screen">
            <div className="container mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-4 py-16 sm:py-24">
                <div className="w-full animate-fade-in-up">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                            style={{
                                background: 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.15) 0%, hsla(192, 91%, 50%, 0.1) 100%)',
                                border: '1px solid hsla(160, 84%, 39%, 0.2)'
                            }}
                        >
                            <Icons.mail className="w-8 h-8" style={{ color: 'hsl(160, 84%, 50%)' }} />
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="gradient-text">Get In Touch</span>
                        </h1>

                        <p className="text-lg" style={{ color: 'hsl(var(--color-text-secondary))' }}>
                            {COMPANY_INFO.availability}
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div className="card" style={{ padding: 'var(--spacing-2xl)' }}>
                        {/* Email Section */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium mb-3" style={{ color: 'hsl(var(--color-text-muted))' }}>
                                Email
                            </label>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div
                                    className="flex-1 flex items-center justify-center rounded-lg font-mono text-sm py-4 px-4"
                                    style={{
                                        background: 'hsl(var(--color-bg-primary))',
                                        border: '1px solid hsl(var(--color-border-subtle))',
                                        color: 'hsl(var(--color-accent-emerald))'
                                    }}
                                >
                                    {COMPANY_INFO.email}
                                </div>
                                <button
                                    onClick={() => copy(COMPANY_INFO.email)}
                                    className="btn btn-primary"
                                    style={{ minWidth: '140px' }}
                                >
                                    {isCopied ? (
                                        <>
                                            <Icons.check className="w-4 h-4" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Icons.copy className="w-4 h-4" />
                                            Copy Email
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="divider" style={{ margin: 'var(--spacing-xl) 0' }} />

                        {/* Social Links */}
                        <div>
                            <label className="block text-sm font-medium mb-4" style={{ color: 'hsl(var(--color-text-muted))' }}>
                                Find us online
                            </label>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary flex-1 sm:flex-initial"
                                >
                                    <Icons.github className="w-5 h-5" />
                                    GitHub
                                </a>
                                <a
                                    href={SOCIAL_LINKS.utcpWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary flex-1 sm:flex-initial"
                                >
                                    <Icons.utcp className="w-5 h-5" />
                                    UTCP
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 text-center">
                        <p className="text-sm" style={{ color: 'hsl(var(--color-text-muted))' }}>
                            Want to contribute to our projects?{' '}
                            <a
                                href="https://github.com/protocol-lattice"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium transition-colors"
                                style={{ color: 'hsl(var(--color-accent-emerald))' }}
                            >
                                Check out our GitHub →
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
