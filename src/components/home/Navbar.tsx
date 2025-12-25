import React from 'react';

const Navbar = () => {
    return (
        <div className=' bg-black text-white py-6'>
            <div className='container mx-auto flex justify-between items-center'>
               <div className=' text-2xl font-bold cursor-pointer '>LMS TUTOR</div>
               <div>
                    <ul className=' flex items-center gap-6'>
                        <li className=' text-md cursor-pointer hover:text-yellow-400 pb-1 border-b-2 border-b-transparent  hover:border-amber-500'>Home</li>
                        <li className=' text-md cursor-pointer hover:text-yellow-400 pb-1 border-b-2 border-b-transparent  hover:border-amber-500'>Course</li>
                        <li className=' text-md cursor-pointer hover:text-yellow-400 pb-1 border-b-2 border-b-transparent  hover:border-amber-500'>Galary</li>
                        <li className=' text-md cursor-pointer hover:text-yellow-400 pb-1 border-b-2 border-b-transparent  hover:border-amber-500'>Contract</li>
                    </ul>
               </div>
            </div>
        </div>
    );
};

export default Navbar;