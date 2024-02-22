"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { PencilLine } from "lucide-react";

export default function RequestHeader() {
  return (
    <>
      <div className="flex items-center">
        <div className="font-semibold text-xl">Request</div>
        <div className="ml-auto">
          <a href="/Request/Create">
            <Button variant="ghost">
              <PencilLine className="mr-2 h-4 w-4" />
              Create
            </Button>
          </a>
        </div>
      </div>
      <div className="py-2">
        <Separator />
      </div>
    </>
  );
}
