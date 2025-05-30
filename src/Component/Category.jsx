import React, { useEffect, useState } from 'react';
import { LuMilk } from "react-icons/lu";
import { LuCakeSlice } from "react-icons/lu";
import { PiOrange } from "react-icons/pi";
import { LuCarrot } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";
import { GiWrappedSweet } from "react-icons/gi";

const Category = () => {
    const [sectors, setSector] = useState([])
    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setSector(data))
    }, [])
    const dairy = sectors.filter(sector => sector.sector === 'Dairy')
    const dairyCategories = dairy.length > 0 ? dairy[0].categories : [];
    console.log(dairyCategories);



    return (
        <div className=' w-10/12 mx-auto'>
            <div className="carousel carousel-center w-full gap-[38px] mb-30">
                <div className="carousel-item p-3 pb-0 transform duration-500 bg-gradient-to-b from-[#ebd1b4] via-white hover:via-[#ebd1b4] to-white">
                    <div className="w-52 py-2 bg-white flex flex-col items-center gap-3 duration-500 hover:shadow-2xl hover:shadow-gray-300">
                        <div className="">
                            <LuMilk className='text-[#5CAF90] text-5xl' />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className='font-semibold'>Dairy & Milk</h1>
                            <p className='text-[#9A9A9A] text-sm'>{dairyCategories.length} items</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item p-3 pb-0 transform duration-500 bg-gradient-to-b from-[#aedcb0] via-white hover:via-[#aedcb0] to-white">
                    <div className="w-52 py-2 bg-white flex flex-col items-center gap-3 duration-500 hover:shadow-2xl hover:shadow-gray-300">
                        <div className="">
                            <LuCakeSlice className='text-[#5CAF90] text-5xl' />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className='font-semibold'>Bred & Bakery</h1>
                            <p className='text-[#9A9A9A] text-sm'>{dairyCategories.length} items</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item p-3 pb-0 transform duration-500 bg-gradient-to-b from-[#ddb0ae] via-white hover:via-[#ddb0ae] to-white">
                    <div className="w-52 py-2 bg-white flex flex-col items-center gap-3 duration-500 hover:shadow-2xl hover:shadow-gray-300">
                        <div className="">
                            <PiOrange  className='text-[#5CAF90] text-5xl' />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className='font-semibold'>Fruits</h1>
                            <p className='text-[#9A9A9A] text-sm'>{dairyCategories.length} items</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item p-3 pb-0 transform duration-500 bg-gradient-to-b from-[#d5a5ca] via-white hover:via-[#d5a5ca] to-white">
                    <div className="w-52 py-2 bg-white flex flex-col items-center gap-3 duration-500 hover:shadow-2xl hover:shadow-gray-300">
                        <div className="">
                            <LuCarrot  className='text-[#5CAF90] text-5xl' />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className='font-semibold'>Vegetables</h1>
                            <p className='text-[#9A9A9A] text-sm'>{dairyCategories.length} items</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item p-3 pb-0 transform duration-500 bg-gradient-to-b from-[#8c98c0] via-white hover:via-[#8c98c0] to-white">
                    <div className="w-52 py-2 bg-white flex flex-col items-center gap-3 duration-500 hover:shadow-2xl hover:shadow-gray-300">
                        <div className="">
                            <RiDrinks2Line  className='text-[#5CAF90] text-5xl' />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className='font-semibold'>Juice & Drinks</h1>
                            <p className='text-[#9A9A9A] text-sm'>{dairyCategories.length} items</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item p-3 pb-0 transform duration-500 bg-gradient-to-b from-[#dee0aa] via-white hover:via-[#dee0aa] to-white">
                    <div className="w-52 py-2 bg-white flex flex-col items-center gap-3 duration-500 hover:shadow-2xl hover:shadow-gray-300">
                        <div className="">
                            <GiWrappedSweet  className='text-[#5CAF90] text-5xl' />
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className='font-semibold'>Snacks & Spice</h1>
                            <p className='text-[#9A9A9A] text-sm'>{dairyCategories.length} items</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;