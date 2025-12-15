import React from 'react';
import type { Project } from '../types';
import { Icons } from './Icons';

interface ProductCardProps {
    product: Project;
    index?: number;
}

/**
 * ProductCard - The Guild-inspired product card component
 * Features a clean, icon-focused design with hover animations
 */
const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(({ product, index = 0 }, ref) => {
    const colorSchemes = [
        { bg: 'hsla(280, 80%, 60%, 0.12)', border: 'hsla(280, 80%, 60%, 0.25)', accent: '#9B59B6' }, // Purple
        { bg: 'hsla(175, 80%, 45%, 0.12)', border: 'hsla(175, 80%, 45%, 0.25)', accent: '#1ABC9C' }, // Teal
        { bg: 'hsla(345, 80%, 55%, 0.12)', border: 'hsla(345, 80%, 55%, 0.25)', accent: '#E74C3C' }, // Red/Pink
        { bg: 'hsla(210, 80%, 55%, 0.12)', border: 'hsla(210, 80%, 55%, 0.25)', accent: '#3498DB' }, // Blue
        { bg: 'hsla(47, 80%, 55%, 0.12)', border: 'hsla(47, 80%, 55%, 0.25)', accent: '#F39C12' },  // Gold
        { bg: 'hsla(160, 84%, 39%, 0.12)', border: 'hsla(160, 84%, 39%, 0.25)', accent: '#10B981' }, // Emerald
    ];

    const scheme = colorSchemes[index % colorSchemes.length];

    return (
        <a
            href={product.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
        >
            <div
                ref={ref}
                className="product-card h-full p-6 rounded-2xl transition-all duration-400"
                style={{
                    background: 'hsl(var(--color-bg-card))',
                    border: '1px solid hsl(var(--color-border-subtle))',
                    animationDelay: `${index * 80}ms`,
                }}
            >
                {/* Icon & Title Row */}
                <div className="flex items-start gap-4 mb-4">
                    {/* Product Icon */}
                    <div
                        className="relative flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                            background: scheme.bg,
                            border: `1px solid ${scheme.border}`,
                        }}
                    >
                        <Icons.code className="w-7 h-7" style={{ color: scheme.accent }} />
                    </div>

                    {/* Title & Featured Badge */}
                    <div className="flex-grow min-w-0">
                        <h3
                            className="text-lg font-bold mb-1 truncate group-hover:gradient-text transition-all duration-300"
                            style={{ fontFamily: 'var(--font-display)', color: 'hsl(var(--color-text-primary))' }}
                        >
                            {product.displayName || product.name}
                        </h3>
                        {product.isFeatured && (
                            <span
                                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{
                                    background: 'hsla(var(--color-accent-emerald), 0.15)',
                                    color: 'hsl(var(--color-accent-emerald))',
                                }}
                            >
                                <Icons.star className="w-3 h-3" />
                                Featured
                            </span>
                        )}
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <Icons.arrowRight className="w-5 h-5" style={{ color: scheme.accent }} />
                    </div>
                </div>

                {/* Description */}
                <p
                    className="text-sm mb-4 line-clamp-3"
                    style={{ color: 'hsl(var(--color-text-secondary))', lineHeight: '1.7' }}
                >
                    {product.description}
                </p>

                {/* Tags - Minimal Style */}
                <div className="flex flex-wrap gap-1.5">
                    {product.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded-md"
                            style={{
                                background: 'hsla(var(--color-text-primary), 0.05)',
                                color: 'hsl(var(--color-text-muted))',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                    {product.tags.length > 3 && (
                        <span
                            className="text-xs font-medium px-2 py-1"
                            style={{ color: 'hsl(var(--color-text-muted))' }}
                        >
                            +{product.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </a>
    );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
