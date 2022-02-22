import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PortfolioContent from "../components/PortfolioContent";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="font-Outfit bg-background h-full min-h-screen w-full">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-font font-semibold">
        <div className="mx-auto h-full w-5/6 space-x-0 pt-8 md:flex md:w-5/6 md:space-x-16 md:pt-32 xl:w-3/4">
          <Sidebar />
          <PortfolioContent />
        </div>
      </main>
    </div>
  );
}
