import { Suspense } from "react";
import { redirect } from "next/navigation";

async function getUserEmail() {
  //...
}

async function Page() {
  const userEmail = "imightbejan@gmail.com"; //getUserEmail();


  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen w-full flex flex-1 items-center justify-center">
            <p className="text-lg font-semibold ">Loading...</p>
          </div>
        }
      />
     {redirect("/Submit")}

      <Suspense />
    </>
  );
}

export default Page;
