import React, { useState } from "react";
import { HeaderComponent } from "../../../../components";
import { MdDelete, MdDeleteOutline, MdList } from "react-icons/md";
import {
  BiGrid,
  BiLoaderCircle,
} from "react-icons/bi";
import ProductStats from "./ProductStats";
import { RiCheckDoubleLine, RiEditCircleFill } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi2";

const ReleasedProducts = () => {
  const [mode, setMode] = useState("1");
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col overflow-scroll gap-3 w-full dark:text-gray-400 pt-5 px-5">
      <div className="text-3xl font-bold">Released</div>
      <div className="dark:bg-app-neutral-700 bg-white p-3 rounded-lg max-w-[1200px]">
        <HeaderComponent
          headerText="Products"
          rightItem={
            <div className="flex gap-3 items-center">
              <MdList
                onClick={() => {
                  setMode("1");
                }}
                className="w-9 h-9 shadow-xl p-1 rounded"
              />
              <BiGrid
                onClick={() => {
                  setMode("2");
                }}
                className="w-7 h-7 rounded"
              />
            </div>
          }
        />
        {mode === "2" && (
          <>
            <div className="grid py-3 lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1 w-full">
              {Array(6)
                .fill(2)
                .map((_, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <img
                      alt=""
                      src="/guitar.jpg"
                      className="h-[240px] w-full object-cover rounded-xl"
                    />
                    <div className="hover:bg-[#00000090] text-transparent hover:text-white duration-200 rounded-xl gap-3 flex items-center justify-center -mt-[248px] relative h-[240px]">
                      <RiEditCircleFill className="w-6 h-6 cursor-pointer hover:scale-125 duration-150" />
                      <MdDeleteOutline className="w-6 h-6 cursor-pointer hover:scale-125 duration-150" />
                      <HiArrowRight className="w-6 h-6 cursor-pointer hover:scale-125 duration-150" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div className=" text-md max-w-[200px]">
                        Fleet travel shopping UI design KIT
                      </div>
                      <div className="bg-secondary-4 text-black rounded-lg font-bold p-2 px-4">
                        $64
                      </div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <BsFillStarFill className="text-yellow-500" /> 4.6(82)
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex gap-5 justify-center dark:text-[#ffffff70] py-5">
              {
                <button
                  onClick={() => {
                    setLoading(!loading);
                  }}
                  className=" text-[18px] dark:text-white dark:border-[#ffffff15] font-bold items-center gap-5 flex rounded-lg p-3 border"
                >
                  <BiLoaderCircle
                    className={`w-7 h-7 ${loading ? "animate-spin" : ""}`}
                  />
                  Load more
                </button>
              }
            </div>
          </>
        )}
        {mode === "1" && (
          <ProductStats
            showRating={true}
            showLikes={false}
            showFooterSection={true}
            showHeader={false}
          />
        )}
      </div>
      <div className="mt-auto items-center py-4 flex justify-between w-full">
        <div className=" flex items-center gap-3">
          <RiCheckDoubleLine />2 products selected
        </div>
        <div className="ml-auto gap-2 flex items-center">
          <button className=" border-gray-400 border text-red-500 font-bold p-3 flex items-center gap-3 px-6 rounded-xl">
            Delete <MdDelete />
          </button>
          <button className="bg-sky-500 p-3 px-6 text-white rounded-xl">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReleasedProducts;
