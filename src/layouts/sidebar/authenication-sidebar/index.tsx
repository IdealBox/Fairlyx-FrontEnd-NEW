import { CircleTickIcon, HomeIcon } from '../../../components/icons'

function AuthenticationSideBar({ onClick }: any) {
    return (
        <div className='md:flex h-screen hidden w-full justify-between p-8 bg-white sm:min-w-[340px] sm:max-w-[340px] flex-col'>
            <img src='logo.svg' className='w-14' />
            <div className='flex flex-col gap-2 w-[200px] mx-auto'>
            <img src='illustration.svg' className='w-32 mx-auto my-5' />

                <div className='text-3xl font-[600] text-center'>We Assure</div>
            <div className='flex gap-2 p-2 items-center text-[14px] font-[600] !text-gray-600 rounded-md '>
                    <CircleTickIcon className='text-primary-02' />
                    Compassionate Care
                </div>
                <div className='flex gap-2 p-2 items-center text-[14px] font-[600] !text-gray-600 rounded-md '>
                    <CircleTickIcon className='text-primary-02' />
                    Safety First
                </div>
                <div className='flex gap-2 p-2 items-center text-[14px] font-[600] !text-gray-600 rounded-md '>
                    <CircleTickIcon className='text-primary-02' />
                    Personalized Care Plan
                </div>
                <div className='flex gap-2 p-2 items-center text-[14px] font-[600] !text-gray-600 rounded-md '>
                    <CircleTickIcon className='text-primary-02' />
                    Skilled Care Giver
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default AuthenticationSideBar