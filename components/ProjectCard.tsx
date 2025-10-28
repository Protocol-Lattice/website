import React from 'react';
import type { Project } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import Badge from './ui/Badge';
import { Icons } from './Icons';

interface ProjectCardProps {
  project: Project;
}

// FIX: Converted to a `React.forwardRef` component to correctly handle `key` prop in lists.
const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(({ project }, ref) => {
  return (
    <Card className="flex h-full flex-col" ref={ref}>
      <CardHeader>
        <CardTitle>{project.displayName || project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
         <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
            <Icons.github className="mr-2 h-4 w-4" />
            GitHub
        </a>
        {project.websiteUrl && (
            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Icons.externalLink className="mr-2 h-4 w-4" />
                Website
            </a>
        )}
      </CardFooter>
    </Card>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
