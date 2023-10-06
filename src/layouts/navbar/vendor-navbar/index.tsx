import { useState } from "react"
import { MessageIcon, NotificationIcon, PlusIcon, SearchIcon } from "../../../components/icons"
import MenuIcon from "../../../components/icons/menu-icon"
import DashboardMobileSideBar from "../../sidebar/vendor-mobile-sidebar"

function VendorNavbar() {
    const [mobileNav, setMobileNav] = useState(false)
    return (
        <div className='flex w-full bg-white items-center justify-between px-7 py-3'>
            {mobileNav && <DashboardMobileSideBar  onClick={() => {
                setMobileNav(!mobileNav)
            }} />}
            <MenuIcon onClick={() => {
                setMobileNav(!mobileNav)
            }} className="flex sm:hidden cursor-pointer" />
            <div className="sm:bg-gray-100 flex items-center rounded-lg p-2">
                <SearchIcon className="text-gray-500 mx-2" />
                <input type="text" className="bg-transparent hidden sm:flex w-[250px] outline-none" placeholder="Search or type a command" />
                <div className="font-[700] bg-white hidden sm:flex rounded-lg px-6 py-[5px]">F</div>
            </div>
            <div className="flex items-center gap-6">
                <button className="hidden lg:flex text-white bg-blue-600 gap-1 rounded-lg px-3 py-3 items-center border-none justify-between">
                    <PlusIcon />
                    Create
                </button>
                <div className="flex">
                    <div className="w-3 h-3 absolute border-2 ml-3 border-white rounded-full bg-orange-600"></div>
                    <MessageIcon />
                </div>
                <div className="flex">
                    <div className="w-3 h-3 absolute border-2 ml-3 border-white rounded-full bg-orange-600"></div>
                    <NotificationIcon />
                </div>

                <div className="w-10 h-10 rounded-full bg-gray-500 "></div>
            </div>
        </div>
    )
}

export default VendorNavbar