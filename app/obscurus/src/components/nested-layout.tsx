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

export default function NestedLayout({
  children,
  pos,
}: NestedLayoutProps) {
  const router = useRouter();
  return (
    <Layout>
      
      <main className=" container grid justify-items-center items-center p-10 gap-10">
        {children}
      </main>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="../"/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/submit" className=" font-extrabold text-lg">
                {pos}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/submit/Upload">
                2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/submit/ConfirmVideo">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/submit/ConfirmVideo">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/submit/ConfirmVideo">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Layout>
  );
}
