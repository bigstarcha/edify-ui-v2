'use client';
import React, { memo } from 'react';
import Image from 'next/image';
import src from '../../assets/images/sampleperson.jpeg';
import { IoHeart, IoHeartOutline, IoChatbubbleOutline } from 'react-icons/io5';
import MoreOptionsButton from '@components/functional/MoreOptionsButton';

// Might want to export post props and use it all around
interface PostVerticalProps {
    name: string;
    location: string;
    liked: boolean;
}

function PostVertical({ name, location, liked }: PostVerticalProps) {
    const handlePostClick = () => {
        // When post is clicked, trigger modal to see post in full view
        alert('This post was clicked!');
    };

    const moreOptionsButtonStyle =
        'ml-3 p-2 text-xl rounded-md bg-base hover:bg-gray-300 transition duration-200 w-max';

    return (
        <div className="bg-base rounded-lg shadow-md w-[500px] py-3 mb-[30px]">
            <div className="flex flex-row justify-between pb-2 px-4">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-xl">
                        {name}
                        <span className="text-sm text-gray-400">
                            {' '}• 3 days ago
                        </span>
                    </h1>
                    <p className="text-gray-400 text-md">{location}</p>
                </div>
                <div className="flex flex-col justify-center">
                    <MoreOptionsButton style={moreOptionsButtonStyle} />
                </div>
            </div>
            <button className="py-[5px]" onClick={handlePostClick}>
                <Image src={src} alt="post-vertical" height={500} width={500} />
            </button>
            <div className="flex flex-col px-4">
                <p className="py-2 font-medium">
                    Super blessed to have been a part of this worship band for
                    the past 10 years!
                </p>
                <div className="flex flex-row justify-between items-center">
                    <p className="font-semibold text-lg">Liked by 30 others</p>
                    <div className="flex items-center">
                        <button>
                            {liked ? (
                                <IoHeart className="text-3xl text-red-500" />
                            ) : (
                                <IoHeartOutline className="text-3xl text-gray-500" />
                            )}
                        </button>
                        <button className="ml-[5px]">
                            <IoChatbubbleOutline className="text-3xl text-gray-500" />
                        </button>
                    </div>
                </div>
                <p className="text-sm text-gray-400">
                    153 comments •{' '}
                    <span>
                        <button
                            className="hover:underline transition duration-200"
                            onClick={() => alert('All comments clicked!')}
                        >
                            View all comments
                        </button>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default memo(PostVertical);
