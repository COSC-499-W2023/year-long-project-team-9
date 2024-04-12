import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "sst/node/api";

export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const fetchData = async () => {
        const response = await fetch(
         Api.Api.url + "/createUser",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              requestId: null,
            }),
          });

        const data = await response.json();

        return data;
    };

    const data = await fetchData();
    console.log("Server resp: ", data);

    res.status(200).send(data);
}
