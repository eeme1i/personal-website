import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PortfolioContent from "../components/PortfolioContent";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-full bg-background font-Inter tracking-tight">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio :)" />
        <link rel="icon" href="/star.png" />
      </Head>

      <main className="font-semibold text-font">
        <div className="mx-auto h-full w-5/6 space-x-0 pt-8 md:flex md:space-x-16 md:pt-32 xl:w-7/12">
          <Sidebar />
          <PortfolioContent />
        </div>
      </main>
    </div>
  );
}
