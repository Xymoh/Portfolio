import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServicesDetail from './ServicesDetail';
import services from '../assets/data/services';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    this.callback([{ isIntersecting: true }]);
  }
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

jest.mock('./Reveal', () => {
  return function DummyReveal({ children }) {
    return <div data-testid="reveal">{children}</div>;
  };
});

describe('ServicesDetail Component', () => {
  it('renders without crashing', () => {
    render(<ServicesDetail />);
    // Check if the main container is present.
    // The main container has a div with className 'servicesDetail__grid'
    const grid = document.querySelector('.servicesDetail__grid');
    expect(grid).toBeInTheDocument();
  });

  it('renders a card for each service in the data array', () => {
    render(<ServicesDetail />);
    // Check that we have the same number of cards as items in the services array
    const articles = document.querySelectorAll('article');
    expect(articles).toHaveLength(services.length);
  });

  it('renders correct content for each service', () => {
    render(<ServicesDetail />);

    services.forEach((service) => {
      // Check title
      expect(screen.getByText(service.title)).toBeInTheDocument();
      // Check description
      expect(screen.getByText(service.desc)).toBeInTheDocument();
      // Check tag
      expect(screen.getByText(service.tag)).toBeInTheDocument();

      // Check stack items are rendered
      service.stack.forEach(tech => {
        // use getAllByText since multiple services might have the same stack tech (e.g. Node.js, TypeScript)
        const techElements = screen.getAllByText(tech);
        expect(techElements.length).toBeGreaterThan(0);
      });

      // Check includes items are rendered
      service.includes.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  it('applies the highlight class only to highlighted services', () => {
    render(<ServicesDetail />);

    services.forEach((service) => {
      const article = document.getElementById(service.id);
      expect(article).toBeInTheDocument();

      if (service.highlight) {
        expect(article).toHaveClass('serviceCard--highlight');
      } else {
        expect(article).not.toHaveClass('serviceCard--highlight');
      }
    });
  });
});
