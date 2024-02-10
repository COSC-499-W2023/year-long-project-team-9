"use client";
import { ComponentProps } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Mail } from "../data/data";
import { useMail } from "./hooks/use-mail";
import { submissions } from "stacks/core/migrations/sql.generated";
import { useRouter } from "next/navigation";
import { Search, Send } from "lucide-react";
import Nav from "./nav";
import { request } from "@playwright/test";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Input } from "./ui/input";

interface SubmissionsListProps {
  items: submissions[];
  isCollapsed?: boolean;
}

export default function SubmissionsList({ items }: SubmissionsListProps) {
  const router = useRouter();
  const [mail, setMail] = useMail();

  console.log(JSON.stringify(items));

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center px-4">
        <h1 className="text-xl font-bold">Submissionss</h1>
        <div className="ml-auto" onClick={() => router.push("/CreateSubmissions")}>
          <Nav
            isCollapsed={false}
            links={[
              {
                title: "Create Submissions",
                icon: Send,
                variant: "ghost",
              },
            ]}
          />
        </div>
      </div>
      <Separator />
      <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <button
            key={item.request_id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              mail.selected === item.request_id && "bg-muted"
            )}
            onClick={() =>
              setMail({
                ...mail,
                selected: item.request_id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.title}</div>
                  {!item.is_read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    mail.selected === item.request_id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                ></div>
              </div>
              <div className="text-xs font-medium">{item.title}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.status?.substring(0, 300)}
            </div>
            {/* {item..length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null} */}
          </button>
        ))}
      </div>
    </Tabs>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
