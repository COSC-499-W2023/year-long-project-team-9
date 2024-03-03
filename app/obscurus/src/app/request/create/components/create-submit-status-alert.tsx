import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/modified-shadcn-ui-components/modified-alert-dialog";
import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";
export default function SubmitStatusAlert() {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger id="successAlert"></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Success!</AlertDialogTitle>
            <AlertDialogDescription>
              The submission process was a sucess.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <a href="/request">
              <Button variant="ghost">
                <Inbox className="mr-2 h-4 w-4" />
                Request
              </Button>
            </a>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        <AlertDialogTrigger id="failAlert"></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-destructive">
              Error!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-destructive">
              An an occurred during the submission process.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
