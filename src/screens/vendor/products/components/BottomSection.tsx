import React, { useState } from "react";
import {
  BiCalendar,
  BiCheckDouble,
  BiDotsVertical,
  BiLinkAlt,
} from "react-icons/bi";
import { MdClose } from "react-icons/md";

const BottomSection = () => {
  const [moreOptions, setMoreOptions] = useState(false);
  return (
    <div className="flex md:flex-row flex-col bg-white w-full md:gap-2 gap-9 dark:bg-app-neutral-700 items-center justify-between p-5">
      <div className="flex gap-2 items-center">
        <BiCheckDouble className="w-6 h-6 text-gray-500 dark:text-white" />
        <div className="text-gray-500">Last saved</div>
        <div>{"Oct 16 2023 15:05:49"}</div>
      </div>
      <div className="flex items-center gap-2">
        <button className="border rounded-xl font-bold dark:border-[#ffffff40] dark:text-white p-3 px-5">
          Save Draft
        </button>
        <button className="rounded-xl font-bold p-3 px-5 bg-sky-500 text-white">
          Publish now
        </button>
        <button className="border rounded-xl font-bold dark:border-[#ffffff40] p-3">
          <BiDotsVertical
            className=""
            onClick={() => {
              setMoreOptions(!moreOptions);
            }}
          />
          {moreOptions && (
            <div className="rounded-xl dark:bg-app-neutral-700 p-5 w-[300px] absolute right-5 -mt-[300px] bg-white shadow-xl">
              <div
                onClick={() => {
                  setMoreOptions(!moreOptions);
                }}
                className="flex gap-3 text-gray-500 hover:bg-gray-100 p-3 rounded hover:text-black"
              >
                <div className="flex">
                  <div className="border-2 border-app-neutral-600 dark:border-gray-300 rounded w-6 h-6"></div>
                  <div className="bg-white absolute rotate-45 dark:bg-app-neutral-700 rounded w-6 h-6"></div>
                </div>
                Preview
              </div>
              <div
                onClick={() => {
                  setMoreOptions(!moreOptions);
                }}
                className="flex gap-3 text-gray-500 items-center hover:bg-gray-100 p-2 dark:text-gray-400 dark:hover:text-white rounded hover:text-black"
              >
                <BiCalendar className="w-8 h-8" />
                Schedule product
              </div>
              <div
                onClick={() => {
                  setMoreOptions(!moreOptions);
                }}
                className="flex gap-3 text-gray-500 items-center hover:bg-gray-100 p-2 dark:text-gray-400 dark:hover:text-white rounded hover:text-black"
              >
                <BiLinkAlt className="w-8 h-8" />
                Get shareable link
              </div>
              <div
                onClick={() => {
                  setMoreOptions(!moreOptions);
                }}
                className="flex gap-3 text-gray-500 items-center hover:bg-gray-100 p-2 dark:text-gray-400 dark:hover:text-white rounded hover:text-black"
              >
                <MdClose className="w-8 h-8" />
                Clear data
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default BottomSection;
