import { useState } from "react";
import { BsGraphUp, BsInfo, BsPieChart, BsPieChartFill } from "react-icons/bs";
import { ChevronDownIcon, CloseIcon } from "../../../components/icons";

const Statements = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col gap-3 w-full p-4">
      <div className="text-2xl dark:text-white/60 font-bold">Statements</div>
      <div className="flex bg-white dark:bg-app-neutral-700 flex-col rounded-xl gap-3 w-full">
        <div className="grid p-4 gap-5 dark:text-white/70 grid-cols-1 md:grid-cols-3 w-full">
          <div className="w-full flex md:flex-col border-transparent dark:border-transparent border-r md:border-r-black/10 dark:md:border-white/10 items-start justify-start gap-4">
            <BsGraphUp className="bg-secondary-2 w-11 h-11 rounded-full p-2 text-black" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 dark:text-white/70 text-black/50 text-xs">
                Funds
                <BsInfo className="rounded-full w-4 h-4 bg-black/50 text-white" />
              </div>
              <div className="font-bold text-2xl md:text-5xl">$128k</div>
            </div>
          </div>
          <div className="w-full flex md:flex-col border-transparent dark:border-transparent border-r md:border-r-black/10 dark:md:border-white/10 items-start justify-start gap-4">
            <BsPieChartFill className="bg-secondary-2 w-11 h-11 rounded-full p-2 text-black" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 dark:text-white/70 text-black/50 text-xs">
                Earning
                <BsInfo className="rounded-full w-4 h-4 dark:text-white/70 bg-black/50 text-white" />
              </div>
              <div className="font-bold text-2xl md:text-5xl">$128k</div>
            </div>
          </div>
          <div className="w-full flex md:flex-col border-transparent dark:border-transparent items-start justify-start gap-4">
            <BsPieChart className="bg-secondary-2 w-11 h-11 rounded-full p-2 text-black" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 dark:text-white/70 text-black/50 text-xs">
                Fees
                <BsInfo className="rounded-full w-4 h-4 dark:text-white/70 bg-black/50 text-white" />
              </div>
              <div className="font-bold text-2xl md:text-5xl">$338.98</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl flex flex-col dark:text-white/80 dark:bg-app-neutral-700 p-5">
        <header className="flex flex-col md:flex-row gap-3 pb-5 md:items-center justify-between">
          <div>
            <h1
              className={
                "text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2"
              }
            >
              Transactions
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center dark:text-white/70 text-black/60 gap-3 p-2 px-4 justify-between dark:border-white/70 rounded-lg border">
              Last 30 days <ChevronDownIcon />
            </button>
            <button className="p-2 px-4 rounded-lg text-white/70 bg-primary-1">
              Download CSV
            </button>
          </div>
        </header>
        <div className="hidden md:grid grid-cols-3 text-xs md:text-base md:grid-cols-5 pb-5 dark:border-b-white/10 text-black/50 dark:text-white/60 gap-3">
          <div>Date</div>
          <div className="">type</div>
          <div className="">Detail</div>
          <div>Price</div>
          <div>Amount</div>
        </div>
        <div className="hidden md:grid grid-cols-3 md:grid-cols-5 dark:border-white/5 border-y hover:bg-black/10 dark:hover:bg-white/10 border-y-black/10 p-2 text-black/50 items-start dark:text-white/60 gap-3">
          <div>14th Oct 2021</div>
          <div className="flex justify-start text-black">
            <div className="p-2 px-4 bg-secondary-2 rounded-lg">Sale</div>
          </div>
          <div className="flex flex-col gap-1 text-xs dark:text-white/70 justify-start text-black">
            <div>Fleet - Travel shopping UI design kit.</div>
            <div className="text-black/50 dark:text-white/40">
              Invoice: UI8-8934AS
            </div>
          </div>
          <div>$98.00</div>
          <div>+ $88.20</div>
        </div>
        <div className="flex md:hidden text-sm flex-col border-y dark:border-white/5 py-2 w-full gap-2">
          <div className="flex justify-between gap-2">
            <div className="flex dark:text-white/70 flex-col gap-1 text-xs justify-start text-black">
              <div>Fleet - Travel shopping UI design kit.</div>
              <div className="text-black/50 dark:text-white/40">
                Invoice: UI8-8934AS
              </div>
            </div>
            <div className="p-2 px-4 text-black bg-secondary-2 rounded-lg">
              Sale
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div>Date</div>
            <div>14 Oct 2021</div>
          </div>
          <div className="flex justify-between gap-2">
            <div>Price</div>
            <div>$98.00</div>
          </div>
          <div className="flex justify-between gap-2">
            <div>Amount</div>
            <div>+$88.20</div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="absolute top-0 bg-black/30 left-0 backdrop-blur-md w-full h-screen items-center flex justify-center">
          <div
            onClick={() => {
              setShowModal(false);
            }}
            className="absolute top-0 left-0 w-full h-screen z-40"
          ></div>
          <div className="rounded-xl items-center bg-white dark:bg-app-neutral-700 dark:text-white/70 z-50 shadow-2xl w-full max-w-[400px] p-7 flex flex-col gap-3">
            <div className="w-full flex justify-end">
              <CloseIcon
                className="text-black dark:text-white bg-black/30 w-8 h-8 p-2 cursor-pointer rounded-full"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </div>
            <img
              src="/profile.jpg"
              alt=""
              className="rounded-full w-24 h-24 dark:border-transparent border"
            />
            <div>Success!</div>
            <div className="font-bold text-2xl md:text-5xl">$128,000</div>
            <div className="text-black/50 dark:text-white/80 text-xs">
              Has been sent to your paypal :tam@ui8.net
            </div>
            <button
              onClick={() => {
                setShowModal(false);
              }}
              className="bg-primary-1 text-white/70 p-2 px-4 rounded-lg"
            >
              Done!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statements;
