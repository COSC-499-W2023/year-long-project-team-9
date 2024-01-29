import { Config } from "sst/node/config";

export const handler = async () => {
  return {
    userPoolId: Config.USER_POOL_ID_KEY,
    userPoolWebClientId: Config.USER_POOL_ID_KEY,
  };
};
