import { Separator } from "@/components/ui/separator";

export default function CreateHeader() {
  return (
    <div>
      <div className="flex items-center">
        <div className="font-semibold text-xl">Create Request</div>
      </div>
      <div className="py-2">
        <Separator />
      </div>
    </div>
  );
}
