import { Archive, FileVideo2, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

type RequestDisplayProps = {
  title: string;
  processing: string;
  emails: string[];
  description: string;
  date: string;
  due_date: string;
  id: string;
  sendToArchive: any;
  sendToTrash: any;
};
export function RequestDisplay({
  title,
  processing,
  emails,
  description,
  date,
  due_date,
  id,
  sendToArchive,
  sendToTrash,
}: RequestDisplayProps) {
  const [isTableShowing, setIsTableShowing] = useState(false);
  const emailList = emails.join(", ");
  function showTable(isTableShowing: boolean) {
    setIsTableShowing(!isTableShowing);
  }
  return (
    <>
      <div className="flex h-full flex-col">
        <div className="flex items-center p-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => sendToTrash(id)}>
              <Trash className="h-4 w-4" />
              <span className="sr-only">Trash</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => sendToArchive(id)}
            >
              <Archive className="h-4 w-4" />
              <span className="sr-only">Archive</span>
            </Button>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => showTable(isTableShowing)}
            >
              <FileVideo2 className="h-4 w-4" />
              <span className="sr-only">Video</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <div className="grid gap-1">
                <div className="font-semibold">{title}</div>
                <div className="line-clamp-1 text-xs">
                  Processing: {processing}
                </div>
                <div className="line-clamp-1 text-xs">Due: {due_date}</div>
                <HoverCard>
                  <HoverCardTrigger className="line-clamp-1 text-xs">
                    To: {emailList}
                  </HoverCardTrigger>
                  <HoverCardContent>
                    To:
                    <ul>
                      {emails.map((item, index) => (
                        <li className="pl-1">• {item}</li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <div className="ml-auto text-xs text-muted-foreground">{date}</div>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full"
          ></div>
          {isTableShowing === false ? (
            <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
              {description}
            </div>
          ) : null}{" "}
          {/* TODO: null is to be completed */}
        </div>
      </div>
    </>
  );
}
