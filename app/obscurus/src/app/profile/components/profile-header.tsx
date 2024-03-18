"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Send } from "lucide-react";

export default function ProfileHeader() {
  return (
    <>
      <div className="flex items-center">
        <div className="font-semibold text-xl">Profile</div>
      </div>
      <div className="py-2">
        <Separator /> 
      </div>
    </>
  );
}
