import React, { useState } from "react";
import { SearchIcon } from "../../../../components/icons";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  BiLeftArrowCircle,
  BiLink,
  BiLoaderCircle,
  BiRightArrowCircle,
} from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { PiPencil } from "react-icons/pi";
import MessageIcon from "../../../../components/icons/message_icon";
import { MdDelete } from "react-icons/md";

const ProductStats = () => {
  const [productStatTab, setProductStatTab] = useState("market");
  const [loading, setLoading] = useState(false);
  const [editSubMenu, setEditSubMenu] = useState("");
  return (
    <div className="bg-white rounded-lg dark:bg-app-neutral-700 max-w-[1200px] p-3 w-full">
      <header className="flex md:items-center gap-2 md:gap-0 flex-col items-start w-full md:flex-row justify-between">
        <div className="flex flex-col w-full md:w-auto md:flex-row items-start gap-6">
          <h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-2 before:rounded-sm flex items-center gap-2">
            Products
          </h1>
          <div className="bg-gray-100 dark:bg-app-neutral-600 flex items-center w-full md:w-auto p-2 gap-2 rounded-lg">
            <SearchIcon className="text-gray-500" />
            <input
              placeholder="search product"
              className="bg-transparent caret-primary-1 dark:text-white w-full text-[14px] outline-none"
            />
          </div>
        </div>
        <select className="flex lg:hidden dark:bg-app-neutral-600 dark:text-white p-3 w-full rounded-lg md:w-56">
          <option>Market</option>
          <option>Traffic Sources</option>
          <option>Viewers</option>
        </select>
        <div className="lg:flex hidden gap-6">
          <div
            onClick={() => {
              setProductStatTab("market");
            }}
            className={`p-2 rounded-lg cursor-pointer ${
              productStatTab === "market" ? "bg-gray-200" : ""
            }`}
          >
            Market
          </div>
          <div
            onClick={() => {
              setProductStatTab("traffic-sources");
            }}
            className={`p-2 rounded-lg cursor-pointer ${
              productStatTab === "traffic-sources" ? "bg-gray-200" : ""
            }`}
          >
            Traffic Sources
          </div>
          <div
            onClick={() => {
              setProductStatTab("viewers");
            }}
            className={`p-2 rounded-lg cursor-pointer ${
              productStatTab === "viewers" ? "bg-gray-200" : ""
            }`}
          >
            Viewers
          </div>
        </div>
      </header>
      <div className="flex sm:hidden py-3 flex-col">
        {Array(5)
          .fill(2)
          .map((e, index) => (
            <div className="flex flex-col dark:text-app-neutral-400 py-6 border-y dark:border-y-[#ffffff0f] border-y-[#0000000f] gap-2 w-full">
              <div key={index} className=" flex gap-2">
                <img
                  src="/guitar.jpg"
                  className="w-24 h-24 object-cover rounded-lg"
                  alt=""
                />
                <div className="flex flex-col justify-between gap-1">
                  <div className="font-[600] dark:text-gray-300 text-gray-800">
                    Brand New Guitar Imported
                  </div>
                  <div className="text-gray-500 flex gap-2 items-center text-[12px]">
                    <div className=" bg-gray-100 text-black dark:bg-app-neutral-500 rounded-lg p-1 font-[600]">
                      $98
                    </div>
                    UI design Kit
                  </div>
                </div>
                <div className=" ml-auto hover:border hover:bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center ">
                  <FiMoreHorizontal
                    onClick={() => {
                      if (editSubMenu === String(index)) {
                        setEditSubMenu("");
                      } else {
                        setEditSubMenu(String(index));
                      }
                    }}
                    className="w-7 cursor-pointer dark:text-white h-7"
                  />
                  {editSubMenu === String(index) && (
                    <div className="border p-3 dark:border-app-neutral-800 dark:hover:bg-none rounded-xl dark:bg-app-neutral-800 shadow-[#00000031] shadow-xl bg-white relative -ml-[270px] mt-[270px] w-[270px]">
                      <div
                        onClick={() => {
                          setEditSubMenu("");
                        }}
                        className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg"
                      >
                        <PiPencil className="w-5 h-5" />
                        Edit Product
                      </div>
                      <div
                        onClick={() => {
                          setEditSubMenu("");
                        }}
                        className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg"
                      >
                        <MessageIcon className="w-5 h-5" />
                        View Comment
                      </div>
                      <div
                        onClick={() => {
                          setEditSubMenu("");
                        }}
                        className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg"
                      >
                        <PiPencil className="w-5 h-5" />
                        Edit title and description
                      </div>
                      <div
                        onClick={() => {
                          setEditSubMenu("");
                        }}
                        className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg"
                      >
                        <BiLink className="w-5 h-5" />
                        Get sharable link
                      </div>
                      <div
                        onClick={() => {
                          setEditSubMenu("");
                        }}
                        className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg"
                      >
                        <MdDelete className="w-5 h-5" />
                        Delete forever
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-24">Status</div>
                {true ? (
                  <div className="p-1 px-2 rounded bg-secondary-4 text-primary-2">
                    Active
                  </div>
                ) : (
                  <div className="p-1 px-2 rounded bg-secondary-1 text-primary-3">
                    Inactive
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <div className="w-24">Views</div>
                <div className="flex gap-1 items-center">
                  <div className="rounded-lg bg-gray-200 dark:bg-app-neutral-500 p-1 px-2">
                    48K
                  </div>
                  <div className="w-9 bg-primary-1 rounded h-4"></div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-24">Sales</div>
                <div className="flex items-center gap-1">
                  <div className="p-1 px-2 bg-gray-200 dark:bg-app-neutral-500 rounded-lg">
                    $3,000
                  </div>
                  <div className="text-primary-2 flex gap-1 items-center">
                    <AiOutlineArrowUp className="w-5 h-5" /> 55.8%
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="sm:flex w-full hidden flex-col">
        <div className="flex gap-3 text-gray-600 p-2 w-full justify-between mt-5 text-[12px] md:text-[14px]">
          <input type="checkbox" />
          <div className="w-[200px]">Product</div>
          <div className="w-[50px]">Status</div>
          <div className="w-[50px] hidden lg:flex">Price</div>
          <div className="w-[150px]">Sales</div>
          <div className="w-[60px]">Views</div>
          <div className="w-[100px] hidden lg:flex">Likes</div>
        </div>
        {Array(5)
          .fill(2)
          .map((e, index) => (
            <div
              key={index}
              className="flex category-parent hover:bg-gray-100 border-y border-y-[#0000000e] p-2 rounded gap-3 w-full justify-between text-[12px] md:text-[14px]"
            >
              <div>
                <input type="checkbox" />
              </div>

              <div className="w-[200px] flex gap-2">
                <img
                  src="/guitar.jpg"
                  className="w-16 h-16 object-cover rounded-lg"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <div className="font-[600] text-gray-800">
                    Brand New Guitar Imported
                  </div>
                  <div className="text-gray-500 text-[12px]">UI design Kit</div>
                </div>
              </div>
              <div className="w-[50px] flex items-start">
                {true ? (
                  <div className="p-1 px-2 rounded bg-secondary-4 text-primary-2">
                    Active
                  </div>
                ) : (
                  <div className="p-1 px-2 rounded bg-secondary-1 text-primary-3">
                    Inactive
                  </div>
                )}
                <div className="relative hidden edit gap-4 mt-9 -ml-14">
                  <PiPencil className="border w-7 h-7 bg-white cursor-pointer rounded-full p-1" />
                  <MessageIcon className="border w-7 h-7 bg-white cursor-pointer rounded-full p-1" />
                  <FiMoreHorizontal
                    onClick={() => {
                      setEditSubMenu(String(index));
                    }}
                    className="border w-7 h-7 bg-white cursor-pointer rounded-full p-1"
                  />
                  {editSubMenu === String(index) && (
                    <div className="border p-3 rounded-xl shadow-xl bg-white absolute mt-8 w-[270px]">
                      <div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg">
                        <PiPencil className="w-5 h-5" />
                        Edit title and description
                      </div>
                      <div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg">
                        <BiLink className="w-5 h-5" />
                        Get sharable link
                      </div>
                      <div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-gray-100 text-gray-500 hover:text-black rounded-lg">
                        <MdDelete className="w-5 h-5" />
                        Delete forever
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-[50px] font-[600] hidden lg:flex">$98</div>
              <div className="w-[150px] flex items-start">
                <div className="flex items-center gap-1">
                  <div className="p-1 px-2 bg-gray-200 rounded-lg">$3,000</div>
                  <div className="text-primary-2 flex gap-1 items-center">
                    <AiOutlineArrowUp className="w-5 h-5" /> 55.8%
                  </div>
                </div>
              </div>
              <div className="w-[60px] flex items-start">
                <div className="flex gap-1 items-center">
                  <div className="rounded-lg bg-gray-200 p-1 px-2">48K</div>
                  <div className="w-3 bg-primary-1 rounded h-4"></div>
                </div>
              </div>
              <div className="w-[100px] hidden lg:flex items-start">
                <div className="flex gap-1 items-center">
                  <div className="rounded-lg bg-gray-200 p-1 px-2">8</div>
                  <div className="w-12 bg-primary-3 rounded h-4"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex gap-5 justify-center py-5">
        <BiLeftArrowCircle className="w-7 h-7 hidden md:flex cursor-pointer" />
        <BiRightArrowCircle className="w-7 h-7 hidden md:flex cursor-pointer" />
        {
          <button
            onClick={() => {
              setLoading(!loading);
            }}
            className="md:hidden text-[18px] dark:text-white dark:border-[#ffffff15] font-bold items-center gap-5 flex rounded-lg p-3 border"
          >
            <BiLoaderCircle
              className={`w-7 h-7 ${loading ? "animate-spin" : ""}`}
            />
            Load more
          </button>
        }
      </div>
    </div>
  );
};

export default ProductStats;
