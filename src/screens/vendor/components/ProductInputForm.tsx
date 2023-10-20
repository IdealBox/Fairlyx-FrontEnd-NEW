import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { BiUpload } from "react-icons/bi";
import { BsArrowLeft, BsInfoCircleFill } from "react-icons/bs";
import { HeaderComponent } from "../../../components";
import { CloseIcon } from "../../../components/icons";
const ProductsInputForm = () => {
  return (
    <div className="flex  dark:text-gray-300 flex-col gap-2 w-full">
      <div className="w-full bg-white dark:bg-app-neutral-700 flex flex-col gap-5 rounded-lg p-4">
        <HeaderComponent
          headerText="Name & description"
          rightItem={
            <button className="flex items-center p-2  gap-3 dark:border-[#ffffff20] border-[#00000020] font-bold border rounded-lg">
              <BsArrowLeft /> Back
            </button>
          }
        />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Product Title <BsInfoCircleFill className="text-gray-400" />{" "}
            <div className=" p-2 rounded dark:bg-[#ffffff10] bg-app-neutral-700 text-white text-[10px] sm:text-sm">
              Maximum 100 characters. No HTML or emoji allowed
            </div>
          </div>
          <input
            placeholder="Enter title"
            className="w-full rounded-lg p-3 bg-gray-100 outline-none dark:bg-app-neutral-600"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Description <BsInfoCircleFill className="text-gray-400" />{" "}
            {/* <div className=" p-2 rounded bg-app-neutral-700 text-white text-sm">
              Maximum 100 characters. No HTML or emoji allowed
            </div> */}
          </div>
          <Editor
            apiKey="your-api-key"
            // onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Type in here.</p>"
            init={{
              height: 500,
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
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Key features <BsInfoCircleFill className="text-gray-400" />{" "}
            {/* <div className=" p-2 rounded bg-app-neutral-700 text-white text-sm">
              Maximum 100 characters. No HTML or emoji allowed
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <input
              placeholder="value"
              className="w-full rounded-lg p-3 bg-gray-100 outline-none dark:bg-app-neutral-600"
            />
            <input
              placeholder="value"
              className="w-full rounded-lg p-3 bg-gray-100 outline-none dark:bg-app-neutral-600"
            />
            <input
              placeholder="value"
              className="w-full rounded-lg p-3 bg-gray-100 outline-none dark:bg-app-neutral-600"
            />
            <input
              placeholder="value"
              className="w-full rounded-lg p-3 bg-gray-100 outline-none dark:bg-app-neutral-600"
            />
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full bg-white dark:bg-app-neutral-700 flex flex-col gap-5 rounded-lg p-4">
        <HeaderComponent headerText="Images & CTA" rightItem={<></>} />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Cover images <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <label
            htmlFor="f"
            className="w-full rounded-lg bg-gray-200 dark:bg-app-neutral-600 h-32 flex items-center justify-center"
          >
            <button className="flex items-center gap-3 p-2 bg-gray-100 dark:bg-app-neutral-700 rounded-lg">
              <BiUpload className="w-7 h-7" />
              Click or drop image
            </button>
            <input
              type="file"
              className="absolute hidden text-transparent"
              id="f"
            />
          </label>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Dropdown <BsInfoCircleFill className="text-gray-400" />{" "}
            {/* <div className=" p-2 rounded bg-app-neutral-700 text-white text-sm">
              Maximum 100 characters. No HTML or emoji allowed
            </div> */}
          </div>
          <select className="p-3 border dark:border-app-neutral-600 border-gray-200 bg-transparent rounded-lg">
            <option>Purchase now</option>
            <option>Purchase now</option>
            <option>Purchase now</option>
            <option>Purchase now</option>
            <option>Purchase now</option>
          </select>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-app-neutral-700 flex flex-col gap-5 rounded-lg p-4">
        <HeaderComponent headerText="Price" rightItem={<></>} />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Amount <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <div className="border-2 dark:border-app-neutral-600 rounded-lg flex w-full">
            <button className="p-3 px-6 rounded-l bg-gray-200 dark:bg-app-neutral-600">
              $
            </button>
            <input className="w-full px-4 rounded-r bg-transparent outline-none" />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 border-b dark:border-app-neutral-600 pb-4 items-center">
            Allow customers to pay what they want{" "}
            <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <div className="grid gap-3 grid-cols-2">
            <div>
              Minimum amount
              <div className="border-2 dark:border-app-neutral-600 rounded-lg flex w-full">
                <button className="p-3 px-6 rounded-l dark:bg-app-neutral-600 bg-gray-200">
                  $
                </button>
                <input className="w-full px-4 rounded-r bg-transparent outline-none" />
              </div>
            </div>
            <div>
              Suggested amount
              <div className="border-2 dark:border-app-neutral-600 rounded-lg flex w-full">
                <button className="p-3 px-6 rounded-l dark:bg-app-neutral-600 bg-gray-200">
                  $
                </button>
                <input className="w-full px-4 rounded-r bg-transparent outline-none" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-full bg-white dark:bg-app-neutral-700 flex flex-col gap-5 rounded-lg p-6">
        <HeaderComponent
          headerText="Category and attributes"
          rightItem={<></>}
        />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Category <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <select className="p-3 border dark:border-app-neutral-600 border-gray-200 bg-transparent rounded-lg">
            <option>Purchase now</option>
            <option>Purchase now</option>
            <option>Purchase now</option>
            <option>Purchase now</option>
            <option>Purchase now</option>
          </select>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 items-center">
            Compatibility <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <div className="grid w-full grid-cols-3 gap-3">
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Sketch
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              WordPress
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Procreate
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Figma
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              HTML
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Illustrator
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Adobe XD
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Keynote
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Framer
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Photoshop
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Maya
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              In Design
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Cinema 4D
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              Blender
            </label>
            <label
              htmlFor="one"
              className="flex items-center gap-3 dark:text-gray-300 text-sm"
            >
              <input type="checkbox" className="p-2 w-5 h-5 rounded-lg" />
              After Effect
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Tags <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <div className="w-full bg-gray-200 dark:bg-[#ffffff10] rounded-lg flex">
            <div className="rounded-lg bg-primary-1 flex text-white p-3 gap-3">
              Geometry <CloseIcon className="" />
            </div>
            <input className="w-full bg-transparent outline-none p-3 " />
          </div>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-app-neutral-700 flex flex-col gap-5 rounded-lg p-4">
        <HeaderComponent headerText="Product files" rightItem={<></>} />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Content <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <label
            htmlFor="f"
            className="w-full rounded-lg bg-gray-200 dark:bg-app-neutral-600 h-32 flex items-center justify-center"
          >
            <button className="flex items-center gap-3 p-2 bg-gray-100 dark:bg-app-neutral-700 rounded-lg">
              <BiUpload className="w-7 h-7" />
              Click or drop file
            </button>
            <input
              type="file"
              className="absolute hidden text-transparent"
              id="f"
            />
          </label>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Fonts <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <label
            htmlFor="f"
            className="w-full rounded-lg bg-gray-200 dark:bg-app-neutral-600 h-32 flex items-center justify-center"
          >
            <button className="flex items-center gap-3 p-2 bg-gray-100 dark:bg-app-neutral-700 rounded-lg">
              <BiUpload className="w-7 h-7" />
              Click or drop file
            </button>
            <input
              type="file"
              className="absolute hidden text-transparent"
              id="f"
            />
          </label>
        </div>
      </div>
      <div className="w-full bg-white dark:bg-app-neutral-700 flex flex-col gap-5 rounded-lg p-4">
        <HeaderComponent headerText="Discussion" rightItem={<></>} />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2 items-center">
            Message to reviewer <BsInfoCircleFill className="text-gray-400" />{" "}
          </div>
          <Editor
            apiKey="your-api-key"
            // onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Type in here.</p>"
            init={{
              height: 500,
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
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; } ",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsInputForm;
