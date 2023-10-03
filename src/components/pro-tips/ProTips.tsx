import React from 'react';

const ProTips = () => {
    return (
        <div>
            <div className="bg-slate-100 p-6 max-w-lg max-h-fit rounded-lg overflow-hidden shadow-lg">
                <div className="flex text-xl font-semibold mb-5">
                    <div className="bg-emerald-300/50 w-3 h-8 rounded mr-3"></div>
                    <h1>Pro tips</h1>
                </div>
                <p className='mb-5 text-gray-400'>Need some ideas for the next product?</p>
                <div className="">
                    <div className="flex">
                        <div className="icon">

                        </div>
                        <div>
                            <p className='font-semibold'>Early access</p>
                            <div className="flex">
                                <span className='text-sm font-bold rounded bg-indigo-400 py-1 px-2 mr-1'>New</span>
                                <div className="">
                                    <p className='text-sm font-bold text-gray-400 py-1'>3 mins read</p>
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