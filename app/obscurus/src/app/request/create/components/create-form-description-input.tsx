import { Textarea } from "@/components/ui/textarea";

export default function DescriptionInput({ register }: any) {
  return (
    <>
      <Textarea
        className="resize-none h-full"
        maxLength={101}
        rows={10}
        {...register("description")}
      ></Textarea>
    </>
  );
}
