import HomePage from '@components/HomePage';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
    it('should render the home page', () => {
        render(<HomePage />);
        expect(screen.getByText("Put a section for recommended/suggested friends")).toBeInTheDocument();
    });
});
