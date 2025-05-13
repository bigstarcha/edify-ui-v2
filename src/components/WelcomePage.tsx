'use client';

import React from 'react';
import logo from '../assets/images/new_edify_logo.png';
import Link from 'next/link';

const bgImageStyle =
    'bg-[url(../assets/images/welcome2.JPG)] bg-cover w-3/5 h-screen rounded-r-[250px]';

type LogoType = {
    src: string;
};

const { src } = logo as unknown as LogoType;

function WelcomePage() {
    return (
        <>
            <div className={bgImageStyle}></div>
            <div className="flex flex-row text-center items-center justify-center w-2/5 pt-35 pb-46 pl-25 pr-25 bg-linear-to-r from-base to-primary-600">
                <div className="flex flex-col text-center items-center shadow-2xl w-full h-full bg-base rounded-2xl pt-10">
                    <img className="mb-3" src={src} width={175} />
                    <div className="text-xl">Connect. Encourage. Edify.</div>
                    <form>
                        <div className="flex flex-col space-y-4 w-75 mt-15">
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 rounded-md p-2 mb-3 text-lg focus:outline-none focus:ring focus:ring-primary-400"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border border-gray-300 rounded-md p-2 mb-7 text-lg focus:outline-none focus:ring focus:ring-primary-400"
                            />
                            <button
                                type="submit"
                                className="bg-primary-400 hover:bg-primary-600 text-base mb-3 rounded-md py-2 text-lg hover:bg-primary-500 transition duration-200"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    {/** Sign up is a separate workflow. I would not include that in the form */}
                    <button
                        type="submit"
                        className="bg-base w-75 hover:bg-gray-200 text-primary-400 mb-6 rounded-md py-2 text-lg hover:bg-primary-500 transition duration-200"
                    >
                        Sign Up
                    </button>
                    <Link
                        href="/forgot-password"
                        className="text-gray-400 hover:text-gray-600 text-sm mt-5"
                    >
                        Forgot Your Password?
                    </Link>
                </div>
            </div>
        </>
    );
}

export default React.memo(WelcomePage);

// Forget about image for now. That is a later concern.
