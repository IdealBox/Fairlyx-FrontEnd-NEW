import { useState } from 'react'
import { ChevronDownIcon, CloseIcon, DiamondIcon, HomeIcon, IncomeIcon, PromoteIcon, QuestionIcon, ShopIcon, UserIcon } from '../icons'
import { ListItem } from '../buttons'
import ToggleLightDarkMode from '../buttons/toggle-light-dark-mode'

function DashboardMobileSideBar({onClick}:any) {
    const [selectedItem, setSelected] = useState("home")
    return (
        <div className='flex h-screen w-full bg-white dark:bg-app-neutral-700 lg:min-w-[340px] absolute top-0 left-0 z-10 lg:max-w-[340px] p-6 gap-1 flex-col'>
            <div className='flex w-full justify-between' onClick={()=>{
                onClick()
            }}>
                <CloseIcon className='sm:hidden dark:text-gray-200 flex mt-1 w-14' />
                <img src='/logo.svg' className='w-9' alt='' />
            </div>
            <ListItem isMobile={true} onClick={() => {
                setSelected("home")
            }} selectedItem={selectedItem} item='home' text='Home' className='font-[600] !flex text-gray-600 mt-6' iconLeft={<HomeIcon />} />
            <ListItem isMobile={true} onClick={() => {
                setSelected("products")
            }} selectedItem={selectedItem} item='products' text='Products' iconRight={<ChevronDownIcon className='' />} className='font-[600] text-gray-600' iconLeft={<DiamondIcon />} />
            <ListItem isMobile={true} onClick={() => {
                setSelected("customers")
            }} selectedItem={selectedItem} item='customers' text='Customers' iconRight={<ChevronDownIcon className='' />} className='font-[600] text-gray-600' iconLeft={<UserIcon />} />
            <ListItem isMobile={true} onClick={() => {
                setSelected("shops")
            }} selectedItem={selectedItem} item='shops' text='Shop' className='font-[600] text-gray-600' iconLeft={<ShopIcon />} />
            <ListItem isMobile={true} onClick={() => {
                setSelected("income")
            }} selectedItem={selectedItem} item='income' text='Income' iconRight={<ChevronDownIcon className='' />} className='font-[600] text-gray-600' iconLeft={<IncomeIcon />} />
            <ListItem isMobile={true} onClick={() => {
                setSelected("promote")
            }} selectedItem={selectedItem} item='promote' text='Promote' className='font-[600] text-gray-600' iconLeft={<PromoteIcon />} />
            <div className='mt-auto flex pt-2 flex-col gap-2 border-t'>
                <ListItem isMobile={true} onClick={() => {
                    setSelected("help")
                }} selectedItem={selectedItem} isDropdown={false} item='help' text='Help & getting started' className='font-[600] text-gray-600' iconLeft={<QuestionIcon />} iconRight={<div className='w-6 h-6 font-bold flex items-center justify-center rounded-lg bg-purple-300'>8</div>} />
                <ToggleLightDarkMode isSmallScreen={true} />
            </div>
        </div>
    )
}

export default DashboardMobileSideBar