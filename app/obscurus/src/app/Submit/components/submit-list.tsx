"use client";
import { ComponentProps, useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useSubmission } from "@/components/hooks/use-submission";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import { useRouter } from "next/navigation";
import { Search, Send } from "lucide-react";
import Nav from "../../../components/nav";
import { request } from "@playwright/test";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Input } from "../../../components/ui/input";
import { useQueryState } from "nuqs";

interface RequestsListProps {
  requests: Requests[];
  submissions: Submissions[];
  isCollapsed?: boolean;
}

export default function SubmitList({
  requests,
  submissions,
}: RequestsListProps) {
  const router = useRouter();
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [requestId, setRequestId] = useQueryState("requestId");
  const [search, setSearch] = useQueryState("search");

  const getAssociatedSubmission = (requestId: string) => {
    return submissions.find((item) => requestId === item.requestId);
  };

  useEffect(() => {
    if (!submissionId) {
      const submission = getAssociatedSubmission(requests[0].requestId);
      console.log("Assoc. submission", submission);
      if (submission) {
        setSubmissionId(submission?.submissionId);
      }
    }
  }),
    [];

  const handleClick = (item: Requests) => {
    setRequestId(item.requestId);
    const submission = getAssociatedSubmission(item.requestId);
    console.log("Assoc. submission", submission);
    if (submission) {
      setSubmissionId(submission?.submissionId);
    }

    console.log("Selected RequestID to list", requestId);
  };

  return (
    <div className="overflow-y-scroll">
      <Tabs defaultValue="all">
        <ScrollArea className="w-full h-full">
          <div className="flex items-center px-4">
            <h1 className="text-xl font-bold">Submit</h1>
            <div
              className="ml-auto"
              onClick={() => router.push("/CreateRequests")}
            >
              {/* <Nav
                isCollapsed={false}
                links={[
                  {
                    title: "Create Requests",
                    icon: Send,
                    variant: "ghost",

                  },
                ]}
              /> */}
            </div>
          </div>
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={search || "Search"}
                  className="pl-8"
                  onChange={(e) => setSearch(e.target.value || null)}
                  value={search || undefined}
                />
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-2 p-4 pt-0 h-full">
            {requests.map((item) => (
              <button
                key={item.requestId}
                className={cn(
                  "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                  requestId === item.requestId && "bg-muted"
                )}
                onClick={() => handleClick(item)}
              >
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center gap-2 w-full h-full">
                      <div className="font-semibold">
                        {item.requestTitle || item.requesterEmail}
                      </div>
                      {!item.isStarred && (
                        <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                      )}
                    </div>

                    <div
                      className={cn(
                        "ml-auto text-xs w-full flex justify-end",
                        requestId === item.requestId
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {" "}
                      {formatDistanceToNow(new Date(item.creationDate), {
                        addSuffix: true,
                      })}
                    </div>
                  </div>
                  <div className="text-xs font-medium">
                    {item.requesterEmail}
                  </div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground">
                  {item.description?.substring(0, 300)}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getBadgeVariantFromLabel("due-date")}>
                    Due{" "}
                    {formatDistanceToNow(new Date(item.dueDate), {
                      addSuffix: true,
                    })}
                  </Badge>
                  <Badge variant={getBadgeVariantFromLabel("status")}>
                    {getAssociatedSubmission(item.requestId)?.status}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </Tabs>
    </div>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["status"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["due-date"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
