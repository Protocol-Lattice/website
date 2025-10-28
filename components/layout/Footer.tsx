
import React from 'react';
import { SOCIAL_LINKS, COMPANY_INFO } from '../../constants';
import { Icons } from '../Icons';

function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
                </p>
                <div className="flex items-center space-x-4">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
                        <Icons.github className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
