import { ListRequests } from "@/components/ListRequests";
import Layout from "./layout";
import Dashboard from "@/components/dashboard";
import MyVideos from "@/components/MyVideos";
import { Api } from "sst/node/api";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import MyRequests from "@/components/MyRequests";
import RequestDisplay from "@/components/request-display";
import { ListSubmissions } from "@/components/ListSubmissions";

export async function getServerSideProps() {
  const fetchData = async (route: string) => {
    try {
      const apiURL = Api.Api.url
      const response = await fetch(apiURL + route);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      let data = await response.json();
      // data = data.map((item: any) => ({
      //   ...item,
      //   is_completed: item.is_completed === 'NULL' ? null : item.is_completed,
      // }));
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const requests = await fetchData("/getRequests");
  const submissions = await fetchData("/getSubmissions");

  return {
      props: { requests, submissions},
  };
};

export default function Wrapper({ requests, submissions }: { requests: Requests[], submissions: Submissions[] }) {
  console.log(requests)
  return (
    <Layout
      left={<Dashboard submissions={[]}  />}
      center={<ListSubmissions submissions={submissions}/>}
      right={null}
    ></Layout>
  );
}
