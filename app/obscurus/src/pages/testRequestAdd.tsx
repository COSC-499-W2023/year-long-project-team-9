import Layout from "@/components/layout";
import { formSchema } from "./CreateRequest";
import { Api } from "sst/node/api";
import { ta } from "date-fns/locale";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

// export async function getServerSideProps() {
//   const apiURL = Api.Api.url;

//   return {
//     props: { apiURL },
//   };
// }

export default function testRequestAdd() {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@ubc.gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  const fetchData = async () => {
    const response = await fetch(
      "https://27kuh3ioqd.execute-api.us-west-2.amazonaws.com" + "/requests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: localFormSchema,
          sub: 1,
        }),
      }
    );
    return response;
  };
  fetchData();

  return (
    <div>
      <Button>hhh</Button>
    </div>
  );
}
