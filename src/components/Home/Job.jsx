import React, { useState } from 'react';

const Job = () => {
    const [activeTab,setActiveTab]=useState('Remote')
    const handleBg=(tabname)=>{
        setActiveTab(tabname)
    }

    return (
        <div>
            <div className='flex items-center justify-center my-10'>
                <div className={`bg-gray-200 rounded-l-full cursor-pointer py-3 px-7 ${activeTab==='Remote'?"bg-red-600 text-white":""}`} onClick={()=>handleBg('Remote')}>
                    <h1 className='text-lg font-semibold text-center'>Remote</h1>
                </div>
                <div className={`bg-gray-200 rounded-r-full cursor-pointer py-3 px-7 ${activeTab==='Offline'?"bg-red-600 text-white":""}`} onClick={()=>handleBg('Offline')}>
                    <h1 className='text-lg font-semibold text-center'>Offline</h1>
                </div>
            </div>
        </div>
    );
};

export default Job;