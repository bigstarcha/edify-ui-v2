import React from 'react';
import ProfileHeader from '@components/ProfileHeader';
import Posts from '@components/Posts';

export default function ProfileLayout() {
    const imgSrc = '../assets/images/sampleperson.jpeg';

    return (
        // If you want inner divs to show up, you MUST explicitly define the outer div's width and height!
        <div className="pl-[80px] pr-[80px] pt-[40px] h-[calc(100vh-56px)] overflow-y-scroll w-full">
            <ProfileHeader imgSrc={imgSrc} />
            <Posts />
        </div>
    );
}
