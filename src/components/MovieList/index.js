/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Movie } from '../Movie';
import './style.scss';

export function MovieList(props) {
  return (
    <div className="movies">
      {props.movies.map((elem, i) => {
        return (
          <div className="movies-movie" key={i}>
            <Movie movie={elem} />
          </div>
        );
      })}
    </div>
  );
}
