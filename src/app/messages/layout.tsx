import React from 'react';
import MessagingPage from '@components/messaging/MessagingPage';

export default function MessagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MessagingPage children={children} />;
}
