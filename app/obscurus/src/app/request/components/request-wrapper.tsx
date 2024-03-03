"use client";
import {
  Requests,
  Submissions,
  Users,
} from "@obscurus/database/src/sql.generated";
import Wrapper from "@/app/wrapper";
import RequestList from "./request-list";
import SubmitList from "@/app/submit/components/submit-list";
import SubmitDisplay from "@/app/submit/components/submit-display";
import hello from "@/app/functions/hello";

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
  userData: Users[];
}) {
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<SubmitList requests={requests} submissions={submissions} />}
      secondPanel={
        <SubmitDisplay
          requests={requests}
          submissions={submissions}
          action={hello}
        />
      }
    />
  );
}
