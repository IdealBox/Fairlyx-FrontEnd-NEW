import { useState } from 'react'
import { ChevronDownIcon, DiamondIcon, HomeIcon, IncomeIcon, PromoteIcon, QuestionIcon, ShopIcon, UserIcon } from '../icons'
import { ListItem } from '../buttons'
import ToggleLightDarkMode from '../buttons/toggle-light-dark-mode'

function DashboardSideBar() {
    const [selectedItem, setSelected] = useState("home")
    return (
        <div className='sm:flex h-full bg-white dark:bg-neutral-700 lg:min-w-[340px] hidden lg:max-w-[340px] p-6 gap-1 flex-col'>
            <img src='logo.svg' className='w-14' />
            <ListItem onClick={() => {
                setSelected("home")
            }} selectedItem={selectedItem} item='home' text='Home' className='font-[600] text-gray-600 mt-9' iconLeft={<HomeIcon />} />
            <ListItem onClick={() => {
                setSelected("products")
            }} selectedItem={selectedItem} item='products' text='Products' iconRight={<ChevronDownIcon className='' />} className='font-[600] text-gray-600' iconLeft={<DiamondIcon />} />
            <ListItem onClick={() => {
                setSelected("customers")
            }} selectedItem={selectedItem} item='customers' text='Customers' iconRight={<ChevronDownIcon className='' />} className='font-[600] text-gray-600' iconLeft={<UserIcon />} />
            <ListItem onClick={() => {
                setSelected("shops")
            }} selectedItem={selectedItem} item='shops' text='Shop' className='font-[600] text-gray-600' iconLeft={<ShopIcon />} />
            <ListItem onClick={() => {
                setSelected("income")
            }} selectedItem={selectedItem} item='income' text='Income' iconRight={<ChevronDownIcon className='' />} className='font-[600] text-gray-600' iconLeft={<IncomeIcon />} />
            <ListItem onClick={() => {
                setSelected("promote")
            }} selectedItem={selectedItem} item='promote' text='Promote' className='font-[600] text-gray-600' iconLeft={<PromoteIcon />} />
            <div className='mt-auto flex pt-2 flex-col gap-2 border-t'>
                <ListItem onClick={() => {
                    setSelected("help")
                }} selectedItem={selectedItem} isDropdown={false} item='help' text='Help & getting started' className='font-[600] text-gray-600' iconLeft={<QuestionIcon />} iconRight={<div className='w-6 h-6 font-bold flex items-center justify-center rounded-lg bg-purple-300'>8</div>} />
                <ToggleLightDarkMode isSmallScreen={false} />
            </div>
        </div>
    )
}

export default DashboardSideBar