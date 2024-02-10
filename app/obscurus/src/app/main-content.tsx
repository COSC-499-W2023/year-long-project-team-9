"use client";
import React from "react";
import { ResizablePanel, ResizableHandle } from "../components/ui/resizable";
import { ListRequests } from "@/components/ListRequests";
import { Requests } from "stacks/core/src/sql.generated";
import RequestDisplay from "@/components/request-display";

export const MainContent = ({
  defaultLayout = [265, 440, 655],
}: {
  defaultLayout: number[] | undefined;
}) => {
  return (
    <>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <ListRequests/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]}>
      </ResizablePanel>
    </>
  );
};
