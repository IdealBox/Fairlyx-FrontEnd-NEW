import React from "react";
import { HeaderComponent } from "../../../../components";
import { RiCloseCircleFill } from "react-icons/ri";

const RescheduleModals = () => {
  return (
    <div className="top-0 left-0 w-full h-screen absolute dark:bg-[#00000010] bg-[#ffffff90] flex items-center justify-center">
		<div className="rounded-xl p-5 w-[400px] bg-white dark:bg-app-neutral-800">
<HeaderComponent headerText="Reschedule product" rightItem={<RiCloseCircleFill className="w-7 h-7" />} />
<div className="text-gray-500 dark:text-gray-300">
	Choose any day and time in the future you want your product to be published.
</div>
		</div>
	</div>
  );
};

export default RescheduleModals;
