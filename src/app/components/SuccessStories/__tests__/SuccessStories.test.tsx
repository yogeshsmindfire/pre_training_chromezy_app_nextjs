import { render, screen } from '@testing-library/react';
import SuccessStories from '../SuccessStories';

describe('SuccessStories', () => {
  it('renders the success stories section', () => {
    render(<SuccessStories />);

    expect(screen.getByText('SUCCESS STORIES')).toBeInTheDocument();
    expect(screen.getByText(/Dummy ipsum dolor sit amet/)).toBeInTheDocument();
  });
});
