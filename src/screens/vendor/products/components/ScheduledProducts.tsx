import { useState } from "react";
import { BiCalendar, BiDotsHorizontal, BiLoaderCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { RiCheckDoubleLine } from "react-icons/ri";
import { HeaderComponent } from "../../../../components";
import { PiPencil } from "react-icons/pi";
import RescheduleModals from "./RescheduleModals";

const ScheduledProducts = () => {
  const [loading, setLoading] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  return (
    <div className="flex flex-col overflow-scroll gap-3 w-full dark:text-gray-400 pt-5 px-5">
      <div className="text-5xl font-bold">Scheduled</div>
      <div className="dark:bg-app-neutral-700 bg-white p-3 rounded-lg max-w-[1200px]">
        <HeaderComponent headerText="Products" rightItem={<></>} />
        <div className="sm:grid hidden grid-cols-2 p-1 border-b mb-5 py-5 w-full">
          <div className="flex gap-8 items-center">
            <input type="checkbox" className="w-5 h-5" />
            Product
          </div>
          <div className="flex gap-3 items-center w-full">
            <span className="w-[64px]">Price</span>
            <span>Scheduled for</span>
          </div>
        </div>
        {Array(4)
          .fill(1)
          .map((_, index) => (
            <div
              key={index}
              className="sm:grid hidden scheduled-products rounded hover:bg-[#00000010]  grid-cols-2 p-1 w-full"
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
                <div className="hidden options items-center gap-3">
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
                className="flex gap-2 rounded border-y py-5 flex-col w-full"
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
                  <div className="bg-secondary-2 items-center justify-center flex rounded-lg font-bold w-16 h-9">
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
      </div>
      <div className="mt-auto items-center py-4 flex justify-between w-full">
        <div className=" flex items-center gap-3">
          <RiCheckDoubleLine />2 products selected
        </div>
        <div className="ml-auto gap-2 flex items-center">
          <button
            onClick={() => {
              setShowRescheduleModal(true);
            }}
            className=" border-gray-400 border text-gray-700 dark:text-gray-300 font-bold p-3 flex items-center gap-3 px-6 rounded-xl"
          >
            <BiCalendar /> Reschedule
          </button>
          <button className="bg-sky-500 p-3 px-6 text-white rounded-xl">
            Publish now
          </button>
        </div>
      </div>
      {showRescheduleModal && <RescheduleModals onClick={()=>{
		setShowRescheduleModal(false)
	  }} />}
    </div>
  );
};

export default ScheduledProducts;
