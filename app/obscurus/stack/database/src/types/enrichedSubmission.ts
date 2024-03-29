import { GroupingState } from "@tanstack/react-table";
import { Group } from "aws-cdk-lib/aws-iam";
import { Grouping, Status } from "./status";

export type EnrichedSubmissions = {
  submissionId: string;
  requesteeEmail: string;
  status: Status;
  title: string | null;
  grouping: GroupingState | null;
  isRead: boolean;
  submittedDate: Date | null;
  requestId: string;
  requestDetails: {
    requestId: string;
    requestTitle: string;
    requesterEmail: string;
    description: string;
    blurred: boolean;
    grouping: Grouping | null;
    creationDate: Date;
    dueDate: Date;
  };
};
