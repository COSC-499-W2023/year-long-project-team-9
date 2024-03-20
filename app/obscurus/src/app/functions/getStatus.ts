"use server";
import { Api } from "sst/node/api";

const getStatus = async (submissionId: string) => {
    console.log("Getting status for submissionId:", submissionId);
    try {
      const response = await fetch(Api.Api.url + "/getStatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submissionId: submissionId,
        }),
      });

      const res = await response.json();
      console.log("Response:", res);
      const data = res.data;
      console.log("Data:", data);
      const status = data.status;
      console.log("Current status:", status);
      return status;
    } catch (error) {
      console.error("Error getting status:", error);
      return null; // Or return an error object/message as needed
    }
  };

  export default getStatus;
