'use client';
import React from 'react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

interface MoreOptionsButtonProps {
    style: string;
}

function MoreOptionsButton({ style }: MoreOptionsButtonProps) {
    // Worry about click functionality later. Eventually we'll want to supply a list of options and their respective callbacks as props.
    return (
        <button className={style}>
            <IoEllipsisHorizontalSharp />
        </button>
    );
}

export default React.memo(MoreOptionsButton);
