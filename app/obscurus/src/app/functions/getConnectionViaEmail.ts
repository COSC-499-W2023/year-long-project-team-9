import { Api } from "sst/node/api";

export async function getConnectionViaEmail(email: string) {
  const res = await fetch(
    `${Api.Api.url}/getConnectionViaEmail?email=${email}`
  );
  if (res.ok) {
    return res.json();
  }
}
