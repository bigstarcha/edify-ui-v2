'use client';
import React from 'react';
import Message from './Message';
import Image from 'next/image';
import sampleperson from '../../assets/images/sampleperson.jpeg';

const sampleMessages = [
    { isMe: true, text: 'Hello!' },
    { isMe: true, text: 'How was your day?' },
    {
        isMe: false,
        text: 'It was good! I took my dog for a walk at the city park today. Loved enjoying the scenery. And you?',
    },
    {
        isMe: true,
        text: 'Mine was pretty good! I had a good time hangout with my friends after church. Loved to spend some quality time with them.',
    },
    {
        isMe: false,
        text: 'Hey, are you down to get dinner sometime this week? LOL',
    },
    { isMe: true, text: 'I am so down! Where are you thinkin?' },
    {
        isMe: false,
        text: 'Wanna try this new spot 15 minutes away from my place? Its a new Italian place and I heard its the new deal',
    },
    { isMe: true, text: 'Count me in!!' },
    { isMe: false, text: 'Cool, see you there this Thursday at 7 pm?' },
    { isMe: true, text: 'Roger that!' },
    {
        isMe: false,
        text: 'Oh, btw. I forgot to mention, can I bring my other friend along?',
    },
    { isMe: true, text: 'Yeah sure why not! Im all for it!' },
    { isMe: false, text: 'Sweet!' },
];

function Messages() {
    // Currently seeing a react hydration error, will fix later.
    // For some reason I can't get the image to show up when I pass the src as a prop. This is gonna be a problem when grabbing image urls from S3.
    // We will definitely need to take care of scroll ref to always scroll to latest text.

    return (
        <div className="flex flex-col w-full h-9/10 mt-[20px]">
            {/** @todo: We only want shadows to apply to the bottom of following div. Fix this */}
            <div className="flex flex-row px-7 items-center pb-[20px]">
                <Image
                    src={sampleperson}
                    alt="Sample Bio"
                    width={80}
                    height={80}
                    style={{ borderRadius: '40px' }}
                />
                <h1 className="ml-[25px] text-2xl font-semibold">
                    Brandon Lake
                </h1>
            </div>
            <div className="flex flex-col w-full h-full px-7 overflow-y-scroll">
                <div className="mt-[20px]"></div>
                {sampleMessages.map((message, index) => (
                    <Message
                        key={index}
                        isMe={message.isMe}
                        text={message.text}
                    />
                ))}
            </div>
        </div>
    );
}

export default React.memo(Messages);
