import Layout from "@/pages/layout";
import React from "react";
import { useRouter } from "next/router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { GetServerSideProps } from "next";
import { Requests } from "stacks/core/src/sql.generated";

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
  description: string;
};



const MyRequests = (requests: Requests[]) => {

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
      <div className="md:px-24 ">
        <div className="grid items-center gap-5">
          {/* <h1 className="text-3xl font-extrabold justify-self-center pt-10">
            My Requests
          </h1> */}
          <div className="items-center">
            <Card
              id="searchbar"
              className="overflow-auto h-17 justify-self-start drop-shadow-md border-2 bg-card"
            >
              <CardHeader>
                <div className="space-x-4 flex items-center bg-foreground-secondary">
                  <Input
                    id="searchInput"
                    placeholder="Search..."
                    className="text-bold border-2 border-secondary text-primary bg-background"
                  />
                  <Button id="searchButton" type="submit">
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

          <Card
            id="previewCard"
            className="drop-shadow-md border-2  bg-card"
          >
            <CardContent className="grid">
              {selectedRequest ? (
                <>
                  <div className="grid">
                    <div id="prevTitle" className="pt-6 grid grid-row-3">
                      <CardTitle className="break-all text-2xl" id="requestTitle">
                        {selectedRequest.reqtitle}
                      </CardTitle>
                    </div>

                    <div id="prevClient">
                      <Label className="font-bold">From</Label>
                      <div className="break-all text-primary indent-2 pt-2 pb-2 ">
                        {selectedRequest.senderEmail}
                      </div>
                    </div>

                    <div
                      id="prevDescAndData"
                      className="grid grid-cols-2 left-justify gap-5 pt-2"
                    >
                      <div id="prevDesc">
                        <Label className="font-bold">Request Description</Label>

                        <Textarea
                          className="bg-accent resize-none"
                          value={selectedRequest.description}
                          readOnly
                          rows={9}
                        />
                      </div>
                      <div className="grid grid-row-4">
                        <div id="prevDate" className=" ">
                          <Label className="font-bold">Due Date</Label>
                          <div className="flex items-center">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <div className="text-base">
                              {selectedRequest.reqdue}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-row-4">
                          <div id="prevBlurred" className="pb-1.5">
                            {" "}
                            <Label className="font-bold">
                              Video Processing
                            </Label>
                            <div className="w-full font-base">Blurred</div>
                          </div>
                          <div id="prevLanguage" className="pb-1.5">
                            <Label className="font-bold">Video Language</Label>
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
              ) : (
                <>
                  <div className="grid">
                    <div id="prevTitle" className="pt-6 grid grid-row-3">
                      <CardTitle className="break-all text-2xl">
                        {requests[0].reqtitle}
                      </CardTitle>
                    </div>

                    <div id="prevClient">
                      <Label className="font-bold">From</Label>
                      <div className="break-all text-primary indent-2 pt-2 pb-2 ">
                        {requests[0].senderEmail}
                      </div>
                    </div>

                    <div
                      id="prevDescAndData"
                      className="grid grid-cols-2 left-justify gap-5 pt-2"
                    >
                      <div id="prevDesc">
                        <Label className="font-bold">Request Description</Label>

                        <Textarea
                          className="bg-accent resize-none"
                          value={requests[0].description}
                          readOnly
                          rows={9}
                        />
                      </div>
                      <div className="grid grid-row-4">
                        <div id="prevDate" className="">
                          <Label className="font-bold">Due Date</Label>
                          <div className="flex items-center">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <div className="text-base">
                              {requests[0].reqdue}
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-row-4">
                          <div id="prevBlurred" className="pb-1.5">
                            <Label className="font-bold">
                              Video Processing
                            </Label>
                            <div className="w-full font-base">Blurred</div>
                          </div>
                          <div id="prevLanguage" className="pb-1.5">
                            <Label className="font-bold">Video Language</Label>
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
            id="submitButton"
            type="submit"
            className=" justify-self-start font-bold p-5 "
            onClick={() => router.push("/submit")}
          >
            Upload Video
          </Button>
        </div>
      </div>

  );
};

export default MyRequests;
