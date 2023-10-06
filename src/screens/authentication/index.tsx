import { useState } from 'react'
import AuthenticationSideBar from '../../layouts/sidebar/authenication-sidebar'
import OtpScreen from './Otp'
import SignUp from './SignUp'
import SignIn from './SignIn'
function Authentication() {
  const [authScreen, setAuthScreen] = useState<"signup" | "otp" | "signin">("signup")
  return (
    <div className='flex bg-gray-100 dark:bg-neutral-08 w-full h-screen'>
      <AuthenticationSideBar />
      <div className='w-full h-screen flex flex-col'>
      <img src='logo.svg' className='w-14 absolute top-5 left-5 md:hidden' />
        {authScreen == "signup" ? <div className='flex w-full p-5 gap-1 text-[12px] font-bold justify-end'><span className='text-gray-500'>Already a member?</span><span onClick={()=>{
          setAuthScreen("signin")
        }} className='cursor-pointer underline'>Sign In</span></div>:<div className='flex w-full p-5 gap-1 text-[12px] font-bold justify-end'><span className='text-gray-500'>Don't have an account?</span><span onClick={()=>{
          setAuthScreen("signup")
        }} className='cursor-pointer underline'>Sign Up</span></div>}
        <div className='w-full h-full flex justify-center items-center'>
          {authScreen == "signup" && <SignUp setAuthScreen={(elem: "signup" | "otp" | "signin") => {
            setAuthScreen(elem)
          }} />}
          {authScreen == "otp" && <OtpScreen setAuthScreen={(elem: "signup" | "otp" | "signin") => {
            setAuthScreen(elem)
          }} />}
          {authScreen == "signin" && <SignIn setAuthScreen={(elem: "signup" | "otp" | "signin") => {
            setAuthScreen(elem)
          }} />}
        </div>
      </div>
    </div>
  )
}
export default Authentication