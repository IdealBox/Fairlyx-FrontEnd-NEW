import React from "react";

const ProductInfo = () => {
  return (
    <div className="w-[200px] flex gap-2">
      <img
        src="/guitar.jpg"
        className="w-16 h-16 object-cover rounded-lg"
        alt=""
      />
      <div className="flex flex-col gap-1">
        <div className="font-[600] dark:text-gray-300 text-gray-800">
          Brand New Guitar Imported
        </div>
        <div className="text-gray-500 text-[12px]">UI design Kit</div>
      </div>
    </div>
  );
};

export default ProductInfo;
