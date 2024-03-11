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

export default function RequestWeapper({
  defaultLayout,
  defaultCollapsed,
  requests,
  submissions,
  userData,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  requests: Requests[];
  submissions: Submissions[];
  userData: Users;
}) {
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<RequestList requests={requests} submissions={submissions} />}
      secondPanel={
        <RequestDisplay
          requests={requests}
          submissions={submissions}
          userData={userData}
        />
      }
    />
  );
}
