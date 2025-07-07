import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [newList, setNewList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    console.log(data);
    const json =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const newarr = json?.map((ele) => {
      return {
        resName: ele?.info?.name,
        cuisines: ele?.info?.cuisines?.join(", "),
        stars: ele?.info?.avgRatingString,
        deliveryTime: ele?.info?.sla?.slaString,
        image: ele?.info?.cloudinaryImageId,
        id: ele?.info?.id,
      };
    });
    setNewList(newarr);
  };

  if (onlineStatus === false) return <h1>Network Error</h1>;

  return newList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" m-4 flex flex-col gap-6">
      <div className="flex gap-3">
        <div className="flex gap-3">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              console.log(e);

              setSearchText(e.target.value);
            }}
            className="border-gray-200 rounded-lg border-solid border"
          />
          <button
            onClick={() => {
              setNewList(
                newList.filter((ele) =>
                  ele.resName.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
            className="bg-green-100 w-16 h-8 rounded-xl"
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-100 w-32 h-8 rounded-xl"
          onClick={() => {
            setNewList(newList.filter((ele) => ele.stars > 4.2));
          }}
        >
          top restaurants
        </button>
      </div>
      <div className="flex gap-6 flex-wrap ">
        {newList.map((ele) => (
          <Link to={`/restaurants/${ele.id}`} key={ele.id}>
            <ResCard
              resHeading={ele.resName}
              cuisines={ele.cuisines}
              stars={ele.stars}
              deliveryTime={ele.deliveryTime}
              image={ele.image}
              key={ele.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
