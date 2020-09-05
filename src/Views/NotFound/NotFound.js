import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.content}>
      <h1>404</h1>
      <p>Page Not Found.</p>
      <Link to="/" className={classes.button}>
        Go back in initial page, is better.
      </Link>
    </div>
  );
};

export default NotFound;
