import Layout from "@/components/layout";
import { formSchema } from "./CreateRequest";

async function getServerSideProps(data: string, sub: string) {
  const apiURL = Api.Api.url;
  const response = await fetch(apiURL + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: data,
      sub: sub,
    }),
  });
}

export async function testRequestAdd() {
  const localFormSchema: formSchema = {
    title: "a",
    clients: [{ value: "bob@ubc.gmail.com" }],
    description: "a",
    blurred: true,
    dueDate: new Date(Date.now()),
    language: "string",
    terms: true,
  };
  const sub = "1";
  const data = JSON.stringify(localFormSchema);
  await getServerSideProps(data, sub);
  return <h1>Hello World</h1>;
}

{
  /*EXPORT*/
}
export default testRequestAdd;
