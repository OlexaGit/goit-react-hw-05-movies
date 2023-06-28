import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

function NotFound() {
  const navigate = useNavigate();
  const goHomeHandler = () => navigate('/', { replace: true });

  return (
    <>
      <button className={css.button} onClick={goHomeHandler}>
        🔙 Go back
      </button>
      <h1 className={css.NotFound}>404 Page not found!</h1>
    </>
  );
}
export default NotFound;
