import { APIGatewayProxyHandlerV2 } from "aws-lambda";


export default async function handler(event: any){
    const { facesAdnTimestamps } = JSON.parse(event.Payload.body)

    fetch
}