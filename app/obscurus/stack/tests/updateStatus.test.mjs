import { expect, it } from "vitest";
import axios from 'axios';
import { Api } from "sst/node/api";

it("test /updateStatus API endpoint", async () => {
  const updateData = {
    status: "TODO",
    submissionId: "8a4db5b7-862c-4ddf-bc8d-930ed577185b"
  };

  const response = await axios.post(Api.Api.url + "/updateStatus", updateData);

  expect(response.status).toBe(200);
});
