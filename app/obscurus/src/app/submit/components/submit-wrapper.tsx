"use client";
import Wrapper from "@/app/wrapper";
import { Requests, Submissions } from "@obscurus/database/src/sql.generated";
import SubmitList from "./submit-list";
import SubmitDisplay from "./submit-display";
import {
  Suspense,
  use,
  useEffect,
  useOptimistic,
  useRef,
  useState,
} from "react";
import { useRequests } from "@/app/hooks/use-requests";
import { useSubmissions } from "@/app/hooks/use-submissions";
import { set } from "date-fns";
import Loading from "./loading";
import { useUserData } from "@/app/hooks/use-user-data";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient()


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
  const [userData, setUserData] = useUserData();

  console.log("User data from hook:", userData);

  const [socket, setSocket] = useState<WebSocket | null>(null);

  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    if (getUserDataByEmail) {
      getUserDataByEmail("imightbejan@gmail.com").then((data) => {
        console.log("User data in fetchUserData:", data);
        setUserData(data);
        console.log("User data set");
        console.log("Optimistic data:", userData);
        try {
          if (optimisticData) {
            console.log("Setting optimistic data");
            console.log("Optimistic data:", optimisticData);
            setRequests(optimisticData.requests);
            setSubmissions(optimisticData.submissions);
          } else {
            setRequests(data.requests);
            setSubmissions(data.submissions);
          }
        } catch (e) {
          console.error(e);
          setRequests([]);
          setSubmissions([]);
        }
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

        setUserData(data);
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

  const [optimisticData, addOptimisticData] = useOptimistic(
    userData,
    (state: any, updatedData: any) => [...state, updatedData]
  );





  const [requests, setRequests] = useRequests();
  const [submissions, setSubmissions] = useSubmissions();



  return (
    <QueryClientProvider client={queryClient}>
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
            requests={requests || []}
            submissions={submissions || []}
            fetchUserData={fetchUserData}
            getPresignedUrl={getPresignedUrl}
            getDownloadPresignedUrl={getDownloadPresignedUrl}
            triggerJob={triggerJob}
            getStatus={getStatus}
            updateSubmissionStatus={updateSubmissionStatus}
          />
        }
      />
    </QueryClientProvider>
  );
};
