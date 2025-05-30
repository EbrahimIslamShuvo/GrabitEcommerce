import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const UpNav = () => {
    return (
        <div className="">
            <div className='bg-[#f8f8fb] text-[#777777] hidden lg:block'>
                <div className="flex justify-between items-center py-2 w-10/12 mx-auto">
                    {/* upnav left */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-0.5">
                            <LuPhoneCall />
                            <p>+880 1648438489</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                            <FaWhatsapp />
                            <p>+880 1648438489</p>
                        </div>
                    </div>
                    {/* upnav Middle */}
                    <div className="">
                        <p>World fastest online shopping destination</p>
                    </div>
                    {/* upnav right */}
                    <div className="flex items-center gap-5">
                        <Link to={"/help"}>Help</Link>
                        <Link to={"/trackorder"}>Track Order</Link>
                        <div className="dropdown dropdown-center">
                            <div tabIndex={0} role="button" className="flex items-center">English<MdOutlineKeyboardArrowDown /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm text-md font-semibold">
                                <li><a className='hover:bg-transparent hover:text-[#5CAF90] border-b-1 border-gray-200'>English</a></li>
                                <li><a className='hover:bg-transparent hover:text-[#5CAF90]'>Bangla</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-center">
                            <div tabIndex={0} role="button" className="flex items-center">Dollar<MdOutlineKeyboardArrowDown /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm text-md font-semibold">
                                <li><a className='hover:bg-transparent hover:text-[#5CAF90] border-b-1 border-gray-200'>USD</a></li>
                                <li><a className='hover:bg-transparent hover:text-[#5CAF90]'>TK</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpNav;