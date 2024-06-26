"use client";
import { ComponentProps, useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { cn } from "@/app/functions/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { Search, Send, SortDescIcon, XCircle } from "lucide-react";
import {} from "@radix-ui/react-tabs";
import { Input } from "../../../components/ui/input";
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
import { EnrichedRequests } from "@obscurus/database/src/types/enrichedRequests";
import { useRequest } from "@/app/hooks/use-request";
import { useSearch } from "@/app/hooks/use-search";
import { useSort } from "@/app/hooks/use-sort";
import { useTab } from "@/app/hooks/use-tab";
import PanelLoader from "@/app/submit/components/panel-1-loader";
import { useRouter, useSearchParams } from "next/navigation";
import { setRequestMeta } from "next/dist/server/request-meta";

export default function RequestList({
  requests,
  // handleTimezoneOffset,
  setShowCreate,
  getPfp,
}: {
  requests: EnrichedRequests[];
  // handleTimezoneOffset: Function;
  setShowCreate: Function;
  getPfp: Function;
}) {
  const [request, setRequest] = useRequest();
  const [search, setSearch] = useSearch();
  const [sort, setSort] = useSort();
  const [tab, setTab] = useTab();

  const sortRequests = (a: EnrichedRequests, b: EnrichedRequests) => {
    switch (sort.sort) {
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
        return (
          new Date(b.creationDate).getTime() -
          new Date(a.creationDate).getTime()
        );
    }
  };

  const submissionIdFromQuery = useSearchParams().get("submissionId");

  const router = useRouter();

  console.log("Requests in request list", requests);
  const sortedRequests =
    requests && requests?.map((request) => request).sort(sortRequests);

  const handleClick = (item: EnrichedRequests) => {
    setRequest(item);
    if (
      submissionIdFromQuery &&
      !item.submissions.find((s) => s.submissionId === submissionIdFromQuery)
    ) {
      //unfortunately means a new request must be clicked twice to de-select the one from the query param,
      // but fixing this would involve having to refactor notifications to not use query params
      router.replace("/request");
      setRequest({ ...request, requestId: request.requestId });
    }
  };

  const statuses = ["all", "archived"];

  const tabsTriggers = statuses.map((status) => (
    <TabsTrigger key={status} value={status} className="text-xs">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </TabsTrigger>
  ));

  const tabsContent = statuses.map((status) => {
    const filteredRequests = sortedRequests?.filter((request) => {
      const matchesStatus =
        status === "all" || request.grouping?.toLowerCase() === status;

      const searchTerm = search && search.search?.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        request.requestTitle.toLowerCase().includes(searchTerm) ||
        request.requesterEmail.toLowerCase().includes(searchTerm);

      return matchesStatus && matchesSearch && request.grouping != "TRASHED";
    });

    return (
      <TabsContent
        key={status}
        value={status}
        className={`${
          requests ? " overflow-y-scroll h-full mb-4" : "overflow-y-hidden"
        }`}
      >
        <div className="flex flex-col gap-2 p-4 pt-0 h-full">
          {filteredRequests?.length === 0 && (
            <div className="flex flex-col w-full h-full justify-center items-center">
              <div className=" text-muted-foreground font-semibold">
                No requests.
              </div>
            </div>
          )}
          {filteredRequests?.map((item) => (
            <button
              key={item.requestId}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                request?.requestId === item.requestId
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
                <div className="text-xs line-clamp-1 text-ellipsis">
                  To:{" "}
                  {item?.submissions
                    .filter((value) => value.requestId === item?.requestId)
                    .map((item, index: number) => item.requesteeEmail)
                    .join(", ")}
                </div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {item.description}
              </div>
              <div className="flex items-center gap-2">
                {item.grouping !== "COMPLETED" && (
                  <Badge variant={getBadgeVariantFromLabel("due-date")}>
                    Due{" "}
                    {formatDistanceToNow(new Date(item.dueDate), {
                      addSuffix: true,
                    })}
                  </Badge>
                )}

                {item.grouping === "ARCHIVED" && (
                  <Badge variant={"outline"}>Archived</Badge>
                )}
              </div>
            </button>
          ))}
        </div>
      </TabsContent>
    );
  });

  return (
    <Tabs
      defaultValue="all"
      className="h-full flex flex-col gap-3 pt-2"
      onValueChange={(newValue) => setTab({ tab: newValue })}
    >
      <div className="flex justify-between items-center px-4">
        <h1 className="text-xl font-semibold">Request</h1>

        <Button
          variant="ghost"
          onClick={() => {
            setShowCreate(true);
            setRequest({ ...request, requestId: request.requestId });
          }}
        >
          <Send className="mr-2 h-4 w-4" />
          Create
        </Button>
      </div>
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-8"
              onChange={(e) => setSearch({ search: e.target.value })}
              value={search.search || ""}
            />
            {search && (
              <XCircle
                className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
                onClick={() => setSearch({ ...search, search: null })}
                visibility={search.search ? "visible" : "hidden"}
              />
            )}
          </div>
        </form>
      </div>
      <div className="flex flex-row items-center justify-between pl-4 pr-4">
        <TabsList>{tabsTriggers}</TabsList>
        <Tooltip>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className=""
                  disabled={!requests || requests.length === 0}
                >
                  <SortDescIcon className="w-4 h-4  " />
                  <span className="sr-only">Sort Results</span>
                </Button>
              </TooltipTrigger>
            </DropdownMenuTrigger>
            <TooltipContent>Sort Requests</TooltipContent>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSort({ sort: "newest" })}>
                Newest
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSort({ sort: "oldest" })}>
                Oldest
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSort({ sort: "due" })}>
                Due
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Tooltip>
      </div>
      <Separator />
      {requests ? tabsContent : <PanelLoader />}
    </Tabs>
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
