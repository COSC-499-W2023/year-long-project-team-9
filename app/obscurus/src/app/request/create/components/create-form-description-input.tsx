import { FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionInput({ form }: any) {
  return (
    <>
      <div>
        <FormLabel>Request Description</FormLabel>
        <Textarea
          className="resize-none"
          maxLength={2001}
          rows={10}
          {...form.register("description")}
        ></Textarea>
      </div>
    </>
  );
}
