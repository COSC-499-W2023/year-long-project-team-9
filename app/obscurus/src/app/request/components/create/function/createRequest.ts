"use server";
import { Api } from "sst/node/api";

const createRequest = async (payload: any) => {
  const res = await fetch(Api.Api.url + "/createRequest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (res.ok) {
    return res.json();
  } else {
    return false;
  }
};

export default createRequest;
