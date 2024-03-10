"use client";
import { Users } from "@obscurus/database/src/sql.generated";
import Wrapper from "@/app/wrapper";
import ProfileForm from "./profile-from";
export default function ProfileWrapper({
  defaultLayout,
  defaultCollapsed,
  userData,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  userData: Users;
}) {
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<ProfileForm userData={userData}></ProfileForm>}
      secondPanel={<>{userData.email}</>}
    />
  );
}
