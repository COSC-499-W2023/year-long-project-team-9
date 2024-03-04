"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Send } from "lucide-react";

export default function AccountHeader() {
  return (
    <>
      <div className="flex items-center">
        <div className="font-semibold text-xl">Account</div>
      </div>
      <div className="py-2">
        <Separator />
      </div>
    </>
  );
}
