export const rateMovie = (movie, vote) => {
  return {
    type: 'RATE_MOVIE',
    movie: movie,
    vote: vote,
  };
};
