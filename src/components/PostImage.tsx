'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import src from '../assets/images/sampleperson.jpeg';

function PostImage() {
    // Currently seeing a react hydration error, will fix later.
    // For some reason I can't get the image to show up when I pass the src as a prop. This is gonna be a problem when grabbing image urls from S3.

    const [hovered, setHovered] = useState(false);

    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={src}
                alt="post"
                height={450}
                width={450}
                style={{
                    transition: 'transform 0.3s ease',
                    transform: hovered ? 'scale(1.05)' : 'scale(1)',
                    borderRadius: 10,
                    marginBottom: 25,
                }}
            />
        </button>
    );
}

export default React.memo(PostImage);
