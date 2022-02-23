import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import IndexContent from "../components/IndexContent";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-full bg-background font-Outfit">
      <Head>
        <title>Index</title>
        <meta name="description" content="hi :)" />
        <link rel="icon" href="/star.png" />
      </Head>

      <main className="font-semibold text-font">
        <div className="mx-auto h-full w-5/6 space-x-0 pt-8 md:flex md:w-5/6 md:space-x-16 md:pt-32 xl:w-7/12">
          <Sidebar />
          <IndexContent />
        </div>
      </main>
    </div>
  );
}
