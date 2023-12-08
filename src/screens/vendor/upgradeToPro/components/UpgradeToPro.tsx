import { TiTick } from "react-icons/ti";

const UpgradeToPro = () => {
    return (
        <div className="p-4 pt-6 max-h-fit">
            <p className="text-3xl font-semibold mb-4 dark:text-white">
                Upgrade to Pro
            </p>
            <div className="bg-white dark:bg-app-neutral-700 rounded grid grid-cols-1 md:grid-cols-3 p-8">
                <div>
                    <div className="flex text-xl font-semibold mb-6">
                        <div className="bg-cyan-400/50 w-3 h-8 rounded mr-4"></div>
                        <h1 className="dark:text-white">Lite</h1>
                    </div>
                    <div className="">
                        <p className="text-gray-500 font-semibold">
                            Basic shop and tools to set up your profile
                        </p>
                    </div>
                    <div className="my-6">
                        <hr />
                    </div>
                    <div className="flex justify-between">
                        <p className="text-6xl font-extrabold mr-6 dark:text-white">
                            8%
                        </p>
                        <p className="text-sm my-2 text-gray-400">
                            of the monthly income you earn on the market
                        </p>
                    </div>
                    <div className="my-6">
                        <hr />
                    </div>
                    <div className="mb-12 dark:text-white">
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Basic shop profile
                            </p>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Customer communication tools
                            </p>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                100 promotion posts
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Maximum 50 product uploads
                            </p>
                        </div>
                    </div>
                    <button className="flex items-center justify-center py-3 px-5 gap-2 rounded-xl border-gray-200 dark:border-gray-800 border-2 dark:text-white font-bold w-full">
                    Your plan
                    </button>
                </div>
                <div className="my-16 md:my-0">
                    <hr className="block md:hidden border-t-2 border-gray-200 w-full my-4" />
                    <hr className="hidden md:block md:border-t-0 border-l-2 border-gray-200 h-full mx-4" />
                </div>
                <div>
                    <div className="flex text-xl font-semibold mb-6">
                        <div className="bg-violet-400/50 w-3 h-8 rounded mr-4"></div>
                        <h1 className="dark:text-white">
                            Pro
                            <span className="bg-green-200 dark:text-black rounded-3xl ms-4 py-2 px-4">
                                Recommended
                            </span>
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-gray-500 font-semibold">
                            Pro shop and tools to set up your profile 🔥
                        </p>
                    </div>
                    <div className="my-6">
                        <hr />
                    </div>
                    <div className="flex justify-between">
                        <p className="text-6xl font-extrabold mr-6 dark:text-white">
                            12%
                        </p>
                        <p className="text-sm my-2 text-gray-400">
                            of the monthly income you earn on the market
                        </p>
                    </div>
                    <div className="my-6">
                        <hr />
                    </div>
                    <div className="mb-12 dark:text-white">
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Extended shop profile
                            </p>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Customer communication tools
                            </p>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Unlimited promotion posts
                            </p>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Unlimited product uploads
                            </p>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Special offers promo tool
                            </p>
                        </div>
                        <div className="flex gap-4 mb-6">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Analytics and insights
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <TiTick size="1.5rem" className=" top-1 left- 1 text-green-500/70" />
                            <p className="font-semibold">
                                Bulk message to all customers
                            </p>
                        </div>
                    </div>
                    {/* <div className="bg-blue-500 py-3 px-5 gap-2 rounded-xl mb-16">
                        <p className="text-white font-bold ms-20 me-20">
                            Upgrade now
                        </p>
                    </div> */}
                    <button className="flex items-center justify-center py-3 px-5 gap-2 rounded-xl border-gray-200 dark:border-gray-800 border-2 dark:text-white font-bold w-full bg-blue-500 mb-16">
                        Upgrade now
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default UpgradeToPro;