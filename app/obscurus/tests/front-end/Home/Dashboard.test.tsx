import { render, screen } from '@testing-library/react'
import Dashboard from "@/pages/Dashboard";
import '@testing-library/jest-dom'

{/*Testing in title in the document*/}
test('Render Dashboard', () => {
    render(<Dashboard/>);
    const title = screen.getByTestId('welcome')
    expect(title).not.toBeVisible();
    expect(title).toBeInTheDocument();
});

{/*Testing in title is Welcome!*/}
test('Title Content', () => {
    render(<Dashboard/>);
    const titleContent = screen.getByText('Welcome!')
    expect(titleContent).not.toBeVisible();
    expect(titleContent).toBeInTheDocument();
});

{/*Testing in link is correct*/}
test('Title Content', () => {
    render(<Dashboard/>);
    const link = screen.getByTestId('link')
    expect(link).toHaveAttribute('href', 'https://obscurususerpool.auth.us-west-2.amazoncognito.com/login?client_id=45sq39c3d2srgg5cm5iclt82m6&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FDashboard');
});
