import React from 'react';

interface HyperlinkProps {
    href: string;
    openInNewTab?: boolean;
    children: React.ReactNode;
}

const Hyperlink: React.FC<HyperlinkProps> = ({ href, openInNewTab = false, children }) => {
    return (
        <a href={href} target={openInNewTab ? '_blank' : '_self'} rel={openInNewTab ? 'noopener noreferrer' : undefined}>
            {children}
        </a>
    );
};

export default Hyperlink;