import React, { JSX } from 'react'

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    const styles = {
        1: 'text-4xl font-bold',
        2: 'text-3xl font-bold',
        3: 'text-2xl font-bold',
        4: 'text-xl font-bold',
        5: 'text-lg font-bold',
        6: 'text-base font-bold',
    };

    return (
        <Tag className={styles[level]}>
            {children}
        </Tag>
    )
}

export default Heading