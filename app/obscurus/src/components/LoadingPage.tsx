import { NextPage } from 'next';
import Layout from '@/components/layout';
import {PulseLoader} from "react-spinners";




const LoadingPage: NextPage = () => {
    return(
      <Layout>
        <div className="flex justify-center items-center min-h-screen pb-32">
        <PulseLoader color="#000"/>
        </div>
      </Layout>
    )
}

export default LoadingPage;