"use server";
import { Api } from "sst/node/api";
import { Service } from "sst/node/service";

const url = process.env.NEXT_PUBLIC_SERVICE_URL || "https://d3l4zzn13n7f07.cloudfront.net/process-video/";

const triggerJob = async (submissionId: string, fileExt: string) => {
  const res = await fetch(url, {
    method: "post",
    body: JSON.stringify({
      submission_id: submissionId,
      file_extension: fileExt,
    }),
  });
  if (res.ok) {
    return res.json();
  }
};

export { triggerJob };
