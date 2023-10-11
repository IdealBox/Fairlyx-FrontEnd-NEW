import { SunIcon, MoonIcon } from '../../icons'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setToDarkMode, setToLightMode } from '../../../store/slices/appThemeSlice';
function ToggleLightDarkMode({ isSmallScreen }: ToggleLightDarkModeType) {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector((state) => state.theme.darkMode)
    console.log(isDarkMode);
    return (
        !isSmallScreen ?
            <div className='lg:grid lg:grid-cols-2 rounded-full bg-gray-100 lg:p-2 lg:gap-2'>
                <button onClick={() => {
                    dispatch(setToLightMode());
                }} className={`${!isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center hidden lg:flex gap-2 p-2`}><SunIcon />Light</button>
                <button onClick={() => {
                    dispatch(setToDarkMode());
                }} className={`${isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center hidden lg:flex gap-2 p-2`}><MoonIcon />Dark</button>
                <div className='w-full flex justify-center lg:hidden'>
                    {!isDarkMode ? <button onClick={() => {
                        dispatch(setToDarkMode());
                    }} className={`${!isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><SunIcon /></button>
                        :
                        <button onClick={() => {
                            dispatch(setToLightMode());
                        }} className={`${isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><MoonIcon /></button>}
                </div>
            </div> : <div className='grid grid-cols-2 rounded-full bg-gray-100 p-2 gap-2'>
                <button onClick={() => {
                    dispatch(setToLightMode());
                }} className={`${!isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><SunIcon />Light</button>
                <button onClick={() => {
                    dispatch(setToDarkMode());
                }} className={`${isDarkMode ? "bg-gray-50 shadow-md" : " text-gray-400"} rounded-full justify-center flex gap-2 p-2`}><MoonIcon />Dark</button>
            </div>
    )
}

export default ToggleLightDarkMode