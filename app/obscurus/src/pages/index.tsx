import Layout from "./layout";
import Dashboard from "@/components/dashboard";
import MyVideos from "@/components/MyVideos";
import { Api } from "sst/node/api";
import { Submissions } from "stacks/core/src/sql.generated";

export async function getServerSideProps() {
  const fetchData = async () => {
    try {
      const apiURL = Api.Api.url
      const response = await fetch(apiURL + "/getSubmissions");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      let data = await response.json();
      data = data.map((item: any) => ({
        ...item,
        is_completed: item.is_completed === 'NULL' ? null : item.is_completed,
      }));
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const submissions = await fetchData();
  console.log(submissions)
  return {
      props: { submissions},
  };
};

export default function Wrapper({ submissions }: { submissions: Submissions[] }) {
  return (
    <Layout
      left={<Dashboard submissions={[]}  />}
      center={<Dashboard submissions={submissions}  />}
      right={<MyVideos videoUrl={"test3.mp4"}  />}
    ></Layout>
  );
}
