import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Icons } from '../components/Icons';

function ProductsPage() {
    // Only show featured products
    const featuredProducts = useMemo(() => PROJECTS.filter(p => p.isFeatured), []);

    const allTags = useMemo(() => ['All', ...Array.from(new Set(featuredProducts.flatMap(p => p.tags)))], [featuredProducts]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = useMemo(() => {
        let products = featuredProducts;

        if (activeFilter !== 'All') {
            products = products.filter(p => p.tags.includes(activeFilter));
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            products = products.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.displayName?.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.tags.some(t => t.toLowerCase().includes(query))
            );
        }

        return products;
    }, [activeFilter, searchQuery, featuredProducts]);

    return (
        <div className="products-page min-h-screen">
            {/* Hero Section - The Guild Style */}
            <section className="relative overflow-hidden py-24 sm:py-32">
                {/* Animated gradient background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-30"
                        style={{
                            background: 'radial-gradient(ellipse, hsla(280, 80%, 60%, 0.3) 0%, transparent 60%)',
                        }}
                    />
                    <div
                        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
                        style={{
                            background: 'radial-gradient(circle, hsla(175, 80%, 45%, 0.4) 0%, transparent 60%)',
                        }}
                    />
                </div>

                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="text-center mb-16">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                            style={{
                                background: 'hsla(280, 80%, 60%, 0.1)',
                                border: '1px solid hsla(280, 80%, 60%, 0.3)'
                            }}
                        >
                            <Icons.zap className="w-4 h-4" style={{ color: '#9B59B6' }} />
                            <span className="text-sm font-medium" style={{ color: '#9B59B6' }}>
                                Open Source Ecosystem
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            <span className="block" style={{ color: 'hsl(var(--color-text-primary))' }}>
                                Our
                            </span>
                            <span className="gradient-text-alt">Products</span>
                        </h1>

                        <p
                            className="mx-auto max-w-2xl text-lg sm:text-xl"
                            style={{ color: 'hsl(var(--color-text-secondary))' }}
                        >
                            Production-ready tools, frameworks, and libraries for modern developers.
                            All open source. All crafted with care.
                        </p>
                    </div>

                    {/* Search Bar - The Guild Style */}
                    <div className="max-w-xl mx-auto mb-8">
                        <div
                            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-500/50"
                            style={{
                                background: 'hsl(var(--color-bg-secondary))',
                                border: '1px solid hsl(var(--color-border-subtle))',
                            }}
                        >
                            <Icons.search className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--color-text-muted))' }} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-grow bg-transparent border-none outline-none text-base"
                                style={{ color: 'hsl(var(--color-text-primary))' }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="flex-shrink-0 p-1 rounded hover:bg-white/10 transition-colors"
                                >
                                    <Icons.x className="w-4 h-4" style={{ color: 'hsl(var(--color-text-muted))' }} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Filter Tags */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setActiveFilter(tag)}
                                className="transition-all duration-200"
                                style={{
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.875rem',
                                    fontWeight: activeFilter === tag ? '600' : '500',
                                    borderRadius: '9999px',
                                    background: activeFilter === tag
                                        ? 'linear-gradient(135deg, #9B59B6 0%, #3498DB 100%)'
                                        : 'hsl(var(--color-bg-secondary))',
                                    color: activeFilter === tag
                                        ? '#FFFFFF'
                                        : 'hsl(var(--color-text-secondary))',
                                    border: activeFilter === tag
                                        ? 'none'
                                        : '1px solid hsl(var(--color-border-subtle))',
                                    cursor: 'pointer',
                                    boxShadow: activeFilter === tag ? '0 4px 20px rgba(155, 89, 182, 0.3)' : 'none',
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            {filteredProducts.length > 0 && (
                <section className="container mx-auto max-w-6xl px-4 pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.name} product={product} index={index} />
                        ))}
                    </div>
                </section>
            )}

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <section className="container mx-auto max-w-6xl px-4 py-24">
                    <div className="text-center">
                        <div
                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                            style={{
                                background: 'hsla(var(--color-text-primary), 0.05)',
                            }}
                        >
                            <Icons.folder className="w-10 h-10" style={{ color: 'hsl(var(--color-text-muted))' }} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(var(--color-text-primary))' }}>
                            No products found
                        </h3>
                        <p style={{ color: 'hsl(var(--color-text-secondary))' }}>
                            Try adjusting your search or filter criteria.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                            className="mt-6 btn btn-outline"
                        >
                            Clear Filters
                        </button>
                    </div>
                </section>
            )}

            {/* CTA Section - The Guild Style */}
            <section className="container mx-auto max-w-6xl px-4 py-16">
                <div
                    className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center"
                    style={{
                        background: 'linear-gradient(135deg, hsla(280, 80%, 60%, 0.1) 0%, hsla(210, 80%, 55%, 0.1) 100%)',
                        border: '1px solid hsla(280, 80%, 60%, 0.2)',
                    }}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                        style={{ background: 'hsla(280, 80%, 60%, 0.5)' }}
                    />
                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-20"
                        style={{ background: 'hsla(175, 80%, 45%, 0.5)' }}
                    />

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            <span className="gradient-text-alt">Build with us</span>
                        </h2>
                        <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: 'hsl(var(--color-text-secondary))' }}>
                            Our products are open source and community-driven. Star, fork, or contribute today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://github.com/protocol-lattice" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-primary" style={{
                                    background: 'linear-gradient(135deg, #9B59B6 0%, #3498DB 100%)',
                                    padding: '1rem 2rem'
                                }}>
                                    <Icons.github className="w-5 h-5" />
                                    Explore on GitHub
                                </button>
                            </a>
                            <a href="#/contact">
                                <button className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                                    <Icons.mail className="w-5 h-5" />
                                    Get in Touch
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductsPage;
