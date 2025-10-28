
import React, { useEffect, Fragment } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { NAV_ITEMS } from '../../constants';
import { Icons } from '../Icons';
import { cn } from '../../lib/utils';

export function CommandPalette() {
    const { isCommandPaletteOpen, setCommandPaletteOpen } = useTheme();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setCommandPaletteOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [setCommandPaletteOpen]);

    if (!isCommandPaletteOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={() => setCommandPaletteOpen(false)}
            aria-labelledby="command-palette-title"
            role="dialog"
            aria-modal="true"
        >
            <div 
                className={cn(
                    "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-xl border bg-background shadow-lg",
                    "transition-all duration-300 ease-in-out",
                    isCommandPaletteOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center border-b px-4">
                    <Icons.search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <input
                        type="text"
                        placeholder="Type a command or search..."
                        className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
                <div className="p-2">
                    <p id="command-palette-title" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Pages</p>
                    <ul>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a 
                                    href={item.href} 
                                    onClick={() => setCommandPaletteOpen(false)}
                                    className="flex items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent focus:bg-accent"
                                >
                                    <Icons.page className="mr-2 h-4 w-4" />
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
