import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const PanelLoader = () => {
  return (
    <div className="h-full w-full p-5 pt-0 space-y-3">
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
    </div>
  );
};

export default PanelLoader;
