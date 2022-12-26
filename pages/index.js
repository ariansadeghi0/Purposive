import Head from 'next/head'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Purposive</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <NavBar/>
      </body>
    </>
  )
}
