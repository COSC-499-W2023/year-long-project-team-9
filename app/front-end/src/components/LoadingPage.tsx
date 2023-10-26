import { NextPage } from 'next';
import Layout from '@/components/layout';

const LoadingPage: NextPage = () => {
    return(
      <Layout>
        <div className="grid justify-center items-center">
          <h1 className="text-3xl font-extrabold">Loading...</h1>
        </div>
      </Layout>
    )
}

export default LoadingPage;