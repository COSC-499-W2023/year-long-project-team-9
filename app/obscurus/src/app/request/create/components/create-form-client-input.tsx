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
                disabled={form.formState.isSubmitting}
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

            {form.getFieldState(`clientEmail.${index}.email`).error && (
              <FormMessage>
                {form.getFieldState(`clientEmail.${index}.email`).error.message}
              </FormMessage>
            )}
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
