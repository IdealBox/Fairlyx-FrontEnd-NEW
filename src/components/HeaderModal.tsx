import React from "react";
import { BiComment, BiDotsHorizontal } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
interface HeaderTypes {
  modalText?: string;
  leftSectionColor?: string;
  rightItem?: any;
  showModal?: string;
  setShowModal?: any;
  data: Object[];
  buttonText?: string;
}
const HeaderModal = ({
  modalText = "Messages",
  leftSectionColor = "bg-red-200",
  rightItem,
  showModal = "",
  setShowModal,
  buttonText = "ButtonText",
}: HeaderTypes) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute mt-14 z-30 shadow-2xl right-3 dark:bg-app-neutral-600 bg-white rounded-xl p-4 w-[350px] flex flex-col gap-2">
        <div className="flex dark:text-white font-bold justify-between pb-3 items-center">
          {modalText}
          <BiDotsHorizontal className="cursor-pointer rounded-full dark:bg-gray-200/10 bg-gray-600/10 w-8 h-8 p-1" />
        </div>
        <div
          onClick={() => {
            if (showModal === "notification") {
              navigate("/vendor/notifications");
            }
            setShowModal("");
          }}
          className="flex gap-2 dark:hover:bg-white/10 hover:bg-gray-200 p-1 rounded-lg text-xs"
        >
          <img
            src="/profile.jpg"
            alt=""
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="absolute">
            {showModal === "messages" ? (
              ""
            ) : (
              <BiComment className="bg-primary-4 rounded-full w-5 h-5 p-1 mt-4 text-white border-2 border-white ml-4" />
            )}
          </div>

          <div className="flex w-full flex-col gap-1 cursor-pointer">
            <div className="flex justify-between">
              <div className="font-bold dark:text-white">Jarret Waerli</div>
              <div className="flex items-center gap-2 text-gray-400">
                {showModal === "messages" ? "03:30PM" : "3h"}
                <div className="w-3 h-3 rounded-full bg-primary-1"></div>
              </div>
            </div>
            <div className="text-gray-500 line-clamp-1">
              When do you realize the codded version was not what you signed in
              for?
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            if (showModal === "notification") {
              navigate("/vendor/notifications");
            }
          }}
          className="bg-primary-1 text-white/90 font-bold p-3 w-full text-center rounded-xl"
        >
          {buttonText}
        </button>
      </div>
      <div
        onClick={() => {
          setShowModal("");
        }}
        className="absolute z-20 top-0 left-0 h-screen w-full"
      ></div>
    </>
  );
};

export default HeaderModal;
