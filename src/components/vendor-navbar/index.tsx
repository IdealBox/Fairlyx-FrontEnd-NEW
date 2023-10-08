import { useState } from "react"
import { MessageIcon, NotificationIcon, PlusIcon, SearchIcon } from "../icons"
import MenuIcon from "../icons/menu-icon"
import DashboardMobileSideBar from "../vendor-mobile-sidebar"
import { ProfileMenu, SearchMenu } from "../modals"
import { RiCloseCircleFill } from "react-icons/ri"
import { HiArrowLeft } from "react-icons/hi2"

function VendorNavbar() {
    const [mobileNav, setMobileNav] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [searchMenu, setSearchMenu] = useState(false)
    const [searchText, setSearchText] = useState("")
    return (
        <div className='flex w-full bg-white items-center justify-between px-7 py-3'>
            {mobileNav && <DashboardMobileSideBar onClick={() => {
                setMobileNav(!mobileNav)
            }} />}
            <MenuIcon onClick={() => {
                setMobileNav(!mobileNav)
            }} className="flex sm:hidden cursor-pointer" />
            <div className="flex">
                <SearchIcon onClick={() => {
                    setSearchMenu(true)
                }} className="text-gray-500 flex sm:hidden cursor-pointer mx-2" />
                <div className={`sm:bg-gray-100 ${searchMenu || searchText.length > 0 ? "border-2 !bg-white" : ""} p-1 border-primary-1 hidden z-[1] sm:flex items-center rounded-xl`}>
                    {searchMenu || searchText.length === 0 ? <SearchIcon onClick={() => {
                        setSearchMenu(true)
                    }} className="text-gray-500 cursor-pointer mx-2" /> : <HiArrowLeft onClick={() => {
                        setSearchText("")
                    }} className="text-primary-1 w-5 cursor-pointer h-5 font-bold mx-2" />}
                    <input type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} className={`bg-transparent p-2 rounded-2xl hidden sm:flex w-[250px] outline-none`} placeholder="Search or type a command" />
                    {searchMenu || searchText.length === 0 ? <div className="font-[700] bg-white hidden sm:flex rounded-lg px-6 py-[5px]">F</div> : <RiCloseCircleFill onClick={() => {
                        setSearchText("")
                    }} className="w-5 text-gray-400 cursor-pointer h-5 mx-2" />}

                </div>
                {(searchMenu || searchText.length > 0) && <SearchMenu setSearchMenu={setSearchMenu} searchMenu={searchMenu} setSearchText={setSearchText} searchText={searchText} onClick={() => {
                    setSearchText("")
                }} />}
            </div>
            {!searchMenu && <div className="flex items-center gap-6">
                <button className="hidden lg:flex text-white bg-primary-1 gap-1 rounded-lg px-3 py-2 items-center border-none justify-between">
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

                <div className="w-10 h-10 rounded-full bg-gray-500 " onClick={() => {
                    setMobileMenu(!mobileMenu)
                }}></div>
                {mobileMenu && <ProfileMenu onClick={() => {
                    setMobileMenu(!mobileMenu)
                }} />}
            </div>}
        </div>
    )
}

export default VendorNavbar