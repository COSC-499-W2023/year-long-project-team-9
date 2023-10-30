{/*Imports*/}
import Layout from '@/components/layout';
import React, { useState } from 'react';
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

{/*Functions*/}
const CreateRequest = () => {
    const [title,setTitle] = useState("");
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
        window.location.reload()
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
            <div className="grid grid-cols-2 items-center justify-items-center">
                <Card id="requestCard" className="overflow-auto h-96 w-2/3">
                    <CardHeader>
                        <CardTitle>Request Title</CardTitle>
                        <Input id="reqTitle" name="title" value={title} onChange={(e) => handleTitleChange(e)}/>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
                <Card id="previewCard" className="overflow-auto h-96 w-2/3">
                    <CardHeader>
                        {title.length < 1 && (
                            <CardTitle className="text-xl">Title</CardTitle>
                        )}
                        {title.length >= 1 && (
                            <CardTitle className="text-xl">{title}</CardTitle>
                        )}
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}

{/*Export*/}
export default CreateRequest;

{/*Imports*/}
{/*
import Image from "next/image";
import { Inter } from "next/font/google";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AlignVerticalSpaceAround, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "@/components/ui/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus,X,AlertCircle } from "lucide-react";
*/}

{/*Functions*/}
{/*
export default function createRequest() {
  const {theme,setTheme} = useTheme();
*/}

{/*Body*/}
{/*
        <div className="grid grid-cols-2 items-center justify-items-center">
            <Card id="info" className="overflow-auto h-96 w-2/3">
                <CardHeader>
                    <CardTitle>
                        Request Title
                    </CardTitle>
                    {noTitle && (
                      <div className="relative flex-col items-center">
                        <Input name="title" id="title" placeholder="Title" className="border-red-500" required value={title} onChange={(e) => handleTitleChange(e)}/>
                        <AlertCircle className="text-red-500 absolute right-1 top-2"/>
                        <p className="text-xs text-red-500">This field is required!</p>
                      </div>
                    )}
                    {!noTitle && (
                      <Input name="title" id="title" placeholder="Title" required value={title} onChange={(e) => handleTitleChange(e)}/>
                    )}
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="client">Client(s)</Label>
                      {clientList.map((singleClient,index) => (
                        <div key={index} className="flex w-full">
                          {singleClient.clientNo && (
                            <div className="relative flex-col w-full">
                              <Input name="client" id="client" placeholder="Client" className="border-red-500" required value={singleClient.client} onChange={(e) => handleClientChange(e,index)}/>
                              <AlertCircle className="text-red-500 absolute right-1 top-2"/>
                              <p className="text-xs text-red-500">This field is required!</p>
                            </div>
                          )}
                          {!singleClient.clientNo && (
                            <Input name="client" id="client" placeholder="Client" required value={singleClient.client} onChange={(e) => handleClientChange(e,index)}/>
                          )}
                          {clientList.length-1 === index && clientList.length < 10 && (
                            <Button type="button" onClick={handleClientAdd} className="ml-2"><Plus className=""/></Button>
                          )}
                          {clientList.length > 1 && clientList.length-1 != index && (
                            <Button type="button" onClick={() => handleClientRemove(index)}><X className="ml-2"/></Button>
                          )}
                        </div>
                      ))}
                    </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="flex-col gap-2">
                      <Label htmlFor="desc">Request Description</Label>
                      <Textarea name="desc" id="reqDesc" placeholder="Your message here ..." rows="18" value={desc} onChange={(e) => handleDescChange(e)}/>
                    </div>
                    <div className="grid gap-2 h-96">
                        <Tabs defaultValue="blurred">
                          <TabsList>
                              <TabsTrigger value="blurred" onClick={() => setBlurred(true)}>Blurred</TabsTrigger>
                              <TabsTrigger value="notBlurred" onClick={() => setBlurred(false)}>Not Blurred</TabsTrigger>
                          </TabsList>
                        </Tabs>
                        <Label>Due Date</Label>
                        <Calendar id="dueDate" mode="single" selected={date} onSelect={setDate} className="rounded-md border"/>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" onCheckedChange={handleTermsChange}/>
                            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Accept terms and conditions
                            </label>
                        </div>
                    </div>
                  </div>
                </CardContent>
            </Card>
            <Card id="preview" className="overflow-auto h-96 w-11/12">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                    <div className="grid gap-2">
                      <Label>Client(s)</Label>
                      {clientList.map((singleClient,index) => (
                        <ul>
                          {singleClient.client && <li className="truncate">{singleClient.client}</li>}
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
                    <div className="grid gap-2 h-96">
                        {isBlurred && (
                          <Button className="w-11/12">Blurred</Button>
                        )}
                        {!isBlurred && (
                          <Button className="w-11/12">Not Blurred</Button>
                        )}
                        <Label>Due Date</Label>
                        <Calendar id="prevDate" mode="single" selected={date} className="rounded-md border" disabled/>
                    </div>
                  </div>
                </CardContent>
            </Card>
        </div>
        <div id="buttons" className="grid grid-cols-2">
          <div></div>
          <div className="grid grid-cols-3">
            <div></div>
            <div>
              <Button type="reset" className="w-11/12">Cancel Request</Button>
            </div>
            <div>
              <Button type="submit" className="w-11/12" onClick={handleSubmit}>Submit Request</Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </ThemeProvider>
  ); 
}
*/}