import { CON_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

export const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, slaString } = resData?.info;
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Seems like you are offline! Please check your internet connection</h1>
    );

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CON_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
