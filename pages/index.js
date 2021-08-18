import Head from 'next/head'
import Navbar from '../components/navbar'
import Call from '../components/call'
import Image from 'next/image'
import Services from '../components/services'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dental</title>
        <meta name="description" content="Dental app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Services />
      </main>
      <Call />
    </div>
  )
}
