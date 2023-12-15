import Layout from "@/components/layout";
import { Progress } from "@/components/ui/progress";
import { ReactNode, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const SubmitLayout = ({ children }: LayoutProps) => {
  return (
    <Layout>
      <div className="grid  justify-items-center items-center p-10 gap-10">
        <Progress value={10} className="w-[60%] h-4" />

        {children}
      </div>
    </Layout>
  );
};

export default SubmitLayout;
