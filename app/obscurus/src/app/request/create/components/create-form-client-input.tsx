import { Button } from "@/components/ui/button";
import { FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { number } from "prop-types";
import { useState } from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { undefined } from "zod";

export default function ClientEmail({
  form,
  email,
}: {
  form: any;
  email: string;
}) {
  const control = form.control;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "clientEmail", // unique name for your Field Array
    }
  );
  const [clientEmailLength, setClientEmailLength] = useState(1);
  const [clientEmailLabel, setClientEmailLabel] = useState("Client");
  function changeClientEmailLength(size: number, changeBy: number) {
    setClientEmailLength(size + changeBy);
    if (size + changeBy > 1) {
      setClientEmailLabel("Clients");
    } else {
      setClientEmailLabel("Client");
    }
  }
  function duplicateEmail(emailArray: any, emailToCheck: string) {
    const numberOfDuplicates = emailArray.filter(
      (email: any) => email.email.toLowerCase() === emailToCheck.toLowerCase()
    ).length;
    return numberOfDuplicates > 1;
  }

  function clientEmailError(form: any, index: number, email: string) {
    if (email.trim() === "") {
      return "";
    }
    const isDuplicateEmail = duplicateEmail(
      form.getValues("clientEmail"),
      email
    );
    if (form.getFieldState(`clientEmail.${index}.email`).error !== undefined) {
      return JSON.stringify(
        form.getFieldState(`clientEmail.${index}.email`).error.message
      );
    } else if (
      isDuplicateEmail === true &&
      form.getFieldState("clientEmail").error !== undefined
    ) {
      form.setError(`clientEmail.${index}.email`, {
        type: "manual",
        message: "This email is already in use.",
      });
    } else {
      return "";
    }
  }

  return (
    <div>
      <FormLabel>{clientEmailLabel}</FormLabel>
      {fields.map((feild, index) => {
        return (
          <div key={feild.id}>
            <div className="flex flex-col-2 gap-1 mb-1">
              <Input
                placeholder={
                  clientEmailLength > 1 ? `Email ${index + 1}` : "Email"
                }
                {...form.register(`clientEmail.${index}.email`)}
              ></Input>
              {clientEmailLength !== 10 && index === clientEmailLength - 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    append({ email: "" });
                    changeClientEmailLength(clientEmailLength, 1);
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    remove(index);
                    changeClientEmailLength(clientEmailLength, -1);
                  }}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              )}
            </div>
            <FormMessage>
              {clientEmailError(
                form,
                index,
                form.getValues(`clientEmail.${index}.email`)
              )?.toString()}
            </FormMessage>
          </div>
        );
      })}
      {/* <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => {
          append({ email: "" });
          changeClientEmailLength(clientEmailLength, 1);
        }}
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => {
          remove(index);
          changeClientEmailLength(clientEmailLength, -1);
        }}
      >
        <Minus className="h-4 w-4" />
      </Button> */}
    </div>
  );
}
