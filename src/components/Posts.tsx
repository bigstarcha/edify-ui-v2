'use client';
import React from 'react';
import Image from 'next/image';
import PostImage from './PostImage';
import _ from 'lodash';

function Posts() {
    // Currently seeing a react hydration error, will fix later.
    // For some reason I can't get the image to show up when I pass the src as a prop. This is gonna be a problem when grabbing image urls from S3.

    return (
        <div className="flex flex-wrap w-full justify-between">
            {_.fill(Array(12), 0).map((index) => (
                <PostImage />
            ))}
        </div>
    );
}

export default React.memo(Posts);
