"use server";

const url = process.env.NEXT_PUBLIC_SERVICE_URL;

const sendToService = async (submissionId: string, fileExt: string, email: string) => {
  if (!url) {
    throw new Error("Service URL is not defined");
  }
  const res = await fetch(url, {
    method: "post",
    body: JSON.stringify({
      submission_id: submissionId,
      file_extension: fileExt,
      email: email,
    }),
  });
  if (res.ok) {
    return res.json();
  }
};

export { sendToService };
