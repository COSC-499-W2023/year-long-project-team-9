"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { statuses } from "../statuses";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { EnrichedSubmissions } from "@obscurus/database/src/types/enrichedSubmission";
import { getBadgeVariantFromStatus } from "./submit-list";
import getDownloadPresignedUrl from "@/app/functions/getDownloadPresignedUrl";
import { format } from "date-fns";

export const columns: ColumnDef<EnrichedSubmissions>[] = [
  {
    accessorKey: "requestTitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.original.requestDetails.requestTitle || "-"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "requesterName",
    accessorFn: (row) =>
      row.requester.givenName + " " + row.requester.familyName,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requester" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("requesterName")}
          </span>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      return rowA.original.requester.givenName.localeCompare(
        rowB.original.requester.givenName
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    accessorFn: (row) => row.status,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status;

      if (!status) {
        return (
          <Badge variant="outline" className="w-[100px]">
            {row.getValue("status")}
          </Badge>
        );
      }
      return (
        <div className="flex w-[100px] items-center truncate">
          <Badge variant={getBadgeVariantFromStatus(status)}>
            {status
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
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {(row.original.submittedDate &&
              format(new Date(row.original.submittedDate), "PPP, p")) ||
              "-"}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="text-center"
      />
    ),
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        getDownloadPresignedUrl={getDownloadPresignedUrl}
      />
    ),
  },
];
