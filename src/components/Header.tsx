import React from "react";
interface HeaderTypes {
  headerText?: string;
  leftSectionColor?: string;
  rightItem?: any;
}
const HeaderComponent = ({
  headerText = "Preview",
  leftSectionColor = "bg-red-200",
  rightItem,
}: HeaderTypes) => {
  return (
    <h1 className="text-gray-800 dark:text-app-neutral-50 text-xl font-bold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
      {headerText}
      <div className="ml-auto flex">
        {rightItem ? (
          rightItem
        ) : (
          <div className="w-full flex">
            <div className="border-2 border-app-neutral-600 dark:border-gray-300 rounded w-7 h-7"></div>
            {/* <div className="bg-white absolute -ml-[28px] rotate-45 dark:bg-app-neutral-700 rounded w-7 h-7"></div> */}
          </div>
        )}
      </div>
    </h1>
  );
};

export default HeaderComponent;
