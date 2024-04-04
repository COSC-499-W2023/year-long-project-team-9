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
export default function CreateSubmit({ form }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button">Submit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Would you like to submit?</AlertDialogTitle>
          <AlertDialogDescription>
            By continuing, a request will be submitted to all clients.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button type="submit">Submit</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
