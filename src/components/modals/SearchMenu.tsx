import { BiChevronRight } from "react-icons/bi"
import { CloseIcon } from "../icons"
import { HiArrowLeft } from "react-icons/hi2"
import { RiCloseCircleFill } from "react-icons/ri"
export function SearchMenu({ onClick, setSearchText, searchText, searchMenu, setSearchMenu }: SearchModalTypes) {
    return (
        <div onClick={() => {
            onClick()
        }} className=" bg-white dark:bg-app-neutral-500 -z-0 absolute sm:pt-16 p-5 flex flex-col gap-4 left-0 sm:left-auto sm:-ml-2 shadow-xl shadow-[#0000004d] rounded-xl sm:w-[350px] top-3 w-full">
            <div className={`sm:bg-gray-100 border-2 p-1 border-primary-1 flex z-[1] sm:hidden items-center rounded-xl`}>
                <HiArrowLeft onClick={() => {
                    setSearchText("")
                    setSearchMenu(false)
                }} className="text-primary-1 w-5 cursor-pointer h-5 font-bold mx-2" />
                <input type="text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} className={`bg-transparent p-2 rounded-2xl flex w-full outline-none`} placeholder="Search or type a command" />
                <RiCloseCircleFill onClick={() => {
                    setSearchText("")
                    setSearchMenu(false)
                }} className="w-5 text-gray-400 cursor-pointer h-5 mx-2" />

            </div>
            <div className="font-[600] text-[12px] text-gray-400">Recent search</div>
            {Array(2).fill(1).map((_, index) => <div key={index} className="flex justify-between gap-3 items-center">
                <div className="min-w-[48px] h-12 bg-gray-400 rounded-xl"></div>
                <div className="flex flex-col w-full">
                    <div className="text-gray-400 font-[600] text-[13px]">Small caption</div>
                    <div className="text-sm font-[600]">Put your text here</div>
                </div>
                <CloseIcon className="text-gray-400 min-w-[28px] h-7" />
            </div>)}
            <div className="border-t"></div>
            <div className="font-[600] text-[12px] text-gray-400">Suggestions</div>
            {Array(2).fill(1).map((_, index) => <div key={index} className="flex justify-between gap-3 items-center">
                <div className="min-w-[48px] h-12 rounded-full border border-gray-400"></div>
                <div className="flex flex-col w-full">
                    <div className="text-sm font-[600]">Put your text here</div>
                    <div className="text-gray-400 font-[600] text-[13px]">Small caption</div>
                </div>
                <BiChevronRight className="text-gray-400 min-w-[28px] h-7" />
            </div>)}
        </div>
    )
}