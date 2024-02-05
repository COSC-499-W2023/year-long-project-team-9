import { ReactNode } from "react";
import { useCurrentTheme } from "./hooks/useCurrentTheme";
import Link from "next/link";

interface NestedLayoutProps {
  children: ReactNode;
  progressBarPos?: number;
}

export default function NestedLayout({
  children,
  progressBarPos,
}: NestedLayoutProps) {
  return (
    <main className="grid justify-items-center items-center p-10 gap-10">
      {children}
    </main>
  );
}
