import { useState } from "react"
import React from 'react';
import OtpInput from 'react18-input-otp';
import LoaderIcon from "../../components/icons/loader-icon";
function OtpScreen({ setAuthScreen }: AuthScreenTypes) {
  const otp_input_count = 4
  const [loading, setLoading] = useState(false)
  const [validOtp, setValidOtp] = useState(false)
  const [otp, setOtp] = useState<string>("")
  const handleChange = (enteredOtp: React.SetStateAction<string>) => {
    if (otp_input_count == enteredOtp.length) {
      setValidOtp(true)
    } else {
      setValidOtp(false)
    }
    setOtp(enteredOtp);
  };
  return (
    <div className='w-[300px] text-[14px] flex gap-5 flex-col mx-auto'>
      <div className='font-[600] text-[40px]'>Sign Up</div>
      <div className="text-[14px]">We just sent you a verification code. Check you email.</div>
      <OtpInput value={otp} onChange={handleChange} className="grid grid-cols-4 w-full" inputStyle={"p-3 rounded-xl font-bold outline-none focus:border-gray-300 !w-16 caret-[#2A85FF80] !h-16 text-3xl focus:border-2 "} numInputs={otp_input_count} />
      {validOtp ? <button onClick={() => {
        setLoading(true)
        setTimeout(() => {
          setAuthScreen("dashboard")
        }, 2000)
      }} className={`bg-primary-01 p-3 font-[600] rounded-xl text-white w-full flex items-center justify-center gap-3`}>{loading && <LoaderIcon className="animate-spin" />}Continue</button> :
        <button className={`bg-[#2A85FF80] p-3 font-[600] rounded-xl text-white w-full`}>Continue</button>}
      <div className='text-gray-400'>This site is protected by reCAPTCHA and the google pricy policy</div>
    </div>
  )
}
export default OtpScreen