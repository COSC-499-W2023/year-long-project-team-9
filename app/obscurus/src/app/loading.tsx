import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return(
        <div className=" w-full h-screen flex space-x-5 flex-row overflow-hidden px-5 pb-28 pt-5">
            <Skeleton className="w-[15%] " />
            <Skeleton className="w-[35%]" />
            <Skeleton className="w-[50%]" />
        </div>
    )
}

export default Loading