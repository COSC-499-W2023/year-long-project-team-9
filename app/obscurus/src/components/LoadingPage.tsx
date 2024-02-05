import { NextPage } from "next";

const LoadingPage: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen pb-32">
      <div className="text-3xl font-extrabold">Loading...</div>
    </div>
  );
};

export default LoadingPage;
