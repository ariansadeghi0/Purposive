import { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import TaskBoard from '../components/TaskBoard/TaskBoard';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useSetUser } from '../context/UserContext';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const setUser = useSetUser();

  useEffect(() => {
    (async () => {
      const getUser = await fetch("/api/user");
      const getUserJson = await getUser.json().finally();
      setUser(getUserJson);

      const getTasks = await fetch("/api/task");
      const getTasksJson = await getTasks.json();
      setTasks(getTasksJson);
    })();
  }, [])

  return (
    <>
      <Head>
        <title>Purposive</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
        <TaskBoard tasks={tasks} setTasks={setTasks}/>
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired();