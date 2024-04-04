"use server";

const url = process.env.NEXT_PUBLIC_SERVICE_URL as string;

const sendToService = async (
  submissionId: string,
  fileExt: string,
  email: string,
  blurred: boolean,
) => {
  console.log("sendToService", url);
  const res = await fetch(url + "/process-video", {
    method: "post",
    body: JSON.stringify({
      submission_id: submissionId,
      file_extension: fileExt,
      email: email,
      blurred: blurred,
    }),
  });
  if (res.ok) {
    return res.json();
  }
};

export { sendToService };
