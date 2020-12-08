import React from 'react';
import Head from 'next/head';

import Layout from '../components/layout';
import MovieCard from '../components/movie-card';

const Home = ({ movies }) => {
  console.log(movies);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {movies.map(({ show }) => (
          <MovieCard
            genres={show.genres}
            image={show.image}
            key={show.id}
            officialSite={show.officialSite}
            title={show.name}
          />
        ))}
      </Layout>
    </>
  );
};

Home.displayName = 'Home';

Home.getInitialProps = async () => {
  let movies = [];
  try {
    movies = await fetch(
      'http://api.tvmaze.com/search/shows?q=love'
    ).then((res) => res.json());
  } catch (e) {
    console.error(e);
  }

  return { movies };
};

export default Home;
