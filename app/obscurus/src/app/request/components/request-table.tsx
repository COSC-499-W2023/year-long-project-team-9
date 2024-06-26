import VideoPlayer from "@/app/submit/components/video-player";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Submissions } from "@obscurus/database/src/sql.generated";
import { Download, ExternalLink } from "lucide-react";
import { ComponentProps } from "react";

export function RequestTable(submissions: Submissions[]) {
  return (
    <div className="mx-4 my-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((value, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Badge variant={getBadgeVariantFromStatus(value.status)}>
                    {value.status
                      .split(" ")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </Badge>
                </TableCell>
                <TableCell>{value.requesteeEmail}</TableCell>
                <TableCell>
                  <div className="flex justify-left items-center ">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant={"outline"}
                          disabled={value.status !== "COMPLETED"}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <ExternalLink className="w-4 h-4 " />
                            </TooltipTrigger>
                            <TooltipContent>
                              View Processed Video
                            </TooltipContent>
                          </Tooltip>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="">
                        <VideoPlayer
                          filename={"Processed Video"}
                          videoUrl={
                            "https://imigh-obscurus-sitestack-outputbucketadb26529-cz8hxa3qaymx.s3.us-west-2.amazonaws.com/6b82a368-dd60-49f4-93fe-c6f8c9a05e1b-processed.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAX7KPGCHASYQC7RYM%2F20240303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240303T095329Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaDGNhLWNlbnRyYWwtMSJHMEUCID4YCImT8PxCQX%2Bf8kOjS0Yh5mqpaKTQuz5uq%2B6JO93WAiEA2%2BfFv8UicFE8wq3MsKs%2BtdU3r%2FW0jnhECPwWbTjaXSMqnAMIWRAAGgw1NDgzMTEyNzM5MjEiDJq3K8G0i3dpZgY89Sr5At6IaYZ%2BHXgikpXLruQ541DC8QYK0FjuYWXwzKi5Z6c9tlkvrBFzYOmYM1C%2FDa8U4q1nk7rs6tpiWfxAlcb6QoQ7BtUSFJjMzoqXq7zWS70uNDNBFcqD2%2B%2BIoLZI5aDpkqAIh%2Bosq5yTvNz8xjh9vKcFtZMrZ5720hK8hn0vJHMqDYIuWpd6JO3uT2BATsS%2B5fY%2ByTAXZHUEFx9ymeL5v%2FkcORHIad2K2NP0NXXDFzW3rZQYKBc3JCV7gsy3gUTyvW82ew6TcW%2FAlOcPXsS2HMMEUipafU%2B0abLwtYOzO7nr2%2BcN502t61EmRZMi56NZf52KfGx5ohtMgyrO9ib4qV8bqiTWcCtFT4ObaZ6E%2Boawyn36uWrKXERwcgCoJ%2FGhMdbW1t%2FnVFcBYAs6EmTSnJ1n3xf097HYNQP0hZTPqeu51ZB4Wcovls%2F5BhBJl2%2F86U%2BQk8edZjK%2BBOzOao0dnUd1UJKCSWQnz5McDXzRX7k94dXH9%2BBNbBCfMNHYkK8GOqYBub6Gvd5lmNgelG6aOpZecIYWi6BcPbo5W%2BMJGMuF69UioG%2FICEsODiOOtU0ZEUUxQByJ2vYa80gwM7yeYZnsrmtFsM566x%2BLPRDtAWsoxFiOp8TSRRTBfLM4QtW01yC0Tpx6duSVBGzMlDiGNKnS%2FqyUsEUoev6MxOA5dpxeeN3p7Js%2BInbEcgaV4ywujN0QuLWby36binzDt3n9RdUmze2ULj6u6A%3D%3D&X-Amz-Signature=3ed2460d0aac57f448da86c97af8046fc2552b05b34dd9b166b637f4ab3856fb&X-Amz-SignedHeaders=host&x-id=GetObject"
                          }
                        />
                      </DialogContent>
                    </Dialog>
                    <Separator orientation="vertical" className="mx-2 h-8" />
                    <Button
                      variant={"outline"}
                      disabled={value.status !== "COMPLETED"}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Download className="w-4 h-4 " />
                        </TooltipTrigger>
                        <TooltipContent>View Processed Video</TooltipContent>
                      </Tooltip>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export function getBadgeVariantFromStatus(
  status: string
): ComponentProps<typeof Badge>["variant"] {
  switch (status.toLowerCase()) {
    case "completed":
      return "success";
    case "processing":
      return "warning";
    case "in progress":
      return "warning";
    case "archived":
      return "outline";
    case "failed":
      return "destructive";
    case "todo":
      return "default";
    default:
      return "secondary";
  }
}
