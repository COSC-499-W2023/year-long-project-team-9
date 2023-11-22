{/*IMPORTS*/ }
import Layout from '@/components/layout';
import React from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useForm,SubmitHandler, useFieldArray } from 'react-hook-form';
import { Card,CardContent,CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs,TabsList,TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover,PopoverContent,PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle,Plus,X,Calendar as CalendarIcon } from 'lucide-react';

{/*FUNCTIONS*/ }
{/*Create a type to determine the data of the form*/}
interface formSchema {
    title:string
    clients:{value:string}[]
    description:string
    blurred:boolean
    dueDate:Date
    language:string
    terms:boolean
};
{/*Create a function to form the CreateRequest page*/}
const CreateRequest = () => {
    {/*Create a register and handle submit function using React Hook Forms*/}
    const {control,register,handleSubmit} = useForm<formSchema>()
    {/*Create a field array and appropriate methods to add and remove items*/}
    const {fields,append,remove} = useFieldArray({
        control,
        name:'clients',
    })
    {/*Create a function to submit data*/}
    const onSubmit:SubmitHandler<formSchema> = (data) => {
        console.log(data)
    }
    {}
    return (
        <Layout>
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
        </Layout>
    )
};

{/*EXPORT*/ }
export default CreateRequest;