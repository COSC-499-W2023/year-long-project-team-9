"use client";
import Wrapper from "@/app/wrapper";
import { Requests, Submissions } from "@obscurus/database/src/sql.generated";
import SubmitList from "./submit-list";
import SubmitDisplay from "./submit-display";
import { Suspense, use, useEffect, useState } from "react";
import { useSubmissions } from "@/app/hooks/use-submissions";
import { useWebSocket } from "@/app/ws-provider";
import PanelLoader1 from "./panel-1-loader";
import PanelLoader2 from "./panel-2-loader";
import { EnrichedSubmissions } from "@obscurus/database/src/types/enrichedSubmission";
import { useUserData } from "@/app/user-provider";
import { set } from "date-fns";

export const SubmitWrapper = ({
  userEmail,
  getPresignedUrl,
  getDownloadPresignedUrl,
  sendToService,
  updateStatus,
  getStatus,
  getRequestsAndSubmissionsByEmail,
  defaultLayout,
  defaultCollapsed,
  setSubmittedDate,
  user,
  getProfileImgPresignedUrl,
}: {
  userEmail: string;
  getPresignedUrl?: (submissionId: string) => Promise<string>;
  getDownloadPresignedUrl?: (submissionId: string) => Promise<string>;
  sendToService?: (
    submissionId: string,
    fileExt: string,
    email: string,
    blurred: boolean
  ) => Promise<string>;
  updateStatus?: Function;
  getStatus?: (submissionId: string) => Promise<string>;
  getRequestsAndSubmissionsByEmail?: Function;
  defaultLayout: number[];
  defaultCollapsed: boolean;
  setSubmittedDate?: Function;
  user?: any;
  getProfileImgPresignedUrl?: (username: string) => any;
}) => {
  const [submissions, setSubmissions] = useSubmissions();
  const ws = useWebSocket();



  useEffect(() => {
    if (!ws) return;


    const handleWebSocketMessages = (event: any) => {
      const { action, data } = JSON.parse(event.data);

      switch (action) {
        case "updateSubmissionStatus":
          setSubmissions((currentSubmissions: any) =>
            currentSubmissions.map((submission: any) =>
              submission.submissionId === data.submissionId
                ? { ...submission, status: data.newStatus }
                : submission
            ).filter((submission: any) => submission.status !== "TRASHED")
          );
          break;
        case "updateSubmissions":
          setSubmissions(data.submissions);
          break;
        case "updateSubmissionIsRead":
          setSubmissions((currentSubmissions: any) =>
            currentSubmissions.map((submission: any) =>
              submission.submissionId === data.submissionId
                ? { ...submission, isRead: data.isRead }
                : submission
            )
          );
          break;
        default:
          break;
      }
    };

    ws.addEventListener("message", handleWebSocketMessages);

    return () => {
      ws.removeEventListener("message", handleWebSocketMessages);
    };
  }, [ws]);

  const updateSubmissionStatus = async (
    status: string,
    submissionId: string
  ) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({
        action: "updateSubmissionStatus",
        data: { status, submissionId },
      });
      ws.send(message);

      if (updateStatus && ws.readyState === WebSocket.OPEN) {
        await updateStatus(status, submissionId);
        {
          status !== "ARCHIVED" &&
            status !== "TRASHED" &&
            ws.send(
              JSON.stringify({
                action: "newNotification",
                data: {
                  notification: {
                    referenceId: submissionId,
                    type: "SUBMIT",
                    content: `Submission status updated to ${status}`,
                    email: userEmail,
                  },
                },
              })
            );
        }
      }
    } else {
      if (updateStatus) {
        await updateStatus(status, submissionId);
      } else {
        console.error("WebSocket not connected");
      }
    }
  };

  const updateSubmissionIsRead = async ( submissionId: string, isRead: boolean) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({
        action: "updateSubmissionIsRead",
        data: { submissionId, isRead },
      });
      ws.send(message);
    } else {
      console.error("WebSocket not connected");
    }
  }


  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      if (getRequestsAndSubmissionsByEmail) {
        const data = await getRequestsAndSubmissionsByEmail(
         user?.email
        );
        data?.submissions && setSubmissions(data.submissions);
      }
    };
    fetchUserData();
  }, [user]);

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
          <SubmitList
            submissions={submissions as EnrichedSubmissions[]}
            updateSubmissionIsRead={updateSubmissionIsRead}
            getDownloadPresignedUrl={getDownloadPresignedUrl}
          />
      }
      secondPanel={
        <SubmitDisplay
          getPresignedUrl={getPresignedUrl}
          getDownloadPresignedUrl={getDownloadPresignedUrl}
          sendToService={sendToService}
          updateSubmissionStatus={updateSubmissionStatus}
          setSubmittedDate={setSubmittedDate}
          getProfileImgPresignedUrl={getProfileImgPresignedUrl}
        />
      }
    />
  );
};

export default SubmitWrapper;
