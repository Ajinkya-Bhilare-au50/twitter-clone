import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <title>Twitter clone</title>

      <main className="flex min-h-screen max-w-7xl mx-auto ">
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />

        {/* widgets */}
        {/* modal */}
      </main>
    </>
  );
}
