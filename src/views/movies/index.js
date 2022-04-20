/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { getMovies, searchMovies } from '../../services/movies';
import { MovieList } from '../../components/MovieList';
import './style.scss';

export function Movies(props) {
  const { search } = useLocation();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [autoLoad, setAutoLoad] = useState(false);
  const ratedMovies = useSelector((store) => store.movies.ratedMovies);

  useEffect(() => {
    loadMovies(true, true);
  }, []);

  useEffect(() => {
    if (props.yScroll && autoLoad) {
      refreshMovies();
    }
  }, [props.yScroll]);

  useEffect(() => {
    resetData();

    if (search) {
      const query = new URLSearchParams(search).get('query');
      if (query) {
        searchMoviesAux(true, true, query);
      }
    } else {
      loadMovies(true, true);
    }
  }, [search]);

  const resetData = () => {
    setMovies([]);
    setTotalPages(0);
    setCurrentPage(1);
    setAutoLoad(false);
  };

  const loadMovies = (reset, loadMovies) => {
    if (loadMovies || currentPage <= totalPages) {
      getMovies(reset ? 1 : currentPage).then((res) => {
        loadMoviesAux(reset, res);
      });
    }
  };

  const searchMoviesAux = (reset, loadMovies, movie) => {
    if (loadMovies || currentPage <= totalPages) {
      searchMovies(movie, reset ? 1 : currentPage).then((res) => {
        loadMoviesAux(reset, res);
      });
    }
  };

  const loadMoviesAux = (reset, response) => {
    response.results.forEach((movie) => {
      const index = ratedMovies.findIndex((elem) => elem.title === movie.title);
      if (index > -1) {
        movie.vote_average =
          (movie.vote_average * movie.vote_count + ratedMovies[index].vote) /
          (movie.vote_count + 1);
      }
    });

    if (reset) {
      setMovies(response.results);
      setCurrentPage(2);
    } else {
      setMovies([...movies, ...response.results]);
      setCurrentPage(currentPage + 1);
    }
    setTotalPages(response.total_pages);
    setAutoLoad(!loadMovies);
  };

  const refreshMovies = () => {
    if (search) {
      const query = new URLSearchParams(search).get('query');
      if (query) {
        searchMoviesAux(false, false, query);
      }
    } else {
      loadMovies(false, false);
    }
  };

  return (
    <div className="main">
      <MovieList movies={movies} />
      {currentPage <= totalPages && (
        <Button type="primary" className="main-button" onClick={refreshMovies}>
          Mostrar más
        </Button>
      )}
    </div>
  );
}
