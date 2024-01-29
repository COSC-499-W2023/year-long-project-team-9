{
  /*IMPORTS*/
}
import Layout from "@/components/layout";
import { GetServerSideProps } from "next";
import { Api } from "sst/node/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

{
  /*FUNCTIONS*/
}
// export async function getServerSideProps() {
//     const fetchData = async () => {
//         try {
//             const apiURL = Api.Api.url
//             const response = await fetch(apiURL + "/users");
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             // Process the data as needed
//             return data;
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
//     const usersJSON = await fetchData();
//     console.log(usersJSON)
//     return {
//         props: { usersJSON },
//     };
// };
const TestDatabase = ({ usersJSON }: { usersJSON: any }) => {
  return <Layout>fffff</Layout>;
};

{
  /*EXPORT*/
}
export default TestDatabase;
