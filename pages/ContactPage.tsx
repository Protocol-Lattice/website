
import React from 'react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../constants';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import Button from '../components/ui/Button';
import { Icons } from '../components/Icons';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function ContactPage() {
    const [isCopied, copy] = useCopyToClipboard();

    return (
        <div className="container mx-auto flex min-h-[70vh] max-w-xl items-center justify-center px-4 py-16 sm:py-24">
            <Card className="w-full">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-8">
                    <p className="text-center text-muted-foreground">
                        {COMPANY_INFO.availability}
                    </p>
                    
                    <div className="flex w-full flex-col gap-4 sm:flex-row">
                        <div className="flex-1 rounded-md border bg-secondary/50 p-3 text-center font-mono text-sm sm:text-base">
                            {COMPANY_INFO.email}
                        </div>
                        <Button onClick={() => copy(COMPANY_INFO.email)} className="w-full sm:w-auto">
                            {isCopied ? <Icons.check className="mr-2 h-4 w-4" /> : <Icons.copy className="mr-2 h-4 w-4" />}
                            {isCopied ? 'Copied!' : 'Copy Email'}
                        </Button>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
                            <Icons.github className="h-6 w-6" />
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default ContactPage;
