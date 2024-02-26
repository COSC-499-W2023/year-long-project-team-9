import { FormLabel, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function TitleInput({ form }: any) {
  return (
    <>
      <div>
        <FormItem>
          <FormLabel>Request Title</FormLabel>
          <Input maxLength={101} {...form.register("title")}></Input>
          <FormMessage></FormMessage>
        </FormItem>
      </div>
    </>
  );
}
