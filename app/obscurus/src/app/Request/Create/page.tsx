"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CreateHeader from "@/components/create-header";

export default function Create() {
  return (
    <>
      <ResizablePanel defaultSize={50}>
        <CreateHeader />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>Hello World 2</ResizablePanel>
    </>
  );
}
