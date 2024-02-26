import { FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionInput({ form }: any) {
  return (
    <>
      <div>
        <FormLabel>Request Description</FormLabel>
        <Textarea
          className="resize-none"
          maxLength={2001}
          placeholder="Description"
          rows={10}
          {...form.register("description")}
        ></Textarea>
        {form.getFieldState("description").error && (
          <FormMessage>
            {form.getFieldState("description").error.message}
          </FormMessage>
        )}
      </div>
    </>
  );
}
