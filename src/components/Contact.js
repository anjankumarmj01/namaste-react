import useOnlineStatus from "../utils/useOnlineStatus";

const Contact = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Seems like you are offline! Please check your internet connection</h1>
    );
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;
