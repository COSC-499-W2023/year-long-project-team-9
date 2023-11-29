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
import { AlertCircle,Plus,X,Calendar as CalendarIcon } from "lucide-react";

type ClientType = {
    client: string;
    clientNo: boolean;
    [key: string]: string | boolean;
  };

const MyRequests = () => {
    const router = useRouter()
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
    const handleCancel = () => {
        router.push("/")
    };
    const handleSubmit = () => {
        if((title.length < 1) || clientsEmpty()) {
        if(title.length < 1) {
            setNoTitle(true)
        }else {
            setNoTitle(false)
        }
        for(let item of clientList) {
            if(item.client.length < 1) {
            item.clientNo = true
            }else {
            item.clientNo = false
            }
        }
        }else {
        setNoTitle(false)
        router.reload()
        }
    };
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
            <Card id="collapsed" className="overflow-auto h-17 justify-self-start">
                <CardHeader>                    
                    <Input className="w-1/3" id="searchInput" placeholder="Search..." />
                    <Button className="w-1/5" type="submit">Search</Button>
                    <Tabs className="w-1/3" defaultValue="blurred">
                                    <TabsList className="w-full">
                                        <TabsTrigger value="oldest" className="">Oldest</TabsTrigger>
                                        <TabsTrigger value="edited" className="">Edited</TabsTrigger>
                                        <TabsTrigger value="overdue" className="">Overdue</TabsTrigger>
                                        <TabsTrigger value="completed" className="">Completed</TabsTrigger>
                                    </TabsList>
                                    </Tabs>
                </CardHeader>
            </Card>
                </div>
            <div className="grid grid-cols-2 items-center gap-5 px-24">
                <Card id="collapsed" className="overflow-auto h-25 w-3/4 justify-self-start">
                    <CardHeader>
                        <CardTitle className="text-xl">Title</CardTitle>
                        <div className="grid gap-0">
                            <Label>Client(s): </Label>
                        </div>
                    </CardHeader>
                </Card>
                <Card id="previewCard" className="overflow-auto h-96 w-3/4 justify-self-start">
                    <CardHeader>
                        {title.length < 1 && (
                            <CardTitle className="text-xl">Title</CardTitle>
                        )}
                        {title.length >= 1 && (
                            <CardTitle className="text-xl">{title}</CardTitle>
                        )}
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <Label>Client(s)</Label>
                            {clientList.map((singleClient,index) => (
                                <ul key={index} >
                                    {singleClient.client.length < 1 && (
                                        <li className="truncate text-slate-400 text-sm indent-2">Email</li>
                                    )}
                                    {singleClient.client.length >= 1 && (
                                        <li className="truncate text-sm indent-2">{singleClient.client}</li>
                                    )}
                                    
                                </ul>
                            ))}
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
