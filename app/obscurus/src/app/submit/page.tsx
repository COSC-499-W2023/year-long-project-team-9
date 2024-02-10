
import { ListRequests } from "@/components/ListRequests";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable"
import { cookies } from "next/headers";

const layout = cookies().get("react-resizable-panels:layout");
const collapsed = cookies().get("react-resizable-panels:collapsed");

const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;


export default function SubmitPage(){
  return(<div>Hello SUbmissions</div>)
}