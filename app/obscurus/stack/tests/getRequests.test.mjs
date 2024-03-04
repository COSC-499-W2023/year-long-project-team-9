import { expect, it } from "vitest";
import axios from 'axios';
import { Api } from "sst/node/api";

it("test requests API endpoint", async () => {
    const response = await axios.get(Api.Api.url + "/getRequests");

    expect(response.status).toBe(200);
});
