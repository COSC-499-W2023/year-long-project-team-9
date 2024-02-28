"use client";
import { Skeleton } from "@/components/ui/skeleton";

const Loader = (defaultLayout: any) => {
  console.log("client", defaultLayout.defaultLayout[0]);
  return (
    <div
      className={` gap-3 h-screen  overflow-hidden p-5 grid grid-cols-[${
        Math.round(defaultLayout[0]) as number
      }%__${Math.round(defaultLayout[1]) || 30}%__${Math.round(
        defaultLayout[0]
      )}%] `}
    >
      <Skeleton className={`bg-accent `} />
      <Skeleton className={`bg-accent `} />
      <Skeleton className={`bg-accent `} />
    </div>
  );
};

export default Loader;
