"use server"
const hello = async(e: any) => {
    e ? console.log(e) : console.log("No e")
    console.log("hello")
    return "hello"
}


export default hello

