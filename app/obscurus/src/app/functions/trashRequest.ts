"use server";
import { Api } from "sst/node/api";

export default async function trashRequest(id: string) {
  const res = await fetch(Api.Api.url + "/trashRequest", {
    method: "post",
    body: JSON.stringify({
      id: id,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
