import { useSearchParams, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import css from './cssPages/Movies.module.css';
import ErrorWrapper from './Error/ErrorWrapper';
import { searchMovies } from 'components/Api/JsonthemoviedbApi';

const Movies = () => {
  const searchRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const query = searchParams.get('query');

  const handleQuery = () => {
    const searchInput = searchRef.current.value;
    setSearchParams({ query: searchInput });
    console.log(searchParams);
    getMove(query);
  };

  async function getMove(query) {
    try {
      const data = await searchMovies(query);
      const movies = data.results;
      setMovies(movies);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
    }
  }

  // useEffect(() => {
  //   async function getMove() {
  //     try {
  //       const data = await searchMovies(query);
  //       const movies = data.results;
  //       setMovies(movies);
  //     } catch (error) {
  //       setIsError(true);
  //       console.error(error);
  //     } finally {
  //     }
  //   }
  //   getMove();
  // }, [query]);

  console.log(movies);

  return (
    <main>
      <ErrorWrapper isError={isError}>
        <div>
          <input
            // value={query}
            className={css.input}
            ref={searchRef}
            type="text"
            placeholder="Search movies"
          />
          <button className={css.button} onClick={handleQuery}>
            Search
          </button>
        </div>
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </li>
          ))}
        </ul>
      </ErrorWrapper>
    </main>
  );
};
export default Movies;
