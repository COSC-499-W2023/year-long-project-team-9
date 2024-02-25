import { Input } from "@/components/ui/input";

export default function TitleInput({ register }: any) {
  return (
    <>
      <Input maxLength={101} {...register("title")}></Input>
    </>
  );
}
