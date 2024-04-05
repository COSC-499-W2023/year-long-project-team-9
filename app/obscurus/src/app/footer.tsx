const Footer = () => {
  return (
    <footer className="bg-accent text-center text-sm p-4 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            2024 <span className="font-bold">obscurus</span>
          </div>
          <div className="text-center flex gap-3 md:text-right mt-4 md:mt-0">
            <div className="underline">Terms of Service</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
