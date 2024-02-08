export async function main(event: any) {
    for (const record of event.Records) {
      const message = JSON.parse(record.body);
      console.log("Processing video:", message);
    }
  }
  