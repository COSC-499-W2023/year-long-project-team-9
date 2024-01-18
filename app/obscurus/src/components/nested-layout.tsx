import { ReactNode } from "react";
import Layout from "./layout";

interface NestedLayoutProps {
  children: ReactNode;
}

export default function NestedLayout({ children }: NestedLayoutProps) {
  return(
    <Layout>
        <main>
            {children}
        </main>
    </Layout>
    
  )
}
