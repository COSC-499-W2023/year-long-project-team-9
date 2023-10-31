
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>

    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 460,
      damping: 150,
    }}
    className="bg-background min-w-full font-inter"
  >
        <main>{children}</main>
    </motion.div>
    </>
  );
}
