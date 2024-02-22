"use server";
import { Api } from "sst/node/api";
export async function upload() {
  console.log("Invoked  ");
  const res = fetch(Api.Api.url + "/upload", {
    headers: {},
    method: "POST",
    body: "done",
  });
  return res;
}
