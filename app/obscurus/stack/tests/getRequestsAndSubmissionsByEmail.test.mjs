import { expect, it } from "vitest";
import axios from 'axios';
import { Api } from "sst/node/api";

it("test /getRequestsAndSubmissionsByEmail API endpoint", async () => {
  const email = "imightbejan@gmail.com";
  const response = await axios.post(Api.Api.url + "/getRequestsAndSubmissionsByEmail", email);

  expect(response.status).toBe(200);
});
