import { FormLabel, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function TitleInput({ form }: any) {
  return (
    <>
      <div>
        <FormItem>
          <FormLabel>Request Title</FormLabel>
          <Input
            maxLength={101}
            placeholder="Title"
            {...form.register("title")}
          ></Input>
          {form.getFieldState("title").error && (
            <FormMessage>
              {form.getFieldState("title").error.message}
            </FormMessage>
          )}
        </FormItem>
      </div>
    </>
  );
}
