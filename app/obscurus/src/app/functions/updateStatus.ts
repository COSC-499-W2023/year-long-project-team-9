"use server"
import { Api } from "sst/node/api";
const updateStatus = async (status: string, submissionId: string) => {
  console.log("In update status")
  console.log("status", status)
  console.log("submissionId", submissionId)
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

      console.log("Response", response)
      return "Updated status successfully!";


      // const responseData = await response.json();
      // console.log("Response Data", responseData);
      // return responseData;
    } catch (error) {
      console.error("Error updating status:", error);
      return "Error updating status";
    }
  };

export default updateStatus
