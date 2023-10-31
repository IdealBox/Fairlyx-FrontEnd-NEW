import { BiLoaderCircle } from "react-icons/bi";
import { VendorNavbar, DashboardSideBar } from "../../components";
import PromoteInsight from "./components/PromoteInsight";
import RecentPosts from "./components/RecentPost";
import { useState } from "react";
function Promote() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex bg-gray-100 gap-1 fixed top-0 h-screen left-0 dark:bg-app-neutral-800 w-full">
      <DashboardSideBar />
      <div className="flex flex-col w-full">
        <VendorNavbar />
        <div className="flex p-4 flex-col overflow-scroll items-start gap-4">
          <div className="font-bold text-3xl pt-5 pl-5 dark:text-white">
            Promote
          </div>
          <PromoteInsight />
          <RecentPosts />
          {
            <button
              onClick={() => {
                setLoading(!loading);
              }}
              className="md:hidden mx-auto text-[18px] dark:text-white dark:border-[#ffffff15] font-bold items-center gap-5 flex rounded-lg p-3 border"
            >
              <BiLoaderCircle
                className={`w-7 h-7 ${loading ? "animate-spin" : ""}`}
              />
              Load more
            </button>
          }
        </div>
      </div>
    </div>
  );
}
export default Promote;
