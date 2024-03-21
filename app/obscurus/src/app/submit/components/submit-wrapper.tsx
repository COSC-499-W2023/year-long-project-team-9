"use client";
import Wrapper from "@/app/wrapper";
import { Requests, Submissions } from "@obscurus/database/src/sql.generated";
import SubmitList from "./submit-list";
import SubmitDisplay from "./submit-display";
import { useEffect, useState } from "react";
import { useRequests } from "@/app/hooks/use-requests";
import { useSubmissions } from "@/app/hooks/use-submissions";

export const SubmitWrapper = ({
  getPresignedUrl,
  getDownloadPresignedUrl,
  triggerJob,
  updateStatus,
  getStatus,
  getUserDataByEmail,
  defaultLayout,
  defaultCollapsed,
  websocketApiEndpoint,
}: {
  getPresignedUrl?: (submissionId: string) => Promise<string>;
  getDownloadPresignedUrl?: (submissionId: string) => Promise<string>;
  triggerJob?: (submissionId: string, fileExt: string) => Promise<string>;
  updateStatus?: (status: string, submissionId: string) => Promise<string>;
  getStatus?: (submissionId: string) => Promise<string>;
  getUserDataByEmail?: (email: string) => Promise<any>;
  defaultLayout: number[];
  defaultCollapsed: boolean;
  websocketApiEndpoint: string;
}) => {
  const [requests, setRequests] = useRequests();
  const [submissions, setSubmissions] = useSubmissions()
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const updateRequests = (newRequests: Requests[]) => {
    setRequests(newRequests);
  }

  const updateSubmissionStatus = (status: string, submissionId: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({
        action: "updateSubmissionStatus",
        data: { status, submissionId }
      }));
      console.log("Sent updateSubmissionStatus message");
    }
  };


  useEffect(() => {
    const fetchUserData = async () => {
      if (!getUserDataByEmail) return;
      try {
        const result = await getUserDataByEmail("imightbejan@gmail.com");
        setRequests(result.requests);
        setSubmissions(result.submissions);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, [getUserDataByEmail]);

  useEffect(() => {
    let ws = new WebSocket(websocketApiEndpoint);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
        console.log("Received message:", message);
      switch (message.type) {
        case "updateRequests":
          setRequests(message.data);
          break;
        case "updateSubmissions":
          setSubmissions(message.data);
          break;
        default:
          console.log("Received unknown message type:", message.type);
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
      console.log("WebSocket connection closed");
    };
  }, [websocketApiEndpoint]);



  console.log(updateSubmissionStatus)
  console.log(updateRequests)

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<SubmitList updateRequests={updateRequests} />}
      secondPanel={
        <SubmitDisplay
          getPresignedUrl={getPresignedUrl}
          getDownloadPresignedUrl={getDownloadPresignedUrl}
          triggerJob={triggerJob}
          updateStatus={updateStatus}
          getStatus={getStatus}
        updateSubmissionStatus={updateSubmissionStatus}
        updateRequests={updateRequests}
        />
      }
    />
  );
};
