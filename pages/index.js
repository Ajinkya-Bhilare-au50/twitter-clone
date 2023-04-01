import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <title>Twitter clone</title>

      <main>
        
      </main>
      {/* Sidebar */}
      <Sidebar />
      {/* feed */}
      {/* widgets */}
      {/* modal */}
    </>
  );
}
