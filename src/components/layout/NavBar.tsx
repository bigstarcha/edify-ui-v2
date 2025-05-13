'use client';
import Link from 'next/link';
import React from 'react';
import {
    IoHome,
    IoChatbubbleEllipsesSharp,
    IoAddCircleSharp,
    IoSearch,
    IoNotifications,
    IoPerson,
    IoSettingsSharp,
} from 'react-icons/io5';
import logo from '../../assets/images/new_edify_logo.png';

type LogoType = {
    src: string;
};

const navOptionStyle =
    'flex items-center text-gray-500 hover:text-gray-700 text-2xl';
const navTextStyle = 'ml-5 text-primary-400 hover:text-primary-600';

// This is bs, I do not know how it works. logo is a string type yet it has a src property
const { src } = logo as unknown as LogoType;

function Navbar() {
    return (
        <nav>
            <div className="flex flex-col w-70 h-screen border-r-1 border-gray-200 pt-5 pl-7 pr-7">
                {/** You will need items-center and justify-center to center the image! */}
                <div className="flex w-full items-center justify-center">
                    <img className="mb-13" src={src} width={175} />
                </div>
                <ul className="flex flex-col space-y-7">
                    <li className={navOptionStyle}>
                        <IoHome />
                        <Link className={navTextStyle} href="/">
                            Home
                        </Link>
                    </li>
                    <li className={navOptionStyle}>
                        <IoSearch />
                        <Link className={navTextStyle} href="/search">
                            Search
                        </Link>
                    </li>
                    <li className={navOptionStyle}>
                        <IoAddCircleSharp />
                        <Link className={navTextStyle} href="/post">
                            Post
                        </Link>
                    </li>
                    <li className={navOptionStyle}>
                        <IoChatbubbleEllipsesSharp />
                        <Link className={navTextStyle} href="/messages">
                            Messages
                        </Link>
                    </li>
                    <li className={navOptionStyle}>
                        <IoNotifications />
                        <Link className={navTextStyle} href="/notifications">
                            Notifications
                        </Link>
                    </li>
                    <li className={navOptionStyle}>
                        <IoPerson />
                        <Link className={navTextStyle} href="/profiles/me">
                            My Profile
                        </Link>
                    </li>
                    <li className={navOptionStyle}>
                        <IoSettingsSharp />
                        <Link className={navTextStyle} href="/settings">
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
