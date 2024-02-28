import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div
      className={`gap-3 h-screen  overflow-hidden p-6 grid grid-cols-[20%__30%__50%] pr-10 `}
    >
      <Skeleton className={`bg-accent `} />
      <Skeleton className={`bg-accent `} />
      <Skeleton className={`bg-accent `} />
    </div>
  );
};

export default Loading;
