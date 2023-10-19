import React from "react";
import { HeaderComponent } from "../../../../components";
import { MdGrid4X4, MdList } from "react-icons/md";
import { BiGrid } from "react-icons/bi";
import ProductStats from "./ProductStats";

const ReleasedProducts = () => {
  return (
    <div className="flex flex-col overflow-scroll gap-3 w-full dar:text-white p-5">
      <div className="text-2xl font-bold">Released</div>
      <div className="dark:bg-app-neutral-700 bg-white p-3 rounded-lg">
        <HeaderComponent
          headerText="Products"
          rightItem={
            <div className="flex gap-3 items-center">
              <MdList className="w-9 h-9 shadow-xl p-1 rounded" />
              <BiGrid className="w-7 h-7 rounded" />
            </div>
          }
        />
		<ProductStats showRating={true} showLikes={false} showFooterSection={true} showHeader={false} />
      </div>
    </div>
  );
};

export default ReleasedProducts;
