'use client';
import React, { useState, useCallback, useMemo, memo } from 'react';
import MoreOptionsButton from '@components/functional/MoreOptionsButton';
import Image from 'next/image';
import src from '../../assets/images/sampleperson.jpeg';

interface SearchProfileProps {
    name: string;
    friendStatus: number;
    isOnline: boolean;
    numMutualFriends: number;
}

function SearchProfile({
    name,
    friendStatus,
    isOnline,
    numMutualFriends,
}: SearchProfileProps) {
    const handleMessageFriend = useCallback(
        (name: string) => alert(`Message ${name}`),
        []
    );

    const handleAddFriend = useCallback(
        (name: string) => alert(`Add ${name}`),
        []
    );

    const handleViewProfile = useCallback(
        (name: string) => alert(`View ${name}'s profile`),
        []
    );

    // We will need to figure out a way to pass this into the backend
    const [currFriendStatus, setCurrFriendStatus] = useState(friendStatus);
    const moreOptionsButtonStyle =
        'ml-3 p-2 text-xl rounded-md bg-base hover:bg-gray-300 transition duration-200 w-max';

    const profileCtaButton = useMemo(() => {
        switch (currFriendStatus) {
            case 0:
                return (
                    <button
                        className="bg-primary-400 hover:bg-primary-600 text-base py-2 transition duration-200 px-6 text-lg rounded-md"
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrFriendStatus(1);
                        }}
                    >
                        Add Friend
                    </button>
                );
            case 1:
                return (
                    <button
                        className="bg-gray-300 hover:bg-gray-400 py-2 transition duration-200 px-6 text-lg rounded-md"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        Request Sent
                    </button>
                );
            case 2:
                return (
                    <button
                        className="bg-primary-400 hover:bg-primary-600 text-base py-2 transition duration-200 px-6 text-lg rounded-md"
                        onClick={(e) => {
                            e.preventDefault();
                            handleMessageFriend(name);
                        }}
                    >
                        Message
                    </button>
                );
            default:
        }
    }, [currFriendStatus]);

    return (
        // Worry about animated div later. For now, focus on just getting a component to display.
        // Replace the below div with your custom animated div.
        <div className="flex flex-row bg-base w-full px-9 py-6 border-gray-200 mb-[10px] border-solid border-1 shadow-md rounded-lg items-center justify-between">
            <div className="flex flex-row items-center">
                <Image
                    src={src}
                    alt="search-profile"
                    width={90}
                    height={90}
                    style={{ borderRadius: '45px' }}
                />
                <div className="flex flex-col h-full ml-[20px]">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleViewProfile(name);
                        }}
                        className="text-left"
                    >
                        <h1 className="text-2xl hover:underline font-semibold">
                            {name}
                        </h1>
                    </button>
                    {currFriendStatus === 2 && (
                        <p className="text-lg text-gray-500">Friend</p>
                    )}
                    <p className="text-lg text-gray-500">
                        {numMutualFriends} mutual friends
                    </p>
                </div>
            </div>
            <div className="flex flex-row">
                {profileCtaButton}
                <MoreOptionsButton style={moreOptionsButtonStyle} />
            </div>
        </div>
    );
}

export default memo(SearchProfile);
