import User from "./User";
import useOnlineStatus from "../utils/useOnlineStatus";

const About = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Seems like you are offline! Please check your internet connection</h1>
    );

  return (
    <div>
      <h1>About Page</h1>
      <User />
    </div>
  );
};

export default About;
