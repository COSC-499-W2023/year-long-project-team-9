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
  getProfileImgPresignedUrl?: (username: string) => any;
}) => {
  const [submissions, setSubmissions] = useSubmissions();
  const ws = useWebSocket();
  const [loading, setLoading] = useState(false);

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
            )
          );
          break;
        case "updateSubmissions":
          setSubmissions(data.submissions);
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

  useEffect(() => {
    setLoading(true);
    const fetchUserData = async () => {
      console.log("Fetching user data");
      if (getRequestsAndSubmissionsByEmail) {
        const data = await getRequestsAndSubmissionsByEmail(userEmail);
        console.log("User data:", data);
        data?.submissions && setSubmissions(data.submissions);
      }
    };
    fetchUserData().then(() => setLoading(false));
  }, []);

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        <SubmitList submissions={submissions as EnrichedSubmissions[]} />
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
