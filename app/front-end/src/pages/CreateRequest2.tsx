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
                <Card>
                    
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </Layout>
    )
}

{/*Export*/ }
export default CreateRequest;