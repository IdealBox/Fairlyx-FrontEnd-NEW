import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
interface HeaderTypes {
  modalText?: string;
  leftSectionColor?: string;
  rightItem?: any;
  showModal?: boolean;
  setShowModal?: any;
  data: Object[];
  buttonText?: string;
}
const HeaderModal = ({
  modalText = "Messages",
  leftSectionColor = "bg-red-200",
  rightItem,
  showModal = false,
  setShowModal,
  buttonText = "ButtonText",
}: HeaderTypes) => {
  return (
    <>
      {showModal && (
        <div className="absolute mt-14 z-30 shadow-2xl right-3 bg-white rounded-xl p-4 w-[350px] flex flex-col gap-2">
          <div className="flex justify-between pb-3 items-center">
            {modalText}
            <BiDotsHorizontal className="cursor-pointer" />
          </div>
          <div
            onClick={() => {
              setShowModal(!showModal);
            }}
            className="flex gap-2 hover:bg-gray-200 p-1 rounded-lg text-xs"
          >
            <img
              src="/profile.jpg"
              alt=""
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex w-full flex-col gap-1 cursor-pointer">
              <div className="flex justify-between">
                <div className="font-bold">Jarret Waerli</div>
                <div className="flex items-center gap-2 text-gray-400">
                  03:30PM{" "}
                  <div className="w-3 h-3 rounded-full bg-primary-1"></div>
                </div>
              </div>
              <div className="text-gray-500 line-clamp-1">
                When do you realize the codded version was not what you signed
                in for?
              </div>
            </div>
          </div>
          <button className="bg-primary-1 text-white/90 font-bold p-3 w-full text-center rounded-xl">
            {buttonText}
          </button>
        </div>
      )}
      {showModal && (
        <div
          onClick={() => {
            setShowModal(!showModal);
          }}
          className="absolute z-20 top-0 left-0 h-screen w-full"
        ></div>
      )}
    </>
  );
};

export default HeaderModal;
