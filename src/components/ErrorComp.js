import { useRouteError } from "react-router-dom";

const ErrorComp = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!! Error</h1>
      <h2>{err.status}</h2>
      <h2>{err.statusText}</h2>
    </div>
  );
};
export default ErrorComp;
