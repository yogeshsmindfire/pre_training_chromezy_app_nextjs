import { render, screen } from '@testing-library/react';
import NavigationBar from '../Navigationbar';

describe('NavigationBar', () => {
  it('renders the navigation bar with logo and links', () => {
    render(<NavigationBar scrollPosition={0} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Explore AI')).toBeInTheDocument();
  });
});
