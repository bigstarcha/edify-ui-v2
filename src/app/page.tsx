import { redirect } from 'next/navigation';
import WelcomePage from '@components/WelcomePage';
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
    return <HomePage />;
}
