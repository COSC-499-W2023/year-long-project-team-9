"use server"
import { Api } from "sst/node/api";

export async function getRequests() {
    const res = await fetch(Api.Api.url + "/getRequests");
  
    if (res.ok) {
      return res.json();
    }
  }
