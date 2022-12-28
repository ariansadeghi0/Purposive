import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import TaskBoard from '../components/TaskBoard/TaskBoard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Purposive</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
        <TaskBoard/>
      </main>
    </>
  )
}
