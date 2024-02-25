import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";

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
  const [clientLabel, setClientLabel] = useState("Client");
  function changeClientEmailLength(length: number, changeBy: number) {
    setClientEmailLength(length + changeBy);
    if (length + changeBy > 1) {
      setClientLabel("Clients");
    } else {
      setClientLabel("Client");
    }
  }

  return (
    <>
      <div>
        <FormLabel>{clientLabel}</FormLabel>
        {fields.map((value, index) => {
          return <div>Hello World</div>;
        })}
        <div className="flex flex-col-2 gap-1">
          <Input {...form.register(`clientEmail.${0}.email`)}></Input>
        </div>
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

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => {
            remove(0);
            changeClientEmailLength(clientEmailLength, -1);
          }}
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
