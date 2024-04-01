"use server";
import { Api } from "sst/node/api";
const setSubmittedDate = async (submissionId: string) => {
  try {
    await fetch(Api.Api.url + "/setSubmittedDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        submissionId: submissionId,
      }),
    });

  } catch (error) {
    console.error("Error setting submitted date:", error);
    return "Error setting submitted date";
  }
};

export default setSubmittedDate;
