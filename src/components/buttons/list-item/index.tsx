import React from 'react'
function ListItem({ iconLeft, iconRight, isMobile, isDropdown = true, text, className, onClick, textColor, selectedItem, item }: ListItemTypes) {
    const listStyle = selectedItem === item ? `bg-gray-200 dark:bg-app-neutral-600 dark:text-white text-black shadow rounded-md shadow-[#00000060] flex justify-between items-center w-full p-3 rounded-xl ${className}` : `flex justify-between items-center w-full p-3 hover:bg-gray-100 rounded-xl ${className}`
    return (
        <button onClick={() => {
            onClick()
        }} className={listStyle}>
            <div className='flex gap-3'>
                {iconLeft && iconLeft}
                {text && !isMobile ? <div className={`text-${textColor} hidden xl:flex`}>{text}</div> : <div className={`text-${textColor} flex`}>{text}</div>}
            </div>
            {iconRight && !isMobile ? <div className={`${selectedItem === item && isDropdown ? "rotate-180 hidden xl:flex" : "hidden xl:flex"}`}>{iconRight}</div> : <div className={`${selectedItem == item && isDropdown ? "rotate-180 flex" : "flex"}`}>{iconRight}</div>}
        </button>
    )
}

export default ListItem