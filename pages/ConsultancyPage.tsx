import React from 'react';
import { Icons } from '../components/Icons';
import { COMPANY_INFO } from '../constants';

const SERVICES = [
    {
        icon: 'code',
        title: 'Custom Development',
        description: 'End-to-end development of AI agents, gRPC services, GraphQL APIs, and distributed systems using our battle-tested open source tools.',
        features: ['AI Agent Development', 'gRPC/GraphQL Services', 'System Architecture', 'Performance Optimization']
    },
    {
        icon: 'zap',
        title: 'Integration & Migration',
        description: 'Seamless integration of UTCP, gRPC-GraphQL Gateway, and other Protocol Lattice tools into your existing infrastructure.',
        features: ['UTCP Integration', 'API Gateway Setup', 'Legacy Migration', 'Multi-Protocol Support']
    },
    {
        icon: 'users',
        title: 'Training & Workshops',
        description: 'Hands-on training sessions for your team on our tools, best practices, and modern development patterns.',
        features: ['Team Training', 'Code Reviews', 'Architecture Workshops', 'Best Practices']
    },
    {
        icon: 'target',
        title: 'Technical Advisory',
        description: 'Strategic guidance on architecture decisions, technology choices, and scaling strategies for your projects.',
        features: ['Architecture Review', 'Technology Selection', 'Scaling Strategy', 'Security Audit']
    }
];

const PROCESS_STEPS = [
    { step: '01', title: 'Discovery', description: 'We learn about your project, goals, and technical requirements.' },
    { step: '02', title: 'Proposal', description: 'You receive a detailed plan with timeline, deliverables, and pricing.' },
    { step: '03', title: 'Development', description: 'We build, iterate, and keep you updated throughout the process.' },
    { step: '04', title: 'Delivery', description: 'You get production-ready code, documentation, and support.' }
];

function ConsultancyPage() {
    return (
        <div className="gradient-bg min-h-screen">
            <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
                {/* Hero */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl"
                        style={{
                            background: 'linear-gradient(135deg, hsla(263, 70%, 60%, 0.15) 0%, hsla(217, 91%, 60%, 0.1) 100%)',
                            border: '1px solid hsla(263, 70%, 60%, 0.2)'
                        }}
                    >
                        <Icons.terminal className="w-8 h-8" style={{ color: 'hsl(263, 70%, 60%)' }} />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="gradient-text">Expert Consultancy</span>
                    </h1>

                    <p className="text-xl sm:text-2xl max-w-2xl mx-auto mb-8" style={{ color: 'hsl(var(--color-text-secondary))' }}>
                        Leverage our expertise in AI agents, distributed systems, and developer tools to accelerate your projects.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">
                                <Icons.externalLink className="w-5 h-5" />
                                Hire on Useme
                            </button>
                        </a>
                        <a href="#/contact">
                            <button className="btn btn-outline">
                                <Icons.mail className="w-5 h-5" />
                                Contact Directly
                            </button>
                        </a>
                    </div>
                </div>

                {/* Services Grid */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="gradient-text">Services</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {SERVICES.map((service, index) => {
                            const Icon = Icons[service.icon as keyof typeof Icons] || Icons.code;
                            return (
                                <div
                                    key={service.title}
                                    className="card animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms`, padding: 'var(--spacing-xl)' }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="feature-icon flex-shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                                {service.title}
                                            </h3>
                                            <p className="text-sm" style={{ color: 'hsl(var(--color-text-secondary))', marginBottom: '1rem' }}>
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 pl-14">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-xs px-2 py-1 rounded-full"
                                                style={{
                                                    background: 'hsla(160, 84%, 39%, 0.1)',
                                                    color: 'hsl(var(--color-accent-emerald))',
                                                    border: '1px solid hsla(160, 84%, 39%, 0.2)'
                                                }}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Process */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="gradient-text">How It Works</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PROCESS_STEPS.map((item, index) => (
                            <div
                                key={item.step}
                                className="card text-center animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div
                                    className="text-3xl font-bold mb-3"
                                    style={{ color: 'hsl(var(--color-accent-emerald))', fontFamily: 'var(--font-mono)' }}
                                >
                                    {item.step}
                                </div>
                                <h3 className="font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                    {item.title}
                                </h3>
                                <p className="text-sm" style={{ color: 'hsl(var(--color-text-muted))', marginBottom: 0 }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="mb-20">
                    <div
                        className="card"
                        style={{
                            padding: 'var(--spacing-2xl)',
                            background: 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.08) 0%, hsla(192, 91%, 50%, 0.05) 100%)',
                            border: '1px solid hsla(160, 84%, 39%, 0.2)'
                        }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                            Why Work With Us
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                                <p style={{ color: 'hsl(var(--color-text-secondary))', marginBottom: 0 }}>Open Source Projects</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                                <p style={{ color: 'hsl(var(--color-text-secondary))', marginBottom: 0 }}>Years Experience</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                                <p style={{ color: 'hsl(var(--color-text-secondary))', marginBottom: 0 }}>Code Delivered</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="gradient-text">Ready to Start?</span>
                    </h2>
                    <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'hsl(var(--color-text-secondary))' }}>
                        Book a consultation through Useme for secure payments and professional project management.
                    </p>

                    <a href="" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary btn-lg">
                            <Icons.externalLink className="w-5 h-5" />
                            View Profile on Useme
                        </button>
                    </a>

                    <p className="mt-6 text-sm" style={{ color: 'hsl(var(--color-text-muted))' }}>
                        Or email us directly at{' '}
                        <a
                            href={`mailto:${COMPANY_INFO.email}`}
                            className="font-medium"
                            style={{ color: 'hsl(var(--color-accent-emerald))' }}
                        >
                            {COMPANY_INFO.email}
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default ConsultancyPage;
