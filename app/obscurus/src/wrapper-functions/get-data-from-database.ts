import { Api } from "sst/node/api";

// Do not touch
export async function getRequestsViaEmail(
  email: string,
  grouping: string | null,
) {
  const res = await fetch(Api.Api.url + "/getRequestsViaEmail", {
    method: "post",
    body: JSON.stringify({
      email: email,
      grouping: grouping,
    }),
  });
  return res;
}

export async function getSubmissionsViaEmail(
  email: string,
  grouping: string | null,
) {
  const res = await fetch(Api.Api.url + "/getSubmissionsViaEmail", {
    method: "post",
    body: JSON.stringify({
      email: email,
      grouping: grouping,
    }),
  });
  // I would not throw an erro in case something went wrong, I would
  // just return a empty map
  // When time you acutally need this method, convert it into a map
  // where {"sub_id": a returned submission,...}
  return res;
}

export async function getUserEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getUserViaEmail", {
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
  });
  // I would not throw an error in case something went wrong, I would
  // just return something empty
  // When time you acutally need this method, convert with whatever you want
  return res;
}
