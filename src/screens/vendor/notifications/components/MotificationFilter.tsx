import React from "react";
import { HeaderComponent } from "../../../../components";

const NotificationFilter = () => {
  return (
    <div className="bg-white dark:text-white/70 sm:max-w-[300px] dark:bg-app-neutral-700 rounded-xl w-full p-5">
      <HeaderComponent headerText="Filter" rightItem={<></>} />
      <div className="w-full flex flex-col py-3 gap-2">
        <InputBox label="Comments" type="checkbox" />
        <InputBox label="Likes" type="checkbox" />
        <InputBox label="Reviews" type="checkbox" />
        <InputBox label="Mentions" type="checkbox" />
        <InputBox label="Purchases" type="checkbox" />
        <InputBox label="Message" type="checkbox" />
      </div>
      <div className="grid grid-cols-2 font-bold dark:border-b-white/5 text-xs border-b border-b-black/10 pb-5 justify-between gap-3">
        <button className="flex items-center dark:border-white/5 justify-center border p-3 rounded-lg border-black/10">Select All</button>
        <button className="flex items-center dark:border-white/5 justify-center border p-3 rounded-lg border-black/10">Unselect All</button>
      </div>
      <div className="w-full flex flex-col py-3 gap-2">
        <InputBox label="Everyone" type="radio" />
        <InputBox label="Customers" type="radio" />
      </div>
    </div>
  );
};

export default NotificationFilter;
interface Props {
  label: string;
  type: "checkbox" | "radio";
}
export const InputBox = ({ label, type }: Props) => {
  return (
    <label className="flex w-full text-xs justify-between items-center">
      <span>{label}</span>
      <input type={type} className="w-5 h-5" />
    </label>
  );
};
