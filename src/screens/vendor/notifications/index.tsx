import React from "react";
import NotificationList from "./components/NotificationList";
import NotificationFilter from "./components/MotificationFilter";

const NotificationsPage = () => {
  return (
    <div className="flex flex-col overflow-scroll w-full">
		<div className="p-5 pb-0 font-bold dark:text-white/50 text-3xl">Notifications</div>
      <div className=" flex md:flex-row p-4 overflow-scroll flex-col items-start w-full gap-3">
        <NotificationList />
        <NotificationFilter />
      </div>
    </div>
  );
};

export default NotificationsPage;
