import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Icons } from '../components/Icons';

function ProjectsPage() {
    const allTags = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))], []);
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return PROJECTS;
        }
        return PROJECTS.filter(p => p.tags.includes(activeFilter));
    }, [activeFilter]);

    return (
        <div className="gradient-bg min-h-screen">
            <div className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: 'hsla(160, 84%, 39%, 0.1)',
                            border: '1px solid hsla(160, 84%, 39%, 0.3)'
                        }}
                    >
                        <Icons.folder className="w-4 h-4" style={{ color: 'hsl(160, 84%, 50%)' }} />
                        <span className="text-sm font-medium" style={{ color: 'hsl(160, 84%, 50%)' }}>
                            {PROJECTS.length} Repositories
                        </span>
                    </div>

                    <h1
                        className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        <span className="gradient-text">Open Source Projects</span>
                    </h1>
                    <p
                        className="mx-auto max-w-2xl text-lg sm:text-xl"
                        style={{ color: 'hsl(var(--color-text-secondary))' }}
                    >
                        Libraries, frameworks, and tools we build and maintain.
                        All open source, all production-ready.
                    </p>
                </div>

                {/* Filter Tags */}
                <div className="mb-12 flex flex-wrap justify-center gap-2">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className="tag transition-all duration-300"
                            style={{
                                padding: '0.5rem 1.25rem',
                                fontSize: '0.875rem',
                                background: activeFilter === tag
                                    ? 'linear-gradient(135deg, hsl(var(--color-accent-emerald)), hsl(var(--color-accent-cyan)))'
                                    : 'hsla(var(--color-accent-emerald), 0.1)',
                                color: activeFilter === tag
                                    ? 'hsl(var(--color-text-inverse))'
                                    : 'hsl(var(--color-accent-emerald))',
                                border: activeFilter === tag
                                    ? 'none'
                                    : '1px solid hsla(var(--color-accent-emerald), 0.3)',
                                cursor: 'pointer',
                                boxShadow: activeFilter === tag ? 'var(--glow-emerald)' : 'none',
                                fontWeight: activeFilter === tag ? '700' : '600'
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid-cards">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <Icons.folder className="w-16 h-16 mx-auto mb-4" style={{ color: 'hsl(var(--color-text-muted))' }} />
                        <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                        <p style={{ color: 'hsl(var(--color-text-secondary))' }}>
                            Try selecting a different filter.
                        </p>
                    </div>
                )}

                {/* GitHub CTA */}
                <div className="mt-20 text-center">
                    <div
                        className="card inline-block py-8 px-12"
                        style={{
                            background: 'linear-gradient(135deg, hsla(160, 84%, 39%, 0.08) 0%, hsla(192, 91%, 50%, 0.05) 100%)',
                            border: '1px solid hsla(160, 84%, 39%, 0.2)'
                        }}
                    >
                        <p className="text-lg mb-6" style={{ color: 'hsl(var(--color-text-secondary))' }}>
                            Want to contribute or explore more?
                        </p>
                        <a
                            href="https://github.com/protocol-lattice"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn btn-primary">
                                <Icons.github className="w-5 h-5" />
                                Visit Our GitHub
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;