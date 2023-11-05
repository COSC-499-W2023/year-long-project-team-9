import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '@/components/About';


jest.mock("aos", () => ({
    init: () => {},
  }));

describe('About Component', () => {
  test('renders without crashing', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /Powered by/i })).toBeInTheDocument();
  });


  test('includes specific SVG images', () => {
    render(<About />);
    expect(screen.getByTestId('aws')).toBeInTheDocument(); 
    expect(screen.getByTestId('nextjs')).toBeInTheDocument(); 
    expect(screen.getByTestId('tailwindcss')).toBeInTheDocument();
  });

  test('aos works', async() => {
    await waitFor(() => {
        const aboutIcons = document.querySelectorAll('[data-aos="fade-in"]');
        aboutIcons.forEach((icon) => {
          icon.classList.add("aos-animate");
        });
      });
  });

     


});
