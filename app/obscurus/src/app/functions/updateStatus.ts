import { Api } from "sst/node/api";

const updateStatus = async (status: string, submissionId: string) => {
    try {
      const response = await fetch(Api.Api.url + "/updateStatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submissionId: submissionId,
          status: status,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Server responded with ${response.status}: ${response.statusText}`
        );
      }

      const responseData = await response.json();
      console.log("Response Data", responseData);
      return responseData;
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

export default updateStatus
