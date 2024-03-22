"use server";
import { Api } from "sst/node/api";

export default async function readNotification(id: string) {
  console.log("01ae65a9-aa87-4c8d-b61a-7d468f04ab4e");
  const res = await fetch(Api.Api.url + "/readNotification", {
    method: "post",
    body: JSON.stringify({
      id: id,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
