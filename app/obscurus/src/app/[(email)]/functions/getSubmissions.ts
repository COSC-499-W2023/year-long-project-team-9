import { Api } from "sst/node/api";

export async function getSubmissions() {
    const res = await fetch(Api.Api.url + "/getSubmissions");
  
    if (res.ok) {
      return res.json();
    }
  }
