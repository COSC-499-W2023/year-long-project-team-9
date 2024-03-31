"use client";
import { ComponentProps, Suspense, useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { cn } from "@/app/functions/utils";
import { Badge } from "@/components/ui/badge";
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { usePathname, useRouter } from "next/navigation";
import {
  FileText,
  Filter,
  List,
  ListVideo,
  Search,
  SortAscIcon,
  SortDescIcon,
  XCircle,
} from "lucide-react";
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
import { useSubmission } from "@/app/hooks/use-submission";
import { Skeleton } from "@/components/ui/skeleton";
import PanelLoader from "./panel-1-loader";
import { useSearch } from "@/app/hooks/use-search";
import { useUpload } from "@/app/hooks/use-upload";
import { useSort } from "@/app/hooks/use-sort";
import { useTab } from "@/app/hooks/use-tab";
import { EnrichedSubmissions } from "@obscurus/database/src/types/enrichedSubmission";

interface RequestsListProps {
  requests?: Requests[];
  submissions?: Submissions[];
}

export default function SubmitList({
  submissions,
}: {
  submissions: EnrichedSubmissions[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [submission, setSubmission] = useSubmission();
  const [search, setSearch] = useSearch();
  const [upload] = useUpload();
  const [sort, setSort] = useSort();
  const [tab, setTab] = useTab();

  const handleClick = (item: EnrichedSubmissions) => {
    if (!upload.upload) {
      const submission = submissions.find(
        (submission) => submission.submissionId === item.submissionId
      );
      if (submission) {
        setSubmission({ ...submission, submissionId: submission.submissionId });
      }

      console.log("Selected submission to list", submission);
    }
  };

  const clearSearch = () => {
    setSearch({ ...search, search: null });
  };

  const sortRequests = (a: EnrichedSubmissions, b: EnrichedSubmissions) => {
    switch (sort.sort) {
      case "newest":
        return (
          new Date(b.requestDetails.creationDate).getTime() -
          new Date(a.requestDetails.creationDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.requestDetails.creationDate).getTime() -
          new Date(b.requestDetails.creationDate).getTime()
        );
      case "due":
        return (
          new Date(a.requestDetails.dueDate).getTime() -
          new Date(b.requestDetails.dueDate).getTime()
        );
      default:
        return 0;
    }
  };

  const sortedRequests = submissions?.sort(sortRequests);

  const statuses = ["all", "todo", "processing", "completed", "archived"];

  const tabsTriggers = statuses.map((status) => (
    <TabsTrigger key={status} value={status} className="text-xs">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </TabsTrigger>
  ));

  const tabsContent = statuses.map((status) => {
    const filteredRequests = sortedRequests?.filter((submission) => {
      const matchesStatus =
        status === "all" || submission.status.toLowerCase() === status;

      const searchTerm = search.search?.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        submission.requestDetails.requestTitle
          .toLowerCase()
          .includes(searchTerm) ||
        submission.requestDetails.requesterEmail
          .toLowerCase()
          .includes(searchTerm);

      return matchesStatus && matchesSearch && submission.status != "TRASHED";
    });

    return submissions ? (
      <TabsContent key={status} value={status}>
        <div className="flex flex-col gap-2 p-4 pt-0 h-full">
        {filteredRequests?.length === 0 && (
            <div className="flex flex-col w-full h-full justify-center items-center">
              <div className=" text-muted-foreground font-semibold">
                No requests to submit.
              </div>
            </div>
          )}
          {filteredRequests?.map((item) => (
            <button
              key={item.submissionId}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                submission?.submissionId === item.submissionId
                  ? "bg-accent text-foreground"
                  : "bg-background border-muted-border"
              )}
              onClick={() => handleClick(item)}
            >
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center gap-2 w-full h-full">
                    <div className="font-semibold text-ellipsis">
                      {item.requestDetails.requestTitle.length > 30
                        ? item.requestDetails.requestTitle.substring(0, 30) +
                          "..."
                        : item.requestDetails.requestTitle}
                    </div>
                  </div>

                  <div className="ml-auto text-xs w-full flex justify-end">
                    {formatDistanceToNow(
                      new Date(item.requestDetails.creationDate),
                      { addSuffix: true }
                    )}
                  </div>
                </div>
                <div className="text-xs font-medium text-ellipsis line-clamp-1">
                  {item.requester.givenName} {item.requester.familyName}
                </div>
                <div className="text-xs">
                  {item.requestDetails.requesterEmail.length > 30
                    ? item.requestDetails.requesterEmail.substring(0, 30) +
                      "..."
                    : item.requestDetails.requesterEmail}
                </div>
              </div>
              <div className="line-clamp-2 text-xs text-muted-foreground">
                {item.requestDetails.description}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getBadgeVariantFromLabel("due-date")}>
                  Due{" "}
                  {formatDistanceToNow(new Date(item.requestDetails.dueDate), {
                    addSuffix: true,
                  })}
                </Badge>
                <Badge
                  variant={getBadgeVariantFromStatus(item.status || "TODO")}
                >
                  {(item &&
                    item.status
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")) ||
                    "TODO"}
                </Badge>
              </div>
            </button>
          ))}
        </div>
      </TabsContent>
    ) : (
      <PanelLoader />
    )
  });

  return (
    <Tabs
      defaultValue="all"
      className="h-full flex flex-col gap-3 pt-2"
      onValueChange={(newValue) => setTab({ ...tab, tab: newValue })}
    >
      <div className="flex justify-between items-center px-4">
        <h1 className="text-xl font-semibold">Submit</h1>
        <Drawer>
          <span className="sr-only">Submissions</span>
          <Tooltip>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                disabled={submissions && submissions.length === 0}
              >
                <TooltipTrigger asChild>
                  <ListVideo className="h-4 w-4" />
                </TooltipTrigger>
              </Button>
            </DrawerTrigger>
            <TooltipContent>Submissions</TooltipContent>
          </Tooltip>
          <DrawerContent>
            <div className="w-full ">
              <DrawerHeader>
                <DrawerTitle>Submissions</DrawerTitle>
                <DrawerDescription>View all submissions</DrawerDescription>
              </DrawerHeader>
              <div className=" md:pb-10 md:mb-24">
                <div className="mt-3 overflow-y-scroll ">
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
              onChange={(e) => setSearch({ search: e.target.value })}
              value={search.search || ""}
            />
            {search && (
              <XCircle
                className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
                onClick={clearSearch}
                visibility={search.search ? "visible" : "hidden"}
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
    return "secondary";
  }

  if (["due-date"].includes(label.toLowerCase())) {
    return "secondary";
  }

  return "secondary";
}

export function getBadgeVariantFromStatus(
  status: string
): ComponentProps<typeof Badge>["variant"] {
  switch (status.toLowerCase()) {
    case "completed":
      return "success";
    case "processing":
      return "warning";
    case "in progress":
      return "warning";
    case "archived":
      return "outline";
    case "failed":
      return "destructive";
    case "todo":
      return "default";
    default:
      return "secondary";
  }
}
