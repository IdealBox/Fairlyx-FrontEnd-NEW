import React, { useState } from "react";
import { SearchIcon } from "../../../../components/icons";

const ProductStatsNav = () => {
  const [productStatTab, setProductStatTab] = useState("market");
  return (
    <header className="flex md:items-center gap-2 md:gap-0 flex-col items-start w-full md:flex-row justify-between">
      <div className="flex flex-col w-full md:w-auto md:flex-row items-start gap-6">
        <h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-2 before:rounded-sm flex items-center gap-2">
          Products
        </h1>
        <div className="bg-gray-100 dark:bg-app-neutral-600 flex items-center w-full md:w-auto p-2 gap-2 rounded-lg">
          <SearchIcon className="text-gray-500" />
          <input
            placeholder="search product"
            className="bg-transparent caret-primary-1 dark:text-white w-full text-[14px] outline-none"
          />
        </div>
      </div>
      <select className="flex lg:hidden dark:bg-app-neutral-600 dark:text-white p-3 w-full rounded-lg md:w-56">
        <option>Market</option>
        <option>Traffic Sources</option>
        <option>Viewers</option>
      </select>
      <div className="lg:flex hidden gap-6">
        <div
          onClick={() => {
            setProductStatTab("market");
          }}
          className={`p-2 rounded-lg cursor-pointer ${
            productStatTab === "market"
              ? "bg-gray-200 dark:bg-app-neutral-600 dark:text-white"
              : "dark:text-gray-600"
          }`}
        >
          Market
        </div>
        <div
          onClick={() => {
            setProductStatTab("traffic-sources");
          }}
          className={`p-2 rounded-lg cursor-pointer ${
            productStatTab === "traffic-sources"
              ? "bg-gray-200 dark:bg-app-neutral-600 dark:text-white"
              : "dark:text-gray-600"
          }`}
        >
          Traffic Sources
        </div>
        <div
          onClick={() => {
            setProductStatTab("viewers");
          }}
          className={`p-2 rounded-lg cursor-pointer ${
            productStatTab === "viewers"
              ? "bg-gray-200 dark:bg-app-neutral-600 dark:text-white"
              : "dark:text-gray-600"
          }`}
        >
          Viewers
        </div>
      </div>
    </header>
  );
};

export default ProductStatsNav;
