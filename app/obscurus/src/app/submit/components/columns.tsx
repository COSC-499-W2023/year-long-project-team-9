"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { statuses } from "../statuses";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Submissions } from "@obscurus/database/src/sql.generated";
import { EnrichedSubmissions } from "@obscurus/database/src/types/enrichedSubmission";
import { ComponentProps } from "react";
import { getBadgeVariantFromStatus } from "./submit-list";

export const columns: ColumnDef<EnrichedSubmissions>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "requestTitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.submissionId)

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[200px] truncate font-medium">
            {(row.getValue("requestDetails") as { requestTitle: string })
              ?.requestTitle || "No title"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "requestDetails.requesterEmail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requester Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] space-x-2">
        <span className="max-w-[200px] truncate font-medium">
          {row.getValue("requestDetails.requesterEmail") || "No email"}
        </span>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return (
          <Badge variant="outline" className="w-[100px]">
            {row.getValue("status")}
          </Badge>
        );

      }

      return (
        <div className="flex w-[100px] items-center">
          <Badge variant={getBadgeVariantFromStatus(status.value)}>
            {status.value
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "submittedDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Submitted" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.submissionId)

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("submittedDate") || "-"}
          </span>
        </div>
      );
    },
  },

  // {
  //   accessorKey: "priority",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Priority" />
  //   ),
  //   cell: ({ row }) => {

  //     return (
  //       <div className="flex items-center">
  //         {priority.icon && (
  //           <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
  //         )}
  //         <span>{priority.label}</span>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Link"
        className="text-center"
      />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

const getLabelVariantFromStatus = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "success";
    case "processing":
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
};
