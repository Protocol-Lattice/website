import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { WRITING_POSTS } from '../constants';
import Badge from '../components/ui/Badge';

// Simple Markdown-like renderer
const ContentRenderer = ({ content }: { content: string }) => {
    const renderedContent = useMemo(() => {
        const blocks = content.split('```');
        return blocks.map((block, index) => {
            if (index % 2 === 1) {
                const [lang, ...codeLines] = block.split('\n');
                const code = codeLines.join('\n');
                return (
                    <pre key={index} className="bg-secondary rounded-lg p-4 my-6 font-mono text-sm overflow-x-auto">
                        <code>{code.trim()}</code>
                    </pre>
                );
            } else {
                return block.split('\n\n').map((paragraph, pIndex) => {
                     if (paragraph.startsWith('## ')) {
                        return <h2 key={`${index}-${pIndex}`} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(3)}</h2>
                    }
                    const lines = paragraph.split('\n');
                    if (lines.length > 1 && lines.every(line => line.startsWith('* '))) {
                        return (
                            <ul key={`${index}-${pIndex}`} className="list-disc list-inside my-4 space-y-2">
                                {lines.map((item, i) => <li key={i}>{item.substring(2)}</li>)}
                            </ul>
                        );
                    }
                    return <p key={`${index}-${pIndex}`} className="leading-relaxed my-4">{paragraph}</p>
                });
            }
        });
    }, [content]);

    return <div>{renderedContent}</div>;
};

function ArticlePage() {
    const { slug } = useParams();
    const post = WRITING_POSTS.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight">Post Not Found</h1>
                <p className="mt-4 text-muted-foreground">The article you're looking for doesn't exist.</p>
                <Link to="/writing" className="mt-8 inline-block text-accent hover:underline">
                    &larr; Back to Research
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
            <article className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-accent">
                <Link to="/writing" className="text-sm text-accent hover:underline no-underline">
                    &larr; Back to Research
                </Link>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{post.title}</h1>
                <p className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                </div>

                <div className="mt-12">
                    <ContentRenderer content={post.content} />
                </div>
            </article>
        </div>
    );
}

export default ArticlePage;