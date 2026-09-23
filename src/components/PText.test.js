import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PText from './PText';

describe('PText Component', () => {
  it('renders without crashing', () => {
    render(<PText>Test content</PText>);
  });

  it('renders the children correctly', () => {
    render(<PText>Hello World</PText>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies the correct className', () => {
    const { container } = render(<PText>Test content</PText>);
    expect(container.firstChild).toHaveClass('para');
  });
});
