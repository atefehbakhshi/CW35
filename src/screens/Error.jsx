import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-[70vh]">
      <h1>Oops!!!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <ul>
        <li>{error.statusText || error.message}</li>
      </ul>
    </div>
  );
};

export default Error;
