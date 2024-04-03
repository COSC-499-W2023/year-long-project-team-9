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

export default function RequestWeapper({
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
  const [requests, setRequests] = useState<Requests[]>(request);
  const handleTimezoneOffset = (date: Date) => {
    const messageDateTime = new Date(date).getTime();
    const userTimezoneOffset = -new Date().getTimezoneOffset() * 60 * 1000;
    return new Date(messageDateTime + userTimezoneOffset);
  };

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        <RequestList
          requests={requests}
          submissions={submissions}
          handleTimezoneOffset={handleTimezoneOffset}
        />
      }
      secondPanel={
        <RequestDisplay
          requests={requests}
          submissions={submissions}
          userData={userData}
          setRequests={setRequests}
          archiveRequest={archiveRequest}
          unarchiveRequest={unarchiveRequest}
          trashRequest={trashRequest}
          handleTimezoneOffset={handleTimezoneOffset}
        />
      }
    />
  );
}
