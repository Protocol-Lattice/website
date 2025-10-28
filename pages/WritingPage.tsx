
import React from 'react';
import { WRITING_POSTS } from '../constants';
import Badge from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';

function WritingPage() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight">Research & Writing</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Insights from our lab on protocols, agent architecture, and building high-performance systems.
                </p>
            </div>

            <div className="mt-16 space-y-12">
                {WRITING_POSTS.map(post => (
                    <article key={post.slug} className="group relative">
                        <div className="absolute -inset-2.5 rounded-lg bg-secondary opacity-0 transition group-hover:opacity-100"></div>
                        <div className="relative">
                            <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <h2 className="mt-2 text-2xl font-bold tracking-tight">
                                {post.title}
                            </h2>
                            <p className="mt-4 text-muted-foreground">{post.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
             <div className="mt-16 text-center">
                 <p className="text-muted-foreground">More articles coming soon. Full MDX content would be rendered here.</p>
             </div>
        </div>
    );
}

export default WritingPage;
