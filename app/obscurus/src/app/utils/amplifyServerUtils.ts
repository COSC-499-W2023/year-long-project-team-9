import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "./amplifyConfig";

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});
