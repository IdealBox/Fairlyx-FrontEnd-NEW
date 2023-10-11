import { BiBarChart, BiGrid } from "react-icons/bi";
import { ListItem } from "../buttons";
import { HiChartBarSquare, HiTicket } from "react-icons/hi2";
import { CloseIcon } from "../icons";

export function ProfileMenu({ onClick }: any) {
    return (
        <div className=" sm:w-[250px] p-3 flex flex-col gap-6 absolute sm:left-auto left-0 w-full sm:right-4 top-0 h-screen sm:h-auto sm:bg-transparent sm:top-[70px]">
            <div className='flex w-full sm:hidden justify-between' onClick={() => {
                onClick()
            }}>
                <CloseIcon onClick={() => {
                    onClick()
                }} className='sm:hidden flex mt-1 w-14' />
                <img src='logo.svg' className='w-9' onClick={() => {
                    onClick()
                }} />
            </div>
            <div onClick={() => {
                onClick()
            }} className="rounded-xl bg-white p-6 gap-1 w-full dark:bg-app-neutral-600 flex flex-col shadow-[#00000057] shadow-xl">
                <ListItem onClick={() => { }} isMobile={true} className="bg-white !p-2 text-[12px] !gap-2 hover:bg-gray-100 hover:text-black text-gray-500 font-[700] !rounded-md shadow-none" text="Profile" />
                <ListItem onClick={() => { }} isMobile={true} className="bg-white !p-2 text-[12px] !gap-2 hover:bg-gray-100 hover:text-black text-gray-500 font-[700] !rounded-md shadow-none" text="Edit Profile" />
                <div className="border-t"></div>
                <ListItem onClick={() => { }} isMobile={true} className="bg-white !p-2 text-[12px] !gap-2 hover:bg-gray-100 items-center hover:text-black text-gray-500 font-[700] !rounded-md shadow-none" iconLeft={<HiChartBarSquare className="w-6 h-6" />} text="Analytics" />
                <ListItem onClick={() => { }} isMobile={true} className="bg-white !p-2 text-[12px] !gap-2 hover:bg-gray-100 hover:text-black text-gray-500 font-[700] !rounded-md shadow-none" iconLeft={<HiTicket className="w-6 h-6" />} text="Affiliate center" />
                <ListItem onClick={() => { }} isMobile={true} className="bg-white !p-2 text-[12px] !gap-2 hover:bg-gray-100 hover:text-black text-gray-500 font-[700] !rounded-md !flex !items-center  shadow-none" iconLeft={<BiGrid className="w-6 h-6" />} text="Explore authors" />
                <div className="border-t"></div>
                <ListItem onClick={() => { }} isMobile={true} className="bg-white !p-2 text-[12px] !gap-2 hover:bg-gray-100 hover:text-black text-primary-4 font-[700] py-3 shadow-none" iconLeft={<BiBarChart className="w-6 h-6" />} text="Upgrade to pro" />
                <div className="border-t"></div>
                <ListItem onClick={() => { }} isMobile={true} className="bg-white !p-2 text-[12px] !gap-2 hover:bg-gray-100 hover:text-black text-gray-500 font-[700] !rounded-md shadow-none" text="Account setting" />
                <ListItem onClick={() => { }} isMobile={true} className="bg-white !p-2 text-[12px] !gap-2 hover:bg-gray-100 hover:text-black text-gray-500 font-[700] !rounded-md shadow-none" text="Log out" />
            </div></div>
    )
}