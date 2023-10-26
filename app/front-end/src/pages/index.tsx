import type { NextPage } from 'next';
import Home from './Home'; // Adjust the path if Home is located in a different directory
import Layout from '@/components/layout';

const IndexPage: NextPage = () => {
  return(
    <Layout>
      <Home />
    </Layout>
  )
}

export default IndexPage;
