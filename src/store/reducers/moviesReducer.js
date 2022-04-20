import initialState from './initialState';

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'RATE_MOVIE': {
      const movie = { ...action.movie, vote: action.vote };
      const movies = state.ratedMovies.filter(
        (elem) => elem.title !== action.movie.title
      );
      return {
        ...state,
        ratedMovies: [...movies, movie],
      };
    }

    default:
      return state;
  }
}
