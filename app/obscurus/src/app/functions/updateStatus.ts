"use server";
import { request } from "http";
import { Api } from "sst/node/api";
const updateStatus = async (status: string, submissionId: string, requesterEmail: string, requesteeEmail: string) => {
  try {
    const response = await fetch(Api.Api.url + "/updateStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
        submissionId: submissionId,
        requesterEmail: requesterEmail,
        requesteeEmail: requesteeEmail,
      }),
    });

    // if (response.ok) {
    //   return response.json();
    // }

  } catch (error) {
    console.error("Error updating status:", error);
    return "Error updating status";
  }
};

export default updateStatus;
