import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const PanelLoader1 = () => {
  return (
    <div className="h-full w-full px-4 pt-2 space-y-5">
      <Skeleton className="bg-accent w-full h-[22%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[22%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
    </div>
  );
};

export default PanelLoader1;
