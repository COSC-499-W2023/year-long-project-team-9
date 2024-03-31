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

export const SubmitWrapper = ({
  getPresignedUrl,
  getDownloadPresignedUrl,
  sendToService,
  updateStatus,
  getStatus,
  getRequestsAndSubmissionsByEmail,
  defaultLayout,
  defaultCollapsed,
  websocketApiEndpoint,
  getUserViaEmail,
}: {
  getPresignedUrl?: (submissionId: string) => Promise<string>;
  getDownloadPresignedUrl?: (submissionId: string) => Promise<string>;
  sendToService?: (submissionId: string, fileExt: string, email: string) => Promise<string>;
  updateStatus?: (status: string, submissionId: string) => Promise<string>;
  getStatus?: (submissionId: string) => Promise<string>;
  getRequestsAndSubmissionsByEmail?: Function;
  defaultLayout: number[];
  defaultCollapsed: boolean;
  websocketApiEndpoint: string;
  getUserViaEmail?: (email: string) => Promise<string>;
}) => {
  const [submissions, setSubmissions] = useSubmissions();

  const [socket, setSocket] = useState<WebSocket | null>(null);

  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    console.log("Fetching user data");
    if (getRequestsAndSubmissionsByEmail) {
      getRequestsAndSubmissionsByEmail("imightbejan@gmail.com")
        .then((data: any) => {
          console.log("User data:", data);
          setSubmissions(data.submissions);
        })
    }
    setLoading(false);
  };

  useEffect(() => {

    // Initialize WebSocket connection
    const ws = new WebSocket(websocketApiEndpoint);
    setSocket(ws);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      // Fetch initial data
      if (getRequestsAndSubmissionsByEmail) {
        getRequestsAndSubmissionsByEmail("imightbejan@gmail.com").then((data:any) => {
          setSubmissions(data.submissions);
          console.log("Initial data fetched");
        });
      }
    };

    ws.onmessage = (event) => {
      console.log("Received message:", event.data);
      const { action, data } = JSON.parse(event.data);

      if (action === 'updateSubmissionStatus') {
        console.log("Updating submission status");
        console.log("Data:", data);
        setSubmissions((currentSubmissions: any) =>
          currentSubmissions.map((submission: any) =>
            submission.submissionId === data.submissionId ? { ...submission, status: data.newStatus } : submission
          )
        );

      } else if (action === 'updateSubmissions') {
        setSubmissions(data.submissions);
      }
    };

    ws.onerror = (event) => {
      console.error("WebSocket error:", event);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    return () => {
      ws.close();
    };
  }, [getRequestsAndSubmissionsByEmail, websocketApiEndpoint]);


  const updateSubmissionStatus = (status: string, submissionId: string) => {
    if (socket) {
      console.log("Sending updateSubmissionStatus message");
      console.log("Status:", status);
      console.log("Submission ID:", submissionId);
      socket.send(JSON.stringify({ action: "updateSubmissionStatus", data: { status, submissionId }}));
      console.log("Sent updateSubmissionStatus message");
      if (updateStatus) {
        updateStatus(status, submissionId);
      }
      console.log("Updated submission status");
    } else {
      console.error("WebSocket not connected");
    }
  };

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        loading ? (
          <Loading />
        ) : (
          <SubmitList
            submissions={submissions || []}
          />
        )
      }
      secondPanel={
        <SubmitDisplay
          fetchUserData={fetchUserData}
          getPresignedUrl={getPresignedUrl}
          getDownloadPresignedUrl={getDownloadPresignedUrl}
          sendToService={sendToService}
          getStatus={getStatus}
          updateSubmissionStatus={updateSubmissionStatus}
          getUserViaEmail={getUserViaEmail}
        />
      }
    />
  );
};
