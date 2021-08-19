import Head from "next/head";
import Header from '../components/header'
import Nav from "../components/nav";
import Movies from "../components/movies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie application</title>
        <meta name="description" content="Top movies, to keep up the excitement. Lari-dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Movies />

    </div>
  );
}
