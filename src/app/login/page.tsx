import React from 'react';

import { redirect } from 'next/navigation';
import WelcomePage from '@components/WelcomePage';

export default function Login() {
    const isAuthenticated = true;

    if (isAuthenticated) {
        redirect('/');
    }

    return <WelcomePage />;
}
