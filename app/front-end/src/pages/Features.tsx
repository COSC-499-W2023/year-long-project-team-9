import { ArrowBigDownDash } from "lucide-react";

const Features = () => {
  return (
    <>
      <div className=" min-h-screen grid grid-cols-2 gap-5 justify-self-center pl-36 top-0">
        <h1 className="text-xl font-extrabold">Features (TODO)</h1>
        <ArrowBigDownDash
          className="animate-bounce justify-self-start"
          size={50}
        />
      </div>
      <div className=" justify-start items-start">Blur ur face</div>
    </>
  );
};

export default Features;
