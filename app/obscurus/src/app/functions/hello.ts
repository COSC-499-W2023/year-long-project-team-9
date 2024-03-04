"use server"
import { Api } from "sst/node/api"
const hello = async(e: any) => {
    const url = Api.Api.url
    console.log(url)
    return url
}


export default hello

