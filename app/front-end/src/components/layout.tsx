import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "../pages/NavBar";
// import Footer from './footer'
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    className="bg-background min-h-screen min-w-full font-inter"
  >
        <Navbar />
        <main>{children}</main>
    </motion.div>
  );
}
