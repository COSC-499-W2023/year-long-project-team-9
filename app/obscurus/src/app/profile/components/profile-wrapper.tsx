"use client";
import Wrapper from "@/app/wrapper";
import ProfileForm from "./profile-form";
import ProfileDisplay from "./profile-display";
import { useState, useEffect } from "react";
import { Users } from "@obscurus/database/src/sql.generated";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const acceptedImageFileTypes = ["image/jpeg", "image/jpg", "image/png"];

const profileFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name must be at least one character.").max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string(),
  profileImage: z.any().refine(
    (files) => !files || (files[0]?.size <= 10000000 && acceptedImageFileTypes.includes(files[0]?.type)),
    { message: "File must be JPEG or PNG and less than 10MB." }
  ),
});

export default function ProfileWrapper({
  defaultLayout,
  defaultCollapsed,
  userData,
  getPresignedUrl,
  getProfileImgPresignedUrl,
  updateUser,
}: any) {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: userData
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (values: any) => {
    if (!values.profileImage) {
      console.error("No file selected");
      return;
    }

    const file = values.profileImage[0];
    const filename = file.name;
    const fileExt = file.name.split(".").pop();
    const username = userData.email.split("@")[0];
    const uuid = crypto.randomUUID();
    const key = `${filename}`;

    setLoading(true);
    try {
      const url = await getPresignedUrl(key);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(key)}`,
        },
        body: file,
      });
      if (response.ok) {
        console.log("Upload successful");
        if (updateUser) {
          updateUser(userData.email, values.firstName, values.lastName, key);
        }
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
      router.refresh()
    }
  };

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        <ProfileForm
          form={form}
          onSubmit={form.handleSubmit(handleSubmit)}
          userData={userData}
          getPresignedUrl={getPresignedUrl}
          updateUser={updateUser}
        />
      }
      secondPanel={
        <ProfileDisplay
          form={form}
          userData={userData}
          getProfileImgPresignedUrl={getProfileImgPresignedUrl}
        />
      }
    />
  );
}
