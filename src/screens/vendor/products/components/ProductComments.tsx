import { useState } from "react";
import { BiLoaderCircle, BiSmile } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { RiCheckDoubleLine } from "react-icons/ri";
import { HeaderComponent } from "../../../../components";
import RescheduleModals from "./RescheduleModals";
import { TbRotateClockwise } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";

const ProductComments = () => {
  const [loading, setLoading] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  return (
    <div className="flex flex-col overflow-scroll gap-3 w-full dark:text-gray-400 pt-5 px-5">
      <div className="md:text-5xl text-2xl font-bold">Comments</div>
      <div className="dark:bg-app-neutral-700 bg-white p-3 rounded-lg max-w-[1200px]">
        <HeaderComponent headerText="Product Comments" rightItem={<></>} />
        <div className="sm:grid hidden gap-7 text-gray-500 grid-cols-1 md:grid-cols-2 p-1 py-5 w-full">
          <div className="flex gap-8 items-center">
            <input type="checkbox" className="w-4 h-4" />
            Comments
          </div>
          <div className="hidden md:flex gap-3 items-center w-full">
            <span className="w-[64px]">Product</span>
            {/* <span>Scheduled for</span> */}
          </div>
        </div>
        {Array(4)
          .fill(1)
          .map((_, index) => (
            <div
              key={index}
              className="grid border-y py-4 dark:border-y-white/5 border-y-black/10 scheduled-products rounded hover:bg-[#00000010] gap-7 grid-cols-1 md:grid-cols-2 p-1 w-full"
            >
              <div className="flex gap-8 items-start">
                <input type="checkbox" className="w-4 h-4" />
                <div className="flex gap-3 w-full items-start">
                  <img
                    alt=""
                    src="/guitar.jpg"
                    className="rounded-full h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-bold">Akoneh Silas</div>
                    <div className="text-sm md:hidden flex gap-2">
                      <span className="text-gray-400">on</span>Product title
                    </div>
                    <div className="text-gray-500 text-sm">
                      I'm unable to place my order
                    </div>
                    <div className="md:opacity-0 opacity-100 flex pt-3 hover:!bg-transparent options items-center gap-7">
                      <TbRotateClockwise className="w-5 h-5 cursor-pointer text-gray-500 dark:text-white" />
                      <BsHeart className="w-4 h-4 cursor-pointer text-gray-500 dark:text-white" />
                      <MdDelete className="w-5 h-5 cursor-pointer text-gray-500 dark:text-white" />
                      <BiSmile className="w-5 h-5 cursor-pointer text-gray-500 dark:text-white" />
                    </div>
                  </div>
                  <div className="ml-auto text-gray-500 text-sm">8h</div>
                </div>
              </div>
              <div className="md:flex hidden gap-3 items-start w-full">
                <img
                  alt=""
                  src="/guitar.jpg"
                  className="rounded-lg h-16 w-16 object-cover"
                />
                <div className="flex flex-col">
                  <div className="font-bold">Geometric pattern</div>
                  <div className="text-gray-500 text-sm">UI design kit</div>
                </div>
              </div>
            </div>
          ))}
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
      </div>
      <div className="mt-auto items-center py-4 flex justify-between w-full">
        <div className=" flex text-gray-500 items-center gap-3">
          <RiCheckDoubleLine />
          No Comment selected
        </div>
        <div className="ml-auto gap-2 flex items-center">
          <button
            onClick={() => {
              setShowRescheduleModal(true);
            }}
            className=" border-red-500 border text-red-500 font-bold p-3 flex items-center gap-3 px-6 rounded-xl"
          >
            Delete
            <MdDelete />
          </button>
        </div>
      </div>
      {showRescheduleModal && (
        <RescheduleModals
          onClick={() => {
            setShowRescheduleModal(false);
          }}
        />
      )}
    </div>
  );
};

export default ProductComments;
