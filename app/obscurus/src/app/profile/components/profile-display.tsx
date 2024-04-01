import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useRef, useState } from "react";

export default function ProfileDisplay({ form }: { form: any }) {
  const [file, setFile] = useState<File | undefined>(undefined);
  const profileImage = form.getValues("profileImage");
  const fileLength = profileImage ? profileImage.length : 0;
  // if (fileLength > 0) {
  //   console.log("test", profileImage[0]);
  //   setFile(profileImage[0]);
  // }

  return (
    <>
      <div className="flex justify-center">
        <div className="items-start p-5 grid grid-cols-1 w-4/5 flex justify-items-center">
          <Avatar className="w-32 h-32 ">
            <AvatarImage src="{form.getValues('profileImage')}" />
            <AvatarFallback className="text-4xl">
              {form.getValues("firstName")
                .split(" ")
                .map((chunk: string[]) => chunk[0])
                .join("")}
              {form.getValues("lastName")
                .split(" ")
                .map((chunk: string[]) => chunk[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-row mt-4 text-lg font-semibold">
            <div>{form.getValues("firstName")}</div>
            <div className="pl-1">{form.getValues("lastName")}</div>
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            {form.getValues("email")}
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4 justify-items-center mt-2 mb-4">
            <div className="grid grid-cols-1 justify-items-center">
              <div>Requests Sent</div>
              <div>16</div>
            </div>
            <div className="grid grid-cols-1 justify-items-center">
              <div>Videos Submitted</div>
              <div>3</div>
            </div>
          </div>
          <div className="text-muted-foreground mt-2 text-sm">Joined: January 15 2024</div>
        </div>
      </div>
    </>
  );
}
