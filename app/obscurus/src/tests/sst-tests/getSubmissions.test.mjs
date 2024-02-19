import { expect, it } from "vitest";
import axios from 'axios';
import { Api } from "sst/node/api";

it("test submissions API endpoint", async () => {
  const response = await axios.get(Api.Api.url + "/getSubmissions");

  expect(response.status).toBe(200);
});