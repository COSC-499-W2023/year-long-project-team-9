import Layout from "@/components/layout";
import { Button } from "@/components/ui/button"

const Dashboard = () => {

    return (
        <Layout>    
            <div className='grid justify-center items-center pt-12'>
                <p className='uppercase font-bold text-2xl pb-8' data-testid="welcome">Welcome!</p>
                <a  data-testid="link" href="https://obscurususerpool.auth.us-west-2.amazoncognito.com/login?client_id=45sq39c3d2srgg5cm5iclt82m6&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FDashboard">
                    <Button type="button" className='w-full'>Sign In</Button>
                </a>
            </div>
        </Layout>
    )
}

export default Dashboard;