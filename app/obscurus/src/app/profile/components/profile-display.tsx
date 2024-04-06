import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useRef, useState } from "react";
import { Users } from "@obscurus/database/src/sql.generated";

export default function ProfileDisplay({ form, userData,
  getProfileImgPresignedUrl, }: { form: any; userData: Users; getProfileImgPresignedUrl?: (username: string) => Promise<string>; }) {
  const [file, setFile] = useState<File | undefined>(undefined);
  // const profileImage = form.getValues("profileImage");
  // const fileLength = profileImage ? profileImage.length : 0;
  // if (fileLength > 0) {
  //   console.log("test", profileImage[0]);
  //   setFile(profileImage[0]);
  // }
  const [profileImage, setProfileImage] = useState<string | undefined>(undefined);
  const getProfileImage = async () => {
    const imgkey = userData.profileImage;
    if (userData.email && getProfileImgPresignedUrl && imgkey) {
      const url = await getProfileImgPresignedUrl(imgkey);
      console.log(url);
      setProfileImage(url);
    }
  };

  getProfileImage();

  const [initials, setInitials] = useState<string | undefined>(undefined);
  if (form.getValues("firstName") && form.getValues("lastName").charAt(0)){
    setInitials(form.getValues("firstName").charAt(0) + form.getValues("lastName").charAt(0));
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="items-start p-5 grid grid-cols-1 w-4/5 justify-items-center">
          <Avatar className="w-32 h-32 ">
          <AvatarImage src={profileImage} />
            <AvatarFallback className="text-4xl">
              {initials}
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
