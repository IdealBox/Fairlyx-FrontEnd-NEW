import { SunIcon, MoonIcon } from '../../icons'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setToDarkMode, setToLightMode } from '../../../store/slices/appThemeSlice';
function ToggleLightDarkMode({ isSmallScreen }: ToggleLightDarkModeType) {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector((state) => state.theme.darkMode)
    console.log(isDarkMode);
    return (
        !isSmallScreen ?
            <div className='xl:grid xl:grid-cols-2 rounded-full bg-gray-100 dark:bg-app-neutral-800 xl:p-2 xl:gap-2'>
                <button onClick={() => {
                    dispatch(setToLightMode());
                }} className={`${!isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center hidden xl:flex gap-2 p-2`}><SunIcon />Light</button>
                <button onClick={() => {
                    dispatch(setToDarkMode());
                }} className={`${isDarkMode ? "bg-gray-50 shadow-md dark:bg-app-neutral-500 dark:text-gray-200" : " text-gray-400"} rounded-full justify-center hidden xl:flex gap-2 p-2`}><MoonIcon />Dark</button>
                <div className='w-full flex justify-center xl:hidden'>
                    {!isDarkMode ? <button onClick={() => {
                        dispatch(setToDarkMode());
                    }} className={`${!isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><SunIcon /></button>
                        :
                        <button onClick={() => {
                            dispatch(setToLightMode());
                        }} className={`${isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><MoonIcon /></button>}
                </div>
            </div> : <div className='grid grid-cols-2 rounded-full dark:bg-app-neutral-800 bg-gray-100 p-2 gap-2'>
                <button onClick={() => {
                    dispatch(setToLightMode());
                }} className={`${!isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><SunIcon />Light</button>
                <button onClick={() => {
                    dispatch(setToDarkMode());
                }} className={`${isDarkMode ? "bg-gray-50 shadow-md dark:bg-app-neutral-500 dark:text-gray-200" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><MoonIcon />Dark</button>
            </div>
    )
}

export default ToggleLightDarkMode