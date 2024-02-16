"use client"
import  Link  from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useCallback } from "react"

export default function Search() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
   
    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
   
        return params.toString()
      },
      [searchParams]
    )
      console.log(searchParams.toString())


      const submissionId = "x";


   
    return (
      <>
        <button
          onClick={() => {
            router.push(pathname + '?' + createQueryString('submissionId', submissionId))
          }}
        >
          Associated Submission: {searchParams.toString().split("=")[1]}
        </button>
   
      </>
    )
  }