{/*IMPORTS*/}
import Layout from "@/components/layout";
import { GetServerSideProps } from "next";

{/*FUNCTIONS*/}
export async function getServerSideProps() {
    return {
      props: {}, // nothing yet
    };
};
const TestDatabase = () => {
    return (
        <Layout>
            <div className="grid justify-center items-center pt-10 ">
                <h1 className="text-3xl font-extrabold">Database Testing</h1>
            </div>
        </Layout>
    );
};

{/*EXPORT*/}
export default TestDatabase;