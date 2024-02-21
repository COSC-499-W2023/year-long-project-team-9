"use client";
import format from "date-fns/format";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip } from "@/components/ui/tooltip";
import { useSubmission } from "@/components/hooks/use-submission";
import { Submissions } from "stacks/core/src/sql.generated";
import { useQueryState, parseAsString } from "nuqs";

export default function SubmissionDisplay({
  submissions,
  searchParams,
}: {
  submissions: Submissions[];
  searchParams?: {
    counter?: string | null[];
  };
}) {
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [requestId, setRequestId] = useQueryState("requestId");
  const [showVideos, setShowVideos] = useQueryState("showVideos");

  if (!submissionId) {
    setSubmissionId(submissions[0].submissionId);
  }

  if (!requestId) {
    setRequestId(submissions[0].requestId);
  }

  console.log("SubmissionId", submissionId);
  const selected = submissions.find(
    (item) => item.submissionId === submissionId
  );

  console.log("Selected requestId to display", requestId);
  console.log("Selected submissionId to display", submissionId);

  const toggleVideos = () => {
    setShowVideos(showVideos ? null : "true");
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <>
            <h1>
              SubmissionId is: {submissionId || submissions[0].submissionId}!
            </h1>
          </>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="h-9"></div>
        </div>
      </div>
      <Separator />
      {submissions ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              {selected?.title}
              <div className="grid gap-1">
                <div className="font-semibold">{selected?.requesteeEmail}</div>
                <div className="line-clamp-1 text-xs">{selected?.status}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span>{" "}
                  {selected?.requesteeEmail}
                </div>
              </div>
            </div>
            {selected?.submissionId && (
              <div className="ml-auto text-xs text-muted-foreground">
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            requestId is {selected?.requestId || submissions[0].requestId}
            <div>
              <Button onClick={() => toggleVideos()}>Toggle Videos</Button>
            </div>
            {showVideos ? <div>videos</div> : <div>Not showing videos</div>}
          </div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4"
                  placeholder={`Reply to ${selected?.requesteeEmail}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
