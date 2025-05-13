'use client';
import React from 'react';
import Image from 'next/image';
import src from '../../assets/images/sampleperson.jpeg';

function MessageCard({ user }: { user: string }) {
    // Currently seeing a react hydration error, will fix later.
    // For some reason I can't get the image to show up when I pass the src as a prop. This is gonna be a problem when grabbing image urls from S3.

    const newMessage = false;

    return (
        <button
            onClick={() => {
                alert(`Message was clicked for user ${user}`);
            }}
        >
            <div className="flex flex-row border-solid py-3 px-7 hover:bg-gray-300 transition duration-200">
                <Image
                    src={src}
                    alt="post"
                    height={70}
                    width={70}
                    style={{
                        borderRadius: 35,
                    }}
                />
                <div className="flex flex-col ml-[20px] text-left justify-center">
                    <h1 className={`text-lg ${newMessage ? 'font-bold' : ''}`}>
                        {user}
                    </h1>
                    <p
                        className={`text-gray-500 text-md ${newMessage ? 'font-bold' : ''}`}
                    >
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="flex flex-col justify-center ml-auto">
                    {newMessage && (
                        <div className="w-3 h-3 bg-primary-400 rounded-full" />
                    )}
                </div>
            </div>
        </button>
    );
}

export default React.memo(MessageCard);
