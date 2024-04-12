import { createFormSchema } from "@/app/request/components/create/form/createFormSchema";
import { createRequest } from "@obscurus/database/src/requests";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.body === undefined) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }
  if (JSON.parse(event.body)["dueDate"] === undefined) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }
  let data = JSON.parse(event.body);
  data["dueDate"] = new Date(data["dueDate"]);
  const validData = createFormSchema.safeParse(data);
  if (validData.success === false) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }

  const insertSuccessful = await createRequest(validData.data);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(insertSuccessful),
  };
};
