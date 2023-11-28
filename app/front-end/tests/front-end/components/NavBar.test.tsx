import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '@/components/NavBar';
import Login from '@/components/Login';
import * as nextRouter from 'next/router';
import * as nextThemes from 'next-themes';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
    };
  },
}));

jest.mock('next-themes', () => ({
  useTheme() {
    return {
      theme: 'light',
      setTheme: jest.fn(),
    };
  },
}));

describe('NavBar Component', () => {
  test('renders without crashing', () => {
    render(<NavBar />);
    expect(screen.getByText('obscurus')).toBeInTheDocument();
  });

//   test('theme toggle works', async() => {
//     render(<NavBar />);
//     fireEvent.click(screen.getByTestId('theme-toggle'));

// await waitFor(() => {
//   screen.debug();
//   expect(screen.getByTestId('theme-toggle')).toHaveAttribute('aria-expanded', 'true');
// });
    // expect(nextThemes.useTheme().setTheme).toHaveBeenCalledWith('light');

    // fireEvent.click(screen.getByTestId('dark'));
    // expect(nextThemes.useTheme().setTheme).toHaveBeenCalledWith('dark');
  });

  test('Open Sign In dialogue menu and select Log in with Google', () => {
    render(<NavBar />);
    render(<Login/>);
    fireEvent.click(screen.getByRole('button', { name: 'Sign In' }));
    expect(screen.getByText('Choose your login provider below.')).toBeInTheDocument();
  });

  // test('navigates on link click when signed in', () => {
  //   render(<NavBar />);
  //   // Mock a state change to signed in, if needed, before clicking 'Create Request'
  //   fireEvent.click(screen.getByRole('button', { name: 'Sign In' }));

  //   fireEvent.click(screen.getByText('Create Request'));
  //   expect(nextRouter.useRouter().push).toHaveBeenCalledWith('CreateRequestPage');
  // });
;
