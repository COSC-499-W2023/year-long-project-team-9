import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import RequestHeader from "@/components/request-header";
import RequestSummaries from "@/components/request-summaries";
import { getEmail } from "@/components/auth/authenticationMethods";
import { Api } from "sst/node/api";

async function getRequestsViaEmail(email: string) {
  // const res = await fetch(Api.Api.url + "/getSubmissions");

  console.log(email);
}

export default async function Request({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  let requests = getRequestsViaEmail(await getEmail());

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
