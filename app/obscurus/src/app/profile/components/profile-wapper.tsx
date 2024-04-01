"use client";
import { Users } from "@obscurus/database/src/sql.generated";
import Wrapper from "@/app/wrapper";
import ProfileForm from "./profile-form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProfileDisplay from "./profile-display";
import { useRef, useState } from "react";
import { e } from "node_modules/nuqs/dist/serializer-RqlbYgUW";

const acceptedImageFileTypes = ["image/jpeg", "image/jpg", "image/png"];

const profileFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name must be at least on character." })
    .max(100),
  email: z.string(),
  lastName: z.string().trim().min(1).max(100),
  profileImage: z
    .any()
    .refine((files) => {
      return !files || files?.[0]?.size <= 10000000;
    })
    .refine(
      (files) => !files || acceptedImageFileTypes.includes(files?.[0]?.type),
      "wrong type"
    ),
});

export default function ProfileWrapper({
  defaultLayout,
  defaultCollapsed,
  userData,
  getPresignedUrl,
  getDownloadPresignedUrl,
  websocketApiEndpoint,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  userData: Users;
  getPresignedUrl?: (username: string) => Promise<string>;
  getDownloadPresignedUrl?: (username: string) => Promise<string>;
  websocketApiEndpoint: string;
}) {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      email: userData.email,
      firstName: userData.givenName,
      lastName: userData.familyName,
    },
  });
  const email = userData.email;
  const [username, extention] = email.split('.');
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileExt, setFileExt] = useState<string | undefined>(undefined);
  const [objectURL, setObjectURL] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  // const fileInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values);
    handleSubmit(values);
  }

  const handleSubmit = async (values: z.infer<typeof profileFormSchema>) => {
    setLoading(true);
    const profileImage = values.profileImage;
    console.log(profileImage[0]);
    setFile(profileImage[0]);
    if (!file) {
      console.error("No file selected");
      return;
    }
    const fileExt = file.name.split(".").pop();
    console.log("File extension", fileExt);
    setFileExt(fileExt);

    const key = `${username}.${fileExt}`;
    console.log(key);

    if (username && getPresignedUrl) {
      try {
        const url = await getPresignedUrl(key);
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type,
            "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(
              key
            )}`,
          },
          body: file,
        });
        setObjectURL(URL.createObjectURL(file));
        console.log("Upload successful");
        setLoading(false);
        return;
      } catch (error) {
        console.error("Upload failed:", error);
        setLoading(false);
      }
    }
  };

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        <ProfileForm
          userData={userData}
          form={form}
          onSubmit={onSubmit}
          getPresignedUrl={getPresignedUrl}
          getDownloadPresignedUrl={getDownloadPresignedUrl}
        ></ProfileForm>
      }
      secondPanel={<ProfileDisplay form={form}></ProfileDisplay>}
    />
  );
}
