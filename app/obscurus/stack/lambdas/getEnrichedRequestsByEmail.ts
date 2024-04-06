import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getEnrichedRequestsByEmail } from "@obscurus/database/src/requests";
import { EnrichedRequests } from "@obscurus/database/src/types/enrichedRequests";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const email = event.body;
    if (!email) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "No email provided in the request body" }),
        };
    }

    try {
        const enrichedRequests: EnrichedRequests[] = await getEnrichedRequestsByEmail(email);

        console.log('Enriched requests:', enrichedRequests);

        return {
            statusCode: 200,
            body: JSON.stringify({ requests: enrichedRequests }),
        };
    } catch (error) {
        console.error('Error fetching enriched requests:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error" }),
        };
    }
};
