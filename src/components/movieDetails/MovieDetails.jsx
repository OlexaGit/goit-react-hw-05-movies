import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { detailsMovies } from '../Api/JsonthemoviedbApi';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMove() {
      try {
        const data = await detailsMovies(id);
        const movies = data;
        setMovies(movies);
        const genres = movies.genres;
        setGenres(genres);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
      }
    }
    getMove();
  }, [id]);

  const { title, vote_average, overview } = movies;
  console.log(movies);
  return (
    <main>
      <button>Go back</button>
      <div className={css.details}>
        <img
          src={`https://image.tmdb.org/t/p/w400${movies.backdrop_path}`}
          alt=""
        />
        <div>
          <h2>{title}</h2>
          <p>{`User Score: ${vote_average}`}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(({ id, name }) => (
            <span key={id}>{name}, </span>
          ))}
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
export default MovieDetails;
