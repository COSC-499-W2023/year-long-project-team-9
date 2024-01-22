import { render, screen } from '@testing-library/react'
import AuthDemo from "@/pages/AuthDemo";
import '@testing-library/jest-dom'

{/*Testing in title in the document*/}
test('Render Dashboard', () => {
    render(<AuthDemo/>);
    const title = screen.getByTestId('welcome')
    expect(title).not.toBeVisible();
    expect(title).toBeInTheDocument();
});

{/*Testing in title is Welcome!*/}
test('Title Content', () => {
    render(<AuthDemo/>);
    const titleContent = screen.getByText('Welcome!')
    expect(titleContent).not.toBeVisible();
    expect(titleContent).toBeInTheDocument();
});

{/*Testing in link is correct*/}
test('Title Content', () => {
    render(<AuthDemo/>);
    const link = screen.getByTestId('link')
    expect(link).toHaveAttribute('href', 'https://obscurususerpool.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=45sq39c3d2srgg5cm5iclt82m6&redirect_uri=http://localhost:3000/AuthDemo');
});

{/*Testing if the sign in button is showing*/}
test('Correct Button', () => {
    render(<AuthDemo/>);
    const signInButton = screen.getByText('Sign In')
    expect(signInButton).not.toBeVisible();
    expect(signInButton).toBeInTheDocument();
});