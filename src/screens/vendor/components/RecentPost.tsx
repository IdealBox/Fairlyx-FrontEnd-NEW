import { useEffect, useState } from "react";

import Dropdown from "../../../components/forms/Dropdown";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsArrowRight, BsArrowUp } from "react-icons/bs";
import { BiCamera, BiImage, BiVideo } from "react-icons/bi";
import { HeaderComponent } from "../../../components";
import { MdClose } from "react-icons/md";

const RecentPosts = () => {
  const [selectedValue, setSelectedValue] = useState({
    value: "All time",
    id: "1",
    type: "",
  });
  const [showNewPost, setShowNewPost] = useState(false);

  const [photo, setPhoto] = useState<any>();

  const [photoDisplay, setPhotoDisplay] = useState<any>();
  useEffect(() => {
    // const frameElement: any = document.getElementById("iframeView");
    if (photo) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // frameElement.src = e.target?.result;
        console.log("Debug", e.target?.result);
        setPhotoDisplay(e.target?.result);
      };
      reader.readAsDataURL(photo);
    }
  }, [photoDisplay, photo]);
  return (
    <div className="bg-white dark:bg-app-neutral-700 p-5 max-w-[1000px] w-full rounded-xl flex flex-col gap-5">
      <header className="flex items-center w-full justify-between">
        <div>
          <h1 className="text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2">
            Recent Posts
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Dropdown
            data={[
              { value: "All time", type: "", id: "1" },
              { value: "Last month", type: "", id: "2" },
              { value: "September", type: "", id: "3" },
            ]}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <button
            onClick={() => {
              setShowNewPost(true);
              console.log(showNewPost);
            }}
            className="p-2 px-4 rounded-lg bg-primary-1 text-xs font-bold text-white/90"
          >
            New Post
          </button>
        </div>
      </header>
      {showNewPost && (
        <div className="fixed top-0 flex items-center justify-center left-0 w-full h-screen">
          <div
            onClick={() => {
              setShowNewPost(false);
            }}
            className="bg-gray-200/70 fixed top-0 left-0 z-20 w-full h-screen"
          ></div>
          <div className="bg-white z-30 max-w-[400px] w-full flex flex-col gap-2 m-4 rounded-xl p-4">
            <HeaderComponent
              headerText="New Post"
              rightItem={
                <MdClose
                  className="cursor-pointer"
                  onClick={() => {
                    setShowNewPost(false);
                  }}
                />
              }
            />
            <div className="flex gap-2">
              <div>
                <img
                  src="/profile.jpg"
                  alt=""
                  className="w-7 h-7 rounded-full object-cover"
                />
                <RiFacebookCircleFill className="absolute -mt-3 ml-3 text-primary-1 bg-white rounded-full" />
              </div>
              <div>
                <img
                  src="/profile.jpg"
                  alt=""
                  className="w-7 h-7 rounded-full object-cover"
                />
                <RiFacebookCircleFill className="absolute -mt-3 ml-3 text-primary-1 bg-white rounded-full" />
              </div>
            </div>
            <textarea
              className="columns-3 outline-none"
              placeholder="What you would like to share"
            />
            <img src={photoDisplay} alt="" />
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-5">
                <label htmlFor="image" className=" cursor-pointer">
                  <input
                    type="file"
                    onChange={(e) => {
                      setPhoto(e.target?.files ? e.target?.files[0] : "");
                    }}
                    className="hidden"
                    id="image"
                  />
                  <BiCamera />
                </label>
                <label htmlFor="image" className=" cursor-pointer">
                  <input
                    type="file"
                    onChange={(e) => {
                      setPhoto(e.target?.files ? e.target?.files[0] : "");
                    }}
                    className="hidden"
                    id="image"
                  />
                  <BiVideo />
                </label>
              </div>
              <button className="flex gap-2 text-white/90 items-center p-2 px-3 rounded-lg bg-primary-1 text-xs font-bold">
                Post
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="hidden sm:grid px-2 text-gray-500 text-xs grid-cols-6 gap-2 w-full">
        <div>Post</div>
        <div></div>
        <div>Distribution</div>
        <div>Link clicks</div>
        <div>Views</div>
        <div>Engagement</div>
      </div>
      {
        <div className="hidden sm:grid dark:hover:bg-white/10 items-start cursor-pointer text-gray-500 border-y border-y-gray-200 dark:border-y-gray-200/10 py-4 hover:bg-gray-200/40 px-2 text-xs grid-cols-6 gap-2 w-full">
          <div className="w-24 h-24">
            <img
              src="/profile.jpg"
              className="w-full h-full object-cover rounded-xl"
              alt=""
            />
            <BiImage className="relative ml-1 -mt-[92px] bg-white rounded-xl w-8 h-8 p-1" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold text-[14px] dark:text-white text-black">
              HTML version has been released
            </div>
            <div className="flex gap-2 text-gray-400">
              <RiFacebookCircleFill className="w-7 h-7 cursor-pointer" />{" "}
              <AiFillTwitterCircle className="w-7 h-7 cursor-pointer" />
            </div>
          </div>
          <div className="p-1 px-2 font-bold w-[60px] flex items-center justify-center rounded-lg bg-secondary-4 text-black">
            +1.2X
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="p-1 bg-gray-300 text-black rounded-lg">23</div>
              <div className="bg-primary-1 h-4 w-11 rounded"></div>
            </div>
            <div className="text-primary-2 text-xs flex gap-1 items-center">
              <BsArrowUp />
              23.7%
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="p-1 bg-gray-300 text-black rounded-lg">23</div>
              <div className="bg-primary-1 h-4 w-11 rounded"></div>
            </div>
            <div className="text-primary-2 text-xs flex gap-1 items-center">
              <BsArrowUp />
              23.7%
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="p-1 bg-gray-300 text-black rounded-lg">23</div>
              <div className="bg-primary-1 h-4 w-11 rounded"></div>
            </div>
            <div className="text-primary-2 text-xs flex gap-1 items-center">
              <BsArrowUp />
              23.7%
            </div>
          </div>
        </div>
      }
      {
        <div className="flex sm:hidden text-gray-500 border-y border-y-gray-200 dark:border-y-gray-200/10 py-4 text-xs flex-col gap-1 w-full">
          <div className="flex gap-2 w-full">
            <div className="w-24 h-24">
              <img
                src="/profile.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
              <BiImage className="relative ml-1 -mt-[92px] bg-white rounded-xl w-8 h-8 p-1" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="font-bold text-base dark:text-white text-black">
                HTML version has been released
              </div>
              <div className="flex gap-2 text-gray-400">
                <RiFacebookCircleFill className="w-7 h-7 cursor-pointer" />{" "}
                <AiFillTwitterCircle className="w-7 h-7 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center w-full">
            <div className="w-[100px]">Distribution</div>
            <div className="p-1 px-2 font-bold w-[60px] flex items-center justify-center rounded-lg bg-secondary-4 text-black">
              +1.2X
            </div>
          </div>
          <div className="flex gap-2 items-center w-full">
            <div className="w-[100px]">Link clicks</div>

            <div className="flex gap-1">
              <div className="flex items-center gap-1">
                <div className="p-1 bg-gray-300 text-black rounded-lg">23</div>
                <div className="bg-primary-1 h-4 w-11 rounded"></div>
              </div>
              <div className="text-primary-2 text-xs flex gap-1 items-center">
                <BsArrowUp />
                23.7%
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center w-full">
            <div className="w-[100px]">Views</div>
            <div className="flex gap-1">
              <div className="flex items-center gap-1">
                <div className="p-1 bg-gray-300 text-black rounded-lg">23</div>
                <div className="bg-primary-1 h-4 w-11 rounded"></div>
              </div>
              <div className="text-primary-2 text-xs flex gap-1 items-center">
                <BsArrowUp />
                23.7%
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center w-full">
            <div className="w-[100px]">Engagement</div>
            <div className="flex gap-1">
              <div className="flex items-center gap-1">
                <div className="p-1 bg-gray-300 text-black rounded-lg">23</div>
                <div className="bg-primary-1 h-4 w-11 rounded"></div>
              </div>
              <div className="text-primary-2 text-xs flex gap-1 items-center">
                <BsArrowUp />
                23.7%
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default RecentPosts;
