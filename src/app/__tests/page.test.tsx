import { render, screen, fireEvent } from '@testing-library/react';
import Page from '../page';

// Mock all the child components to isolate the Page component tests
jest.mock('@/app/components/HeroModule/HeroModule', () => () => <div>HeroModule</div>);
jest.mock('@/app/components/NavigationBar/Navigationbar', () => ({ scrollPosition }) => <div>NavigationBar scroll: {scrollPosition}</div>);
jest.mock('@/app/components/Clients/Clients', () => () => <div>Clients</div>);
jest.mock('@/app/components/Services/Services', () => () => <div>Services</div>);
jest.mock('@/app/components/ClientFeedback/ClientFeedback', () => () => <div>ClientFeedback</div>);
jest.mock('@/app/components/Footer/Footer', () => () => <div>Footer</div>);
jest.mock('@/app/components/CustomerInsights/CustomerInsights', () => () => <div>CustomerInsights</div>);
jest.mock('@/app/components/Technologies/Technologies', () => () => <div>Technologies</div>);
jest.mock('@/app/components/SuccessStories/SuccessStories', () => () => <div>SuccessStories</div>);

describe('Page', () => {
  it('renders all the child components', () => {
    render(<Page />);

    expect(screen.getByText('NavigationBar scroll: 0')).toBeInTheDocument();
    expect(screen.getByText('HeroModule')).toBeInTheDocument();
    expect(screen.getByText('Clients')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('ClientFeedback')).toBeInTheDocument();
    expect(screen.getByText('SuccessStories')).toBeInTheDocument();
    expect(screen.getByText('Technologies')).toBeInTheDocument();
    expect(screen.getByText('CustomerInsights')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('updates scroll position on scroll event', () => {
    render(<Page />);

    // Check initial position
    expect(screen.getByText('NavigationBar scroll: 0')).toBeInTheDocument();

    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 500 } });

    // Check if the scroll position is updated
    expect(screen.getByText('NavigationBar scroll: 500')).toBeInTheDocument();
    
    // Also check the parallax style update
    const triangleImage = screen.getByAltText('triangle');
    expect(triangleImage).toHaveStyle('transform: translateY(-25px)');
    
    const ballImage = screen.getByAltText('ball');
    expect(ballImage).toHaveStyle('transform: translate(-25px, 25px)');
  });
});
