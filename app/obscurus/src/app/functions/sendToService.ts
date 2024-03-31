"use server";

const url = process.env.NEXT_PUBLIC_SERVICE_URL || "https://d2eo40huyu1afd.cloudfront.net";

const sendToService = async (
  submissionId: string,
  fileExt: string,
  email: string
) => {
  console.log("sendToService", url);
  const res = await fetch(url + "/process-video", {
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
