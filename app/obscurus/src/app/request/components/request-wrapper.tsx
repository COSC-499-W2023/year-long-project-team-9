"use client";
import { Users } from "@obscurus/database/src/sql.generated";
import Wrapper from "@/app/wrapper";
import RequestList from "./request-list";

export default function RequestWeapper({
  defaultLayout,
  defaultCollapsed,
  userData,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  userData: Users[];
}) {
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<RequestList email={userData[0].email}></RequestList>}
      secondPanel={<>{userData[0].email}</>}
    />
  );
}
