"use client";
import { Amplify } from "aws-amplify";
import config from "./utils/amplifyConfig";

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
