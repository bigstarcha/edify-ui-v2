'use client';
import React from 'react';

function Message({ isMe, text }: { isMe: boolean; text: string }) {
    // Currently seeing a react hydration error, will fix later.
    // For some reason I can't get the image to show up when I pass the src as a prop. This is gonna be a problem when grabbing image urls from S3.

    return (
        <div
            className={`flex flex-row mb-[10px] ${isMe ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`py-2 px-4 ${isMe ? 'bg-linear-to-r from-primary-400 to-primary-500 text-white' : 'bg-gray-200 text-black'} rounded-2xl w-max max-w-[50%]`}
            >
                <p className="text-md">{text}</p>
            </div>
        </div>
    );
}

export default React.memo(Message);
