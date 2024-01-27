
import { ReactNode } from "react";
import { motion } from "framer-motion";
import useSWR from 'swr'

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  //const { data, error } = useSWR('/api/navigation', fetcher)
 
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  return (
    <>

    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.2 } }}
    exit={{ opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 460,
      damping: 150,
    }}
    className={"bg-background min-w-full font-inter"+ className}
  >
        <main>{children}</main>
    </motion.div>
    </>
  );
}
