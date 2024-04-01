import { Button } from "@/components/ui/button";
import { Users } from "@obscurus/database/src/sql.generated";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useQueryState } from "nuqs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FileUp } from "lucide-react";
import { Suspense, useEffect, useRef, useState, ChangeEvent } from "react";

export default function ProfileImageInput({
  userData,
  form,
  getPresignedUrl,
  getDownloadPresignedUrl,
}: {
  userData: Users;
  form: any;
  getPresignedUrl?: (username: string) => Promise<string>;
  getDownloadPresignedUrl?: (username: string) => Promise<string>;
}) {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileExt, setFileExt] = useState<string | undefined>(undefined);
  const [objectURL, setObjectURL] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const email = userData.email;
  // const email = "imightbejan@gmail.com";
  const [username, extention] = email.split('.');

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    // setUpload(true);
    const file = fileInputRef.current?.files?.[0];
    setFile(file);
    if (!file) {
      console.error("No file selected");
      // setUpload(false);
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
        form.register("profileImage")(e.target.files[0]);
        return;
      } catch (error) {
        console.error("Upload failed:", error);
        setLoading(false);
      }
    }
  };

  return (
    <FormItem>
      <FormLabel>Profile Image</FormLabel>
      <div>
        <Button
          type="button"
          variant="outline"
          className="w-full justify-center text-left font-normal text-muted-foreground"
          onClick={() => {
            const button = document.getElementById("profileImageInput");
            button?.click();
          }}
        >
          Browse
          <div className="ml-auto">
            <FileUp className="mr-2 h-4 w-4" />
          </div>
        </Button>
        <input
          type="file"
          id="profileImageInput"
          accept="image/png, image/jpg, image/jpeg"
          hidden
          ref={fileInputRef}
          onChange={handleSubmit}
        // {...form.register("profileImage")}
        />
      </div>
      <FormDescription className="text-justify">
        Other users will see you profile image. Profile picture must be a .jpeg,
        .png, or .jpg; and no larger than 10 MB.
      </FormDescription>
      {form.getFieldState("profileImage").error && (
        <FormMessage>
          {form.getFieldState("profileImage").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
