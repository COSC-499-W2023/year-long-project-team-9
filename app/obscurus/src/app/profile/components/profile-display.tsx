import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Users } from "@obscurus/database/src/sql.generated";
import { format } from "date-fns";

export default function ProfileDisplay({
  form,
  userData,
  getProfileImgPresignedUrl,
}: {
  form: any;
  userData: Users;
  getProfileImgPresignedUrl?: (key: string) => Promise<string>;
}) {
  const [profileImage, setProfileImage] = useState<string | undefined>(
    userData?.profileImage || undefined
  );
  const [initials, setInitials] = useState<string>();

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (userData.profileImage && getProfileImgPresignedUrl) {
        console.log("Fetching profile image", userData.profileImage);
        try {
          const url = await getProfileImgPresignedUrl(userData.profileImage);
          setProfileImage(url);
        } catch (error) {
          console.error("Failed to load profile image", error);
        }
      }
    };

    fetchProfileImage();
  }, [userData.profileImage, getProfileImgPresignedUrl]);

  useEffect(() => {
    const firstName = form.watch("firstName", userData.givenName);
    const lastName = form.watch("lastName", userData.familyName);
    if (firstName && lastName) {
      setInitials(firstName.charAt(0) + lastName.charAt(0));
    }
  }, [form]);

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="items-start p-5 grid grid-cols-1 w-4/5 justify-items-center">
          <Avatar className="w-32 h-32">
            <AvatarImage src={profileImage} />
            <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-row mt-4 text-lg font-semibold">
            <div>{form.getValues("firstName") || userData.givenName}</div>
            <div className="pl-1">
              {form.getValues("lastName") || userData.familyName}
            </div>
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            {form.getValues("email") || userData.email}
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4 justify-items-center mt-2 mb-4 text-md">
            <div className="grid grid-cols-1 justify-items-center">
              <div className="text-muted-foreground text-sm">Requests Sent</div>
              <div>16</div>
            </div>
            <div className="grid grid-cols-1 justify-items-center">
              <div className="text-muted-foreground text-sm">Videos Submitted</div>
              <div>3</div>
            </div>
          </div>
          <div className="text-muted-foreground mt-2 text-sm"> Joined: {format(new Date(userData?.joinedDate), "PPP, p")}</div>
        </div>
      </div>
    </>
  );
}
