{/*Imports*/ }
import Layout from '@/components/layout';
import React from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle, Plus, X, Calendar as CalendarIcon } from 'lucide-react';

type ClientType = {
    client: string;
    clientNo: boolean;
    [key: string]: string | boolean;
};

{/*Functions*/ }
const CreateRequest = () => {
    const router = useRouter()
    const [title,setTitle] = React.useState('');
    const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setTitle(value)
    };
    const [noTitle,setNoTitle] = React.useState(false);
    const [clientList,setClientList] = React.useState<ClientType[]>([{client:'',clientNo:false}]);
    const handleClientAdd = () => {
        setClientList([...clientList,{client:'',clientNo:false}])
    };
    const handleClientRemove = (index:number) => {
        const list = [...clientList]
        list.splice(index,1)
        setClientList(list)
    };
    const handleClientChange = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
        const {name,value} = e.target
        const list = [...clientList]
        list[index][name] = value
        setClientList(list)
    };
    const clientsEmpty = () => {
        for (let item of clientList) {
            if (item.client.length < 1) {
                return true
            }
        }
        return false
    };
    const [desc,setDesc] = React.useState('');
    const handleDescChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setDesc(value)
    };
    const [isBlurred,setBlurred] = React.useState(true);
    const [date,setDate] = React.useState<Date|undefined>(new Date());
    const [language,setLanguage] = React.useState('')
    const handleLanguageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setLanguage(value)
    };
    const [terms,setTerms] = React.useState(false)
    const handleTermsChange = () => {
        setTerms(!terms)
    };
    const [noTerms,setNoTerms] = React.useState(false);
    const handleCancel = () => {
        router.push("/")
    };
    const handleSubmit = () => {
        if (title.length < 1 || !terms) {
            if(title.length < 1) {
                setNoTitle(true)
            }else {
                setNoTitle(false)
            }
            if(!terms) {
                setNoTerms(true)
            }else {
                setNoTerms(false)
            }
        } else {
            setNoTitle(false)
            router.reload()
        }
    };
    return (
        <Layout>
            {/*Starting point of the layout of the page*/}
            <div className='container grid grid-cols-1 md:grid-cols-2 mt-5 gap-10'>
                {/*Request Info Card*/}
                <Card id='requestCard' className='flex flex-col'>
                    <CardContent className='grid gap-1'>
                        {/*Code for the Request Title input*/}
                        <div id='requestTitle' className='pt-4'>
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
                        <div id='requestClients'>
                            <Label>Client(s)</Label>
                            {clientList.map((singleClient,index) => (
                                <div key={index} className='flex pt-1 gap-1'>
                                    <Input name="client" placeholder='Client' value={singleClient.client} onChange={(e) => handleClientChange(e,index)}/>
                                    {clientList.length-1 === index && clientList.length < 10 && (
                                        <Button onClick={handleClientAdd}><Plus/></Button>
                                    )}
                                    {clientList.length > 1 && clientList.length-1 != index && (
                                        <Button onClick={() => handleClientRemove(index)}><X/></Button>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='grid grid-cols-2 left-justify gap-1'>
                            {/*Code for Request Description input*/}
                            <div id='requestDescription'>
                                <Label>Request Description</Label>
                                <Textarea className='resize-none' placeholder='Your message here ...' rows={9} maxLength={500} value={desc} onChange={(e) => handleDescChange(e)}/>
                            </div>
                            <div className='grid grid-row-4'>
                                {/*Code for Video Processing input*/}
                                <div id='requestBlurred'>
                                    <Label>Video Processing</Label>
                                    <Tabs defaultValue='blurred' className='pt-0.5 pb-1.5'>
                                        <TabsList className='grid w-full grid-cols-2'>
                                            <TabsTrigger value='notBlurred' onClick={() => setBlurred(false)}>Not Blurred</TabsTrigger>
                                            <TabsTrigger value='blurred' onClick={() => setBlurred(true)}>Blurred</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                                {/*Code for Due Date input*/}
                                <div id='requestDueDate' className='pb-1.5'>
                                    <Label>Due Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant={'outline'} className='w-full'>
                                                <CalendarIcon className='mr-2 h-4 w-4 flex-wrap'/>
                                                {date?format(date,'PPP'):<span>=</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className='w-auto p-0'>
                                            <Calendar mode='single' selected={date} onSelect={setDate} initialFocus/>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                {/*Code for Video's Language input*/}
                                <div id='requestLanguage' className='pb-1.5'>
                                    <Label>Video Language</Label>
                                    <Input placeholder="Language" value={language} onChange={(e) => handleLanguageChange(e)}/>
                                </div>
                                {/*Code for terms and conditions*/}
                                <div id='requestTerms' className="flex items-center space-x-2">
                                    <Checkbox id="terms" onCheckedChange={handleTermsChange}/>
                                    {noTerms && (
                                        <AlertCircle className='text-red-500 text-xs'/>
                                    )}
                                    <Label htmlFor="terms" className="text-sm">Accept the <a href="" target="_blank" className='text-blue-600 dark:text-blue-500 hover:underline'>terms and conditions</a></Label>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/*Request Preview Card*/}
                <Card id='previewCard'>
                    <CardContent className='grid'>
                        <div id='prevTitle' className='pt-6 grid grid-row-3 pb-6'>
                            {title.length < 1 && (
                                <CardTitle className="break-all text-2xl">Title</CardTitle>
                            )}
                            {title.length >= 1 && (
                                <CardTitle className="break-all text-2xl">{title}</CardTitle>
                            )}
                        </div>
                        <div id='prevClient'>
                            <Label>Client(s)</Label>
                            {clientList.map((singleClient,index) => (
                                <ul key={index}>
                                    {singleClient.client.length < 1 && (
                                        <p className='break-all text-slate-400 indent-2 pt-2 pb-2'>Email</p>
                                    )}
                                    {singleClient.client.length >= 1 && (
                                        <p className='break-all indent-2 pt-2 pb-2'>{singleClient.client}</p>
                                    )}
                                </ul>
                            ))}
                        </div>
                        <div className='grid grid-cols-2 left-justify gap-1 pt-2'>
                            <div id='prevDesc'>
                                <Label>Request Description</Label>
                                <Textarea className='resize-none' placeholder={desc} readOnly rows={9}/>
                            </div>
                            <div className='grid grid-row-4'>
                                <div id='prevBlurred'>
                                    <Label>Video Processing</Label>
                                    {isBlurred && (
                                        <Button className='w-full' disabled>Blurred</Button>
                                    )}
                                    {!isBlurred && (
                                        <Button className='w-full' disabled>Not Blurred</Button>
                                    )}
                                </div>
                                <div id='prevDate' className='pb-1.5'>
                                    <Label>Due Date</Label>
                                    <br></br>
                                    <Button className='w-full' disabled>
                                        <CalendarIcon className='mr-2 h-4 w-4'/>
                                        {date?format(date,'PPP'):<span></span>}
                                    </Button>
                                </div>
                                <div id='prevLanguage' className='pb-1.5'>
                                    <Label>Video Language</Label>
                                    {language.length < 1 && (
                                        <Button className='w-full' disabled>Language</Button>
                                    )}
                                    {language.length >= 1 && (
                                        <Button className='w-full' disabled>{language}</Button>
                                    )}
                                </div>
                                <div id='prevTerms' className="flex items-center space-x-2">
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
            <div id='submitCancel' className='container grid grid-cols-1 mt-5 mb-5 gap-10'>
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