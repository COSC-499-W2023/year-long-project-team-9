"use client";
import Wrapper from "@/app/wrapper";
import {
  Requests,
  Submissions,
  Users,
} from "@obscurus/database/src/sql.generated";
import RequestList from "./request-list";
import RequestDisplay from "./request-display";
import CreateForm from "./create/components/create-form";
import CreateDisplay from "./create/components/create-display";
import SubmitStatusAlert from "./create/components/create-submit-status-alert";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createFormSchema } from "./create/form/createFormSchema";
import { useRequests } from "@/app/hooks/use-requests";
import { EnrichedRequests } from "@obscurus/database/src/types/enrichedRequests";
import { useWebSocket } from "@/app/ws-provider";

export default function RequestWrapper({
  defaultLayout,
  defaultCollapsed,
  userData,
  archiveRequest,
  unarchiveRequest,
  trashRequest,
  createRequest,
  getProfileImgPresignedUrl,
  getEnrichedRequestsByEmail,
  updateRequest,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  userData: Users;
  archiveRequest: Function;
  unarchiveRequest: Function;
  trashRequest: Function;
  createRequest: Function;
  getProfileImgPresignedUrl?: (username: string) => Promise<string>;
  getEnrichedRequestsByEmail?: Function;
  updateRequest?: Function;
}) {
  const [showCreate, setShowCreate] = useState(false);
  const [requests, setRequests] = useRequests();

  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      userEmail: userData.email,
      videoProcessing: true,
      clientEmail: [{ email: "" }],
      firstName: userData.givenName,
      lastName: userData.familyName,
    },
  });

  async function onSubmit(values: z.infer<typeof createFormSchema>) {
    const createSuccess = await createRequest(values);
    if (!createSuccess) {
      const button = document.getElementById("failAlert");
      button?.click();
    } else {
      const button = document.getElementById("successAlert");
      button?.click();
    }
  }

  const ws = useWebSocket();

  useEffect(() => {
    if (!ws) return;

    const handleWebSocketMessages = (event: any) => {
      const { action, data } = JSON.parse(event.data);

      switch (action) {
        case "updateRequestGrouping":
          console.log("Received message:", event.data);
          console.log("Request ID:", data.requestId);
          console.log("Grouping:", data.grouping);
          setRequests((currentRequests: any) =>
            currentRequests.map((request: any) =>
              request === data.requestId
                ? { ...request, status: data.grouping }
                : request
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

  const updateRequestGrouping = async (requestId: string, grouping: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      console.log("Updating request grouping");
      console.log("Request ID:", requestId);
      console.log("Grouping:", grouping);
      const message = JSON.stringify({
        action: "updateRequestGrouping",
        data: { requestId, grouping },
      });
      ws.send(message);

      if (updateRequest && ws.readyState === WebSocket.OPEN) {
        await updateRequest(requestId, grouping);
        {
          grouping !== "ARCHIVED" &&
            grouping !== "TRASHED" && grouping !== null &&
            ws.send(
              JSON.stringify({
                action: "newNotification",
                data: {
                  notification: {
                    referenceId: requestId,
                    type: "REQUEST",
                    content: `Request status updated to ${grouping}`,
                    email: userData?.email,
                  },
                },
              })
            );
        }
      }
    } else {
      if (updateRequest) {
        await updateRequest(requestId, grouping);
      } else {
        console.error("WebSocket not connected");
      }
    }
  };

  const updateSubmissionIsRead = async (
    submissionId: string,
    isRead: boolean
  ) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({
        action: "updateSubmissionIsRead",
        data: { submissionId, isRead },
      });
      ws.send(message);
    } else {
      console.error("WebSocket not connected");
    }
  };

  useEffect(() => {
    if (!userData) return;

    console.log("User in request wrapper", userData);
    async function fetchRequests() {
      if (getEnrichedRequestsByEmail === undefined) return;
      const enrichedRequests = await getEnrichedRequestsByEmail(userData.email);
      enrichedRequests?.requests && setRequests(enrichedRequests.requests);
      console.log("Enriched requests", enrichedRequests?.requests);
    }

    fetchRequests();
  }, [userData]);


  const getPfp = async (imgkey: any) => {
    console.log("Getting profile image", imgkey);
    if (getProfileImgPresignedUrl) {
      const url = await getProfileImgPresignedUrl(imgkey);
      return url;
    }
  }

  return (
    <>
      <Wrapper
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
        firstPanel={
          showCreate ? (
            <CreateForm
              form={form}
              onSubmit={onSubmit}
              userData={userData}
              setShowCreate={setShowCreate}
            />
          ) : (
            <RequestList
              requests={requests as EnrichedRequests[]}
              setShowCreate={setShowCreate}
              getPfp={getPfp}
            />
          )
        }
        secondPanel={
          showCreate ? (
            <CreateDisplay form={form} userData={userData} getPfp={getPfp}  />
          ) : (
            <RequestDisplay
              userData={userData}
              updateRequestGrouping={updateRequestGrouping}
              getProfileImgPresignedUrl={getProfileImgPresignedUrl}
              form={form}
              getPfp={getPfp}
            />
          )
        }
      />
      {showCreate === true ? <SubmitStatusAlert /> : <></>}
    </>
  );
}
