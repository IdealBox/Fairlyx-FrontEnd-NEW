import { useState } from "react";
import AppBarChart from "./components/AppBarChart";
import Overview from "./components/Overview";
import Dropdown from "../../../components/forms/Dropdown";
import { HeaderComponent } from "../../../components";
import { CloseIcon } from "../../../components/icons";
import { BiCheck } from "react-icons/bi";
import { BsInfo } from "react-icons/bs";
import { Editor } from "@tinymce/tinymce-react";

const Refunds = () => {
  const [toggle, setToggle] = useState<any>(false);
  const [showRefundModal, setShowRefundModal] = useState<any>(false);
  //   const list = [
  //     {
  //       date: "Fri, Apr 9",
  //       status: "Pending",
  //       count: "28",
  //       Refundss: "$3,140.00",
  //     },
  //     {
  //       date: "Sat, Apr 10",
  //       status: "Paid",
  //       count: "24",
  //       Refundss: "$2,568.00",
  //     },
  //     {
  //       date: "Sun, Apr 11",
  //       status: "Pending",
  //       count: "16",
  //       Refundss: "$1,375.88",
  //     },
  //   ];
  return (
    <div className="flex flex-col gap-3 w-full p-4">
      <div className="text-2xl dark:text-white/60 font-bold">Refunds</div>
      <div className="flex bg-white dark:bg-app-neutral-700 flex-col rounded-xl gap-3 w-full">
        <div className=" dark:bg-app-neutral-700 rounded-xl w-full p-5 flex flex-col gap-5">
          <header className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <div>
              <h1
                className={
                  "text-gray-800 dark:text-app-neutral-50 text-lg font-semibold before:content-['m']before:rounded-lg before:w-4 before:aspect-[2/4] before:bg-red-200 before:rounded-sm flex items-center gap-2"
                }
              >
                Refund Requests
              </h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setToggle(false);
                }}
                className={
                  !toggle
                    ? "p-2 px-4 rounded-lg bg-black/10 dark:bg-white/10 dark:text-white/60"
                    : "p-2 px-4 rounded-lg dark:text-white/40"
                }
              >
                Open Requests
              </button>
              <button
                onClick={() => {
                  setToggle(true);
                }}
                className={
                  toggle
                    ? "p-2 px-4 rounded-lg bg-black/10 dark:bg-white/10 dark:text-white/60"
                    : "p-2 px-4 rounded-lg dark:text-white/40"
                }
              >
                Closed Requests
              </button>
            </div>
          </header>
        </div>
        <div className="bg-white hidden sm:flex flex-col dark:text-white/80 dark:bg-app-neutral-700 p-5">
          <div className="flex justify-between pb-2 border-b dark:border-b-white/10 text-black/50 dark:text-white/60 gap-3">
            <div className=" w-[200px]">Product</div>
            <div className=" w-[120px] hidden md:flex">Status</div>
            <div className=" w-[140px]">Date</div>
            <div className=" w-[200px]">Customer</div>
          </div>
          <div
            onClick={() => {
              setShowRefundModal(true);
            }}
            className="flex justify-between border-y hover:bg-black/10 dark:hover:bg-white/10 border-y-black/10 p-2 text-black/50 items-start dark:text-white/60 gap-3"
          >
            <div className="flex gap-2 w-[200px]">
              <img src="/guitar.jpg" className="w-20 rounded-xl h-20" alt="" />
              <div className="flex flex-col">
                <div>Bento Matte 3D illustraton</div>
                <div>UI design kit</div>
              </div>
            </div>
            <div className="p-2 w-[140px] text-black items-center justify-center hidden md:flex text-center rounded-lg bg-secondary-4">
              New Request
            </div>
            <div className=" w-[140px]">12 Sep</div>
            <div className="flex w-[200px] items-center gap-3">
              <img
                src="/guitar.jpg"
                className="w-10 h-10 object-cover border rounded-full"
                alt=""
              />
              <div>Kyler Kuphal</div>
            </div>
          </div>
        </div>
        <div className="sm:hidden w-full dark:text-white/50 px-5 justify-between flex gap-3">
          <div className="flex gap-2">Product</div>
          <div>Customer</div>
        </div>
        <div
          onClick={() => {
            setShowRefundModal(true);
          }}
          className="sm:hidden dark:text-white/50 w-full p-5 justify-between flex gap-3"
        >
          <div className="flex gap-2">
            <img src="/guitar.jpg" className="w-20 rounded-xl h-20" alt="" />
            <div className="flex w-[140px] flex-col">
              <div>Bento Matte 3D illustraton</div>
              <div className="p-1 w-[140px] text-black text-center rounded-lg bg-secondary-4">
                New Request
              </div>
            </div>
          </div>
          <img src="/guitar.jpg" className="w-10 rounded-full h-10" alt="" />
        </div>
      </div>
      {showRefundModal && (
        <div className="absolute top-0 left-0 w-full md:h-screen p-5 bg-black/30 backdrop-blur-sm dark:bg-white/10 z-70 flex md:items-center justify-center">
          <div
            onClick={() => {
              setShowRefundModal(false);
            }}
            className="fixed top-0 left-0 w-full h-screen z-40"
          ></div>
          <div className="max-w-[800px] z-50 flex flex-col gap-9 rounded-xl bg-white w-full shadow-xl p-6 dark:bg-app-neutral-800">
            <HeaderComponent
              headerText="Refund request"
              rightItem={
                <CloseIcon
                  onClick={() => {
                    setShowRefundModal(false);
                  }}
                  className="rounded-full cursor-pointer bg-black/10 dark:bg-white/10 p-1 w-12 h-12"
                />
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
              <div className="w-full flex dark:bg-app-neutral-700 p-4 rounded-xl flex-col">
                <div className="flex gap-2">
                  <img
                    src="/guitar.jpg"
                    className="w-20 rounded-xl h-20"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="font-bold dark:text-white/70">Bento Matte 3D illustraton</div>
                    <div className="p-1 w-[140px] text-black text-center rounded-lg bg-secondary-4">
                      New Request
                    </div>
                  </div>
                </div>
                <div className="flex text-black dark:text-white py-2 border-b border-b-black/10 dark:border-b-white/10 justify-between items-center">
                  <div className="text-black/50 dark:text-white/50">
                    Request Sent
                  </div>
                  <div className="">Aug 20 2021</div>
                </div>
                <div className="flex text-black dark:text-white py-2 border-b border-b-black/10 dark:border-b-white/10 justify-between items-center">
                  <div className="text-black/50 dark:text-white/50">Reason</div>
                  <div className="">Download link is broken.</div>
                </div>
                <div className="flex text-black dark:text-white py-2 border-b border-b-black/10 dark:border-b-white/10 justify-between items-center">
                  <div className="text-black/50 dark:text-white/50">
                    Product downloaded
                  </div>
                  <div className="">Yes</div>
                </div>
                <div className="flex text-black dark:text-white py-2 border-b border-b-black/10 dark:border-b-white/10 justify-between items-center">
                  <div className="text-black/50 dark:text-white/50">
                    Purchase date
                  </div>
                  <div className="">Aug 20 2021</div>
                </div>
                <div className="flex text-black dark:text-white py-2 border-b border-b-black/10 dark:border-b-white/10 justify-between items-center">
                  <div className="text-black/50 dark:text-white/50">
                    Purchase code
                  </div>
                  <div className="">addfk453-343lkjtes-lrtkert</div>
                </div>
                <div className="flex text-black dark:text-white py-2 border-b border-b-black/10 dark:border-b-white/10 justify-between items-center">
                  <div className="text-black/50 dark:text-white/50">
                    Request Id
                  </div>
                  <div className="">addfk453-343lkjtes-lrtkert</div>
                </div>
                <div className="flex text-black dark:text-white py-2 border-b border-b-black/10 dark:border-b-white/10 justify-between items-center">
                  <div className="text-black/50 dark:text-white/50">
                    Market fee
                  </div>
                  <div className="">$7.28</div>
                </div>
                <div className="flex text-black dark:text-white py-2 border-b border-b-black/10 dark:border-b-white/10 justify-between items-center">
                  <div className="text-black/50 dark:text-white/50">Price</div>
                  <div className="">$72.88</div>
                </div>
                <div className="w-full grid grid-cols-2 gap-2 pt-2">
                  <button className="border dark:border-transparent rounded-lg dark:text-white/70 p-3 w-full">
                    Decline refund
                  </button>
                  <button className="bg-primary-1 text-white/80 rounded-lg p-3 w-full">
                    Give refund
                  </button>
                </div>
              </div>
              <div className="w-full flex gap-3 dark:text-white/70 flex-col">
                <div className="font-bold text-xl">Suggestions</div>
                <div className="flex items-center gap-3">
                  <BiCheck className="w-7 h-7" />
                  <div>Talk to customer to see if you can help</div>
                </div>
                <div className="flex items-center gap-3">
                  <BiCheck className="w-7 h-7" />
                  <div>If not, approve or decline the request</div>
                </div>
                <div className="font-bold text-xl">Download link is broken</div>
                <div>
                  &quot;I can't download your item at all. I even tried to
                  change the DNS and VPN and it still doesn't work.&quot;
                </div>
                <div className="flex items-center gap-3">
                  <img src="/profile.jpg" alt="" />
                  <div className="font-bold text-md">Eldred Lockman</div>
                </div>
                <div className="flex items-center text-black/40 text-md gap-3 font-bold">
                  Send message{" "}
                  <BsInfo className="text-white bg-black/40 w-4 h-4 rounded-full" />
                </div>
                <Editor
                  apiKey="your-api-key"
                  // onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>Type in here.</p>"
                  init={{
                    height: 150,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Refunds;
