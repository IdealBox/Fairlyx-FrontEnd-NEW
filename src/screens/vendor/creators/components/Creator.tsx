import React, { useState } from "react";
import Avatar from "../../../../components/Avatar";
import { BsArrowRightCircleFill, BsHeartFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import ReactPlayer from "react-player";
import { BiLink } from "react-icons/bi";
interface Props {
  index: number;
}
const Creator = ({ index }: Props) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Avatar
            size={64}
            imageSrc="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            nameInitials={"KL"}
          />
          <div>
            <h2 className="font-bold text-gray-800 dark:text-gray-50">
              Reed Parker
              <span className="py-1 px-1.5 ml-2 bg-secondary-4/70 rounded-md">
                #{index}
              </span>
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 py-1.5">
              <span className="font-semibold dark:text-gray-500">16</span>{" "}
              products
              <span className="px-2 text-gray-400 text-xs">|</span>
              <span className="font-semibold dark:text-gray-500">
                3568
              </span>{" "}
              followers
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button className="py-2 px-4 rounded-lg bg-slate-200 dark:bg-app-neutral-800 border dark:border-gray-700 hover:shadow font-semibold text-gray-800 dark:text-gray-50 text-xs">
            Follow
          </button>
          <button className="hidden lg:block py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold text-white text-xs">
            Shop now
          </button>
        </div>
      </div>
      <div>
        <div className="w-full overflow-auto scrollbar-thin my-5">
          <div className="flex items-center gap-4">
            {Array(5)
              .fill(3)
              .map((item, idx) => (
                <div
                  onClick={() => {
                    setShowVideoModal(true);
                  }}
                  key={idx}
                  className="group relative cursor-pointer duration-200 h-48 aspect-[9/7]"
                >
                  <div className="hidden group-hover:grid absolute top-0 h-full left-0 w-full place-items-center bg-slate-900/60 rounded-xl">
                    <div className="text-white text-3xl">
                      <BsArrowRightCircleFill />
                    </div>
                  </div>
                  <img
                    className="w-full h-full object-center object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      {showVideoModal && (
        <div className="absolute top-0 gap-16 p-5 left-0 bg-white flex flex-col items-center backdrop-blur-sm w-full h-screen z-50">
          <div className="flex font-bold justify-between items-center mt-10 max-w-[1200px] w-full">
            <button className="flex items-center border rounded p-2 text-sm font-bold gap-3">
              <BsHeartFill className="text-red-500 p-1 w-7 h-7" />
              {"32"}
            </button>
            <div>Use guidelines</div>
            <div className="flex gap-3 items-center">
              <BiLink className="border rounded-full w-9 h-9 p-2 cursor-pointer" />
              <GrClose
                onClick={() => {
                  setShowVideoModal(false);
                }}
                className="border rounded-full w-9 h-9 p-2 cursor-pointer"
              />
            </div>
          </div>
          <div className="max-w-[900px] overflow-hidden flex justify-center w-full h-[500px] bg-black/20 rounded-xl">
            <ReactPlayer
              height={"100%"}
              width={"100%"}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Creator;
