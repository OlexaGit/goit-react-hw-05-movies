import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { castMovies } from '../Api/JsonthemoviedbApi';

const Cast = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMove() {
      try {
        const data = await castMovies(id);
        const movies = data;
        setMovies(movies);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
      }
    }
    getMove();
  }, [id]);

  console.log(movies);
  return (
    <section>
      <h2>component Cast</h2>
    </section>
  );
};
export default Cast;
