import Head from "next/head";

import Header from "../components/header";
import Nav from "../components/nav";
import Movies from "../components/movies";
import requests from "../utils/requests";

export default function Home(props) {
  const { results } = props;

  return (
    <div>
      <Head>
        <title>Movie application</title>
        <meta
          name="description"
          content="Top movies, to keep up the excitement. Lari-dev"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Movies results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
