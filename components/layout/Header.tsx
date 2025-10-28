
import React from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NAV_ITEMS, COMPANY_INFO } from '../../constants';
import Button from '../ui/Button';
import { useTheme } from '../../hooks/useTheme';
import { Icons } from '../Icons';

function Header() {
    const { setCommandPaletteOpen } = useTheme();

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                <a href="/#" className="flex items-center space-x-3">
                    <Icons.logo className="h-6 w-6" />
                    <span className="font-bold">{COMPANY_INFO.name}</span>
                </a>
                <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
                    {NAV_ITEMS.map((item) => (
                        <a 
                            key={item.href} 
                            href={item.href} 
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        className="hidden h-9 w-full items-center justify-between px-3 text-muted-foreground md:flex md:w-40"
                        onClick={() => setCommandPaletteOpen(true)}
                    >
                        Search...
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

export default Header;