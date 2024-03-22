"use client";
import { ComponentProps, useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { cn } from "@/app/functions/utils";
import { Badge } from "@/components/ui/badge";
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { usePathname, useRouter } from "next/navigation";
import {
  Filter,
  List,
  ListVideo,
  Search,
  SortAscIcon,
  SortDescIcon,
  XCircle,
} from "lucide-react";
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
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ResponsiveContainer } from "recharts";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useRequest } from "@/app/hooks/use-request";
import { Separator } from "@/components/ui/separator";
import { useRequests } from "@/app/hooks/use-requests";
import { useSubmissions } from "@/app/hooks/use-submissions";

interface RequestsListProps {
  requests?: Requests[];
  submissions?: Submissions[];
}

export default function SubmitList({
  requests,
  submissions,
}: RequestsListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [request, setRequest] = useRequest();
  const [search, setSearch] = useQueryState("search");
  const [upload] = useQueryState("upload");
  const [sort, setSort] = useQueryState("sort");
  const [tab, setTab] = useQueryState("tab");

  const getAssociatedSubmission = (requestId: string | null) => {
    if (requestId && submissions) {
      return submissions.find((item) => requestId === item.requestId);
    }
    return null;
  };

  const handleClick = (item: Requests) => {
    if (!upload) {
      setRequest({
        ...request,
        selected: item.requestId,
      });
      const submission = getAssociatedSubmission(item.requestId);
      console.log("Assoc. submission", submission);
      if (submission) {
        setSubmissionId(submission?.submissionId);
      }

      console.log("Selected RequestID to list", item.requestId);
    }
  };

  const clearSearch = () => {
    setSearch(null);
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

  const statuses = ["all", "todo", "processing", "completed", "archived"];

  const tabsTriggers = statuses.map((status) => (
    <TabsTrigger key={status} value={status} className="text-xs">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </TabsTrigger>
  ));

  const tabsContent = statuses.map((status) => {
    const filteredRequests = sortedRequests?.filter((request) => {
      const submission = getAssociatedSubmission(request.requestId);
      const matchesStatus =
        submission && submission.status.toUpperCase() === status.toUpperCase();

      const searchTerm = search?.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        request.requestTitle.toLowerCase().includes(searchTerm) ||
        request.requesterEmail.toLowerCase().includes(searchTerm);

      return tab === "all" || tab === null
        ? matchesSearch
        : matchesStatus && matchesSearch;
    });

    return (
      <TabsContent key={status} value={status}>
        <div className="flex flex-col gap-2 p-4 pt-0 h-full">
          {filteredRequests?.map((item) => (
            <button
              key={item.requestId}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                request.selected === item.requestId && "bg-muted"
              )}
              onClick={() => handleClick(item)}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center gap-2 w-full h-full">
                    <div className="font-semibold">{item.requestTitle}</div>
                    {getAssociatedSubmission(item.requestId)?.isRead && (
                      <span className="flex h-2 w-2 rounded-full bg-blue-600 min-h-full" />
                    )}
                  </div>

                  <div
                    className={cn(
                      "ml-auto text-xs w-full flex justify-end",
                      request.selected === item.requestId
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {" "}
                    {formatDistanceToNow(
                      new Date(item.creationDate || "2024/03/21"),
                      {
                        addSuffix: true,
                      }
                    )}
                  </div>
                </div>
                <div className="text-xs font-medium">{item.requesterEmail}</div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {item.description?.substring(0, 300)}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getBadgeVariantFromLabel("due-date")}>
                  Due{" "}
                  {formatDistanceToNow(new Date(item.dueDate || "2024/03/21"), {
                    addSuffix: true,
                  })}
                </Badge>
                <Badge variant={getBadgeVariantFromLabel("status")}>
                  {getAssociatedSubmission(item.requestId)
                    ?.status.split(" ")
                    .map(
                      (word) =>
                        word[0].toUpperCase() + word.substring(1).toLowerCase()
                    )
                    .join(" ")}{" "}
                </Badge>
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
      onValueChange={setTab}
    >
      <div className="flex justify-between items-center px-4">
        <h1 className="text-xl font-semibold">Submit</h1>
        <Drawer>
          <span className="sr-only">View Processing</span>
          <Tooltip>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <TooltipTrigger asChild>
                  <ListVideo className="h-4 w-4" />
                </TooltipTrigger>
              </Button>
            </DrawerTrigger>
            <TooltipContent> All Videos</TooltipContent>
          </Tooltip>
          <DrawerContent>
            <div className="w-full ">
              <DrawerHeader>
                <DrawerTitle>All Videos</DrawerTitle>
                <DrawerDescription>View your uploaded videos</DrawerDescription>
              </DrawerHeader>
              <div className=" pb-5">
                <div className="mt-3 h-[600px] overflow-y-scroll ">
                  <ResponsiveContainer width="100%" height="100%">
                    <DataTable columns={columns} data={submissions || []} />
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-8"
              onChange={(e) => setSearch(e.target.value)}
              value={search || ""}
            />
            {search && (
              <XCircle
                className="absolute right-4 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
                onClick={clearSearch}
              />
            )}
          </div>
        </form>
      </div>
      <div className="flex flex-row items-center justify-between px-4">
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
      <Separator />
      <div className="h-full overflow-y-scroll">
        {tabsContent || <div>No requests.</div>}
      </div>
    </Tabs>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["status"].includes(label.toLowerCase())) {
    if (label.toLowerCase() === "processing") {
      return "secondary";
    } else return "default";
  }

  if (["due-date"].includes(label.toLowerCase())) {
    return "secondary";
  }

  return "secondary";
}
