{/*IMPORTS*/}
import Layout from "@/components/layout";
import { GetServerSideProps } from "next";
import {Api } from "sst/node/api"


{/*FUNCTIONS*/}
export async function getServerSideProps() {


const fetchData = async () => {
  try {
    const apiURL = Api.Api.url
    console.log(Api.Api)
    const response = await fetch(apiURL+  "/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Data from /users:", data);
    // Process the data as needed
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();


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