"use server";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import RequestHeader from "@/components/request-header";

export default async function Request() {
  return (
    <>
      <ResizablePanel defaultSize={50}>
        <RequestHeader />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>Hello World 2</ResizablePanel>
    </>
  );
}
