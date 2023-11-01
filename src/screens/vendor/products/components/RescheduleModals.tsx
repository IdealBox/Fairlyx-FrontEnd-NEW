import React, { useState } from "react";
import { HeaderComponent } from "../../../../components";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const RescheduleModals = ({ onClick }: any) => {
  // const [date, setDate] = useState("");
  return (
    <div className="top-0 left-0 w-full h-screen z-50 absolute dark:bg-[#0000003c] bg-[#a5a5a590] flex items-end pb-9 sm:items-center justify-center">
      <div className="rounded-xl shadow-2xl dark:border-white/10 dark:border p-5 w-[400px] gap-5 flex flex-col bg-white dark:bg-app-neutral-800">
        <HeaderComponent
          headerText="Reschedule product"
          rightItem={
            <RiCloseCircleFill onClick={()=>{
				onClick()
			}} className="w-7 text-gray-400 cursor-pointer h-7" />
          }
        />
        <div className="text-gray-500 text-sm dark:text-gray-300">
          Choose any day and time in the future you want your product to be
          published.
        </div>
        <label
          htmlFor="date"
          className="border border-white/10 cursor-pointer flex p-2 gap-3 rounded-lg"
        >
          <BiCalendar className="w-7 h-7" />
          <div className="flex flex-col gap-2">
          </div>
          <input type="date" id="date" className="outline-none bg-transparent" />
        </label>
        <label
          htmlFor="time"
          className="border border-white/10 items-center cursor-pointer flex p-2 gap-3 rounded-lg"
        >
          <BsClock className="w-7 h-7" />
          <div className="flex flex-col gap-2">
            <div className="text-gray-500 text-sm">time</div>
          </div>
          <input type="time" id="time" className="outline-none bg-transparent" />
        </label>
        <div className="w-full flex justify-end">
          <button className="rounded-lg bg-sky-600 text-gray-200 p-3 px-5">
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModals;
