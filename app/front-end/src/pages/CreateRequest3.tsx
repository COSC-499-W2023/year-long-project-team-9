'use client'

{/*IMPORTS*/}
import Layout from '@/components/layout';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray,useForm } from 'react-hook-form';
import * as z from 'zod';

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
    ),
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
{/*Main function*/}
const CreateRequest = () => {
    {/*Define the form using the provided schema and values*/}
    const requestForm = useForm<RequestFormValues>({
        resolver:zodResolver(requestFormSchema),
        defaultValues,
        mode:'onChange',
    })
    return (
        <Layout>

        </Layout>
    )
}

{/*EXPORT*/}
export default CreateRequest;