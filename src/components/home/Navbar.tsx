import React from 'react';

const Navbar = () => {
    return (
        <div className=' bg-black text-white py-6'>
            <div className='px-[10%] container mx-auto flex justify-between items-center'>
               <div className='md:text-2xl md:font-bold text-xl cursor-pointer'>LMS TUTOR</div>
               <div>
                    <ul className='md:flex items-center gap-6 hidden'>
                        <li className=' text-md cursor-pointer hover:text-yellow-400 pb-1 border-b-2 border-b-transparent  hover:border-amber-500'>Home</li>
                        <li className=' text-md cursor-pointer hover:text-yellow-400 pb-1 border-b-2 border-b-transparent  hover:border-amber-500'>Course</li>
                        <li className=' text-md cursor-pointer hover:text-yellow-400 pb-1 border-b-2 border-b-transparent  hover:border-amber-500'>about</li>
                    </ul>
               </div>
            </div>
        </div>
    );
};
export default Navbar;