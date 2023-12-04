{/*Imports*/}
import Layout from '@/components/layout';
import React from 'react';
import { format } from "date-fns";
import { useRouter } from 'next/router';
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar";
import { Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle,Plus,X,Calendar as CalendarIcon, Search } from "lucide-react";
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

const MyRequests = () => {
    const requests = [
        {
            reqtitle: "Spanish Lessons 1 From Mr. Woods",
            reqdue: "October 9th 2023",
            reqclients: "learn.spanish@woods.com"
        },
        {
            reqtitle: "Spanish Lessons 2 From Mr. Woods",
            reqdue: "October 9th 2023",
            reqclients: "learn.spanish@woods.com, learn.spanish@woods.com, learn.spanish@woods.com"
        }
    ]
    const req1 = requests[0];

    const [title,setTitle] = React.useState("");
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setTitle(value)
    };
    const [clientList, setClientList] = React.useState<ClientType[]>([{ client: "", clientNo: false }]);
    const handleClientAdd = () => {
        setClientList([...clientList,{client:"",clientNo:false}])
    };
    const handleClientRemove = (index: number) => {
        const list = [...clientList]
        list.splice(index,1)
        setClientList(list)
    };
    const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>,index: number) => {
        const {name,value} = e.target
        const list = [...clientList]
        list[index][name] = value
        setClientList(list)
    };
    const [desc,setDesc] = React.useState("");
    const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setDesc(value)
    };
    const [isBlurred,setBlurred] = React.useState(true);
    const [language,setLanguage] = React.useState("English")
    const [date,setDate] = React.useState<Date | undefined>(new Date());
    const [terms,setTerms] = React.useState(false)
    const handleTermsChange = () => {
        setTerms(!terms)
    };
    const [noTitle,setNoTitle] = React.useState(false);
    const clientsEmpty = () => {
        for(let item of clientList) {
        if(item.client.length < 1) {
            return true
        }
        }
        return false
    };
    

    return (
        <Layout>
            <div className="items-center gap-5 px-24">
                <h1 className="text-3xl font-extrabold">My Requests</h1><br/>
                <div className="items-center">  
                    <Card id="searchbar" className="overflow-auto h-17 justify-self-start">
                        <CardHeader>                   
                            <div className="space-x-4 flex items-center">    
                                <Input id="searchInput" placeholder="Search..." /> 
                                <Button type="submit"><Search /></Button>
                                <Tabs defaultValue="blurred">
                                    <TabsList className="w-full">
                                        <TabsTrigger value="oldest" className="">Oldest</TabsTrigger>
                                        <TabsTrigger value="edited" className="">Edited</TabsTrigger>
                                        <TabsTrigger value="overdue" className="">Overdue</TabsTrigger>
                                        <TabsTrigger value="completed" className="">Completed</TabsTrigger>                                        </TabsList>
                                </Tabs>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
            <br/>
            <div className="grid grid-cols-2 gap-5 px-24">
                <Table className="w-3/4 mx-auto">
                    <TableBody>
                        {requests.map((requests) => (
                            <TableRow key={requests.reqtitle}>
                                <TableCell>
                                <Card id="collapsed" className="overflow-auto justify-self-start">
                                    <CardHeader>
                                    <div className="space-x-4 flex items-center">
                                    <CardTitle className="text-xl">{requests.reqtitle}</CardTitle>
                                    <Label>{requests.reqdue}</Label>
                                    </div>
                                    <div className="space-x-4 flex">
                                        <Label>Clients:</Label>
                                        <Label>{requests.reqclients}</Label>
                                    </div>
                                </CardHeader>
                            </Card>
                            </TableCell>
            
          </TableRow>
        ))}
                    </TableBody>
                </Table>
                <Card id="previewCard" className="overflow-auto h-96 w-3/4 justify-self-start">
                    <CardHeader>
                        <CardTitle className="break-all text-2xl">{req1.reqtitle}</CardTitle>
                    
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <Label>Client(s)</Label>
                            {req1.reqclients}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex-col gap-2">
                            <Label>Request Description</Label>
                            <ul>
                                {desc && <p className="text-ellipsis overflow-hidden text-sm">{desc}</p>}
                            </ul>
                            </div>
                            <div className="align-top">
                                <div className="">
                                    <Label>Video Processing</Label>
                                    {isBlurred && (
                                        <Button className="w-full" disabled>Blurred</Button>
                                    )}
                                    {!isBlurred && (
                                        <Button className="w-full" disabled>Not Blurred</Button>
                                    )}
                                </div>
                                <div className="mt-7">
                                    <Label>Language</Label>
                                    <Button className="w-full" disabled>{language}</Button>
                                </div>
                                <div className="mt-7">
                                    <Label>Due Date</Label>
                                    <Button className="text-xs w-full" disabled>
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}

export default MyRequests;
