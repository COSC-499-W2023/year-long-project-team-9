import { ReactNode } from "react";
import Layout from "./layout";
import { useCurrentTheme } from "./hooks/useCurrentTheme";
import Link from "next/link";

interface NestedLayoutProps {
  children: ReactNode;
  progressBarPos: number;
}

export default function NestedLayout({
  children,
  progressBarPos,
}: NestedLayoutProps) {
  return (
    <Layout>
      <main className="grid justify-items-center items-center p-10 gap-10">
        {progressBarPos === 1 ? (
          <svg
            width="50%"
            height="60"
            viewBox="0 0 856 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="259" y="24" width="568" height="13" fill="#CBD5E1" />
            <rect x="49" y="24" width="160" height="12.8" fill="#CBD5E1" />
            <Link href="/submit">
              <circle
                id="first"
                cx="30"
                cy="30"
                r="27"
                fill={useCurrentTheme("background")}
                stroke={useCurrentTheme("primary")}
                strokeWidth="6"
              />
            </Link>

            <circle
              cx="826"
              cy="30"
              r="27"
              fill={useCurrentTheme("background")}
              stroke="#CBD5E1"
              strokeWidth="6"
            />
            <circle
              cx="627"
              cy="30"
              r="27"
              fill={useCurrentTheme("background")}
              stroke="#CBD5E1"
              strokeWidth="6"
            />
            <circle
              cx="428"
              cy="30"
              r="27"
              fill={useCurrentTheme("background")}
              stroke="#CBD5E1"
              strokeWidth="6"
            />
            <Link href="/submit/Upload">
              <circle
                cx="229"
                cy="30"
                r="27"
                fill={useCurrentTheme("background")}
                stroke="#CBD5E1"
                strokeWidth="6"
              />
            </Link>
          </svg>
        ) : (
          ""
        )}
        {children}
      </main>
    </Layout>
  );
}
