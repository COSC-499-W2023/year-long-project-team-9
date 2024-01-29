import Layout from "@/components/layout";
import { formSchema } from "./CreateRequest";
import { Api } from "sst/node/api";
import { ta } from "date-fns/locale";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GetServerSideProps } from "next";
import { sendDataToLambda } from "../pages/api/request";

export default async function testRequestAdd() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace this with your API call
        const apiURL = Api.Api.url;

        const response = await fetch(apiURL + "/requests");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this runs once after the initial render

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Render your data here */}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}
