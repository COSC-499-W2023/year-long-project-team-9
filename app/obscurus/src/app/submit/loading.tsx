import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return(
        <div className=" w-full h-screen flex space-x-5 flex-row overflow-hidden p-5">
            <Skeleton className="w-[15%] bg-accent " />
            <Skeleton className="w-[35%]  bg-accent" />
            <Skeleton className="w-[50%]  bg-accent" />
        </div>
    )
}

export default Loading
