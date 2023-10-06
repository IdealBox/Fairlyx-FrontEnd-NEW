import { useState } from 'react'
import { VendorNavbar, DashboardSideBar } from '../../components'
import AuthenticationSideBar from '../../layouts/sidebar/authenication-sidebar'
import OtpScreen from './Otp'
import SignUp from './SignUp'
function Authentication() {
  const [authScreen, setAuthScreen] = useState<"signup" | "otp" | "signin">("signup")
  return (
    <div className='flex bg-gray-100 dark:bg-neutral-08 w-full h-screen'>
       <AuthenticationSideBar />
       <div className='w-full h-screen flex flex-col'>
        <div className='flex w-full p-5 gap-1 text-[12px] font-bold justify-end'><span className='text-gray-500'>Already a member?</span><span className='cursor-pointer underline'>Sign In</span></div>
        <div className='w-full h-full flex justify-center items-center'>
          { authScreen == "signup" &&<SignUp />}
          { authScreen == "otp" &&<OtpScreen />}
        </div>
       </div>
    </div>
  )
}
export default Authentication