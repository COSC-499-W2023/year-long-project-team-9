import Image from "next/image";
import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { useTheme } from "next-themes";


const inter = Inter({ subsets: ["latin"] });



export default function Home(){
  return (
    <div className="flex flex-col gap-10">

      {/*body*/}
      <div className="grid grid-cols-2 items-center justify-items-center pl-16">
        <div className="grid col-auto gap-5 w-100">
          <h1 className="text-4xl font-extrabold">
            Protect Privacy with a Single Click.
          </h1>
          <h2 className="font-semibold">
            Securely Blur Faces in Your Videos with{" "}
            <span className=" font-extrabold">obscurus</span>
          </h2>
          <div className="grid grid-cols-2">
            <Input
              className=" justify-self-auto"
              type="email"
              placeholder="Email"
            />
            <Button className=" justify-self-end px-auto  text-base">Get Started for Free</Button>
          </div>
        </div>
        <div>
          <Image
            className=""
            src="/splash.svg"
            alt="obscurus"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
