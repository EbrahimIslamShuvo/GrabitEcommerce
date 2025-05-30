import React, { useState } from 'react';
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, Links, Outlet } from 'react-router-dom';

const MainNavSmall = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const handleCategoryToggle = () => {
        setIsCategoryOpen(prevState => !prevState);
    };

    return (
        <div className="">
            {/* upper part */}
            <div className='md:hidden bg-[#f8f8fb] text-[#777777]'>
                <div className="">
                    <div className="flex justify-between items-center w-11/12 mx-auto pt-4">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="drawer-button text-5xl"><HiOutlineBars3 /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    {/* Sidebar content here */}
                                    <li>
                                        <h1 className='text-2xl font-semibold hover:bg-transparent'>Menu</h1>
                                    </li>
                                    <li className='text-lg flex flex-col gap-3 mt-4'>
                                        <Link to={"/"} className='hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>Home</Link>
                                        <p className='hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500 cursor-pointer' onClick={handleCategoryToggle}>Category</p>
                                        {isCategoryOpen && (
                                            <ul className="pl-4 flex flex-col gap-1">
                                                <li className='p-2 rounded-md pl-4 hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>Dairy & Bakery</li>
                                                    <li className='p-2 rounded-md pl-4 hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>Fruits & Vegetable</li>
                                                    <li className='p-2 rounded-md pl-4 hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>Snack & Drinks</li>
                                                    <li className='p-2 rounded-md pl-4 hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>Juice & Drinks</li>
                                            </ul>
                                        )}

                                        <Link to={"/trackorder"} className='hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>Track Order</Link>
                                        <Link to={"/blog"} className='hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>Blog</Link>
                                        <Link to={"/aboutUs"} className='hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>About US</Link>
                                        <Link to={"/help"} className='hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500'>Help</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mr-6">
                            <div className="dropdown dropdown-hover mr-4">
                                <div tabIndex={0} role="button" className="">
                                    <div className="indicator">
                                        <span className="indicator-item badge bg-transparent border-0 text-white px-0.5"></span>
                                        <div className="">
                                            <FaRegUser className='text-3xl' />
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="drawer drawer-end mr-10">
                                <input id="wishListIcon" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="wishListIcon" className="drawer-button">
                                        <div className="indicator">
                                            <span className="indicator-item badge bg-[#777777] border-0 text-white px-0.5">56</span>
                                            <div className="">
                                                <FaRegHeart className='text-3xl' />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="wishListIcon" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                        {/* Sidebar content here */}
                                        <li><a>wish Item 1</a></li>
                                        <li><a>wish Item 2</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="drawer drawer-end mr-4">
                                <input id="cartListIcon" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="cartListIcon" className="drawer-button">
                                        <div className="indicator">
                                            <span className="indicator-item badge bg-[#777777] border-0 text-white px-0.5">56</span>
                                            <div className="">
                                                <MdOutlineShoppingBag className='text-3xl' />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="drawer-side">
                                    <label htmlFor="cartListIcon" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                        {/* Sidebar content here */}
                                        <li><a>Sidebar Item 1</a></li>
                                        <li><a>Sidebar Item 2</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* lower part */}
            <div className="md:hidden border-b-1 border-gray-200">
                <div className="flex justify-between w-11/12 mx-auto py-4">
                    <div className="">
                        <Link to={"/"}><img src="src/assets/logo.png" className='w-[110px] h-[34px]' alt="" /></Link>
                    </div>
                    <div className="">
                        <label className="input w-90">
                            <input className='border-0' type="search" required placeholder="Search Products..." />
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>

                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNavSmall;
