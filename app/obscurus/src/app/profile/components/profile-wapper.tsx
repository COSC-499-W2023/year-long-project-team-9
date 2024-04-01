"use client";
import { Users } from "@obscurus/database/src/sql.generated";
import Wrapper from "@/app/wrapper";
import ProfileForm from "./profile-form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProfileDisplay from "./profile-display";

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
  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values);
  }

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
