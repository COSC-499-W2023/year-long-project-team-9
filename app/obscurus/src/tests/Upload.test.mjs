import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Upload from '@/pages/submit/Upload';

describe('Upload Page', () => {
  beforeEach(() => {
    render(<Upload url="mock-url" />);
  });

  test('renders Upload page with all components', () => {
    expect(screen.getByText('Upload or Record Your Video')).toBeInTheDocument();
    expect(screen.getByText('Upload')).toBeInTheDocument();
    expect(screen.getByText('Record')).toBeInTheDocument();
  });

  test('handles file upload', () => {

    // Mocking file upload
    const file = new File(['video'], 'video.mp4', { type: 'video/mp4' });
    const fileInput = screen.getByTestId('file-input');
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Simulating form submission
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    // Check if the form submission is handled correctly
    expect(window.location.href).toHaveBeenCalled();
  });
});
