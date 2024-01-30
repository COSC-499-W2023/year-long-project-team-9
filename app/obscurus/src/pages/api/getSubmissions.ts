import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "sst/node/api";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const fetchData = async () => {
        const response = await fetch(
         Api.Api.url + "/getSubmissions"
        );
        


        return response;
    };

    const data = await fetchData();
    console.log("Server resp: ", data);

    res.status(200).send(data);
}