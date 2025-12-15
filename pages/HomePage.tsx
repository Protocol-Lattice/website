import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, COMPANY_INFO, STATS, FEATURES, COLLABORATIONS, FAQS } from '../constants';
import { Icons } from '../components/Icons';

function HomePage() {
  const featuredProjects = PROJECTS.filter(p => p.isFeatured);

  return (
    <div className="gradient-bg hero-gradient">
      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-4 pt-20 pb-16 sm:pt-32 sm:pb-24 text-center relative">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, hsla(160, 84%, 39%, 0.15) 0%, transparent 70%)',
            animationDelay: '0s'
          }}
        />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, hsla(263, 70%, 60%, 0.1) 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, hsla(192, 91%, 50%, 0.08) 0%, transparent 50%)'
          }}
        />

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in-up"
            style={{
              background: 'hsla(160, 84%, 39%, 0.1)',
              border: '1px solid hsla(160, 84%, 39%, 0.3)'
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'hsl(160, 84%, 39%)' }} />
            <span className="text-sm font-medium" style={{ color: 'hsl(160, 84%, 50%)' }}>
              Open Source Developer Tools
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up"
            style={{ fontFamily: 'var(--font-display)', animationDelay: '100ms' }}
          >
            <span className="gradient-text">{COMPANY_INFO.heroTitle}</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl animate-fade-in-up"
            style={{ color: 'hsl(var(--color-text-secondary))', animationDelay: '200ms' }}
          >
            {COMPANY_INFO.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <a href="#/projects">
              <button className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                <Icons.code className="w-5 h-5" />
                View Projects
              </button>
            </a>
            <a href="https://github.com/protocol-lattice" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-outline" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                <Icons.github className="w-5 h-5" />
                GitHub
              </button>
            </a>
          </div>

          {/* Terminal Preview */}
          <div className="mt-16 mx-auto max-w-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="terminal text-left">
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="ml-4 text-xs font-mono" style={{ color: 'hsl(var(--color-text-muted))' }}>terminal</span>
              </div>
              <div className="terminal-body">
                <div className="flex items-center gap-2 mb-2">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">go get github.com/protocol-lattice/go-agent</span>
                </div>
                <div className="terminal-output">
                  go: downloading github.com/protocol-lattice/go-agent v0.2.0<br />
                  go: added github.com/protocol-lattice/go-agent v0.2.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid-stats">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="divider container mx-auto max-w-4xl" />

      {/* Featured Projects */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            Production-ready tools built with care and maintained with passion.
          </p>
        </div>

        <div className="grid-cards">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#/projects">
            <button className="btn btn-secondary">
              View All Projects
              <Icons.arrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text-alt">Why Protocol Lattice?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            We build tools that we'd want to use ourselves.
          </p>
        </div>

        <div className="grid-features">
          {FEATURES.map((feature, index) => {
            const Icon = Icons[feature.icon as keyof typeof Icons] || Icons.code;
            return (
              <div
                key={feature.title}
                className="card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="feature-icon">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'hsl(var(--color-text-secondary))', marginBottom: 0 }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-gradient-violet">Collaborations</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            Working with the community to build open standards.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {COLLABORATIONS.map((collab, index) => (
            <a
              href={collab.href}
              target="_blank"
              rel="noopener noreferrer"
              key={collab.name}
              className="block group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card card-featured hover-lift" style={{ padding: 'var(--spacing-xl)' }}>
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <img
                    src="/utcp.png"
                    alt={collab.name + " logo"}
                    className="h-16 w-16 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                      {collab.name}
                    </h3>
                    <p style={{ color: 'hsl(var(--color-text-secondary))', marginBottom: 0 }}>
                      {collab.description}
                    </p>
                  </div>
                  <Icons.externalLink
                    className="h-5 w-5 flex-shrink-0 hidden sm:block transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: 'hsl(var(--color-text-muted))' }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            Common questions about Protocol Lattice
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'hsl(var(--color-text-primary))', fontFamily: 'var(--font-display)' }}>
                {faq.question}
              </h3>
              <p style={{ color: 'hsl(var(--color-text-secondary))', lineHeight: '1.7', marginBottom: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-6xl px-4 py-20">
        <div
          className="card text-center py-16 px-8"
          style={{
            background: 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.1) 0%, hsla(192, 91%, 50%, 0.05) 100%)',
            border: '1px solid hsla(160, 84%, 39%, 0.2)'
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to contribute?
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            Join our community of developers building open source tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/protocol-lattice" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                <Icons.github className="w-5 h-5" />
                Star on GitHub
              </button>
            </a>
            <a href="#/contact">
              <button className="btn btn-outline">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
