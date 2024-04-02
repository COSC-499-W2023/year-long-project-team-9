"use server";
import { Api } from "sst/node/api";

export default async function archiveRequest(id: string) {
  const res = await fetch(Api.Api.url + "/archiveRequest", {
    method: "post",
    body: JSON.stringify({
      id: id,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
