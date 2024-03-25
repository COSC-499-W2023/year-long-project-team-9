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
  const [submissions, setSubmissions] = useSubmissions();

  const [socket, setSocket] = useState<WebSocket | null>(null);

  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    if (getUserDataByEmail) {
      getUserDataByEmail("imightbejan@gmail.com")
        .then((data) => {
          console.log("User data:", data);
          setRequests(data.requests);
          setSubmissions(data.submissions);
        })
        .then(() => {
          console.log("Requests:", requests);
          console.log("Submissions:", submissions);
        });
    }
    setLoading(false);
  };

  useEffect(() => {
    const ws = new WebSocket(websocketApiEndpoint);
    // const handleBeforeUnload = () => {
    //   console.log("Page reloading or closing, disconnecting WebSocket");
    //   ws.close();
    // };

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };
    // window.addEventListener("beforeunload", handleBeforeUnload);
    setSocket(ws);

    fetchUserData();

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setRequests(data.requests);
      } catch {
        console.log("Message data is not valid JSON");
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
  }, []);

  const updateSubmissionStatus = (status: string, submissionId: string) => {
    if (socket) {
      console.log("Sending updateSubmissionStatus message");
      socket.send(
        JSON.stringify({
          action: "updateSubmissionStatus",
          data: { status, submissionId },
        })
      );
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
            requests={requests || []}
            submissions={submissions || []}
          />
        )
      }
      secondPanel={
        <SubmitDisplay
          fetchUserData={fetchUserData}
          getPresignedUrl={getPresignedUrl}
          getDownloadPresignedUrl={getDownloadPresignedUrl}
          triggerJob={triggerJob}
          getStatus={getStatus}
          updateSubmissionStatus={updateSubmissionStatus}
        />
      }
    />
  );
};
