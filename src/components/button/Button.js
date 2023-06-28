import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Button.module.css';

const Button = ({ to }) => {
  const [goBackToHome, setGoBackToHome] = useState(false);

  const goHomeHandler = () => setGoBackToHome(true);

  // console.log(to);
  if (goBackToHome) {
    return <Link to={to}></Link>;
  }

  return (
    <button className={css.button} onClick={goHomeHandler}>
      <Link to={to}>🔙 Go back</Link>
    </button>
  );
};

export default Button;
