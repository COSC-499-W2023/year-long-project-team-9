import { Api } from "sst/node/api";

export async function getUserNames() {
  const res = await fetch(`${Api.Api.url}/getUserNames`);
  if (res.ok) {
    return res.json();
  }
}
