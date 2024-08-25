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
    <div className="p-4 m-4 w-[237px] bg-yellow-200 hover:bg-yellow-300">
      <img
        className="rounded-md"
        alt="res-logo"
        src={CON_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export const withUnderThirtyMinsDelivery = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-2 mx-4 bg-black text-white rounded-md">Under 30 Mins Delivery</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
