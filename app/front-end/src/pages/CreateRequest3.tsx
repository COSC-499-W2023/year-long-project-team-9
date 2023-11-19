'use client'

{/*IMPORTS*/}
import Layout from '@/components/layout';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray,useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/router';
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs,TabsList,TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover,PopoverContent,PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle,Plus,X,Calendar as CalendarIcon } from 'lucide-react';

{/*FUNCTIONS*/}
{/*Form schema function*/}
const requestFormSchema = z.object({
    title:z.string({
        required_error:'This field is required!',
    }),
    clients:z.array(
        z.object({
            value:z.string({required_error:'This field is required!'}).email({message:'Please enter a valid email.'}),
        })
    ).max(10),
    description:z.string().max(500,{
        message:'Maximum 500 characters.',
    }).optional(),
    blurred:z.boolean(),
    dueDate:z.date(),
    language:z.string(),
    terms:z.boolean({
        required_error:'This field is required!',
    }),
})
{/*Infer types of form schema*/}
type RequestFormValues = z.infer<typeof requestFormSchema>
{/*Default form values function*/}
const defaultValues:Partial<RequestFormValues> = {
    title:'',
    clients:[
        { value:'' },
    ],
    description:'',
    blurred:true,
    dueDate:new Date(),
    language:'',
    terms:false,
}

{/*EXPORT*/}
export default function CreateRequest() {
    {/*Create a router for page routing*/}
    const router = useRouter()
    {/*Define the form using the provided schema and values*/}
    const { setValue } = useForm<RequestFormValues>()
    const requestForm = useForm<RequestFormValues>({
        resolver:zodResolver(requestFormSchema),
        defaultValues,
        mode:'onChange',
    })
    {/*Control the number and format of fields in the clients array*/}
    const { fields,append,remove } = useFieldArray({
        name:'clients',
        control:requestForm.control,
    })
    {/*Handle the cancellation of the form*/}
    function handleCancel() {
        router.push("/")
    }
    {/*Handle the submission of the form*/}
    function onSubmit(data:RequestFormValues) {
        console.log(data)
        // router.reload()
    }
    return (
        <Layout>
            <Form {...requestForm}>
                <form onSubmit={requestForm.handleSubmit(onSubmit)} className='space-y-2'>
                    {/*Starting point of the layout of the page*/}
                    <div id='cards' className='container grid grid-cols-1 md:grid-cols-2 mt-1 gap-x-10'>
                        {/*Request Info Card*/}
                        <Card id='requestCard' className='flex flex-col'>
                            <CardContent className='grid gap-1'>
                                {/*Code for the Request Title input*/}
                                <div id='requestTitle' className='pt-4'>
                                    <FormField
                                        control={requestForm.control}
                                        name='title'
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Request Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Title' required {...field}/>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/*Code for the Client email input*/}
                                <div id='requestClients'>
                                    <Label>Client(s)</Label>
                                    {fields.map((field,index) => (
                                        <div key={index} className='flex pt-1 gap-1'>
                                            <FormField
                                                control={requestForm.control}
                                                key={field.id}
                                                name={`clients.${index}.value`}
                                                render={({field}) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input placeholder='Email' required {...field}/>
                                                        </FormControl>
                                                        <FormMessage/>
                                                    </FormItem>
                                                )}
                                            />
                                            {fields.length-1 === index && fields.length < 10 && (
                                                <Button type='button' onClick={() => append({value:''})}><Plus/></Button>
                                            )}
                                            {fields.length-1 != index && fields.length > 1 && (
                                                <Button type='button' onClick={() => remove(index)}><X/></Button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div id='descAndDetails' className='grid grid-cols-2 left-justify gap-1'>
                                    {/*Code for Request Description input*/}
                                    <div id='requestDescription'>
                                        <FormField
                                            control={requestForm.control}
                                            name='description'
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Request Description</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder='Your message here...' className='resize-none' rows={9} maxLength={500} {...field}/>
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div id='details'>
                                        {/*Code for Video Processing input*/}
                                        <div id='requestBlurred'>
                                            <FormField
                                                control={requestForm.control}
                                                name='blurred'
                                                render={({field}) => (
                                                    <FormItem>
                                                        <FormLabel>Video Processing</FormLabel>
                                                        <FormControl>
                                                        <Tabs defaultValue='blurred' className='pt-0.5 pb-1.5'>
                                                            <TabsList className='grid w-full grid-cols-2'>
                                                                <TabsTrigger value='notBlurred' onClick={() => setValue("blurred",false,{shouldValidate:true})}>Not Blurred</TabsTrigger>
                                                                <TabsTrigger value='blurred' onClick={() => setValue("blurred",true,{shouldValidate:true})}>Blurred</TabsTrigger>
                                                            </TabsList>
                                                        </Tabs>
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        {/*Request Preview Card*/}
                        <Card id='previewCard'>

                        </Card>
                    </div>
                    <div id='buttons' className='container grid grid-cols-1 pb-2'>
                        <div id='cancelSubmit' className='text-right gap-2'>
                            <Button variant={'ghost'} className='justify-self-start' onClick={handleCancel}>Cancel Request</Button>
                            <Button type='submit' className='justify-self-start'>Submit Request</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </Layout>
    )
};