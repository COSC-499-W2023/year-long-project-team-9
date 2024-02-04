import Layout from "@/pages/layout";
import React from "react";
import { useRouter } from "next/router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { GetServerSideProps } from "next";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

type ClientType = {
  client: string;
  clientNo: boolean;
  [key: string]: string | boolean;
};

type RequestType = {
  reqtitle: string;
  reqdue: string;
  sender: string;
  senderEmail: string;
  message1: string;
  message2: string;
};

const exampleText =
  "Hello everyone,\n\nFor this week's Spanish lesson, please record a video of yourselves ordering three separate items from a fast food menu in Castilian Spanish.\n\nFor one of the three items, add a modification like extra cheese or no tomato.";




const Messages = () => {
  const requests: RequestType[] = [
    {
      reqtitle: "Spanish Lessons 1",
      reqdue: "October 1st 2023",
      sender: "Daniel Woods",
      senderEmail: "daniel.woods@gmail.com",
      message1: "Hello, I just wanted to remind you about the spanish lesson assignment this week",
      message2: "yes i'll get right on it"
    },
    {
      reqtitle: "Spanish Lessons 2",
      reqdue: "November 9th 2023",
      sender: "Michael Jefferson",
      senderEmail: "mikejeff@gmail.com",
      message1: "Hi, I will be uploading my submission tomorrow my internet is currently down",
      message2: "thanks for letting me know"
    },
    {
      reqtitle: "Spanish Lessons 3",
      reqdue: "December 15th 2023",
      sender: "Stephanie Brooks",
      senderEmail: "stephiebr@gmail.com",
      message1: "Thank you for your submission. We will keep you posted on if you'll get the position.",
      message2: "Your welcome"
    },
  ];

  const [selectedRequest, setSelectedRequest] =
    React.useState<RequestType | null>(null);

  const handleRequestClick = (request: RequestType) => {
    setSelectedRequest(request);
  };

  const router = useRouter();
  const [title, setTitle] = React.useState("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTitle(value);
  };
  const [clientList, setClientList] = React.useState<ClientType[]>([
    { client: "", clientNo: false },
  ]);
  const handleClientAdd = () => {
    setClientList([...clientList, { client: "", clientNo: false }]);
  };
  const handleClientRemove = (index: number) => {
    const list = [...clientList];
    list.splice(index, 1);
    setClientList(list);
  };
  const handleClientChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list = [...clientList];
    list[index][name] = value;
    setClientList(list);
  };
  const [desc, setDesc] = React.useState("");
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDesc(value);
  };
  const [isBlurred, setBlurred] = React.useState(true);
  const [language, setLanguage] = React.useState("English");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [terms, setTerms] = React.useState(false);
  const handleTermsChange = () => {
    setTerms(!terms);
  };
  const [noTitle, setNoTitle] = React.useState(false);
  const handleCancel = () => {
    router.push("/");
  };
  const handleSubmit = () => {
    if (title.length < 1 || clientsEmpty()) {
      if (title.length < 1) {
        setNoTitle(true);
      } else {
        setNoTitle(false);
      }
      for (let item of clientList) {
        if (item.client.length < 1) {
          item.clientNo = true;
        } else {
          item.clientNo = false;
        }
      }
    } else {
      setNoTitle(false);
      router.reload();
    }
  };
  const clientsEmpty = () => {
    for (let item of clientList) {
      if (item.client.length < 1) {
        return true;
      }
    }
    return false;
  };

  return (

        
          <Card
            id="messageCard"
            className=" h-full items-start border-none"
          >
            
                <div id="messageUser" className="flex flex-col h-full">
                <CardHeader className="flex">
                    <CardTitle id="messageSender" className="text-2xl">
                      {requests[0].sender}
                    </CardTitle>
                    <CardDescription id="messageEmail">{requests[0].senderEmail}</CardDescription>
                  </CardHeader>
                  <Separator className="bg-accent drop-shadow-sm"/>
                  <CardContent className="mt-auto text-sm">
                    <ScrollArea>
                      <div className="flex w-3/4 m-1">
                        <div id="message1" className="rounded-md bg-accent p-2">
                          {requests[0].message1}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="w-1/2"></div>
                        <div id="message2" className="rounded-md m-1 bg-primary text-secondary p-2">
                          {requests[0].message2}
                        </div>
                      </div>
                    </ScrollArea>
                    <Textarea
                      id="textbox"
                      className="items-end mt-2 resize-none "
                      placeholder={`Message ${requests[0].sender}`}
                    >
                    </Textarea>
                  </CardContent>
                </div>
          </Card>


  );
};

export default Messages;
