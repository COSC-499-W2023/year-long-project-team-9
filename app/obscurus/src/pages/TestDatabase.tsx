{/*IMPORTS*/}
import Layout from "@/components/layout";
import { GetServerSideProps } from "next";
import {Api } from "sst/node/api"


{/*FUNCTIONS*/}
export async function getServerSideProps() {
    const fetchData = async () => {
        try {
            const apiURL = Api.Api.url
            const response = await fetch(apiURL+  "/users");
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const data = await response.json();
            // Process the data as needed
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const usersJSON = await fetchData();
    console.log(usersJSON)
    return {
      props: {usersJSON}, // nothing yet
    };
};
const TestDatabase = ({usersJSON}:{usersJSON: any}) => {
    return (
        <Layout>
            <div className="grid justify-center items-center pt-10 ">
                <h1 className="text-3xl font-extrabold">Database Testing</h1>
            </div>
            <div className="">

            </div>
        </Layout>
    );
};

{/*EXPORT*/}
export default TestDatabase;