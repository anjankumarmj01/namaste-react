import { useState } from "react";
import RestaurantCard, { withUnderThirtyMinsDelivery } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const {
    listOfRestaurants,
    filteredListOfRestaurants,
    setFilteredListOfRestaurants,
  } = useRestaurants();
  const onlineStatus = useOnlineStatus();
  const RestaurantCardUnderThirtyMinsDelivery =
    withUnderThirtyMinsDelivery(RestaurantCard);

  if (onlineStatus === false)
    return (
      <h1>Seems like you are offline! Please check your internet connection</h1>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-4 flex">
        <div className="search">
          <input
            className="border border-soild border-black"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
          <button
            className="px-2 py-1 m-2 bg-green-200 rounded-md hover:bg-green-300"
            onClick={() => {
              let filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="bg-gray-300 p-1 rounded-md hover:bg-gray-400"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant?.info?.avgRating > 4
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/Restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.sla?.deliveryTime < "30" ? (
              <RestaurantCardUnderThirtyMinsDelivery resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
