"use server"
import { Api } from "sst/node/api";

export async function getUserDataByEmail(email: string) {
    const res = await fetch(Api.Api.url + "/getUserDataByEmail");

    if (res.ok) {
      return res.json();
    }


  }
