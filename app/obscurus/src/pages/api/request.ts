import { Api } from "sst/node/api";

export async function sendDataToLambda(data) {
  const apiURL = Api.Api.url;
  const response = await fetch(apiURL + "/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
