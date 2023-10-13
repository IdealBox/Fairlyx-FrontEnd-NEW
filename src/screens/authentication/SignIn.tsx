import { useState } from "react"
import { EmailIcon, LockIcon } from "../../components/icons"
import validateEmail from "../../utils/functions/form-validation"
import LoaderIcon from "../../components/icons/loader-icon"
function SignIn({ setAuthScreen }: AuthScreenTypes) {
  const [validEmail, setValidEmail] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  return (
    <div className='w-[300px] text-[14px] flex gap-5 flex-col mx-auto'>
      <div className='font-[600] text-[40px]'>Sign In</div>
      <div>Sign in with Open account</div>
      <div className='grid grid-cols-2 gap-2'>
        <button className='border border-gray-300 font-semibold flex items-center justify-center gap-3 p-3 rounded-xl text-black w-full'> <img src="google_icon.svg" className='w-6' />Google</button>
        <button className='border border-gray-300 font-semibold flex items-center justify-center gap-3 p-3 rounded-xl text-black w-full'><img src="apple_icon.svg" className='w-6' />AppleID</button>

      </div>
      <div className="border-t text-[14px] pt-3 border-t-gray-300">Or continue with email address</div>
      <div className='flex bg-gray-200 items-center px-2 rounded-xl w-full'>
        <EmailIcon className='text-gray-600' />
        <input type="email" onChange={(e) => {
          setEmail(e.target.value)
          setValidEmail(validateEmail(e.target.value))
        }} className='w-full p-3 outline-none bg-transparent' placeholder='your email' />
      </div>
      <div className='flex bg-gray-200 items-center px-2 rounded-xl w-full'>
        <LockIcon className='text-gray-600' />
        <input type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} className='w-full p-3 outline-none bg-transparent' placeholder='your password' />
      </div>
      {validEmail && password.length >= 6 ? <button onClick={() => {
        setTimeout(() => {
          setAuthScreen("otp")
        }, 1000)
        setLoading(true)
      }} className={`bg-primary-1 p-3 font-[600] flex items-center justify-center gap-3 rounded-xl text-white w-full`}>{loading && <LoaderIcon className="animate-spin" />}Continue</button> :
        <button className={`bg-secondary-3 p-3 font-[600] rounded-xl text-white w-full`}>Continue</button>}
      <div className='text-gray-400'>This site is protected by reCAPTCHA and the google pricy policy</div>
    </div>
  )
}
export default SignIn