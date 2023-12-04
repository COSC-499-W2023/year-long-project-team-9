{
  /*Imports*/
}
import Layout from "@/components/layout";
import React from "react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertCircle,
  Plus,
  X,
  Calendar as CalendarIcon,
  Search,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  description: string;
};

const exampleText =
  "Hello everyone,\n\nFor this week's Spanish lesson, please record a video of yourselves ordering three separate items from a fast food menu in Castilian Spanish.\n\nFor one of the three items, add a modification like extra cheese or no tomato.";

const MyRequests = () => {
  const requests: RequestType[] = [
    {
      reqtitle: "Spanish Lessons 1",
      reqdue: "October 1st 2023",
      sender: "Daniel Woods",
      senderEmail: "daniel.woods@gmail.com",
      description:
        "Hello everyone,\n\nFor this week's Spanish lesson, please record a video of yourselves ordering three separate items from a fast food menu in Castilian Spanish.\n\nFor one of the three items, add a modification like extra cheese or no tomato.",
    },
    {
      reqtitle: "Spanish Lessons 2",
      reqdue: "November 9th 2023",
      sender: "Daniel Woods",
      senderEmail: "daniel.woods@gmail.com",
      description:
        "Hello,\n\nContinuing from last week's lesson, this week, please record a video of yourselves ordering three separate items from a traditional Spanish restaurant menu in Castilian Spanish.\n\nFor one of the three items, add a modification like extra sauce or no onions.",
    },
    {
      reqtitle: "Spanish Lessons 3",
      reqdue: "December 15th 2023",
      sender: "Daniel Woods",
      senderEmail: "daniel.woods@gmail.com",
      description:
        "Hello all,\n\nFor the final lesson, please record a video of yourselves having a full conversation in a restaurant setting in Castilian Spanish.\n\n Include greetings, ordering food, asking for recommendations, and thanking the staff.",
    },
  ];
  const req1 = requests[0];

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
    <Layout>
      <div className="md:px-24 ">
        <div className="grid items-center gap-5">
          <h1 className="text-3xl font-extrabold justify-self-center pt-10">
            My Requests
          </h1>
          <div className="items-center    ">
            <Card
              id="searchbar"
              className="overflow-auto h-17 justify-self-start drop-shadow-md border-2 border-accent bg-accent"
            >
              <CardHeader>
                <div className="space-x-4 flex items-center bg-foreground-secondary">
                  <Input
                    id="searchInput"
                    placeholder="Search..."
                    className="text-bold border-2 border-secondary text-primary bg-background"
                  />
                  <Button type="submit">
                    <Search />
                  </Button>
                  <Tabs defaultValue="blurred">
                    <TabsList className="w-full">
                      <TabsTrigger value="oldest" className="">
                        Oldest
                      </TabsTrigger>
                      <TabsTrigger value="edited" className="">
                        Edited
                      </TabsTrigger>
                      <TabsTrigger value="overdue" className="">
                        Overdue
                      </TabsTrigger>
                      <TabsTrigger value="completed" className="">
                        Completed
                      </TabsTrigger>{" "}
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
        <br />
        <div className="grid grid-cols-2 gap-5">
          <Table className="w-3/4 justify-items-start cursor-pointer">
            <TableBody>
              {requests.map((request) => (
                <TableRow
                  key={request.reqtitle}
                  onClick={() => handleRequestClick(request)}
                >
                  <TableCell>
                    <Card
                      id="collapsed"
                      className="overflow-auto justify-self-start drop-shadow-md border-2 border-accent hover:bg-accent bg-foreground-secondary"
                    >
                      <CardHeader>
                        <div className="space-x-4 flex items-center">
                          <CardTitle className="text-xl">
                            {request.reqtitle}
                          </CardTitle>
                          <Label>{request.reqdue}</Label>
                        </div>
                        <div className="space-x-5 flex">
                          <Label>From:</Label>
                          <Label>
                            <span className="text-blue-600">
                              {request.sender}
                            </span>{" "}
                            ({request.senderEmail})
                          </Label>
                        </div>
                      </CardHeader>
                    </Card>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Card
            id="previewCard"
            className="drop-shadow-md border-2 border-accent bg-foreground-secondary"
          >
            <CardContent className="grid">
              {selectedRequest ? (
                <>
                  <div id="prevTitle" className="pt-6 grid grid-row-3 pb-6">
                    <CardTitle className="break-all text-2xl">
                      {selectedRequest.reqtitle}
                    </CardTitle>
                  </div>

                  <div id="prevClient">
                    <Label className="font-bold">From</Label>
                    <div className="break-all text-primary indent-2 pt-2 pb-2 font-bold">
                      {selectedRequest.senderEmail}
                    </div>
                  </div>

                  <div
                    id="prevDescAndData"
                    className="grid grid-cols-2 left-justify gap-5 pt-2"
                  >
                    <div id="prevDesc">
                      <Label className="">Request Description</Label>

                      <Textarea
                        className="bg-accent resize-none"
                        value={selectedRequest.description}
                        readOnly
                        rows={9}
                      />
                    </div>
                    <div className="grid grid-row-4 font-bold">
                      <div id="prevDate" className="pt-10 ">
                        <Label>Due Date</Label>
                        <div className="flex items-center">
                          <CalendarIcon
                            className="mr-2"
                            height={20}
                            width={20}
                          />
                          <div className="text-base">
                            {selectedRequest.reqdue}
                          </div>
                        </div>
                      </div>
                      <div className="grid">
                        <div id="prevBlurred">
                          <Label className="">Video Processing</Label>
                          <div className="w-full ">Blurred</div>
                        </div>

                        <div id="prevLanguage" className="pb-1.5">
                          <Label>Video Language</Label>
                          <div className="w-full">English</div>
                        </div>

                        <div
                          id="prevTerms"
                          className="flex items-center space-x-10"
                        >
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
                  </div>
                </>
              ) : (
                <>
                  <div className="grid">
                    <div id="prevTitle" className="pt-6 grid grid-row-3 pb-6">
                      <CardTitle className="break-all text-2xl">
                        {requests[0].reqtitle}
                      </CardTitle>
                    </div>

                    <div id="prevClient">
                      <Label className="">From</Label>
                      <div className="break-all text-primary indent-2 pt-2 pb-2 ">
                        {requests[0].senderEmail}
                      </div>
                    </div>

                    <div
                      id="prevDescAndData"
                      className="grid grid-cols-2 left-justify gap-5 pt-2"
                    >
                      <div id="prevDesc">
                        <Label className="">Request Description</Label>

                        <Textarea
                          className="bg-accent resize-none"
                          value={requests[0].description}
                          readOnly
                          rows={9}
                        />
                      </div>
                      <div className="grid">
                        <div id="prevDate" className="pt-10 ">
                          <Label className="">Due Date</Label>
                          <div className="flex items-center">
                            <CalendarIcon
                              className="mr-2"
                              height={20}
                              width={20}
                            />
                            <div className="text-base">
                              {requests[0].reqdue}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-row-5">
                          <div id="prevBlurred">
                            <Label className="">
                              Video Processing
                            </Label>
                            <div className="w-full ">Blurred</div>
                          </div>
                          <div id="prevLanguage" className="pb-1.5">
                            <Label className="">Video Language</Label>
                            <div className="w-full">English</div>
                          </div>
                          <div
                            id="prevTerms"
                            className="flex items-center space-x-10"
                          >
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
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-end py-10">
          <Button
            type="submit"
            className=" justify-self-start font-bold p-5 "
            onClick={() => router.push("/submit")}
          >
            Upload Video
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default MyRequests;
