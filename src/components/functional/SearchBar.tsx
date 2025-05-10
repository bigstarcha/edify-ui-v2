'use client';
import React from 'react';
import { searchBarStyle } from './StyleSheet';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    placeholder: string;
}

function SearchBar({ searchTerm, setSearchTerm, placeholder }: SearchBarProps) {
    const handleChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    return (
        <input
            className={searchBarStyle}
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
            value={searchTerm}
        />
    );
}

export default React.memo(SearchBar);
