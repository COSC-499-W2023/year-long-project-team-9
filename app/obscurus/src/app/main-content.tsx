"use client";
import React from "react";
import { ResizablePanel, ResizableHandle } from "../components/ui/resizable";
import { ListRequests } from "@/components/ListRequests";
import { Requests } from "stacks/core/src/sql.generated";
import RequestDisplay from "@/app/request-display";

export const MainContent = ({
  defaultLayout = [265, 440, 655],
  requests,
}: {
  defaultLayout: number[] | undefined;
  requests: Requests[];
}) => {
  console.log("Requests", requests)
  return (
    <>
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <ListRequests requests={requests} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]}>
        <RequestDisplay request={requests[0]} />
      </ResizablePanel>
    </>
  );
};
