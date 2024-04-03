"use client";
import {
  Requests,
  Submissions,
  Users,
} from "@obscurus/database/src/sql.generated";
import Wrapper from "@/app/wrapper";
import RequestList from "./request-list";
import hello from "@/app/functions/hello";
import RequestDisplay from "./request-display";
import { useState } from "react";
import RequestWrapper from "./request-wrapper";
import CreateWrapper from "./create/components/create-wrapper";

export default function RequestPageWrapper({
  defaultLayout,
  defaultCollapsed,
  request,
  submissions,
  userData,
  archiveRequest,
  unarchiveRequest,
  trashRequest,
  createRequest,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  request: Requests[];
  submissions: Submissions[];
  userData: Users;
  archiveRequest: Function;
  unarchiveRequest: Function;
  trashRequest: Function;
  createRequest: Function;
}) {
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const newDefaultLayout: number[] = defaultLayout;
  const newDefaultCollapsed: boolean = defaultCollapsed;

  return (
    <>
      {showCreate === false ? (
        <RequestWrapper
          defaultLayout={newDefaultLayout}
          defaultCollapsed={newDefaultCollapsed}
          request={request}
          submissions={submissions}
          userData={userData}
          archiveRequest={archiveRequest}
          unarchiveRequest={unarchiveRequest}
          trashRequest={trashRequest}
          setShowCreate={setShowCreate}
        />
      ) : (
        <CreateWrapper
          defaultLayout={newDefaultLayout}
          defaultCollapsed={newDefaultCollapsed}
          createRequest={createRequest}
          userData={userData}
          setShowCreate={setShowCreate}
        />
      )}
    </>
  );
}
