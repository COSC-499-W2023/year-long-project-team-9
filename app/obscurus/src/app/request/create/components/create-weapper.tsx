import Wrapper from "@/app/wrapper";
import CreateForm from "./create-form";

interface CreaterWeapperProps {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  // createRequest: Function;
  email: string;
}

export default function CreaterWeapper({
  defaultLayout,
  defaultCollapsed,
  // createRequest,
  email,
}: CreaterWeapperProps) {
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<CreateForm userEmail={email}></CreateForm>}
      secondPanel={<>{email}</>}
    />
  );
}
