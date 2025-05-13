import React from 'react';

import { Roboto_Condensed } from 'next/font/google';
import '../styles/globals.css';
import NavBar from '@components/layout/NavBar';
import Footer from '@components/layout/Footer';

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: '400',
});

const isAuthenticated = true; // Placeholder for auth check

function RootLayout({ children }) {
    return (
        <html lang="en" className={robotoCondensed.className}>
            <body>
                <div className="flex">
                    {isAuthenticated && <NavBar />}
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;
