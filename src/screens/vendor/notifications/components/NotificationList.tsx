
import React, { useState } from "react";
import { HeaderComponent } from "../../../../components";
import { BiCheck, BiDotsHorizontal } from "react-icons/bi";
import CommentComponent from "./CommentComponent";
import { FiSettings } from "react-icons/fi";
import LoadMoreButton from "./LoadMore";
import { useNavigate } from "react-router-dom";

const NotificationList = () => {
  const comments = [
    {
      commentText: "Wow this is so amazing. I love it",
      isLiked: true,
      authorName: "Bemsi",
      userName: "Blessing",
      commentTitle: "How to fish",
      time: "2h",
      image: "/profile.jpg",
    },
    {
      commentText: "Interesting This Looks good",
      isLiked: false,
      authorName: "Hansel",
      userName: "Laurhist",
      commentTitle: "Fascinating discoveries",
      time: "1h",
      image: "/profile.jpg",
    },
    {
      commentText: "Just Purchased mine and it makes sense",
      isLiked: true,
      authorName: "Boris",
      userName: "Courage",
      commentTitle: "Dates and datelines",
      time: "5h",
      image: "/profile.jpg",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="bg-white dark:bg-app-neutral-700 rounded-xl w-full p-5">
      <HeaderComponent
        headerText="New"
        rightItem={
          <div className="flex gap-2 items-center">
            <select className="rounded dark:bg-white/5 dark:text-white/60 text-xs p-2 px-4">
              <option>Recent</option>
            </select>
            <BiDotsHorizontal
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                setShowModal(!showModal);
              }}
            />
            {showModal && (
              <div className="bg-white dark:bg-app-neutral-700 text-base shadow-2xl font-medium border rounded-xl p-4 absolute mt-[150px] w-[250px] -ml-[150px]">
                <div
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  className="flex gap-3 text-gray-500 p-2 cursor-pointer rounded-lg items-center hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <BiCheck />
                  Mark all as read
                </div>
                <div
                  onClick={() => {
                    setShowModal(!showModal);
                    navigate("/vendor/settings?tab=basics")
                  }}
                  className="flex gap-3 text-gray-500 p-2 cursor-pointer rounded-lg items-center hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <FiSettings />
                  Go to settings
                </div>
              </div>
            )}
          </div>
        }
      />
      <div className="p-2"></div>
      {comments.map((elem, index) => (
        <CommentComponent
          image={elem.image}
          commentText={elem.commentText}
          time={elem.time}
          authorName={elem.authorName}
          commentTitle={elem.commentTitle}
          userName={elem.userName}
          liked={elem.isLiked}
        />
      ))}
      <LoadMoreButton />
    </div>
  );
};

export default NotificationList;
