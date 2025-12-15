import React from 'react';
import type { Project } from '../types';
import { Icons } from './Icons';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(({ project, index = 0 }, ref) => {
  const isFeatured = project.isFeatured;

  return (
    <div
      ref={ref}
      className={`card ${isFeatured ? 'card-featured' : ''} flex flex-col h-full animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ fontFamily: 'var(--font-mono)', color: 'hsl(var(--color-text-primary))' }}
            >
              {project.displayName || project.name}
            </h3>
            {isFeatured && (
              <span
                className="inline-flex items-center gap-1 text-xs font-medium"
                style={{ color: 'hsl(var(--color-accent-emerald))' }}
              >
                <Icons.star className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-lg transition-all duration-300 hover:scale-110"
            style={{
              background: 'hsla(var(--color-accent-emerald), 0.1)',
              color: 'hsl(var(--color-accent-emerald))'
            }}
          >
            <Icons.github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p
        className="flex-grow mb-4 text-sm"
        style={{ color: 'hsl(var(--color-text-secondary))', lineHeight: '1.6' }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 4).map((tag, i) => (
          <span
            key={tag}
            className="tag"
            style={{
              fontSize: '0.75rem',
              padding: '0.25rem 0.75rem',
              background: i % 2 === 0
                ? 'hsla(var(--color-accent-emerald), 0.1)'
                : 'hsla(var(--color-accent-violet), 0.1)',
              color: i % 2 === 0
                ? 'hsl(var(--color-accent-emerald))'
                : 'hsl(var(--color-accent-violet))',
              border: i % 2 === 0
                ? '1px solid hsla(var(--color-accent-emerald), 0.2)'
                : '1px solid hsla(var(--color-accent-violet), 0.2)',
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span
            className="text-xs font-medium"
            style={{ color: 'hsl(var(--color-text-muted))', padding: '0.25rem 0.5rem' }}
          >
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Quickstart (if available) */}
      {project.quickstart && (
        <div
          className="mt-auto pt-4 border-t"
          style={{ borderColor: 'hsl(var(--color-border-subtle))' }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs overflow-x-auto"
            style={{
              background: 'hsl(var(--color-bg-primary))',
              border: '1px solid hsl(var(--color-border-subtle))'
            }}
          >
            <span style={{ color: 'hsl(var(--color-accent-emerald))' }}>$</span>
            <span style={{ color: 'hsl(var(--color-text-secondary))' }}>{project.quickstart}</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        className={`flex items-center justify-between ${project.quickstart ? 'mt-4' : 'mt-auto pt-4 border-t'}`}
        style={{ borderColor: project.quickstart ? 'transparent' : 'hsl(var(--color-border-subtle))' }}
      >
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: 'hsl(var(--color-text-muted))' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-accent-emerald))'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--color-text-muted))'}
        >
          View on GitHub
          <Icons.externalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
