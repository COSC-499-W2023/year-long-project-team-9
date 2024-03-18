import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileDisplay({ form }: { form: any }) {
  return (
    <>
      <div className="flex h-full flex-1 flex-col pt-4">
        <div className="items-start p-4">
          <Avatar>
            <AvatarImage src="{form.getValues('email')}"/>
            <AvatarFallback>
              {form.getValues("email")
                .split(" ")
                .map((chunk: string[]) => chunk[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="items-start pt-4 gap-1">
            <div>
              {form.getValues("email")}
            </div>
            <div className="flex flex-row items-start text-sm">
              <div>{form.getValues("firstName")}</div>
              <div className="pl-1">{form.getValues("lastName")}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
