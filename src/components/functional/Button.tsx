'use client';
import React from 'react';
import { buttonStyle, ghostButtonStyle } from './StyleSheet';

interface ButtonProps {
    buttonText: string;
    ghostMode: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Button({ buttonText, ghostMode, onClick }: ButtonProps) {
    return (
        <button
            className={ghostMode ? ghostButtonStyle : buttonStyle}
            onClick={(event) => onClick(event)}
        >
            {buttonText}
        </button>
    );
}

export default React.memo(Button);
