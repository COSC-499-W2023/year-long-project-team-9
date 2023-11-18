{/*IMPORTS*/ }
import Layout from '@/components/layout';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

{/*FUNCTIONS*/ }
const formSchema = z.object({
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
const CreateRequest = () => {
    return (
        <Layout>

        </Layout>
    )
}

{/*EXPORT*/ }
export default CreateRequest;