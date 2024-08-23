import { useRouteError } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Error = () => {
  const err = useRouteError();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Seems like you are offline! Please check your internet connection</h1>
    );

  return (
    <div>
      <h1>{err.error.message}</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
