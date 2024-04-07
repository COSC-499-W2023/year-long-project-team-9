"use server";
import { Api } from "sst/node/api";
const updateRequest = async (requestId: string, grouping: string) => {
  try {
    const response = await fetch(Api.Api.url + "/updateRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestId: requestId,
        grouping: grouping,
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

export default updateRequest;
