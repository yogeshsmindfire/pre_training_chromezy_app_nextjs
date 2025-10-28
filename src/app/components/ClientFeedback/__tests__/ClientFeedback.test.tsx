import { render, screen } from '@testing-library/react';
import ClientFeedback from '../ClientFeedback';

describe('ClientFeedback', () => {
  it('renders the client feedback section with title and cards', () => {
    render(<ClientFeedback />);

    expect(screen.getByText('Our Happy Clients')).toBeInTheDocument();
    expect(screen.getByText('Dummy Ipsum dolor sit amet, consectetur adipiscing elit')).toBeInTheDocument();
  });
});
