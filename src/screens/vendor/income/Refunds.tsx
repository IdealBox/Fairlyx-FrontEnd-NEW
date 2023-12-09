import { useState } from "react";
import AppBarChart from "./components/AppBarChart";
import Overview from "./components/Overview";
import Dropdown from "../../../components/forms/Dropdown";

const Refunds = () => {
  const [toggle, setToggle] = useState<any>(false);
  //   const list = [
  //     {
  //       date: "Fri, Apr 9",
  //       status: "Pending",
  //       count: "28",
  //       Refundss: "$3,140.00",
  //     },
  //     {
  //       date: "Sat, Apr 10",
  //       status: "Paid",
  //       count: "24",
  //       Refundss: "$2,568.00",
  //     },
  //     {
  //       date: "Sun, Apr 11",
  //       status: "Pending",
  //       count: "16",
  //       Refundss: "$1,375.88",
  //     },
  //   ];
  return (
    <div className="flex flex-col gap-3 w-full p-4">
      <div className="text-2xl dark:text-white/60 font-bold">Refunds</div>
      <div className="flex bg-white flex-col rounded-xl gap-3 w-full">
        <div className=" dark:bg-app-neutral-700 rounded-xl w-full p-5 flex flex-col gap-5">
          <header className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <div>
              <h1
                className={
                  "text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2"
                }
              >
                Refund Requests
              </h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setToggle(false);
                }}
                className={
                  !toggle
                    ? "p-2 px-4 rounded-lg bg-black/10"
                    : "p-2 px-4 rounded-lg"
                }
              >
                Open Requests
              </button>
              <button
                onClick={() => {
                  setToggle(true);
                }}
                className={
                  toggle
                    ? "p-2 px-4 rounded-lg bg-black/10"
                    : "p-2 px-4 rounded-lg"
                }
              >
                Closed Requests
              </button>
            </div>
          </header>
        </div>
        <div className="bg-white hidden sm:flex flex-col dark:text-white/80 dark:bg-app-neutral-700 p-5">
          <div className="flex justify-between pb-2 border-b text-black/50 dark:text-white/60 gap-3">
            <div className=" w-[200px]">Product</div>
            <div className=" w-[120px] hidden md:flex">Status</div>
            <div className=" w-[140px]">Date</div>
            <div className=" w-[200px]">Customer</div>
          </div>
          <div className="flex justify-between py-2 text-black/50 items-start dark:text-white/60 gap-3">
            <div className="flex gap-2 w-[200px]">
              <img src="/guitar.jpg" className="w-20 rounded-xl h-20" alt="" />
              <div className="flex flex-col">
                <div>Bento Matte 3D illustraton</div>
                <div>UI design kit</div>
              </div>
            </div>
            <div className="p-2 w-[140px] items-center justify-center hidden md:flex text-center rounded-lg bg-secondary-4">
              New Request
            </div>
            <div className=" w-[140px]">12 Sep</div>
            <div className="flex w-[200px] items-center gap-3">
              <img
                src="/guitar.jpg"
                className="w-10 h-10 object-cover border rounded-full"
                alt=""
              />
              <div>Kyler Kuphal</div>
            </div>
          </div>
        </div>
        <div className="sm:hidden w-full px-5 justify-between flex gap-3">
          <div className="flex gap-2">
           Product
          </div>
          <div>Customer</div>
        </div>
        <div className="sm:hidden w-full p-5 justify-between flex gap-3">
          <div className="flex gap-2">
            <img src="/guitar.jpg" className="w-20 rounded-xl h-20" alt="" />
            <div className="flex w-[140px] flex-col">
              <div>Bento Matte 3D illustraton</div>
              <div className="p-1 w-[140px] text-center rounded-lg bg-secondary-4">
                New Request
              </div>
            </div>
          </div>
          <img src="/guitar.jpg" className="w-10 rounded-full h-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Refunds;
