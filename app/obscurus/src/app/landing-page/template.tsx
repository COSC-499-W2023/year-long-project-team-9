import { ReactNode } from "react"

const Template = ({ children }: {children: ReactNode | ReactNode[]}) => {
    return (
        <div className="h-min w-full flex flex-col items-center justify-center">
            {children}
        </div>
    )
}

export default Template;
