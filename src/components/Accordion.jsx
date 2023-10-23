import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MenuItemBox from "./MenuItemBox";

const Accordion = ({ data, isVeg, restInfo }) => {
  const [isVisible, setisVisible] = useState(true);
  //
  const calcLength = data?.itemCards
    ? data?.itemCards?.filter(
      (data) =>
        isVeg || data?.card?.info?.itemAttribute?.vegClassifier === "VEG"
    )?.length
    : data?.categories?.length;

  return (
    <div className="menuAccordion scroll-mt-20 border-b-[16px] border-b-[#f1f1f6] px-0 py-4" id={data?.title}>
      <div
        className="flex w-full cursor-pointer items-center justify-between text-base font-bold leading-[1.2] text-[#3e4152] transition-all duration-[0.2s]"
        onClick={() => {
          isVisible ? setisVisible(false) : setisVisible(true);
        }}
      >
        {data?.title + " " + "(" + calcLength + ")"}
        <button className="text-2xl">
          {isVisible ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      {isVisible && (
        <div className="itemBody">
          {data?.itemCards
            ? data?.itemCards
              ?.filter(
                (data) =>
                  isVeg ||
                  data?.card?.info?.itemAttribute?.vegClassifier === "VEG",
              )
              .map((data, idx) => {
                return (
                  <MenuItemBox data={data?.card} key={idx} restInfo={restInfo} />
                );
              })
            : data?.categories?.map((data, idx) => {
              return (
                <Accordion
                  data={data}
                  key={idx}
                  isVeg={isVeg}
                  restInfo={restInfo}
                />
              );
            })}
        </div>
      )
      }
    </div>
  );
};

export default Accordion;
