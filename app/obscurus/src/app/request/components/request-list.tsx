"use client";
import { ComponentProps, useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { cn } from "@/app/functions/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { useRouter } from "next/navigation";
import {
  Filter,
  Megaphone,
  RocketIcon,
  Search,
  Send,
  SortAscIcon,
  SortDescIcon,
} from "lucide-react";
import Nav from "../../../components/nav";
import { request } from "@playwright/test";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {} from "@radix-ui/react-tabs";
import { Input } from "../../../components/ui/input";
import { useQueryState } from "nuqs";
import { TabsTrigger, Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RequestHeader from "@/app/request/components/request-header";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/modified-shadcn-ui-components/modified-alert";
import { RequestListAlert } from "./request-list-alert";

interface RequestsListProps {
  requests: Requests[];
  submissions: Submissions[];
  isCollapsed?: boolean;
}

export default function RequestList({
  requests,
  submissions,
}: RequestsListProps) {
  const [requestId, setRequestId] = useQueryState("requestId");
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("sort");
  const [tab, setTab] = useState<string>("tab");

  const getAssociatedSubmission = (requestId: string | null) => {
    if (requestId) {
      return submissions.find((item) => requestId === item.requestId);
    }
    return null;
  };

  const sortRequests = (a: Requests, b: Requests) => {
    switch (sort) {
      case "newest":
        return (
          new Date(b.creationDate).getTime() -
          new Date(a.creationDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.creationDate).getTime() -
          new Date(b.creationDate).getTime()
        );
      case "due":
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      default:
        return 0;
    }
  };

  const sortedRequests = requests?.sort(sortRequests);

  const handleClick = (item: Requests) => {
    setRequestId(item.requestId);
    console.log("Selected RequestID to list", requestId);
  };

  const statuses = ["all", "archived"];

  const tabsTriggers = statuses.map((status) => (
    <TabsTrigger key={status} value={status} className="text-xs">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </TabsTrigger>
  ));

  const tabsContent = statuses.map((status) => {
    const filteredRequests = sortedRequests?.filter((request) => {
      const matchesStatus = status === "all";

      const searchTerm = search;
      const matchesSearch =
        !searchTerm ||
        request.requestTitle.toLowerCase().includes(searchTerm) ||
        request.requesterEmail.toLowerCase().includes(searchTerm);

      return matchesStatus && matchesSearch;
    });

    return (
      <TabsContent key={status} value={status}>
        <div className="flex flex-col gap-2 p-4 pt-0 h-full">
          {filteredRequests.map((item) => (
            <button
              key={item.requestId} // Use submissionId for key as requestId could be duplicated in filteredRequests
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                requestId === item.requestId // Use condition based on submission state
                  ? "bg-accent text-foreground"
                  : "bg-background border-muted-border"
              )}
              onClick={() => handleClick(item)}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center gap-2 w-full h-full">
                    <div className="font-semibold text-ellipsis">
                      {item.requestTitle.length > 30
                        ? item.requestTitle.substring(0, 30) + "..."
                        : item.requestTitle}
                    </div>
                  </div>

                  <div className="ml-auto text-xs w-full flex justify-end">
                    {formatDistanceToNow(new Date(item.creationDate), {
                      addSuffix: true,
                    })}
                  </div>
                </div>
                <div className="text-xs font-medium text-ellipsis line-clamp-1">
                  {/* {item.requester.givenName} {item.requester.familyName} */}
                </div>
                <div className="text-xs">
                  {item.requesterEmail.length > 30
                    ? item.requesterEmail.substring(0, 30) + "..."
                    : item.requesterEmail}
                </div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {item.description}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getBadgeVariantFromLabel("due-date")}>
                  Due{" "}
                  {formatDistanceToNow(new Date(item.dueDate), {
                    addSuffix: true,
                  })}
                </Badge>

                {item.grouping === "ARCHIVED" ? (
                  <Badge variant={"outline"}>Archived</Badge>
                ) : (
                  <></>
                )}
              </div>
            </button>
          ))}
        </div>
      </TabsContent>
    );
  });

  return (
    <div>
      <Tabs defaultValue="all" className="h-screen pt-2" onValueChange={setTab}>
        <div className="px-4">
          <RequestHeader></RequestHeader>
        </div>

        <div>
          <div className="bg-background/95 px-4 pt-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={search || "Search"}
                  className="pl-8"
                  onChange={(e) => setSearch(e.target.value || "")}
                  value={search || undefined}
                />
              </div>
            </form>
          </div>

          <div>
            <div className="flex flex-row items-center justify-between mx-4 my-3">
              <TabsList>{tabsTriggers}</TabsList>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="">
                        <SortDescIcon className="w-4 h-4  " />
                        <span className="sr-only">Filter Results</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSort("newest")}>
                        Newest
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSort("oldest")}>
                        Oldest
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSort("due")}>
                        Due
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent>Filter</TooltipContent>
              </Tooltip>
            </div>
            <div className="pb-3">
              <Separator />
            </div>
            {tabsContent}
          </div>
        </div>

        {/* <div className="flex justify-center items-center h-screen">
            <RequestListAlert></RequestListAlert>
          </div> */}
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
