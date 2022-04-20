/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import { MovieList } from '../../components/MovieList';
import './style.scss';

export function MyVotes() {
  const ratedMovies = useSelector((store) => store.movies.ratedMovies);

  return (
    <div className="main">
      <MovieList movies={ratedMovies} />
    </div>
  );
}
