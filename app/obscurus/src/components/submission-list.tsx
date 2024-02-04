import { ComponentProps } from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Mail } from "../data/data"
import { useMail } from "./hooks/use-mail"
import { Submissions } from "stacks/core/src/sql.generated"


export async function getServerSideProps() {
  // const fetchData = async (route: string) => {
  //   try {
  //     const apiURL = Api.Api.url;
  //     const response = await fetch(apiURL + route);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     } else {
  //       return response.json();
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const submissions: Submissions[] = await fetchData("/getSubmissions");
  // const submissions: Submissions[] = await fetchData("/getSubmissions");
  // const users: Users[] = await fetchData("/getUsers");
  return {
   
  };
}

export default function SubmissionList({ submissions }: {submissions: Submissions[]}) {
  const [mail, setMail] = useMail()

  console.log(JSON.stringify(submissions))

  return (

      <div className="flex flex-col gap-2 p-4 pt-0">
        {submissions && submissions.map((item) => (
          <button
            key={item.submission_id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              mail.selected === item.submission_id && "bg-muted"
            )}
            onClick={() =>
              setMail({
                ...mail,
                selected: item.submission_id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.request_id}</div>
                  {!item.requestee_email && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    mail.selected === item.submission_id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
  
                </div>
              </div>
              <div className="text-xs font-medium">{item.submission_id}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.requestee_email?.substring(0, 300)}
            </div>
            {/* {item..length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null} */}
          </button>
        ))}
      </div>
  )
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline"
  }

  return "secondary"
}
