import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                <h1 className='text-black font-bold text-3xl'>JOB<span className='text-5xl text-orange-500 font-bold'>&</span>Fit</h1>
                </div>
                {/* link start */}
                <div>
                    <NavLink className={({isActive})=>isActive?"text-orange-500 font-semibold text-lg mx-7 border-b-2 border-orange-500 px-2 py-1":"text-lg py-1 px-2 mx-7"} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=>isActive?"text-orange-500 font-semibold text-lg mx-7 border-b-2 border-orange-500 px-2 py-1":"text-lg py-1 px-2 mx-7"} to='/myjob'>My Jobs</NavLink>
                    <NavLink className={({isActive})=>isActive?"text-orange-500 font-semibold text-lg mx-7 border-b-2 border-orange-500 px-2 py-1":"text-lg py-1 px-2 mx-7"} to='/login'>Login</NavLink>
                    <NavLink className={({isActive})=>isActive?"text-orange-500 font-semibold text-lg mx-7 border-b-2 border-orange-500 px-2 py-1":"text-lg py-1 px-2 mx-7"} to='/register'>Register</NavLink>
                </div>
                {/* link end */}
                
                {/* btn start */}
                <div>
                   <Link to='/addjob'>
                   <button className='btn btn-warning'>Post Job</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;