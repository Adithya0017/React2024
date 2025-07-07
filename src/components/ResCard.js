const ResCard = (param) => (
  <div className="border-solid border-2 border-gray-200 h-80 w-52 p-3 bg-red-100 rounded-xl flex flex-col items-center shadow-lg">
    <img
      className="w-44 h-24 rounded-xl bg-red-200"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${param.image}`}
    ></img>
    <div className="resDesc">
      <div className="font-bold mb-2">{param.resHeading}</div>
      <div>{param.cuisines}</div>
      <div>{param.stars}</div>
      <div>{param.deliveryTime}</div>
    </div>
  </div>
);

export default ResCard;
