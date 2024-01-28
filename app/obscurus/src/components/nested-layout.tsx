import { ReactNode } from "react";
import Layout from "./layout";
import { useCurrentTheme } from "./hooks/useCurrentTheme";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";
import { useRouter } from "next/router";

interface NestedLayoutProps {
  children: ReactNode;
  pos?: number;
}

export default function NestedLayout({ children, pos }: NestedLayoutProps) {
  const router = useRouter();
  return (
    <Layout>
      <main className=" container grid justify-items-center items-center p-5 justify-center">
        <div className=" w-full  relative h-[500px]">{children}</div>
      </main>
    </Layout>
  );
}
