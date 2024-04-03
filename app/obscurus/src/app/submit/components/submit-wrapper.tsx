"use client";
import Wrapper from "@/app/wrapper";
import { Requests, Submissions } from "@obscurus/database/src/sql.generated";
import SubmitList from "./submit-list";
import SubmitDisplay from "./submit-display";
import { Suspense, use, useEffect, useState } from "react";
import { useRequests } from "@/app/hooks/use-requests";
import { useSubmissions } from "@/app/hooks/use-submissions";
import { set } from "date-fns";
import Loading from "./loading";
import { Provider } from "jotai";
import { c } from "node_modules/nuqs/dist/serializer-RqlbYgUW";
import { useSearchParams } from "next/navigation";
import { useWebSocket } from "@/app/ws-provider";
import PanelLoader from "./panel-1-loader";
import PanelLoader1 from "./panel-1-loader";
import PanelLoader2 from "./panel-2-loader";

export const SubmitWrapper = ({
  getPresignedUrl,
  getDownloadPresignedUrl,
  sendToService,
  updateStatus,
  getStatus,
  getRequestsAndSubmissionsByEmail,
  defaultLayout,
  defaultCollapsed,
  getUserViaEmail,
  setSubmittedDate
}: {
  getPresignedUrl?: (submissionId: string) => Promise<string>;
  getDownloadPresignedUrl?: (submissionId: string) => Promise<string>;
  sendToService?: (
    submissionId: string,
    fileExt: string,
    email: string
  ) => Promise<string>;
  updateStatus?: Function;
  getStatus?: (submissionId: string) => Promise<string>;
  getRequestsAndSubmissionsByEmail?: Function;
  defaultLayout: number[];
  defaultCollapsed: boolean;
  getUserViaEmail?: (email: string) => Promise<string>;
  setSubmittedDate?: Function;
}) => {
  const [submissions, setSubmissions] = useSubmissions();
  const ws = useWebSocket();
  const [loading, setLoading] = useState(false);

  console.log(setSubmittedDate);

  const fetchUserData = async () => {
    setLoading(true);
    console.log("Fetching user data");
    if (getRequestsAndSubmissionsByEmail) {
      const data = await getRequestsAndSubmissionsByEmail(
        "imightbejan@gmail.com"
      );
      console.log("User data:", data);
      data?.submissions && setSubmissions(data.submissions);
    }
    setLoading(false);
  };

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

      if (updateStatus) {
        console.log("Updating submission status:", status, submissionId);
        await updateStatus(status, submissionId);
         ws.send(
          JSON.stringify({
            action: "newNotification",
            data: {
              notification: {
                referenceId: submissionId,
                type: "SUBMIT",
                content: `Submission status updated to ${status}`,
                email: "imightbejan@gmail.com",
              },
            },
          })
        );
      }
    } else {
      console.error("WebSocket not connected or not ready");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        loading ? (
          <PanelLoader1 />
        ) : (
          <SubmitList submissions={submissions || undefined} getDownloadPresignedUrl={getDownloadPresignedUrl} />
        )
      }
      secondPanel={
        loading ? (
          <PanelLoader2 />
        ) : (
          <SubmitDisplay
            fetchUserData={fetchUserData}
            getPresignedUrl={getPresignedUrl}
            getDownloadPresignedUrl={getDownloadPresignedUrl}
            sendToService={sendToService}
            getStatus={getStatus}
            updateSubmissionStatus={updateSubmissionStatus}
            getUserViaEmail={getUserViaEmail}
            setSubmittedDate={setSubmittedDate}
          />
        )
      }
    />
  );
};

export default SubmitWrapper;
