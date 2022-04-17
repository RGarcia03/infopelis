/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { getMovies, searchMovies } from '../../services/movies';
import { Movie } from '../../components/Movie';
import './style.scss';

export function Movies(props) {
  const { search } = useLocation();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [autoLoad, setAutoLoad] = useState(false);

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
        if (reset) {
          setMovies(res.results);
          setCurrentPage(2);
        } else {
          setMovies([...movies, ...res.results]);
          setCurrentPage(currentPage + 1);
        }
        setTotalPages(res.total_pages);
        setAutoLoad(!loadMovies);
      });
    }
  };

  const searchMoviesAux = (reset, loadMovies, movie) => {
    if (loadMovies || currentPage <= totalPages) {
      searchMovies(movie, reset ? 1 : currentPage).then((res) => {
        if (reset) {
          setMovies(res.results);
          setCurrentPage(2);
        } else {
          setMovies([...movies, ...res.results]);
          setCurrentPage(currentPage + 1);
        }
        setTotalPages(res.total_pages);
        setAutoLoad(!loadMovies);
      });
    }
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
      <div className="main-movies">
        {movies.map((elem, i) => {
          return (
            <div className="main-movies-movie">
              <Movie movie={elem} />
            </div>
          );
        })}
      </div>
      {currentPage <= totalPages && (
        <Button type="primary" className="main-button" onClick={refreshMovies}>
          Mostrar más
        </Button>
      )}
    </div>
  );
}
