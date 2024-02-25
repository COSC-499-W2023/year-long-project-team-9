"use client";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const signUpForm = z
  .object({
    email: z.string().trim().min(8).max(320).email(),
    firstName: z.string().trim().min(1).max(50),
    lastName: z.string().trim().min(1).max(50),
    password: z
      .string()
      .trim()
      .min(1)
      .max(256)
      .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Must contain at least one special character",
      }),
    confirmPassword: z.string(),
    ageVerification: z.boolean(),
    termsAndConditionsVerification: z.boolean(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );

export default function SignUpForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpForm>>({
    resolver: zodResolver(signUpForm),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpForm>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <div>
        <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
        Sign Up: Move to actual location when using
        <a href="/auth">
          <Button variant="ghost">
            <Send className="mr-2 h-4 w-4" />
            Login
          </Button>
        </a>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" maxLength={321} {...field} />
                </FormControl>
                <FormDescription>Email will be verifed.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Email" maxLength={257} {...field} />
                </FormControl>
                <FormDescription>
                  Password must have at least 1 uppercase, lowercase, number,
                  ans special character. Must be at least 8 chrahcters long, and
                  no longer than 256 chrahcters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* verify password */}
          {/* Not working */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verify Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormDescription>
                  Password must have at least 1 uppercase, lowercase, number,
                  ans special character. Must be at least 8 chrahcters long, and
                  no longer than 256 chrahcters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* first name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" maxLength={51} {...field} />
                </FormControl>
                <FormDescription>
                  Other users you decide to interact with will see your first
                  name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* second name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Email" maxLength={51} {...field} />
                </FormControl>
                <FormDescription>
                  Other users you decide to interact with will see your last
                  name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* age */}

          {/* terms */}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
