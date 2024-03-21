export async function deliverMessage(message: any) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
  }
