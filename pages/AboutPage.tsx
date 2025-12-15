import React from 'react';
import { COMPANY_INFO, FAQS, FEATURES } from '../constants';
import { Icons } from '../components/Icons';

function AboutPage() {
    const ossPhilosophy = FAQS.find(faq => faq.question.includes('contribute'));

    return (
        <div className="gradient-bg min-h-screen">
            <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
                {/* Hero */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="mb-8 flex justify-center">
                        <div
                            className="relative"
                            style={{
                                padding: '2rem',
                                background: 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.15) 0%, hsla(192, 91%, 50%, 0.1) 100%)',
                                borderRadius: 'var(--radius-2xl)',
                                border: '1px solid hsla(160, 84%, 39%, 0.2)'
                            }}
                        >
                            <img
                                src="/logo.png"
                                alt="Protocol Lattice"
                                className="h-24 w-24 animate-float"
                            />
                        </div>
                    </div>

                    <h1
                        className="text-5xl sm:text-6xl font-extrabold tracking-tight gradient-text mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {COMPANY_INFO.name}
                    </h1>

                    <p
                        className="text-xl sm:text-2xl font-medium"
                        style={{ color: 'hsl(var(--color-accent-emerald))' }}
                    >
                        {COMPANY_INFO.shortPitch}
                    </p>
                </div>

                {/* Mission */}
                <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="card" style={{ padding: 'var(--spacing-2xl)' }}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                            <div className="feature-icon" style={{ width: '40px', height: '40px' }}>
                                <Icons.target className="w-5 h-5" />
                            </div>
                            Our Mission
                        </h2>
                        <p className="text-lg" style={{ color: 'hsl(var(--color-text-secondary))', lineHeight: '1.8', marginBottom: 0 }}>
                            {COMPANY_INFO.longBio}
                        </p>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="gradient-text">Our Values</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {FEATURES.map((feature, index) => {
                            const Icon = Icons[feature.icon as keyof typeof Icons] || Icons.code;
                            return (
                                <div
                                    key={feature.title}
                                    className="card animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="feature-icon flex-shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                                {feature.title}
                                            </h3>
                                            <p style={{ color: 'hsl(var(--color-text-secondary))', marginBottom: 0, fontSize: '0.9375rem' }}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Open Source Philosophy */}
                <section className="mb-16 animate-fade-in-up">
                    <div
                        className="card"
                        style={{
                            padding: 'var(--spacing-2xl)',
                            background: 'linear-gradient(135deg, hsla(263, 70%, 60%, 0.08) 0%, hsla(217, 91%, 60%, 0.05) 100%)',
                            border: '1px solid hsla(263, 70%, 60%, 0.2)'
                        }}
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-display)' }}>
                            <div className="feature-icon" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, hsla(263, 70%, 60%, 0.15), hsla(217, 91%, 60%, 0.1))' }}>
                                <Icons.heart className="w-5 h-5" style={{ color: 'hsl(263, 70%, 60%)' }} />
                            </div>
                            Open Source Philosophy
                        </h2>
                        <p className="text-lg" style={{ color: 'hsl(var(--color-text-secondary))', lineHeight: '1.8', marginBottom: '1rem' }}>
                            We believe that great software should be accessible to everyone. All our projects are released under
                            permissive licenses (MIT/Apache 2.0) so you can use them freely in your personal and commercial projects.
                        </p>
                        <p className="text-lg" style={{ color: 'hsl(var(--color-text-secondary))', lineHeight: '1.8', marginBottom: 0 }}>
                            We welcome contributions from developers of all skill levels. Whether it's fixing a typo, improving
                            documentation, or adding new features – every contribution matters.
                        </p>
                    </div>
                </section>

                {/* Get Involved */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="gradient-text">Get Involved</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <a href="https://github.com/protocol-lattice" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">
                                <Icons.github className="w-5 h-5" />
                                Explore Projects
                            </button>
                        </a>
                        <a href="#/contact">
                            <button className="btn btn-outline">
                                <Icons.mail className="w-5 h-5" />
                                Contact Us
                            </button>
                        </a>
                    </div>

                    <p style={{ color: 'hsl(var(--color-text-muted))' }}>
                        {COMPANY_INFO.availability}
                    </p>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;
