import { Skeleton } from "@/components/ui/skeleton"
import { cookies } from "next/headers";

const Loading = () => {
    const layout = cookies().get("react-resizable-panels:layout");
    const collapsed = cookies().get("react-resizable-panels:collapsed");
    console.log("Layout", layout);
    console.log("Collapsed", collapsed?.value);
    const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
    const defaultCollapsed =
      collapsed && collapsed.value !== "undefined"
        ? JSON.parse(collapsed.value)
        : undefined;
    return(
        <div className=" w-full h-screen flex space-x-5 flex-row overflow-hidden p-5">
            <Skeleton className={`bg-accent w-[${defaultLayout && defaultLayout[0] || 20}%]`} />
            <Skeleton  className={`bg-accent w-[${defaultLayout && defaultLayout[0] || 40}%]`} />
            <Skeleton  className={`bg-accent w-[${defaultLayout && defaultLayout[0] || 50}%]`} />
        </div>
    )
}

export default Loading
