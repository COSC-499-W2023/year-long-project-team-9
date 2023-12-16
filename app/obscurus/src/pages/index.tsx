import type { NextPage } from 'next';
import Home from './Home';
import Layout from '@/components/layout';

const IndexPage: NextPage = () => {
  return(
    <Layout>
      <Home />
    </Layout>
  )
}

export default IndexPage;
