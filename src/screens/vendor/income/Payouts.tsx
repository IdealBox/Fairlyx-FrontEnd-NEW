import { useState } from "react";
import { BsGraphUp, BsInfo } from "react-icons/bs";
import { MdGraphicEq } from "react-icons/md";
import { PiBezierCurve } from "react-icons/pi";
import { CloseIcon } from "../../../components/icons";

const Payouts = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col gap-3 w-full p-4">
      <div className="text-2xl dark:text-white/60 font-bold">Payouts</div>
      <div className="flex bg-white dark:bg-app-neutral-700 flex-col rounded-xl gap-3 w-full">
        <div className=" dark:bg-app-neutral-700 rounded-xl w-full p-5 flex flex-col gap-5">
          <header className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <div>
              <h1
                className={
                  "text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2"
                }
              >
                Current balance
              </h1>
            </div>
          </header>
        </div>
        <div className="grid p-4 gap-5 dark:text-white/70 grid-cols-1 md:grid-cols-3 w-full">
          <div className="w-full flex items-start justify-start gap-5">
            <BsGraphUp className="bg-secondary-2 w-11 h-11 rounded-full p-2" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 dark:text-white/70 text-black/50 text-xs">
                Current account balance{" "}
                <BsInfo className="rounded-full w-4 h-4 bg-black/50 text-white" />
              </div>
              <div className="font-bold text-5xl">$128k</div>
            </div>
          </div>
          <div className="w-full flex items-start justify-start gap-5">
            <BsGraphUp className="bg-secondary-2 w-11 h-11 rounded-full p-2" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 dark:text-white/70 text-black/50 text-xs">
                Available for withdrawal
                <BsInfo className="rounded-full w-4 h-4 dark:text-white/70 bg-black/50 text-white" />
              </div>
              <div className="font-bold text-5xl">$0.00</div>
            </div>
          </div>
          <div className="flex sm:items-center w-full justify-center">
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="p-2 px-4 w-full sm:w-auto rounded-lg bg-primary-1 text-white/90"
            >
              Withdraw balance
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl flex flex-col dark:text-white/80 dark:bg-app-neutral-700 p-5">
        <header className="flex flex-col sm:flex-row gap-3 pb-5 sm:items-center justify-between">
          <div>
            <h1
              className={
                "text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2"
              }
            >
              Payout history
            </h1>
          </div>
        </header>
        <div className="grid grid-cols-3 text-xs md:text-base md:grid-cols-5 pb-5 border-b dark:border-b-white/10 text-black/50 dark:text-white/60 gap-3">
          <div>Month</div>
          <div className="hidden md:flex">Status</div>
          <div className="hidden md:flex">Method</div>
          <div>Earnings</div>
          <div>Amount Withdrawn</div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 border-y hover:bg-black/10 dark:hover:bg-white/10 border-y-black/10 p-2 text-black/50 items-start dark:text-white/60 gap-3">
          <div>Oct 2021</div>
          <div className="hidden md:flex justify-start text-black">
            <div className="p-2 px-4 bg-secondary-2 rounded-lg">Paid</div>
          </div>
          <div className="hidden md:flex justify-start text-black">
            <div className="p-2 px-4 bg-secondary-4 rounded-lg">Paypal</div>
          </div>
          <div>$128,899.00</div>
          <div>$128,899.00</div>
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
            <div className="font-bold text-5xl">$128,000</div>
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

export default Payouts;
