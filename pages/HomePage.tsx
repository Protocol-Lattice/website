
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, COMPANY_INFO, FAQS, COLLABORATIONS } from '../constants';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Icons } from '../components/Icons';

function HomePage() {
  const featuredProjects = PROJECTS.filter(p => p.isFeatured);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {COMPANY_INFO.heroTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {COMPANY_INFO.heroSubtitle}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#/projects">
            <Button size="lg">Our Projects</Button>
          </a>
          <a href="#/contact">
            <Button size="lg" variant="outline">Contact Us</Button>
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mt-24 sm:mt-32">
        <h2 className="text-center text-3xl font-bold tracking-tight">Core Infrastructure</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      
      {/* Collaborations Section */}
      <section className="mt-24 sm:mt-32">
        <h2 className="text-center text-3xl font-bold tracking-tight">Key Collaborations</h2>
        <div className="mx-auto mt-12 max-w-3xl">
            {COLLABORATIONS.map(collab => {
                const Icon = Icons[collab.icon as keyof typeof Icons];
                return (
                    <a href={collab.href} target="_blank" rel="noopener noreferrer" key={collab.name} className="block group">
                        <Card>
                            <div className="p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                                {Icon && <Icon className="h-12 w-12 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold font-mono">{collab.name}</h3>
                                    <p className="mt-2 text-muted-foreground">{collab.description}</p>
                                </div>
                                <Icons.externalLink className="h-5 w-5 text-muted-foreground ml-auto hidden sm:block flex-shrink-0 self-start group-hover:text-accent transition-colors" />
                            </div>
                        </Card>
                    </a>
                );
            })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 sm:mt-32">
        <h2 className="text-center text-3xl font-bold tracking-tight">FAQs</h2>
        <div className="mx-auto mt-12 max-w-3xl space-y-8">
            {FAQS.map((faq, index) => (
                <div key={index} className="rounded-lg border p-6">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
