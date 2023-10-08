import React from 'react';
import { BsArrowRightShort, BsTelephone, BsCameraVideo } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { useAppSelector } from '../../store/hooks';

const ProTips = () => {

	// get current app theme from redux store
	const isDarkMode = useAppSelector((state) => state.theme.darkMode);

    return (
        <div>
            <div className="bg-white dark:bg-app-neutral-700 p-6 max-w-fit max-h-fit rounded-lg overflow-hidden shadow-lg">
                <div className="flex text-xl font-semibold mb-5">
                    <div className="bg-emerald-300/50 w-3 h-8 rounded mr-3"></div>
                    <h1 className="dark:text-white">Pro tips</h1>
                </div>
                <div className="mx-6">
                    <p className='mb-5 text-gray-400'>Need some ideas for the next product?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                        <div className="flex">
                            <div className="outline outline-gray-200 rounded-full w-16 h-16 me-3">
                                <div className="m-5">
                                    <TbCalendarTime size='1.5rem' color={`${isDarkMode ? 'white' : 'black'}`} />
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold dark:text-white'>Early access</p>
                                <div className="flex mt-2">
                                    <span className='text-sm font-bold rounded bg-indigo-400 py-1 px-2 mr-1'>New</span>
                                    <div className="flex outline outline-gray-200 outline-1 py-1 rounded">
                                        <img className="object-cover w-5 h-5 rounded mr-1" src="/logo192.png" alt="" />
                                        <p className='text-sm font-bold text-gray-400'>3 mins read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-gray-200 dark:bg-gray-800 rounded-full w-16 h-16 me-3">
                                <div className="m-3">
                                    <BsArrowRightShort size='2.5rem' color={`${isDarkMode ? 'white' : 'black'}`} />
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold dark:text-white'>Asset use guidelines</p>
                                <div className="flex mt-2">
                                    <span className='text-sm font-bold rounded bg-emerald-300/50 py-1 px-2 mr-1'>New</span>
                                    <div className="flex outline outline-gray-200 outline-1 py-1 rounded">
                                        <img className="object-cover w-5 h-5 rounded mr-1" src="/logo192.png" alt="" />
                                        <p className='text-sm font-bold text-gray-400'>Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                        <div className="flex">
                            <div className="outline outline-gray-200 rounded-full w-16 h-16 me-3">
                                <div className="m-5">
                                    <LiaPencilRulerSolid size='1.5rem' color={`${isDarkMode ? 'white' : 'black'}`} />
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold dark:text-white'>Exclusive downloads</p>
                                <div className="flex mt-2">
                                    <span className=''></span>
                                    <div className="flex outline outline-gray-200 outline-1 py-1 rounded">
                                        <img className="object-cover w-5 h-5 rounded mr-1" src="/logo192.png" alt="" />
                                        <p className='text-sm font-bold text-gray-400'>2 mins read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="outline outline-gray-200 rounded-full w-16 h-16 me-3">
                                <div className="m-5">
                                    <BsCameraVideo size='1.5rem' color={`${isDarkMode ? 'white' : 'black'}`} />
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold dark:text-white'>Behind the scenes</p>
                                <div className="flex mt-2">
                                    <span className='text-sm font-bold rounded bg-orange-300/50 py-1 px-2 mr-1'>Hot</span>
                                    <div className="flex outline outline-gray-200 outline-1 py-1 rounded">
                                        <img className="object-cover w-5 h-5 rounded mr-1" src="/logo192.png" alt="" />
                                        <p className='text-sm font-bold text-gray-400'>3 mins read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                        <div className="flex">
                            <div className="outline outline-gray-200 rounded-full w-16 h-16 me-3">
                                <div className="m-5">
                                    <BsTelephone size='1.5rem' color={`${isDarkMode ? 'white' : 'black'}`} />
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold dark:text-white'>Asset use guidelines</p>
                                <div className="flex mt-2">
                                    <span className='text-sm font-bold rounded bg-emerald-300/50 py-1 px-2 mr-1'>New</span>
                                    <div className="flex outline outline-gray-200 outline-1 py-1 rounded">
                                        <img className="object-cover w-5 h-5 rounded mr-1" src="/logo192.png" alt="" />
                                        <p className='text-sm font-bold text-gray-400'>Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="outline outline-gray-200 rounded-full w-16 h-16 me-3">
                                <div className="m-5">
                                    <MdOutlineLibraryAddCheck size='1.5rem' color={`${isDarkMode ? 'white' : 'black'}`} />
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold dark:text-white'>Life & work updates</p>
                                <div className="flex mt-2">
                                    <span className=''></span>
                                    <div className="flex outline outline-gray-200 outline-1 py-1 rounded">
                                        <img className="object-cover w-5 h-5 rounded mr-1" src="/logo192.png" alt="" />
                                        <p className='text-sm font-bold text-gray-400'>3 mins read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProTips;