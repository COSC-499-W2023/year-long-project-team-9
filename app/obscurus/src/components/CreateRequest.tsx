{
  /*IMPORTS*/
}
import Layout from "@/components/layout";
import React from "react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import {
  useForm,
  SubmitHandler,
  useFieldArray,
  Controller,
} from "react-hook-form";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, X, Calendar as CalendarIcon } from "lucide-react";
import { createRequestValidation } from "../form-validation/create-request-form-validation/createRequestValidation";
import { ScrollArea } from "./ui/scroll-area";

export async function getServerSideProps() {
  return {
    props: {}, // nothing yet
  };
}

{
  /*FUNCTIONS*/
}
{
  /*Create a type to determine the data of the form*/
}
export interface formSchema {
  title: string;
  clients: { value: string }[];
  description: string;
  blurred: boolean;
  dueDate: Date;
  language: string;
  terms: boolean;
}
{
  /*Create a function to form the CreateRequest page*/
}
const CreateRequest = () => {
  {
    /*Create a router object to handle cancelling and submitting the form*/
  }
  const router = useRouter();
  {
    /*Create a register and handle submit function using React Hook Forms and add default values to form values*/
  }
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formSchema>({
    defaultValues: {
      title: "",
      clients: [{ value: "" }],
      description: "",
      blurred: true,
      dueDate: new Date(),
      language: "",
      terms: false,
    },
  });
  {
    /*Create a field array and appropriate methods to add and remove items*/
  }
  const { fields, append, remove } = useFieldArray({
    control,
    name: "clients",
    rules: {
      required: true,
    },
  });
  {
    /*Create a function to cancel the request and return to the homepage*/
  }
  const handleCancel = () => {
    router.push("/");
  };
  {
    /*Create a function to submit data*/
  }
  const onSubmit: SubmitHandler<formSchema> = (data: formSchema) => {
    if (createRequestValidation(data)) {
      const response = fetch("/api/createRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      console.log("Invalid!");
    }
  };
  const [title, setTitle] = React.useState("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTitle(value);
  };
  const [clientList, setClientList] = React.useState([{ client: "" }]);
  const handleClientAdd = () => {
    setClientList([...clientList, { client: "" }]);
    append({ value: "" });
  };
  const handleClientRemove = (index: number) => {
    const list = [...clientList];
    list.splice(index, 1);
    setClientList(list);
    remove(index);
  };
  const handleClientChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list = [...clientList];
    list[index].client = value;
    setClientList(list);
  };
  const [desc, setDesc] = React.useState("");
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDesc(value);
  };
  const [isBlurred, setBlurred] = React.useState(true);
  const [date, setDate] = React.useState<Date>(new Date());
  const [language, setLanguage] = React.useState("");
  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLanguage(value);
  };
  const [terms, setTerms] = React.useState(false);
  const handleTermsChange = () => {
    const newTerms = !terms;
    setTerms(newTerms);
    setValue("terms", newTerms);
  };
  {
    /*Main return function to create web page*/
  }
  return (
    <ScrollArea>
      <form role="form" onSubmit={handleSubmit(onSubmit)} className="md:px-24">
        {/*Div to contain the request card and the preview card*/}

        <div
          id="cards"
          className="flex flex-col pt-10 gap-10  overflow-y-scroll"
        >
          {/*Request Info Card*/}
          <Card
            id="requestCard"
            className="flex flex-col drop-shadow-md border-2  bg-card"
          >
            <CardContent className="grid gap-1">
              {/*Code for the Request Title input*/}
              <div id="requestTitle" className="pt-4">
                <Label>Request Title</Label>
                {/*Save the input to the title value and set it to update the title variable on change to be used in the preview card*/}
                <Input
                  placeholder="Title"
                  maxLength={120}
                  aria-invalid={errors.title ? "true" : "false"}
                  {...register("title", { required: true })}
                  value={title}
                  onChange={(e) => handleTitleChange(e)}
                />
                {errors.title && errors.title.type === "required" && (
                  <p role="alert" className="text-red-500 text-xs">
                    This field is required!
                  </p>
                )}
              </div>
              {/*Code for the Client email input*/}
              <div id="requestClients">
                <Label>Client(s)</Label>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex pt-1 gap-1">
                    {/*added by jan*/}
                    <div className="flex-col flex-1">
                      <Input
                        className=""
                        placeholder="Email"
                        maxLength={320}
                        aria-invalid={
                          errors.clients?.[index]?.value ? "true" : "false"
                        }
                        {...register(`clients.${index}.value`, {
                          required: true,
                        })}
                        value={clientList[index].client}
                        onChange={(e) => handleClientChange(e, index)}
                      />
                      {errors.clients?.[index]?.value &&
                        errors.clients?.[index]?.value?.type === "required" && (
                          <p role="alert" className=" text-red-500 text-xs">
                            This field is required!
                          </p>
                        )}
                    </div>
                    {0 === index && fields.length < 10 && (
                      <Button type="button" onClick={handleClientAdd}>
                        <Plus />
                      </Button>
                    )}
                    {0 != index && fields.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => handleClientRemove(index)}
                      >
                        <X />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <div
                id="descAndData"
                className="grid grid-cols-2 left-justify gap-5"
              >
                {/*Code for Request Description input*/}
                <div id="requestDescription">
                  <Label>Request Description</Label>
                  <Textarea
                    className="resize-none"
                    placeholder="Your message here ..."
                    rows={9}
                    maxLength={500}
                    {...register("description")}
                    value={desc}
                    onChange={(e) => handleDescChange(e)}
                  />
                </div>
                <div id="requestData" className="grid grid-row-4">
                  {/*Code for Video Processing input*/}
                  <div id="requestBlurred">
                    <Label>Video Processing</Label>
                    <Tabs defaultValue="blurred" className="pt-0.5 pb-1.5">
                      {/*shrink text on small screen*/}
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger
                          value="notBlurred"
                          onClick={() => {
                            setBlurred(false);
                            setValue("blurred", false);
                          }}
                          className=" text-xs md:text-sm"
                        >
                          Not Blurred
                        </TabsTrigger>
                        {/*shrink text on small screen*/}
                        <TabsTrigger
                          value="blurred"
                          onClick={() => {
                            setBlurred(true);
                            setValue("blurred", true);
                          }}
                          className=" text-xs md:text-sm"
                        >
                          Blurred
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  {/*Code for Due Date input*/}
                  <div id="requestDueDate" className="pb-1.5">
                    <Label>Due Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className="w-full">
                          <CalendarIcon className="mr-2 h-4 w-4 flex-wrap" />
                          {date ? format(date, "PPP") : ""}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Controller
                          control={control}
                          name="dueDate"
                          render={({ field }) => (
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={(date) => field.onChange(date)}
                              onDayClick={setDate}
                              initialFocus
                            />
                          )}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  {/*Code for Video's Language input*/}
                  <div id="requestLanguage" className="pb-1.5">
                    <Label>Video Language</Label>
                    <Input
                      placeholder="Language"
                      maxLength={30}
                      aria-invalid={errors.language ? "true" : "false"}
                      {...register("language", { required: true })}
                      value={language}
                      onChange={(e) => handleLanguageChange(e)}
                    />
                    {errors.language && errors.language.type === "required" && (
                      <p role="alert" className="text-red-500 text-xs">
                        This field is required!
                      </p>
                    )}
                  </div>
                  {/*Code for terms and conditions*/}
                  <div
                    id="requestTerms"
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id="terms"
                      {...register("terms", { required: true })}
                      onCheckedChange={handleTermsChange}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Accept the{" "}
                      <a
                        href=""
                        target="_blank"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        terms and conditions
                      </a>
                    </Label>
                  </div>
                  {errors.terms && errors.terms.type === "required" && (
                    <p role="alert" className="text-red-500 text-xs">
                      This field is required!
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          {/*Request Preview Card*/}
          <Card id="previewCard" className="drop-shadow-md border-2 bg-card">
            <CardContent className="grid">
              <div id="prevTitle" className="pt-6 grid grid-row-3 pb-6">
                {title.length < 1 && (
                  <CardTitle className="break-all text-2xl">Title</CardTitle>
                )}
                {title.length >= 1 && (
                  <CardTitle className="break-all text-2xl">{title}</CardTitle>
                )}
              </div>

              <div id="prevClient">
                <Label className="font-bold">From</Label>
                {clientList.map((singleClient, index) => (
                  <ul key={index}>
                    {singleClient.client.length < 1 && (
                      <p className="break-all text-slate-400 indent-2 pt-2 pb-2">
                        Email
                      </p>
                    )}
                    {singleClient.client.length >= 1 && (
                      <p className="break-all indent-2 pt-2 pb-2">
                        {singleClient.client}
                      </p>
                    )}
                  </ul>
                ))}
              </div>
              <div
                id="prevDescAndData"
                className="grid grid-cols-2 left-justify gap-5 pt-2"
              >
                <div id="prevDesc">
                  <Label className="font-bold">Request Description</Label>
                  <Textarea
                    className="bg-accent resize-none"
                    placeholder={desc}
                    readOnly
                    rows={9}
                  />
                </div>
                <div className="grid grid-row-4">
                  <div id="prevDate" className="pb-1.5">
                    <Label className="font-bold">Due Date</Label>
                    <div className="w-full flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span></span>}
                    </div>
                  </div>
                  <div id="prevBlurred" className="">
                    <Label className="font-bold">Video Processing</Label>
                    {isBlurred && <div className="w-full">Blurred</div>}
                    {!isBlurred && <div className="w-full">Not Blurred</div>}
                  </div>
                  <div id="prevLanguage" className="pb-1.5">
                    <Label className="font-bold">Video Language</Label>
                    {language.length < 1 && (
                      <div className="w-full">Language</div>
                    )}
                    {language.length >= 1 && (
                      <div className="w-full break-all">{language}</div>
                    )}
                  </div>
                  <div id="prevTerms" className="flex items-center space-x-2">
                    <Label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-none">
                      See the{" "}
                      <a
                        href=""
                        target="_blank"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        terms and conditions
                      </a>{" "}
                      here
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div
          id="buttons"
          className="container grid grid-cols-1 mt-5 mb-5 gap-10"
        >
          <div id="cancelSubmit" className="text-right gap-2">
            <Button
              type="button"
              variant={"ghost"}
              className="justify-self-start"
              onClick={handleCancel}
            >
              Cancel Request
            </Button>
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Submit Request
            </Button>
          </div>
        </div>
      </form>
    </ScrollArea>
  );
};

{
  /*EXPORT*/
}
export default CreateRequest;
