import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GiCupcake } from 'react-icons/gi';
import { PiOrangeLight } from 'react-icons/pi';
import { SiCakephp } from 'react-icons/si';
import { RiDrinks2Line } from 'react-icons/ri';

const MainNavBig = () => {
  const [Sectors, setSector] = useState([]);
  const [categoryOne, setCategoryOne] = useState([]);
  const [categoryTwo, setCategoryTwo] = useState([]);
  const [sectorOneName, setsectorOneName] = useState(null);
  const [sectorTwoName, setsectorTwoName] = useState(null);

  useEffect(() => {
    fetch('Category.json')
      .then((res) => res.json())
      .then((data) => setSector(data));
  }, []);

  const getSector = (firstSector, secondSector) => {
    setsectorOneName(firstSector);
    setsectorTwoName(secondSector);
  };

  // Get the sectors based on selected sector names
  const sectorOne = sectorOneName
    ? Sectors.find((sector) => sector.sector === sectorOneName)
    : Sectors.find((sector) => sector.sector === 'Dairy');

  const sectorTwo = sectorTwoName
    ? Sectors.find((sector) => sector.sector === sectorTwoName)
    : Sectors.find((sector) => sector.sector === 'Bakery');

  // Get category lists from sectors
  const categoryOneList = sectorOne ? sectorOne.categories : [];
  const categoryTwoList = sectorTwo ? sectorTwo.categories : [];

  return (
    <div className='hidden lg:block'>
      <div>
        {/* upper part */}
        <div className='lg:block hidden border-b-1 border-gray-200'>
          <div className='flex justify-between items-center w-10/12 mx-auto py-6'>
            <div>
              <Link to='/'>
                <img src='src/assets/logo.png' className='w-[154px] h-[45px]' alt='' />
              </Link>
            </div>
            <div className='relative ml-45'>
              <label className='input w-130'>
                <input className='border-0' type='search' required placeholder='Search Products...' />
                <svg
                  className='h-[1em] opacity-50'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'>
                  <g strokeLinejoin='round' strokeLinecap='round' strokeWidth='2.5' fill='none' stroke='currentColor'>
                    <circle cx='11' cy='11' r='8'></circle>
                    <path d='m21 21-4.3-4.3'></path>
                  </g>
                </svg>
              </label>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <div className='dropdown dropdown-hover'>
                <div tabIndex={0} role='button'>
                  <div className='flex items-center text-sm gap-2'>
                    <div>
                      <FaRegUser className='text-3xl' />
                    </div>
                    <div>
                      <p className='text-[#777777] font-semibold'>Account</p>
                      <p>Login</p>
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'>
                  <li>
                    <a>SIGN IN</a>
                  </li>
                  <li>
                    <a>SIGN UP</a>
                  </li>
                </ul>
              </div>
              <div className='drawer drawer-end'>
                <input id='wishListIcon' type='checkbox' className='drawer-toggle' />
                <div className='drawer-content'>
                  <label htmlFor='wishListIcon' className='drawer-button'>
                    <div className='flex items-center text-sm gap-2 min-w-max'>
                      <div>
                        <FaRegHeart className='text-3xl' />
                      </div>
                      <div>
                        <p className='text-[#777777] font-semibold'>Wish List</p>
                        <p>0 Items</p>
                      </div>
                    </div>
                  </label>
                </div>
                <div className='drawer-side'>
                  <label
                    htmlFor='wishListIcon'
                    aria-label='close sidebar'
                    className='drawer-overlay relative -z-20'></label>
                  <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
                    {/* Sidebar content here */}
                    <li>
                      <a>wish Item 1</a>
                    </li>
                    <li>
                      <a>wish Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='drawer drawer-end'>
                <input id='cartListIcon' type='checkbox' className='drawer-toggle' />
                <div className='drawer-content'>
                  <label htmlFor='cartListIcon' className='drawer-button'>
                    <div className='flex items-center text-sm gap-2'>
                      <div>
                        <MdOutlineShoppingBag className='text-3xl' />
                      </div>
                      <div>
                        <p className='text-[#777777] font-semibold'>Cart List</p>
                        <p>0 Items</p>
                      </div>
                    </div>
                  </label>
                </div>
                <div className='drawer-side'>
                  <label
                    htmlFor='cartListIcon'
                    aria-label='close sidebar'
                    className='drawer-overlay relative'></label>
                  <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
                    {/* Sidebar content here */}
                    <li>
                      <a>Sidebar Item 1</a>
                    </li>
                    <li>
                      <a>Sidebar Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* lower part */}
        <div className='border-b-1 border-gray-200'>
          <div className='flex justify-between w-10/12 mx-auto py-2'>
            <div>
              <div className='dropdown dropdown-hover'>
                <div tabIndex={0} role='button' className='btn flex items-center gap-3 bg-[#5CAF90] text-white font-semibold py-6 text-xl'>
                  <BiCategory />All Category<MdKeyboardArrowDown />
                </div>
                <div className='bg-white shadow dropdown-content'>
                  {/* dropdown-content */}
                  <div className='flex gap-4 p-4'>
                    <div>
                      <ul tabIndex={0} className='menu gap-4 bg-[#f8f8fb] rounded-box z-1 min-w-max p-2 shadow-sm'>
                        <li>
                          <a onClick={() => getSector('Dairy', 'Bakery')} className=' hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500 cursor-pointer'>
                            <GiCupcake className='text-2xl' />
                            <p>Dairy & Bakery</p>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => getSector('Fruit', 'Vegetable')} className=' hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500 cursor-pointer'>
                            <PiOrangeLight className='text-2xl' />
                            <p>Fruits & Vegetable</p>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => getSector('Snack', 'Spice')} className=' hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500 cursor-pointer'>
                            <SiCakephp className='text-2xl' />
                            <p>Snacks & Spice</p>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => getSector('Juice', 'Drink')} className=' hover:bg-[#5CAF90] hover:shadow-2xl hover:shadow-black hover:text-white duration-500 cursor-pointer'>
                            <RiDrinks2Line className='text-2xl' />
                            <p>Juice & Drinks</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='flex gap-10'>
                      <div className='min-w-max text-start'>
                        <h2 className='border-b-1 border-[#5CAF90] text-[#5CAF90] font-semibold'>{sectorOneName || 'Dairy'}</h2>
                        {categoryOneList.map((category) => (
                          <p key={category.categoryId} className='hover:text-[#5CAF90]'>{category.categoryName}</p>
                        ))}
                      </div>
                      <div className='min-w-max text-start'>
                        <h2 className='border-b-1 border-[#5CAF90] text-[#5CAF90] font-semibold'>{sectorTwoName || 'Bakery'}</h2>
                        {categoryTwoList.map((category) => (
                          <p key={category.categoryId} className='hover:text-[#5CAF90]'>{category.categoryName}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-8 text-xl font-semibold'>
              <Link to='/'>Home</Link>
              <Link to='/blog'>Blog</Link>
              <Link to='/aboutUs'>About Us</Link>
              <Link to='/help'>FAQs</Link>
            </div>
            <div>
              <div role='button' className='btn flex items-center gap-3 bg-[#5CAF90] text-white font-semibold py-6 text-xl'>
                <MdOutlineLocationOn />Current Location<MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavBig;
