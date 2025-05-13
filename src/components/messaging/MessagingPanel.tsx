'use client';
import React, { useState } from 'react';
import _ from 'lodash';
import MessageCard from './MessageCard';
import { IoCreateOutline } from 'react-icons/io5';

function MessagingPanel() {
    // Currently seeing a react hydration error, will fix later.
    // For some reason I can't get the image to show up when I pass the src as a prop. This is gonna be a problem when grabbing image urls from S3.

    return (
        <div className="flex flex-col w-25/96 h-[calc(100vh-56px)] overflow-y-scroll border-r-1 border-gray-200">
            <div className="flex flex-row mt-[15px] px-7 justify-between w-full">
                <h1 className="text-3xl font-semibold">Messages</h1>
                <button className="text-3xl pb-[10px]">
                    <IoCreateOutline />
                </button>
            </div>
            <input
                type="search"
                placeholder="Search Messages..."
                className="border border-gray-300 rounded-lg px-3 py-2 mx-5 mt-[15px] mb-[15px] text-lg focus:outline-none focus:ring focus:ring-primary-400"
            />
            {_.fill(Array(12), 0).map((index) => (
                <MessageCard user="Brandon Lake" />
            ))}
        </div>
    );
}

export default React.memo(MessagingPanel);
