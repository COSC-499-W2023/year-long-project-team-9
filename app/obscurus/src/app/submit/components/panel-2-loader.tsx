import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const PanelLoader2 = () => {
  return (
    <div className="h-full w-full pb-16 px-4 pt-3 space-y-5">
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[60%] rounded-md" />
      <Skeleton className="bg-accent w-full h-[20%] rounded-md" />
    </div>
  );
};

export default PanelLoader2;
