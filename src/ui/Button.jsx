import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const className =
    "bg-yellow-400 text-sm tracking-wider rounded-full hover:bg-yellow-300 transition-colors duration-200 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed uppercase font-bold inline-block";

  const styles = {
    primary: className + " px-4 py-2 md:px-6 md:py-4",
    small: className + " py-2 px-2 md:px-4 md:py-4 text-sm",
    round: className + ' w-8 h-8 text-base',
    secondary:
      "bg-transparent py-2 px-2 md:px-4 md:py-4 text-sm border-2 border-stone-400 text-lg tracking-wider rounded-full hover:border-stone-500 hover:bg-stone-200 transition-colors duration-200 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed uppercase font-bold inline-block",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
