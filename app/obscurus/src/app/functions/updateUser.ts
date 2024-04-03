"use server";
import { Api } from "sst/node/api";
const updateStatus = async (status: string, submissionId: string) => {
  try {
    const response = await fetch(Api.Api.url + "/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        submissionId: submissionId,
        status: status,
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
