{/*Imports*/ }
import Layout from '@/components/layout';
import React from 'react';
import { format } from "date-fns";
import { useRouter } from 'next/router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Plus, X, Calendar as CalendarIcon } from "lucide-react";

type ClientType = {
    client: string;
    clientNo: boolean;
    [key: string]: string | boolean;
};

{/*Functions*/ }
const CreateRequest = () => {
    const router = useRouter()
    const [title, setTitle] = React.useState("");
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTitle(value)
    };
    const [clientList, setClientList] = React.useState<ClientType[]>([{ client: "", clientNo: false }]);
    const handleClientAdd = () => {
        setClientList([...clientList, { client: "", clientNo: false }])
    };
    const handleClientRemove = (index: number) => {
        const list = [...clientList]
        list.splice(index, 1)
        setClientList(list)
    };
    const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target
        const list = [...clientList]
        list[index][name] = value
        setClientList(list)
    };
    const [desc, setDesc] = React.useState("");
    const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setDesc(value)
    };
    const [isBlurred, setBlurred] = React.useState(true);
    const [language, setLanguage] = React.useState("English")
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [terms, setTerms] = React.useState(false)
    const handleTermsChange = () => {
        setTerms(!terms)
    };
    const [noTitle, setNoTitle] = React.useState(false);
    const handleCancel = () => {
        router.push("/")
    };
    const handleSubmit = () => {
        if ((title.length < 1) || clientsEmpty()) {
            if (title.length < 1) {
                setNoTitle(true)
            } else {
                setNoTitle(false)
            }
            for (let item of clientList) {
                if (item.client.length < 1) {
                    item.clientNo = true
                } else {
                    item.clientNo = false
                }
            }
        } else {
            setNoTitle(false)
            router.reload()
        }
    };
    const clientsEmpty = () => {
        for (let item of clientList) {
            if (item.client.length < 1) {
                return true
            }
        }
        return false
    };
    return (
        <Layout>
            {/*Starting point of the layout of the page*/}
            <div className='container grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
                {/*The first card*/}
                <Card className='flex flex-col'>
                    {/*Code for the Request Title input*/}
                    <CardContent className='grid'>
                        <div className='pt-4'>
                            <Label>Request Title</Label>
                            {!noTitle && (
                                <Input placeholder='Title' value={title} onChange={(e) => handleTitleChange(e)}/>
                            )}
                            {noTitle && (
                                <div className='relative flex-col items-center'>
                                    <Input placeholder='Title' className='border-red-500' value={title} onChange={(e) => handleTitleChange(e)}/>
                                    <AlertCircle className='text-red-500 absolute right-1 top-1.5'/>
                                    <p className='text-red-500 text-xs'>This field is required!</p>
                                </div>
                            )}
                        </div>
                        {/*Code for the Client email input*/}
                        <div className='pt-2'>
                            <Label>Client(s)</Label>
                            <Input placeholder="Email" />
                        </div>
                        <div className='grid grid-cols-2 left-justify gap-1 pt-2'>
                            {/*Code for Request Description input*/}
                            <div>
                                <Label>Request Description</Label>
                                <Textarea className='resize-none' rows={9}/>
                            </div>
                            <div className='grid grid-row-4 pt-2'>
                                {/*Code for Video Processing input*/}
                                <Label>Video Processing</Label>
                                <Tabs defaultValue='blurred' className='pt-0.5 pb-1.5'>
                                    <TabsList className='grid w-full grid-cols-2'>
                                        <TabsTrigger value='notBlurred'>Not Blurred</TabsTrigger>
                                        <TabsTrigger value='blurred'>Blurred</TabsTrigger>
                                    </TabsList>
                                </Tabs>
                                {/*Code for Due Date input*/}
                                <div className='pb-1.5'>
                                    <Label>Due Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant={"outline"} className="w-full">
                                                <CalendarIcon className="mr-2 h-4 w-4 flex-wrap" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                {/*Code for Video's Language input*/}
                                <div className='pb-1.5'>
                                    <Label>Video's Language</Label>
                                    <Input placeholder="Language" />
                                </div>
                                {/*Code for terms and conditions*/}
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Accept the <a href="" target="_blank" className='text-blue-600 dark:text-blue-500 hover:underline'>terms and conditions</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/*The second card*/}
                <Card>
                    <CardContent className='grid'>
                        <div className='pt-8 grid grid-row-3 pb-6'>
                            {title.length < 1 && (
                                <CardTitle className="break-all text-2xl">Title</CardTitle>
                            )}
                            {title.length >= 1 && (
                                <CardTitle className="break-all text-xl">{title}</CardTitle>
                            )}
                        </div>
                        <div>
                            <Label>Client(s)</Label>
                            {/*The code below is the entire code for email in preview*/}
                            <p className='border-1 pr-3 pl-3 pt-1 pb-1 text-sm text-slate-500'>Email</p>
                        </div>
                        <div className='grid grid-cols-2 left-justify gap-1 pt-2'>
                            {/*Code for Request Description input*/}
                            <div>
                                <Label>Request Description</Label>
                                <Textarea className='resize-none' rows={9}/>
                            </div>
                            <div className='grid grid-row-4'>
                                {/*Code for Video Processing input*/}
                                <div>
                                    <Label>Video Processing</Label>
                                    <br></br>
                                    <Button className='w-full' disabled>Blurred</Button>
                                </div>
                                {/*Code for Due Date input*/}
                                <div className='pb-1.5'>
                                    <Label>Due Date</Label>
                                    <br></br>
                                    <Button className='w-full' disabled>November 12th, 2023</Button>
                                </div>
                                {/*Code for Video's Language input*/}
                                <div className='pb-1.5'>
                                    <Label>Video's Language</Label>
                                    <br></br>
                                    <Button className='w-full' disabled>Language</Button>
                                </div>
                                {/*Code for terms and conditions*/}
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" disabled/>
                                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-none">
                                        Accept the <a href="" target="_blank" className='text-blue-600 dark:text-blue-500 hover:underline'>terms and conditions</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='container grid grid-cols-1 mt-5 gap-10'>
                <div id='buttons' className='text-right gap-2'>
                    <Button variant={'ghost'} className='justify-self-start' onClick={handleCancel}>Cancel Request</Button>
                    <Button variant={'default'} className='justify-self-start' onClick={handleSubmit}>Submit Request</Button>
                </div>
            </div>
        </Layout>
    )
}

{/*Export*/ }
export default CreateRequest;