import React, { useState } from "react";
import { HeaderComponent } from "../../../../components";
import { MdDelete, MdDeleteOutline, MdList } from "react-icons/md";
import {
  BiCalendar,
  BiDotsHorizontal,
  BiGrid,
  BiLoaderCircle,
} from "react-icons/bi";
import { RiCheckDoubleLine, RiEditCircleFill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi2";
import { SearchIcon } from "../../../../components/icons";
import { PiPencil } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";

const DraftProducts = () => {
  const [mode, setMode] = useState("1");
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col overflow-scroll gap-3 w-full dark:text-gray-400 pt-5 px-5">
      <div className="text-3xl font-bold">Drafts</div>
      <div className="dark:bg-app-neutral-700 bg-white p-3 rounded-lg max-w-[1200px]">
        <div className="flex items-center gap-3">
          <HeaderComponent headerText="Products" rightItem={<></>} />
          <div className="hidden sm:flex bg-black/10 items-center rounded-lg dark:bg-white/5">
            <SearchIcon className=" mx-2" />
            <input
              type="text"
              placeholder="Search product"
              className="outline-none bg-transparent p-2"
            />
          </div>
          <div className="flex ml-auto gap-3 items-center">
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
        </div>

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
                      <div className=" text-sm max-w-[200px]">
                        Fleet travel shopping UI design KIT
                      </div>
                      <div className="bg-secondary-4 text-black rounded-lg font-bold p-1 px-3">
                        $64
                      </div>
                    </div>
                    <div className="flex text-xs gap-1 items-center text-gray-500">
                      <CiClock1 className="" />
					  {Date().split("(")[0]}
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
          <>
            <div className="sm:grid hidden grid-cols-2 p-1 text-xs mb-2 py-5 w-full">
              <div className="flex gap-8 items-center">
                <input type="checkbox" className="w-5 h-5" />
                Product
              </div>
              <div className="flex gap-3 items-center w-full">
                <span className="w-[64px]">Price</span>
                <span>Last Edited</span>
              </div>
            </div>
            {Array(4)
              .fill(1)
              .map((_, index) => (
                <div
                  key={index}
                  className="sm:grid hidden scheduled-products border-y py-2 border-y-black/5 dark:border-y-white/5 dark:hover:bg-white/5 rounded hover:bg-[#00000010]  grid-cols-2 p-1 w-full"
                >
                  <div className="flex gap-8 items-start">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className="flex gap-3 items-center">
                      <img
                        alt=""
                        src="/guitar.jpg"
                        className="rounded-lg h-20 w-20 object-cover"
                      />
                      <div className="flex flex-col gap-2">
                        <div className="font-bold">Product title</div>
                        <div className="text-gray-500 text-sm">
                          ui8.net/product/product-link
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center w-full">
                    <div className="bg-secondary-2 text-black items-center justify-center flex rounded-lg font-bold w-16 h-9">
                      $98
                    </div>
                    <div className="text-gray-500 text-[12px]">
                      Apr 9, 2021 at 3:55 PM
                    </div>
                    <div className="opacity-0 flex options items-center gap-3">
                      <BiCalendar className="rounded-full p-2 w-8 h-8 cursor-pointer dark:text-white dark:bg-app-neutral-800 bg-white" />
                      <PiPencil className="rounded-full p-2 w-8 h-8 cursor-pointer dark:text-white dark:bg-app-neutral-800 bg-white" />
                      <MdDelete className="rounded-full p-2 w-8 h-8 cursor-pointer dark:text-white dark:bg-app-neutral-800 bg-white" />
                    </div>
                  </div>
                </div>
              ))}
            <div className="w-full flex sm:hidden flex-col py-3">
              {Array(4)
                .fill(1)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex gap-2 rounded border-y-black/5 dark:border-y-white/5 border-y py-5 flex-col w-full"
                  >
                    <div className="flex gap-3 w-full items-start">
                      <img
                        alt=""
                        src="/guitar.jpg"
                        className="rounded-lg h-32 w-32 object-cover"
                      />
                      <div className="flex flex-col w-full gap-2">
                        <div className="font-bold text-2xl w-full flex justify-between">
                          Product title{" "}
                          <BiDotsHorizontal className="cursor-pointer" />
                        </div>
                        <div className="text-gray-500 text-md">
                          ui8.net/product/product-link
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex gap-3">
                      <div className="w-32">Price</div>
                      <div className="bg-secondary-2 rounded-lg text-black font-bold p-2 px-4">
                        $98
                      </div>
                    </div>
                    <div className="w-full flex gap-3">
                      <div className="w-32">Scheduled for</div>
                      <div className="text-gray-500 text-[12px]">
                        Apr 9, 2021 at 3:55 PM
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {
              <button
                onClick={() => {
                  setLoading(!loading);
                }}
                className=" text-[18px] dark:text-white mx-auto my-8 dark:border-[#ffffff15] font-bold items-center gap-5 flex rounded-lg p-3 border"
              >
                <BiLoaderCircle
                  className={`w-7 h-7 ${loading ? "animate-spin" : ""}`}
                />
                Load more
              </button>
            }
          </>
        )}
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
    </div>
  );
};

export default DraftProducts;
