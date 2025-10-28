import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';

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
        <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight">Open Source Work</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    A collection of libraries, frameworks, and protocols we've built and maintain.
                </p>
            </div>
            
            <div className="my-12 flex flex-wrap justify-center gap-2">
                {allTags.map(tag => (
                    <Button
                        key={tag}
                        variant={activeFilter === tag ? 'default' : 'outline'}
                        onClick={() => setActiveFilter(tag)}
                        className="rounded-full"
                    >
                        {tag}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;