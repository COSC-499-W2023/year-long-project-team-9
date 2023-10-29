import Image from "next/image";


const About = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold">Powered by</h1>
      <div className="flex flex-row items-center justify-center p-10 gap-12 align-middle">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
          className=""
            alt="AWS"
            width={100}
            height={100}
            data-aos="fade-in"
            data-aos-delay="100"
        />
        {/*NExt.js*/}
        <Image
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          className=""
            alt="Next.js"
            width={100}
            height={100}
            data-aos="fade-in"
            data-aos-delay="200"
        />
        {/*Tailwind CSS*/}
        <Image
          src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
          className=""
            alt="Tailwind CSS"
            width={100}
            height={100}
            data-aos="fade-in"
            data-aos-delay="300"
        />

      </div>
    </div>
  );
};

export default About;
