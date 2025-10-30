import { render, screen, fireEvent } from '@testing-library/react';
import Page from '../page';

// Mock all the child components to isolate the Page component tests
jest.mock('@/app/components/HeroModule/HeroModule', () => {
  const MockHeroModule = () => <div>HeroModule</div>;
  MockHeroModule.displayName = 'HeroModule';
  return MockHeroModule;
});
jest.mock('@/app/components/NavigationBar/Navigationbar', () => {
  const MockNavigationBar = ({
    scrollPosition,
  }: {
    scrollPosition: number;
  }) => <div>NavigationBar scroll: {scrollPosition}</div>;
  MockNavigationBar.displayName = 'NavigationBar';
  return MockNavigationBar;
});
jest.mock('@/app/components/Clients/Clients', () => {
  const MockClients = () => <div>Clients</div>;
  MockClients.displayName = 'Clients';
  return MockClients;
});
jest.mock('@/app/components/Services/Services', () => {
  const MockServices = () => <div>Services</div>;
  MockServices.displayName = 'Services';
  return MockServices;
});
jest.mock('@/app/components/ClientFeedback/ClientFeedback', () => {
  const MockClientFeedback = () => <div>ClientFeedback</div>;
  MockClientFeedback.displayName = 'ClientFeedback';
  return MockClientFeedback;
});
jest.mock('@/app/components/Footer/Footer', () => {
  const MockFooter = () => <div>Footer</div>;
  MockFooter.displayName = 'Footer';
  return MockFooter;
});
jest.mock('@/app/components/CustomerInsights/CustomerInsights', () => {
  const MockCustomerInsights = () => <div>CustomerInsights</div>;
  MockCustomerInsights.displayName = 'CustomerInsights';
  return MockCustomerInsights;
});
jest.mock('@/app/components/Technologies/Technologies', () => {
  const MockTechnologies = () => <div>Technologies</div>;
  MockTechnologies.displayName = 'Technologies';
  return MockTechnologies;
});
jest.mock('@/app/components/SuccessStories/SuccessStories', () => {
  const MockSuccessStories = () => <div>SuccessStories</div>;
  MockSuccessStories.displayName = 'SuccessStories';
  return MockSuccessStories;
});

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
    expect(ballImage).toHaveStyle('transform: translate(-100px, 50px)');
  });
});
