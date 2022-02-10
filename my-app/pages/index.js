import Head from 'next/head'
import Image from 'next/image'
import { CustomCursor } from '../components/CustomCursor'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen cursor-none">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <CustomCursor />
        <h1>Hello!</h1>
      </main>
    </div>
  )
}
