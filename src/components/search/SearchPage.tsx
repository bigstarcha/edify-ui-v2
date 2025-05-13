'use client';

import React, { memo } from 'react';
import { IoSearch } from 'react-icons/io5';
import SearchProfile from './SearchProfile';

const sampleSearchData = [
    {
        name: 'Jimmy Neutron',
        friendStatus: 2,
        isOnline: true,
        numMutualFriends: 20,
    },
    {
        name: 'Timmy Turner',
        friendStatus: 2,
        isOnline: false,
        numMutualFriends: 20,
    },
    {
        name: 'Spongebob Squarepants',
        friendStatus: 1,
        isOnline: false,
        numMutualFriends: 20,
    },
    {
        name: 'Aang',
        friendStatus: 1,
        isOnline: false,
        numMutualFriends: 20,
    },
    {
        name: 'Brandon Lake',
        friendStatus: 0,
        isOnline: false,
        numMutualFriends: 20,
    },
    {
        name: 'C',
        friendStatus: 0,
        isOnline: false,
        numMutualFriends: 20,
    },
];

function SearchPage() {
    const handleSubmit = () => {
        alert('Search submitted!'); // Will need to change this later
    };

    return (
        <div className="flex flex-col w-full h-full">
            <div className="relative px-[80px] py-[40px] mx-[50px]">
                <input
                    type="search"
                    placeholder="Search for users..."
                    className="border border-gray-300 rounded-lg py-2 px-3 text-lg focus:outline-none focus:ring focus:ring-primary-400 w-full pr-10"
                />
                <button
                    onSubmit={handleSubmit}
                    className="absolute p-2 rounded-3xl right-21 text-2xl z-10 translate-y-1 hover:bg-gray-300 transform duration-200 text-gray-400"
                >
                    <IoSearch />
                </button>
            </div>
            {/** You can wrap the list of search profile results in a suspense when time comes */}
            <div className="px-[80px] h-full overflow-y-scroll bg-gray-100 pt-[20px]">
                <h1 className="text-3xl font-semibold mb-[15px]">People</h1>
                {sampleSearchData.map((user, index) => (
                    <SearchProfile
                        key={index} /** @todo: Fix this */
                        name={user.name}
                        friendStatus={user.friendStatus}
                        // isOnline={user.isOnline}
                        numMutualFriends={user.numMutualFriends}
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(SearchPage);
