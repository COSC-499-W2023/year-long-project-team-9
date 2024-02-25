"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function SignInForm() {
  return (
    <>
      <div>
        Sign In: Move to actual location when using
        <a href="/auth/up">
          <Button variant="ghost">
            <Send className="mr-2 h-4 w-4" />
            Create Account
          </Button>
        </a>
      </div>
    </>
  );
}
