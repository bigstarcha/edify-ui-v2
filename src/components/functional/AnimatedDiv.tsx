'use client';
import React, { ReactNode, memo } from 'react';

function AnimatedDiv({
    className,
    children,
}: {
    className: string;
    children: ReactNode;
}) {
    return (
        // Ensure to inherit any child class properties
        <div className={`${className}`}>{children}</div>
    );
}

export default memo(AnimatedDiv);
