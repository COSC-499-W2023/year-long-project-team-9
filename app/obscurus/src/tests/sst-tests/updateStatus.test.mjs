import { expect, it } from "vitest";
import axios from "axios";
import { Api } from "sst/node/api";

it("test update submission status endpoint", async () => {
  const response = await axios.post(Api.Api.url + "/updateStatus", {
    status: "PROCESSING",
    submissionId: "6b82a368-dd60-49f4-93fe-c6f8c9a05e1b",
  });

  expect(response.status).toBe(200);
});
