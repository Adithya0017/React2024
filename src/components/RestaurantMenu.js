import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantMenuApi } from "../utils/constants";
import useFetch from "../utils/useFetch";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const url = useMemo(() => {
    return (
      restaurantMenuApi + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
  }, [resId]);
  console.log(url);

  const resInfo = useFetch(url);

  console.log(resInfo);

  const obj = resInfo?.data?.cards[2]?.card?.card?.info || {};
  const { name } = obj;
  console.log(obj, resInfo);

  const items =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];
  return (
    <div style={{ padding: "20px" }}>
      <h1>{name}</h1>
      <div>
        {items?.map((ele, i) => {
          const { name, category, id } = ele.card.info;
          if (i < 5)
            return (
              <div key={id}>
                <div>{name}</div>
                <div>{category}</div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
