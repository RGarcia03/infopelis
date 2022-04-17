/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { getMovies } from '../../services/movies';
import './style.scss';
import { Movie } from '../../components/Movie';

export function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [autoLoad, setAutoLoad] = useState(false);

  useEffect(() => {
    loadMovies(true);
  }, []);

  useEffect(() => {
    if (props.yScroll && autoLoad) {
      loadMovies(false);
    }
  }, [props.yScroll]);

  const loadMovies = (loadMovies) => {
    if (loadMovies || currentPage <= totalPages) {
      getMovies(currentPage).then((res) => {
        setMovies([...movies, ...res.results]);
        setTotalPages(res.total_pages);
        setCurrentPage(currentPage + 1);
        setAutoLoad(!loadMovies);
      });
    }
  };

  return (
    <div className="main">
      <div className="main-movies">
        {movies.map((elem, i) => {
          return (
            <div className="main-movies-movie">
              <Movie movie={elem} />
            </div>
          );
        })}
      </div>
      <Button
        type="primary"
        className="main-button"
        onClick={() => loadMovies(false)}
      >
        Mostrar más
      </Button>
    </div>
  );
}
