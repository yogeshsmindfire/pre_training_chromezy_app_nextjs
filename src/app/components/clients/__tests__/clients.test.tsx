import { render, screen } from '@testing-library/react';
import Clients from '../Clients';

describe('Clients', () => {
  it('renders the clients section with logos', () => {
    render(<Clients />);

    // Check if the section is rendered
    const section = screen.getByRole('list');
    expect(section).toBeInTheDocument();

    // Check if images are rendered (at least one)
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });
});
