import { Api } from "sst/node/api";

export async function getRoomsViaEmail(email: string) {
  const res = await fetch(`${Api.Api.url}/getRoomsViaEmail?email=${email}`);
  if (res.ok) {
    return res.json();
  }
}
