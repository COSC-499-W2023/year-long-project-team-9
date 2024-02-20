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
async function getRequestData(email: string) {
  // const res = await fetch(Api.Api.url + "/getSubmissions");

  console.log(email);
}

export default async function Request({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  let requests = getRequestData(await getEmail());

  return (
    <>
      <ResizablePanel defaultSize={50}>
        <RequestHeader />
        <RequestSummaries />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>Hello World 2</ResizablePanel>
    </>
  );
}
