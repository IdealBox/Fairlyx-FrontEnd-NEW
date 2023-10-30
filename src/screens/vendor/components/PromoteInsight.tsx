import { useState } from "react";

import Dropdown from "../../../components/forms/Dropdown";
import { BsInfoCircleFill, BsPerson } from "react-icons/bs";
import { PiCaretUpDownBold } from "react-icons/pi";
import { BiComment } from "react-icons/bi";
import { MdMouse } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";

const PromoteInsight = () => {
  const [selectedValue, setSelectedValue] = useState({
    value: "All time",
    id: "1",
    type: "",
  });
  const insignts = [
    {
      icon: <BsPerson className="bg-secondary-1 rounded-full h-8 w-8 p-2" />,
      text: "People reached",
      largeText: "256K",
      percentage: "37.8",
    },
    {
      icon: (
        <PiCaretUpDownBold className="bg-secondary-2 rounded-full h-8 w-8 p-2" />
      ),
      text: "Engagement",
      largeText: "256K",
      percentage: "37.8",
    },
    {
      icon: <BiComment className="bg-secondary-3 rounded-full h-8 w-8 p-2" />,
      text: "Comments",
      largeText: "256K",
      percentage: "37.8",
    },
    {
      icon: <MdMouse className="bg-secondary-4 rounded-full h-8 w-8 p-2" />,
      text: "Link clicks",
      largeText: "256K",
      percentage: "37.8",
    },
  ];
  return (
    <div className="bg-white dark:bg-app-neutral-700 p-5 w-full rounded-xl flex flex-col gap-5">
      <header className="flex items-center w-full justify-between">
        <div>
          <h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
            Insights
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-14 sm:gap-3 w-full">
        {insignts.map((elem, index) => {
          return (
            <div key={index} className="flex justify-between sm:flex-col sm:gap-1">
              {elem.icon}
              <div className="flex flex-col gap-1">
                <div className="text-xs flex gap-2 items-center text-gray-500">
                  {elem.text}
                  <BsInfoCircleFill className="text-gray-500" />
                </div>
                <div className="font-bold dark:text-white text-3xl">{elem.largeText}</div>
                <div className="flex text-gray-600 gap-2 text-xs">
                  <div className="text-primary-2 flex items-center">
                    <FiArrowUp /> {elem.percentage}
                  </div>
                  this week
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PromoteInsight;
