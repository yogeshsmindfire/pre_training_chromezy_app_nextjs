import { render, screen } from '@testing-library/react';
import HeroModule from '../HeroModule';

describe('HeroModule', () => {
  it('renders the hero module with intro and stats', () => {
    render(<HeroModule />);

    expect(screen.getByText('Introducing AI Automation')).toBeInTheDocument();
    expect(screen.getByText('200%')).toBeInTheDocument();
  });
});
