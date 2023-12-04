import { NextPage } from 'next';
import Layout from '@/components/layout';

const LoadingPage: NextPage = () => {
    return(
      <Layout>
        <div className="flex justify-center items-center min-h-screen pb-32">
          <div className="text-3xl font-extrabold">Loading...</div>
        </div>
      </Layout>
    )
}

export default LoadingPage;