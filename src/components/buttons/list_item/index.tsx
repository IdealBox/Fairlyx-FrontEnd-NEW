import React from 'react'

function ListItem({ iconLeft, iconRight,isDropdown=true, text, className, onClick, textColor, selectedItem,item }: ListItemTypes) {
const listStyle = selectedItem == item ? `bg-gray-200 text-black shadow rounded-md shadow-[#00000060] flex justify-between items-center w-full p-3 rounded-xl ${className}` : `flex justify-between items-center w-full p-3 hover:bg-gray-100 rounded-xl ${className}`
    return (
        <button onClick={()=>{
            onClick()
        }} className={listStyle}>
            <div className='flex gap-3'>
                {iconLeft && iconLeft}
                {text && <div className={`text-${textColor}`}>{text}</div>}
            </div>
            {iconRight &&<div className={`${selectedItem == item && isDropdown ? "rotate-180":""}`}>{ iconRight}</div>}
        </button>
    )
}

export default ListItem