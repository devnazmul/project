import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Oops... the page is not found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}