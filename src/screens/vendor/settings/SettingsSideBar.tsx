import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";

const SettingsSideBar = ({ active, item }: any) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [menuItem, setMenuItem] = useState("Basics")
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="hidden md:flex flex-col w-full p-2 md:max-w-[160px] lg:max-w-[300px] gap-1">
        <div
          onClick={() => {
            navigate("/vendor/settings?tab=basics");
          }}
          className={`${
            searchParams.get("tab") === "basics"
              ? "bg-black/20 dark:bg-white/20 p-2 rounded-lg cursor-pointer "
              : "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer "
          }`}
        >
          Basics
        </div>
        <div
          onClick={() => {
            navigate("/vendor/settings?tab=amount");
          }}
          className={`${
            searchParams.get("tab") === "amount"
              ? "bg-black/20 dark:bg-white/20 p-2 rounded-lg cursor-pointer "
              : "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer "
          }`}
        >
          Amount
        </div>
        <div
          onClick={() => {
            navigate("/vendor/settings?tab=notifications");
          }}
          className={`${
            searchParams.get("tab") === "notifications"
              ? "bg-black/20 dark:bg-white/20 p-2 rounded-lg cursor-pointer "
              : "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer "
          }`}
        >
          Notifications
        </div>
        <div
          onClick={() => {
            navigate("/vendor/settings?tab=payment");
          }}
          className={`${
            searchParams.get("tab") === "payment"
              ? "bg-black/20 dark:bg-white/20 p-2 rounded-lg cursor-pointer "
              : "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer "
          }`}
        >
          Payment
        </div>
      </div>
      <div onClick={()=>{
        setShowMenu(!showMenu)
      }} className="bg-black/10 md:hidden text-bold cursor-pointer text-xs dark:bg-white/10 rounded-xl p-2 flex items-center justify-between">
        {menuItem}
        <BiChevronDown className="w-7 h-7" />
      </div>
      {showMenu && <div className="flex md:hidden absolute bg-white dark:bg-app-neutral-700 border rounded-xl shadow-2xl flex-col w-[250px] p-2 gap-1">
        <div
          onClick={() => {
            navigate("/vendor/settings?tab=basics");
            setShowMenu(!showMenu)
            setMenuItem("Basics")
          }}
          className={`${
            searchParams.get("tab") === "basics"
              ? "bg-black/20 dark:bg-white/20 p-2 rounded-lg cursor-pointer "
              : "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer "
          }`}
        >
          Basics
        </div>
        <div
          onClick={() => {
            navigate("/vendor/settings?tab=amount");
            setShowMenu(!showMenu)
            setMenuItem("Amount")
          }}
          className={`${
            searchParams.get("tab") === "amount"
              ? "bg-black/20 dark:bg-white/20 p-2 rounded-lg cursor-pointer "
              : "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer "
          }`}
        >
          Amount
        </div>
        <div
          onClick={() => {
            navigate("/vendor/settings?tab=notifications");
            setShowMenu(!showMenu)
            setMenuItem("Notifications")
          }}
          className={`${
            searchParams.get("tab") === "notifications"
              ? "bg-black/20 dark:bg-white/20 p-2 rounded-lg cursor-pointer "
              : "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer "
          }`}
        >
          Notifications
        </div>
        <div
          onClick={() => {
            navigate("/vendor/settings?tab=payment");
            setShowMenu(!showMenu)
            setMenuItem("Payment")
          }}
          className={`${
            searchParams.get("tab") === "payment"
              ? "bg-black/20 dark:bg-white/20 p-2 rounded-lg cursor-pointer "
              : "p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer "
          }`}
        >
          Payment
        </div>
      </div>}
    </>
  );
};

export default SettingsSideBar;
