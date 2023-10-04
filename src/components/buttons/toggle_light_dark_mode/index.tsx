import React, { useState } from 'react'
import { SunIcon, MoonIcon } from '../../icons'

function ToggleLightDarkMode({ isSmallScreen }: ToggleLightDarkModeType) {
    const [mode, setMode] = useState("light")

    return (
        !isSmallScreen ?
            <div className='lg:grid lg:grid-cols-2 rounded-full bg-gray-100 lg:p-2 lg:gap-2'>
                <button onClick={() => {
                    setMode("light")
                }} className={`${mode == "light" ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center hidden lg:flex gap-2 p-2`}><SunIcon />Light</button>
                <button onClick={() => {
                    setMode("dark")
                }} className={`${mode == "dark" ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center hidden lg:flex gap-2 p-2`}><MoonIcon />Dark</button>
                <div className='w-full flex justify-center lg:hidden'>
                    {mode == "light" ? <button onClick={() => {
                        setMode("dark")
                    }} className={`${mode == "light" ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><SunIcon /></button>
                        :
                        <button onClick={() => {
                            setMode("light")
                        }} className={`${mode == "dark" ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><MoonIcon /></button>}
                </div>
            </div> : <div className='grid grid-cols-2 rounded-full bg-gray-100 p-2 gap-2'>
                <button onClick={() => {
                    setMode("light")
                }} className={`${mode == "light" ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><SunIcon />Light</button>
                <button onClick={() => {
                    setMode("dark")
                }} className={`${mode == "dark" ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><MoonIcon />Dark</button>
            </div>
    )
}

export default ToggleLightDarkMode