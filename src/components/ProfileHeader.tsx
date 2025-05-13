'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import logo from '../assets/images/sampleperson.jpeg';
import MoreOptionsButton from './functional/MoreOptionsButton';

// interface ProfileHeaderProps {
//     imgSrc: string;
// }

function ProfileHeader() {
    // These are props that will need to be passed from the server.
    // Make this a let to change later
    const [friendStatus, setFriendStatus] = useState(0); // 0 = not friends, 1 = friend request sent, 2 = friends
    const isMe = false;

    const moreOptionsButtonStyle =
        'ml-[15px] px-3 text-2xl rounded-md bg-gray-300 hover:bg-gray-400 transition duration-200 w-max h-[40px]';

    const friendButton = useMemo(() => {
        switch (friendStatus) {
            case 0:
                return (
                    <button
                        onClick={() => {
                            setFriendStatus(1);
                        }}
                        className="bg-primary-400 flex items-center justify-center hover:bg-primary-600 text-base mb-3 rounded-md text-xl transition duration-200 whitespace-nowrap w-[140px] h-[40px]"
                    >
                        Add Friend
                    </button>
                );
            case 1:
                return (
                    <button className="bg-gray-300 hover:bg-gray-400 transition flex items-center justify-center mb-3 rounded-md text-xl w-[140px] h-[40px]">
                        Request Sent
                    </button>
                );
            case 2:
                return (
                    <button className="bg-gray-300 hover:bg-gray-400 transition duration-200 flex items-center justify-center mb-3 rounded-md text-xl w-[140px] h-[40px]">
                        Friends
                    </button>
                );
            default:
            // Should never happen, but may need something just in case
        }
    }, [friendStatus]);

    // Currently seeing a react hydration error, will fix later.
    // For some reason I can't get the image to show up when I pass the src as a prop. This is gonna be a problem when grabbing image urls from S3.

    return (
        <div className="flex flex-col mb-[30px] w-full px-[80px] pt-[40px]">
            <div className="flex flex-row relative">
                <Image
                    src={logo}
                    alt="profile"
                    height={200}
                    width={200}
                    style={{
                        position: 'absolute',
                        borderRadius: 100,
                        border: '10px solid #fdfdfd',
                    }}
                />
                {/** Next image takes inline CSS props. */}
                <div className="mr-[100px]"></div>
                {/** Shoehorn this extra div */}
                <div className="bg-linear-to-r from-base to-primary-600 w-full h-[200px] rounded-r-[30px]"></div>
                {/* <div className={`bg-[url(${src})] bg-cover w-full h-[240px] rounded-r-[30px]`}></div> */}
                {/** This is supposed to be a background image */}
            </div>
            <div className="mt-[20px] flex flex-row w-full justify-between">
                {/** Name container */}
                <div>
                    <h1 className="text-5xl font-semibold">Brandon Lake</h1>
                    <div className="flex flex-row mt-[10px] max-w-[275px] justify-between">
                        <h2 className="text-2xl">500 friends</h2>
                        <h2 className="text-2xl">20 mutual</h2>
                    </div>
                    <h2 className="text-lg mt-[10px] max-w-[500px]">
                        John 3:16 - For God so loved the world that he gave his
                        one and only Son, that whoever believes in him shall not
                        perish but have eternal life.
                    </h2>
                </div>
                <div className="flex flex-row">
                    {!isMe && friendButton}
                    {!isMe && (
                        <button className="ml-[15px] flex flex-row items-center justify-center bg-primary-400 hover:bg-primary-600 text-base mb-3 rounded-md text-xl transition duration-200 w-[140px] h-[40px]">
                            <IoChatbubbleEllipsesSharp />
                            <div className="ml-2"></div>
                            Message
                        </button>
                    )}
                    {isMe && (
                        <button className="bg-gray-300 hover:bg-gray-400 transition duration-200 flex items-center justify-center mb-3 rounded-md text-xl w-[140px] h-[40px]">
                            Edit Profile
                        </button>
                    )}
                    {/** More options button */}
                    <MoreOptionsButton style={moreOptionsButtonStyle} />
                </div>
            </div>
            <div className="mt-[20px] border-b-1 border-gray-400"></div>
        </div>
    );
}

export default React.memo(ProfileHeader);
