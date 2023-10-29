import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import "./Error.scss";

export const ErrorPage = () => {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) return null;

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText}</p>
      </div>
    </>
  );
};

export default ErrorPage;
