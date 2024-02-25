import { Textarea } from "@/components/ui/textarea";

export default function DescriptionInput({ register }: any) {
  return (
    <>
      <Textarea
        className="resize-none"
        maxLength={2001}
        rows={10}
        {...register("description")}
      ></Textarea>
    </>
  );
}
