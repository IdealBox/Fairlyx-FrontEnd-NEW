import React, { useState } from "react";

import Dropdown from "../../../../components/forms/Dropdown";

const ProductOverview = () => {
  const [selectedValue, setSelectedValue] = useState({
    value: "All time",
    id: "1",
    type: "",
  });
  return (
    <div className="bg-white dark:bg-app-neutral-700 p-3 rounded-xl flex flex-col gap-5">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
            Overview
          </h1>
        </div>
        <div>
          <Dropdown
            data={[
              { value: "All time", type: "", id: "1" },
              { value: "Last month", type: "", id: "2" },
              { value: "September", type: "", id: "3" },
            ]}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </div>
      </header>

      <div className="flex gap-3">
        <div className="w-full h-[250px] rounded-xl bg-secondary-4"></div>
        <div className="w-full h-[250px] rounded-xl bg-secondary-3"></div>
        <div className="w-full h-[250px] rounded-xl bg-secondary-2"></div>
      </div>
    </div>
  );
};

export default ProductOverview;
