import { useState } from "react";
import AppBarChart from "./components/AppBarChart";
import Overview from "./components/Overview";
import Dropdown from "../../../components/forms/Dropdown";

const Earning = () => {
  const [selectedValue, setSelectedValue] = useState<any>({
    value: "All time",
    type: "",
    id: "1",
  });
  const list = [
    {
      date: "Fri, Apr 9",
      status: "Pending",
      count: "28",
      earnings: "$3,140.00",
    },
    {
      date: "Sat, Apr 10",
      status: "Paid",
      count: "24",
      earnings: "$2,568.00",
    },
    {
      date: "Sun, Apr 11",
      status: "Pending",
      count: "16",
      earnings: "$1,375.88",
    },
  ];
  return (
    <div className="flex flex-col gap-3 w-full p-4">
      <div className="text-2xl dark:text-white/60 font-bold">Earning</div>
      <Overview />
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div className="bg-white dark:bg-app-neutral-700 rounded-xl w-full p-5 flex flex-col gap-5">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
                Product Sales
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
          <AppBarChart />
        </div>
        <div className="bg-white dark:text-white/80 dark:bg-app-neutral-700 rounded-xl w-full md:max-w-[350px] p-5 flex flex-col gap-5">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-secondary-4 before:rounded-sm flex items-center gap-2">
                Top Countries
              </h1>
            </div>
          </header>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full flex items-center p-1 justify-center bg-black/10">
                <img src="/americanFlag.png" className="w-full" />
              </div>
              <div className="text-black/80 dark:text-white/80">United States</div>
            </div>
            <div>$823.56</div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:text-white/80 dark:bg-app-neutral-700 p-5">
        <div className="grid text-black/50 dark:text-white/60 grid-cols-4">
          <div>Date</div>
          <div>Status</div>
          <div>Product sales count</div>
          <div>Earnings</div>
        </div>
        {list.map((elem, index) => (
          <div className="grid text-black/70 dark:text-white/80 items-center py-1 grid-cols-4">
            <div>{elem.date}</div>
            <div className="flex flex-start">
              {elem.status === "Pending" ? (
                <div className="p-2 rounded-lg px-4 bg-secondary-4">
                  {elem.status}
                </div>
              ) : (
                <div className="p-2 rounded-lg px-4 bg-secondary-1">
                  {elem.status}
                </div>
              )}
            </div>
            <div>{elem.count}</div>
            <div>{elem.earnings}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earning;
