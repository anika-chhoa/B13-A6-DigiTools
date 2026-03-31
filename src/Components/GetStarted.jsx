import { use } from "react";
import UserImg from "../assets/user.png";
import GetStartedItem from "./GetStartedItem";

const GetStarted = ({getStartedData}) => {
    const getStartedItems=use(getStartedData);
    console.log(getStartedItems)
  return (
    <div className="bg-[#f9fafcFF]">
      <div className="max-w-7xl mx-auto py-[120px]">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-[#101727FF] mb-4">
          Get Started in 3 Steps
        </h1>
        <p className="py-4 mb-4 text-[#627382FF] text-center mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid grid-cols-3 gap-[30px]">
          {getStartedItems.map(getStartedItem=><GetStartedItem key={getStartedItem.id} getStartedItem={getStartedItem}></GetStartedItem>)}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
