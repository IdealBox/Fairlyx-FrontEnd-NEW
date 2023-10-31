import React, { useState } from "react";
import { BiHeartCircle } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
interface Prop {
  commentText: string;
  authorName: string;
  time: string;
  userName: string;
  commentTitle: string;
  liked: boolean;
  image: string;
}
const CommentComponent = ({
  commentText = "Great work, I just purchased this product",
  authorName = "Linda",
  time = "2h",
  userName = "MyName",
  commentTitle,
  liked=false,
  image
}: Prop) => {
  const [showComment, setShowComment] = useState(false);
  const [isLiked, setIsLiked] = useState(liked);
  const [comment, setComment] = useState("");
  return (
    <div className="w-full flex hover:bg-black/5 rounded-xl dark:hover:bg-white/5 border-y border-y-black/10 items-start dark:text-white gap-2 p-3">

      <div className="">
        <img
          src={image}
          className="object-cover w-12 h-12 rounded-full"
          alt=""
        />
        <BiHeartCircle className="bg-red-500 rounded-full w-6 text-white relative -mt-[20px] ml-5 h-6" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-xs">
          {authorName} <span className="text-gray-500">@username</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          {" "}
          <span className="text-gray-500">Comments on</span>
          {commentTitle}
        </div>
        <div className="flex items-center gap-1 text-xs">{`"${commentText}"`}</div>
        <div className="flex gap-4 items-center">
          {!isLiked ? (
            <button
              onClick={() => {
                setIsLiked(!isLiked);
              }}
              className=" text-xs font-bold"
            >
              Like
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLiked(!isLiked);
              }}
              className=" text-xs text-primary-1 font-bold"
            >
              Like
            </button>
          )}
          <button
            onClick={() => {
              setShowComment(!showComment);
            }}
            className=" text-xs font-bold"
          >
            Reply
          </button>
        </div>
        {showComment && (
          <div className="flex gap-2 items-start">
            <img
              alt=""
              src="/profile.jpg"
              className="w-7 h-7 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="text-primary-1 text-xs">@{userName}</span>
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  placeholder="Leave something to reply"
                  className="w-full outline-none bg-gray-200 dark:bg-white/5 p-1 rounded text-xs"

                />
              </div>
              <div className="flex gap-2">
                {comment.length === 0 ? (
                  <button
                    onClick={() => {
                      setShowComment(false);
                    }}
                    className="bg-primary-1/60 cursor-not-allowed rounded-lg text-xs p-2 px-3 text-white/90"
                  >
                    Reply
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowComment(false);
                    }}
                    className="bg-primary-1 rounded-lg text-xs p-2 px-3 text-white/90"
                  >
                    Reply
                  </button>
                )}
                <button
                  onClick={() => {
                    setShowComment(false);
                  }}
                  className="border rounded-lg dark:text-white/70 dark:border-white/10 text-xs p-2 px-3 text-black/90"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center ml-auto">
        <span className="text-gray-500">{time}</span>
        <div className="h-2 w-2 rounded-full bg-primary-1"></div>
      </div>
    </div>
  );
};

export default CommentComponent;
