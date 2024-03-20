"use server";
import { Config } from "sst/node/config";

export async function getCognitoPools() {
  const userPoolId = Config.USER_POOL_ID_KEY;
  const userPoolWebClientId = Config.USER_POOL_WEB_CLIENT_ID_KEY;

  return [userPoolId, userPoolWebClientId];
}
