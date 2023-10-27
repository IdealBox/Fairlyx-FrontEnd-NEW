import React from "react";
import { HeaderComponent } from "../../../../components";
interface PreviewCardTypes {
  price?: string;
  cardText?: string;
  cardBottomSection?: string;
  header?: any;
  imageStyles?: string;
}
const PreviewCard = ({
  price = "$98",
  cardBottomSection = "by Anonymous",
  cardText="Fleet - Travel shopping UI design kit",
  header = <HeaderComponent />,
  imageStyles,
}: PreviewCardTypes) => {
  return (
    <div className="max-w-[400px] flex flex-col gap-5 p-5 w-full rounded-lg bg-white dark:bg-app-neutral-700">
      {header}
      <img
        src="/guitar.jpg"
        className={`w-full rounded-xl h-[250px] object-cover ${imageStyles}`}
        alt=""
      />
      <div className="flex gap-2 justify-between">
        {cardText && <div className="font-bold dark:text-white text-xl">{cardText}</div>}
        <button className="bg-secondary-4 rounded-md font-[800] p-2 px-4 ml-auto">
          $98
        </button>
      </div>

      <div className="flex gap-3 dark:text-gray-300 items-center">
        <img src="/guitar.jpg" className="w-9 h-9 rounded-full" alt="" />
        {cardBottomSection && <div>{cardBottomSection}</div>}
      </div>
    </div>
  );
};

export default PreviewCard;
