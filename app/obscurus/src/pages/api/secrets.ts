import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "sst/node/api";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

  
    const fetchData = async () => {
        const response = await fetch(
         Api.Api.url + "/secrets"
        );
        
        const data = await response.json();
        console.log(data)
        return data;
      };
      var userPoolKey;
      var userPoolWebClientKey;
      fetchData().then((data) => {
        // userPoolKey = data.userPoolId;
        // userPoolWebClientKey = data.userPoolWebClientId;
        console.log(data)
      });

  
    res.status(200).send(userPoolKey);
  }
