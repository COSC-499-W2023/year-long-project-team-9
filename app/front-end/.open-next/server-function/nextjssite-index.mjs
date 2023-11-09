export const handler = async (event, context) => {
  const { handler: rawHandler} = await import("./index.mjs");
  return rawHandler(event, context);
};