import { CDN_URL } from "../ultils/constants";
// {CDN_URL} Convention used in named exports

const Cards = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    cloudinaryImageId,
  } = resData?.data;

  return (
    <div className=" lg:w-56 w-11/12 p-4 mx-8 my-8 rounded-lg bg-[#FFF6E7] drop-shadow-md hover:drop-shadow-xl hover:bg-[#FFFBF2]">
      <img alt="card" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="text-lg font-semibold my-4 ">{name}</h3>
      <p className="text-slate-700 text-sm">{cuisines.join(", ")}</p>
      <div className="mt-4">
        <span>{avgRating + " ★"}</span>
        <span> • </span>
        <span>{deliveryTime + " minutes"}</span>
        <span> • </span>
        <span>{costForTwoString}</span>
      </div>
    </div>
  );
};

export default Cards;
