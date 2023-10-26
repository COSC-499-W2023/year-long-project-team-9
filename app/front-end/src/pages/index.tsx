import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import type { NextPage } from 'next';
import Home from './Home'; // Adjust the path if Home is located in a different directory
import Navbar from './NavBar';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Layout from '@/components/layout';
import Features from './Features';

const IndexPage: NextPage = () => {
  return(
    <Layout>
      <Home />
      <Features />
    </Layout>
  )
}

export default IndexPage;
