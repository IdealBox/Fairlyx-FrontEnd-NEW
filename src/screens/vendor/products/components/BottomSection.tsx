import React, { useState } from "react";
import {
  BiCalendar,
  BiCheckDouble,
  BiDotsVertical,
  BiLinkAlt,
  BiSquare,
} from "react-icons/bi";
import { MdClose } from "react-icons/md";
import PreviewCard from "./PreviewCard";
import { CloseIcon } from "../../../../components/icons";

const BottomSection = () => {
  const [moreOptions, setMoreOptions] = useState(false);
  const [preview, setPreview] = useState(false);
  return (
    <div className="flex md:flex-row flex-col bg-white w-full md:gap-2 gap-9 dark:bg-app-neutral-700 items-center justify-between p-5">
      <div className="flex gap-2 items-center">
        <BiCheckDouble className="w-6 h-6 text-gray-500 dark:text-white" />
        <div className="text-gray-500">Last saved</div>
        <div className="dark:text-white">{"Oct 16 2023 15:05:49"}</div>
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
            className="dark:text-white"
            onClick={() => {
              setMoreOptions(!moreOptions);
            }}
          />
          {moreOptions && (
            <div className="rounded-xl dark:bg-app-neutral-700 p-5 w-[300px] absolute right-5 -mt-[300px] bg-white shadow-xl">
              <div
                onClick={() => {
                  setPreview(true);
                  setMoreOptions(!moreOptions);
                }}
                className="flex gap-3 text-gray-500 items-center dark:hover:bg-[#ffffff10] hover:bg-gray-100 p-2 dark:text-gray-400 dark:hover:text-white rounded hover:text-black"
              >
                <BiSquare className="w-8 h-8" />
                Preview
              </div>
              <div
                onClick={() => {
                  setMoreOptions(!moreOptions);
                }}
                className="flex gap-3 text-gray-500 items-center dark:hover:bg-[#ffffff10] hover:bg-gray-100 p-2 dark:text-gray-400 dark:hover:text-white rounded hover:text-black"
              >
                <BiCalendar className="w-8 h-8" />
                Schedule product
              </div>
              <div
                onClick={() => {
                  setMoreOptions(!moreOptions);
                }}
                className="flex gap-3 text-gray-500 items-center dark:hover:bg-[#ffffff10] hover:bg-gray-100 p-2 dark:text-gray-400 dark:hover:text-white rounded hover:text-black"
              >
                <BiLinkAlt className="w-8 h-8" />
                Get shareable link
              </div>
              <div
                onClick={() => {
                  setMoreOptions(!moreOptions);
                }}
                className="flex gap-3 text-gray-500 items-center dark:hover:bg-[#ffffff10] hover:bg-gray-100 p-2 dark:text-gray-400 dark:hover:text-white rounded hover:text-black"
              >
                <MdClose className="w-8 h-8" />
                Clear data
              </div>
            </div>
          )}
        </button>
      </div>
      {preview && (
        <div className="top-0 left-0 w-full z-[100] h-screen fixed flex items-center justify-center bg-[#ffffff10] backdrop-blur-md dark:bg-app-neutral-800">
          <div
            onClick={() => {
              setPreview(false);
              console.log("clicked");
            }}
            className="absolute cursor-pointer top-5 left-5"
          >
            <CloseIcon className=" w-8 h-8 dark:text-white" />
          </div>

          <PreviewCard />
        </div>
      )}
    </div>
  );
};

export default BottomSection;
