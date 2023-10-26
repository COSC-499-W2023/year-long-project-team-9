import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
 
import type { NextPage } from 'next';
import Home from './Home'; // Adjust the path if Home is located in a different directory

const IndexPage: NextPage = () => {
  return <Home />;
}

export default IndexPage;
