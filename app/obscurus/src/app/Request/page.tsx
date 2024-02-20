import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import RequestHeader from "@/components/request-header";
import RequestSummaries from "@/components/request-summaries";

export default async function Request() {
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
