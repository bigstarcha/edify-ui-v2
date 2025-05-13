import React from 'react';
import { redirect } from 'next/navigation';
import HomePage from '@components/HomePage';

const isAuthenticated = true; // Placeholder for auth check

export default function Home() {
    /**
     * In the long run, we want to get user authentication props from the server.
     * Based on whether the user is logged in, we display the user's home page or the
     * welcome page.
     */
    if (!isAuthenticated) {
        redirect('/login');
    }
    return (
        // Call posts "Post Center" or "Your Latest Posts"
        <div className="h-[calc(100vh-56px)] px-[50px] pt-[30px] overflow-y-scroll w-full bg-gray-100">
            <HomePage />
        </div>
    );
}
