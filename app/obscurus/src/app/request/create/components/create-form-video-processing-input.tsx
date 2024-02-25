import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VideoProcessingInput({ form }: any) {
  return (
    <>
      <div>
        <FormLabel>Video Processing</FormLabel>
        <Tabs defaultValue="blurred" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger
              value="normal"
              className="w-full"
              onClick={() => form.setValue("videoProcessing", false)}
            >
              Normal
            </TabsTrigger>
            <TabsTrigger
              value="blurred"
              className="w-full"
              onClick={() => form.setValue("videoProcessing", true)}
            >
              Blurred
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
}
