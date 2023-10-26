import { ThemeProvider } from '@/components/ui/theme-provider';
import Navbar from './NavBar'
// import Footer from './footer'
import { ReactNode } from 'react';


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
return (
  <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
  <div className="bg-background min-h-screen min-w-full font-inter flex flex-col gap-10">
    <Navbar />
    <main>{children}</main>
    {/* <footer>
    </footer> */}
  </div>
  </ThemeProvider>
);
}