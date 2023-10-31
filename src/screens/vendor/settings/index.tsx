import { useSearchParams } from "react-router-dom";
import SettingsBasics from "./SettingsBasics";
import SettingsSideBar from "./SettingsSideBar";

const SettingsScreen = () => {
    const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col w-full p-5 overflow-scroll gap-4 text-black dark:text-white">
      <div className="text-3xl font-bold">Settings</div>
      <div className="flex md:flex-row flex-col gap-4 bg-white rounded-xl dark:bg-app-neutral-700 p-5">
        <SettingsSideBar />
        {searchParams.get("tab") === "basics" && <SettingsBasics />}
      </div>
    </div>
  );
};

export default SettingsScreen;
