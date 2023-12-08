import { BiInfoCircle, BiPlus } from "react-icons/bi";
import { HeaderComponent } from "../../../components";
import { BsInfoCircleFill } from "react-icons/bs";

import { Editor } from "@tinymce/tinymce-react";
const SettingsBasics = ({ active, item }: any) => {
  return (
    <div className="flex flex-col w-full p-3 gap-2">
      <HeaderComponent headerText="Profile Information" rightItem={<></>} />
      <div className="flex gap-3 items-center w-full">
        <img
          alt=""
          src="/profile.jpg"
          className="w-20 h-20 object-cover rounded-full"
        />
        <button className="bg-primary-1 rounded-lg text-white/80 text-xs p-3 px-4 gap-3 items-center flex">
          <BiPlus className="w-5 h-5" />
          Upload new picture
        </button>
        <button className="border p-3 px-4 text-xs font-bold rounded-lg">
          Remove
        </button>
      </div>
      <InputComponent label="Display Name" type="text" />
      <InputComponent label="Email" type="text" />
      <InputComponent label="Location" type="text" />
      <InputComponent label="Bio" className="" type="textarea" />
      <div className="border-t dark border-white/10 my-6"></div>
      <div className="flex flex-col gap-2">
        <HeaderComponent headerText="Login" rightItem={<></>} />
        <InputComponent label="Old Password" className="" type="text" />
        <div className="grid grid-cols-2 gap-2">
          <InputComponent label="New Password" className="" type="text" />
          <InputComponent label="Confirm Password" className="" type="text" />
        </div>
        <button className="p-3 px-6 w-[200px] text-xs rounded-lg border border-black/30 dark:border-white/5">
          Update Password
        </button>
      </div>
      <div className="border-t dark border-white/10 mt-7 my-6"></div>
      <div className="flex flex-col gap-4 w-full">
        <HeaderComponent headerText="Notifications" rightItem={<></>} />
        <InputComponent id="1" label="Product updates and community announcements" type="toggle" />
        <InputComponent id="2" label="Market newsletter" type="toggle" />
        <InputComponent id="3" label="Comments" type="toggle" />
        <InputComponent id="4" label="Purchases" className="" type="toggle" />
      </div>
      <div className="border-t dark border-white/10 mt-7 my-6"></div>
      <div className="flex flex-col gap-2 w-full">
        <HeaderComponent headerText="Payment" rightItem={<></>} />
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            Paypal
            <BsInfoCircleFill className="text-gray-500 w-3 h-3" />
          </div>
          <button className="border rounded-lg border-black/10 dark:border-white/10 p-2 px-4">
            Update
          </button>
        </div>
      </div>
      <div className="border-t dark border-white/10 my-1"></div>
      <div className="flex text-xs flex-col gap-2">
        <div>test@example.com</div>
        <div className="text-gray-500">
          Payout fee is 1% of the amount transferred, with a minimum of USD
          $0.25 and a maximum of USD $20
        </div>
      </div>
      <div className="p-3 px-5 rounded-xl bg-primary-1 text-white/90 w-full sm:w-[100px] flex items-center justify-center mt-5">
        Save
      </div>
    </div>
  );
};

export default SettingsBasics;
interface Prop {
  label: string;
  type: "text" | "richText" | "toggle" | "textarea";
  className?: string | undefined;
  id?: string | undefined;
}
const InputComponent = ({ label, type, className, id = "1" }: Prop) => {
  const normalInput = (
    <label className="flex text-xs flex-col w-full gap-1">
      <span className="flex gap-2 items-center">
        {label}
        <BsInfoCircleFill className="text-gray-500 w-3 h-3" />
      </span>
      <input
        className={`bg-black/5 p-3 dark:bg-white/5 outline-none rounded-lg ${className}`}
        type={type}
      />
    </label>
  );
  const toggle = (
    <div className="flex text-xs justify-between items-center">
      <span className="flex gap-2 items-center">
        {label}
        <BsInfoCircleFill className="text-gray-500 w-3 h-3" />
      </span>
      <label
        htmlFor={id}
        onClick={() => {
          // setToggle(!toggle);
        }}
        className="relative justify-between inline-flex items-center cursor-pointer"
      >
        <input
          id={id}
          type="checkbox"
          value=""
          // checked={toggle}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-black/10 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:border-gray-300 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-1"></div>
      </label>
    </div>
  );
  const textArea = (
    <label className="flex text-xs flex-col w-full gap-1">
      <span className="flex gap-2 items-center">
        {label}
        <BsInfoCircleFill className="text-gray-500 w-3 h-3" />
      </span>
      <Editor
        apiKey="your-api-key"
        // onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Type in here.</p>"
        init={{
          height: 200,
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
    </label>
  );
  let result: any;
  switch (type) {
    case "text":
      result = normalInput;
      break;
    case "richText":
      break;
    case "toggle":
      result = toggle;
      break;
    case "textarea":
      result = textArea;
      break;
    default:
      break;
  }
  return result;
};
