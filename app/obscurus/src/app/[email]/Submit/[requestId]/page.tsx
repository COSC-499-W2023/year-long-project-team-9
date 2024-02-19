import { Requests } from "stacks/core/src/sql.generated";
import SubmissionDisplay from "../components/submission-display";
import { Api } from "sst/node/api";

async function getRequest(requestId: string) {

    const res = await fetch(Api.Api.url + "/getRequest", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ requestId: requestId }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    return res

}

async function Page({ params }: { params: string } ) {
    const data = await getRequest(params)
    console.log(data)
    return<></>
  }


export default Page;