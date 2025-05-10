'use client';
import React, { ReactNode, useState, useCallback } from 'react';
import MessagingPanel from '@components/messaging/MessagingPanel';

function MessagingPage({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState('');
    // Not sure why the whole page is rerendering on handleSubmit
    const handleSubmit = useCallback(() => {
        alert('Message sent!');
    }, []);

    return (
        <div className="flex flex-row w-full">
            <MessagingPanel />
            <div className="flex flex-col w-71/96 h-[calc(100vh-56px)]">
                {children}
                <form
                    className="flex items-center h-1/10 px-7"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="text-lg w-full h-10 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-primary-400"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSubmit();
                                setMessage('');
                            }
                        }}
                        placeholder="Type a message..."
                    />
                    <button className="ml-[15px] bg-primary-400 h-10 hover:bg-primary-600 text-base py-1 transition duration-200 px-6 text-lg rounded-md">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default React.memo(MessagingPage);
