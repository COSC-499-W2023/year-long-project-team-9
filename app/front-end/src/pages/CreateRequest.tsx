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
import { Calendar } from "@/components/ui/calendar";
import { Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle,Plus,X,Calendar as CalendarIcon } from "lucide-react";

{/*Functions*/}
const CreateRequest = () => {
    const router = useRouter()
    const [title,setTitle] = React.useState("");
    const handleTitleChange = (e) => {
        const {name,value} = e.target
        setTitle(value)
    };
    const [clientList,setClientList] = React.useState([{client:"",clientNo:false},]);
    const handleClientAdd = () => {
        setClientList([...clientList,{client:"",clientNo:false}])
    };
    const handleClientRemove = (index) => {
        const list = [...clientList]
        list.splice(index,1)
        setClientList(list)
    };
    const handleClientChange = (e,index) => {
        const {name,value} = e.target
        const list = [...clientList]
        list[index][name] = value
        setClientList(list)
    };
    const [desc,setDesc] = React.useState("");
    const handleDescChange = (e) => {
        const {name,value} = e.target
        setDesc(value)
    };
    const [isBlurred,setBlurred] = React.useState(true);
    const [terms,setTerms] = React.useState(false)
    const handleTermsChange = () => {
        setTerms(!terms)
    };
    const [date,setDate] = React.useState<Date | undefined>(new Date());
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
            <div className="grid grid-cols-2 items-center gap-5">
                <Card id="requestCard" className="overflow-auto h-96 w-3/4 justify-self-end">
                    <CardContent className="grid gap-1">
                        <Label className="pt-4 text-sm">Request Title</Label>
                        {!noTitle && (
                            <Input id="reqTitle" name="title" placeholder="Title" className="text-sm h-8" value={title} onChange={(e) => handleTitleChange(e)}/>
                        )}
                        {noTitle && (
                            <div className="relative flex-col items-center">
                                <Input name="title" id="title" placeholder="Title" className="border-red-500 text-sm h-8" required value={title} onChange={(e) => handleTitleChange(e)}/>
                                <AlertCircle className="text-red-500 absolute right-1 top-1"/>
                                <p className="text-xs text-red-500">This field is required!</p>
                          </div>
                        )}
                        <div className="grid gap-0.5">
                            <Label htmlFor="client" className="text-sm">Client(s)</Label>
                            {clientList.map((singleClient,index) => (
                                <div key={index} className="flex w-full">
                                    {!singleClient.clientNo && (
                                        <Input name="client" id="client" placeholder="Client" className="text-sm h-8" required value={singleClient.client} onChange={(e) => handleClientChange(e,index)}/>
                                    )}
                                    {singleClient.clientNo && (
                                        <div className="relative flex-col w-full">
                                        <Input name="client" id="client" placeholder="Client" className="border-red-500 text-sm h-8" required value={singleClient.client} onChange={(e) => handleClientChange(e,index)}/>
                                        <AlertCircle className="text-red-500 absolute right-1 top-1"/>
                                        <p className="text-xs text-red-500">This field is required!</p>
                                        </div>
                                    )}
                                    {clientList.length-1 === index && clientList.length < 10 && (
                                        <Button className="h-8 p-2" onClick={handleClientAdd}><Plus/></Button>
                                    )}
                                    {clientList.length > 1 && clientList.length-1 != index && (
                                        <Button className="h-8 p-2" onClick={() => handleClientRemove(index)}><X/></Button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex-col">
                                <Label htmlFor="desc" className="text-sm">Request Description</Label>
                                <Textarea name="desc" id="reqDesc" placeholder="Your message here ..." rows="9" maxLength="500" value={desc} onChange={(e) => handleDescChange(e)}/>
                            </div>
                            <div className="align-top">
                                <div>
                                    <Label className="text-sm">Video Processing</Label>
                                    <Tabs defaultValue="blurred">
                                    <TabsList>
                                        <TabsTrigger value="blurred" className="text-sm" onClick={() => setBlurred(true)}>Blurred</TabsTrigger>
                                        <TabsTrigger value="notBlurred" className="text-sm" onClick={() => setBlurred(false)}>Not Blurred</TabsTrigger>
                                    </TabsList>
                                    </Tabs>
                                </div>
                                <div className="pt-4">
                                    <Label className="text-sm">Due Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant={"outline"}>
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus/>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="flex items-center space-x-2 pt-10">
                                    <Checkbox id="terms" onCheckedChange={handleTermsChange}/>
                                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Accept terms and conditions
                                    </label>
                                </div>
                            </div>
                        </div>
                    </CardContent>
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
                                <ul>
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
                                {desc && <p className="text-ellipsis overflow-hidden">{desc}</p>}
                            </ul>
                            </div>
                            <div className="align-top">
                                <div className="">
                                    <Label>Video Processing</Label>
                                    {isBlurred && (
                                        <Button className="w-10/12">Blurred</Button>
                                    )}
                                    {!isBlurred && (
                                        <Button variant={"outline"} className="w-10/12">Not Blurred</Button>
                                    )}
                                </div>
                                <div className="pt-10">
                                    <Label>Due Date</Label>
                                    <Button variant={"outline"}>
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div></div>
                <div id="buttons" className="grid grid-cols-3">
                    <Button variant={"outline"} className="px-10 py-6 justify-self-end" onClick={handleCancel}>Cancel Request</Button>
                    <Button className="px-10 py-6 justify-self-end" onClick={handleSubmit}>Submit Request</Button>
                </div>
            </div>
        </Layout>
    )
}

{/*Export*/}
export default CreateRequest;