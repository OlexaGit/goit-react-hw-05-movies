// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

function NotFound() {
  const navigate = useNavigate();
  // const [goBackToHome, setGoBackToHome] = useState(false);

  const goHomeHandler = () => navigate('/', { replace: true });
  //  const goHomeHandler = () => setGoBackToHome(true);
  // if (goBckToHome) {
  //   return <Navigate to="/" replace={true} />;
  // }

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
