"use server";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import RequestHeader from "@/components/request-header";
import RequestSummaries from "@/components/request-summaries";
import { getEmail } from "@/components/auth/authenticationMethods";
import { Api } from "sst/node/api";

// Getting data from database
async function getRequestsViaEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getRequestsViaEmail", {
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
  });
  const data = await res.json();
  const requests = data["requests"];
  const lengthOfRequests = Object.keys(requests).length;
  const submissions = data["submissions"];
  const lengthOfsubmissions = Object.keys(submissions).length;
  const dataMap = new Map();
  for (let i = 0; i < lengthOfRequests; i++) {
    dataMap.set(requests[i]["requestId"], {
      request: requests[i],
      submissions: {},
    });
  }
  for (let i = 0; i < lengthOfsubmissions; i++) {
    // console.log(submissions[i]["requestId"]);
    // console.log(dataMap.get(submissions[i]["requestId"]["submissions"]));
    let submissionLocationInMap = dataMap.get(submissions[i]["requestId"]);
    const submissionID = submissions[i]["submissionId"];
    submissionLocationInMap["submissions"][submissionID] = submissions[i];
  }
  return dataMap;
}

export default async function Request({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  let requests = await getRequestsViaEmail(await getEmail());

  return (
    <>
      <ResizablePanel defaultSize={50}>
        <RequestHeader />
        <RequestSummaries data={requests} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>Hello World 2</ResizablePanel>
    </>
  );
}
