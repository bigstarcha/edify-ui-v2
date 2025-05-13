import React from 'react';
import WelcomePage from '@components/WelcomePage';
import { render, screen } from '@testing-library/react';

describe('Welcome Page', () => {
    it('should render the welcome page', () => {
        render(<WelcomePage />);
        expect(
            screen.getByText('Connect. Encourage. Edify.')
        ).toBeInTheDocument();
    });
});
