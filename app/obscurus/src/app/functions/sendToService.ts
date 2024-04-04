"use server";

const url = "https://d2ygpb22k1yixw.cloudfront.net";

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
