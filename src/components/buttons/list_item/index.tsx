import React from 'react'

function ListItem({ iconLeft, iconRight,isMobile,isDropdown=true, text, className, onClick, textColor, selectedItem,item }: ListItemTypes) {
const listStyle = selectedItem == item ? `bg-gray-200 text-black shadow rounded-md shadow-[#00000060] flex justify-between items-center w-full p-3 rounded-xl ${className}` : `flex justify-between items-center w-full p-3 hover:bg-gray-100 rounded-xl ${className}`
    return (
        <button onClick={()=>{
            onClick()
        }} className={listStyle}>
            <div className='flex gap-3'>
                {iconLeft && iconLeft}
                {text && !isMobile ? <div className={`text-${textColor} hidden lg:flex`}>{text}</div> : <div className={`text-${textColor} flex`}>{text}</div>}
            </div>
            {iconRight &&  !isMobile ?<div className={`${selectedItem == item && isDropdown ? "rotate-180 hidden lg:flex":"hidden lg:flex"}`}>{ iconRight}</div>: <div className={`${selectedItem == item && isDropdown ? "rotate-180 flex":"flex"}`}>{ iconRight}</div>}
        </button>
    )
}

export default ListItem