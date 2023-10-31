import React from "react";
import { HeaderComponent } from "../../../../components";
import { BiDotsHorizontal } from "react-icons/bi";
import CommentComponent from "./CommentComponent";

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
      isLiked: true,
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
  return (
    <div className="bg-white dark:bg-app-neutral-700 rounded-xl w-full p-5">
      <HeaderComponent
        headerText="New"
        rightItem={
          <div className="flex gap-2 items-center">
            <select className="rounded dark:bg-white/5 dark:text-white/60 text-xs p-2 px-4">
              <option>Recent</option>
            </select>
            <BiDotsHorizontal />
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
    </div>
  );
};

export default NotificationList;
