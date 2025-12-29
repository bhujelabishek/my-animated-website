"use client"
import React, { use, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaLandMineOn } from 'react-icons/fa6'

const Navbar = () => {

    type products={
        id:number;
        title:string;
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuref = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropCategroyOpen, setIsDropCategroyOpen] = useState(false);
    const [products, setProducts] = useState<products[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuref.current && !menuref.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (

        <div className="w-full sticky top-0 z-[9000] bg-white shadow-md">
            {/* Top Navbar - Sticky */}
            <div className='flex flex-row p-2 justify-between items-center bg-neutral-800 h-14'>

                <div className='flex flex-row ml-10'>
                    <Image
                        src='/images/envatomarket.png'
                        alt='logo_brand'
                        width={200}
                        height={200}
                    ></Image>
                </div>
                <div className='flex flex-row m-2 p-1 pl-4 pr-4 text-s text-white outline-none rounded-sm'
                    style={{ backgroundColor: "#81B441" }}>
                    <button>Buy Now</button>
                </div>
            </div>

            {/* Middle Navbar - NOT Sticky */}
            <div className='flex flex-row justify-between items-center text-sm text-neutral-700 font-light tracking-wider bg-red-50 h-10 w-full'>
                <div className=' ml-10 tracking-wider'>
                    Free Shipping worldwide on all orders over $50
                    <Link href='/shop' className='outline-1 m-2 p-1 hover:text-pink-500'> Shop Now</Link>
                </div>
                <div className='flex flex-row gap-5 text-sm mr-10'>
                    <div className='cursor-pointer hover:text-amber-900'>About Us</div>
                    <div className='font-light text-neutral-300'>|</div>
                    <div className='cursor-pointer hover:text-amber-900'>Blog</div>
                    <div className='font-light text-neutral-300'>|</div>
                    <div className='cursor-pointer hover:text-amber-900'>Contact Us</div>
                    <div className='font-light text-neutral-300'>|</div>
                    <div className='cursor-pointer hover:text-amber-900'>FAQs</div>
                </div>
            </div>

            {/* Bottom Navbar - Sticky */}
            <div className=' p-2 drop-shadow-md bg-white opacity-100 flex justify-between gap-4 tracking-wider font-sans'>
                <div className='pr-8 pl-8 text-white self-center'>
                    <Link href="/home">
                        <Image
                            src='/JUBLIEE.PNG'
                            alt='logo'
                            width={100}
                            height={100}
                        ></Image>
                    </Link>
                </div>
                <div className=' p-2 drop-shadow-m text-neutral-900 flex justify-between font-medium text-sm gap-4 tracking-wider font-sans'>
                    <Link href="/contact" className='p-2'>HOME</Link>
                    <div
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        className='relative group'>
                        <div className="flex items-center gap-1 p-2 cursor-pointer hover:text-red-900 transition">
                            SHOP <IoIosArrowDown className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />

                        </div>
                        {/* Dropdown */}
                        <div className='flex justify-center items-center w-full z-90'>
                            <div className={`absolute w-[1000px] top-12 bg-white rounded-sm shadow-lg flex flex-col min-w-[160px] p-6 transition-all duration-200 
                              ${isDropdownOpen ? "opacity-95 visible translate-y-0" : "opacity-0 invisible -translate-y-3"}`}
                            >
                                Hello
                            </div>
                        </div>
                    </div>
                    <div
                        onMouseEnter={() => setIsDropCategroyOpen(true)}
                        onMouseLeave={() => setIsDropCategroyOpen(false)}
                        className='relative group'>
                        <div className="flex items-center gap-1 p-2 cursor-pointer hover:text-red-900 transition">
                            CATEGORY <IoIosArrowDown className={`transition-transform duration-200 ${isDropCategroyOpen ? "rotate-180" : "rotate-0"}`} />

                        </div>
                        {/* Dropdown */}
                        <div className='flex justify-center items-center w-full z-90'>
                            <div className={`flex flex-wrap justify-center items-center absolute w-[1000px] h-[500px] top-12 bg-white rounded-sm shadow-lg min-w-[160px] p-6 transition-all duration-200 
                              ${isDropCategroyOpen ? "opacity-95 visible translate-y-0" : "opacity-0 invisible -translate-y-3"}`}
                            >
                                {products.length === 0 ? (
                                    <p>Loading...</p>
                                ) : (
                                    products.map(products => (
                                        <div key={products.id} className="flex flex-wrap gap-10 mr-4 p-2  w-[250px]  cursor-pointer rounded hover:shadow-md transition">
                                            <p className="text-sm font-medium">{products.title}</p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    <Link href="/community" className='p-2'>PRODUCTS</Link>
                    <Link href="/blog" className='p-2'>TOP DEALS</Link>
                    <Link href="/elements" className='p-2'>ELEMENTS</Link>
                </div>

                <div className='flex flex-row justify-center gap-4 items-center'>
                    <div className=' flex items-center justify-center p-2 rounded-full size-10 bg-pink-300
                 text-white text-md text-md cursor-pointer hover:shadow-[0_0_5px_2px_rgba(255,192,203,0.7)] transition-all duration-200'>
                        <IoSearch />
                    </div>
                    <div className=' flex items-center justify-center p-2 rounded-full size-10 bg-pink-300  
                 text-white text-xl text-md cursor-pointer hover:shadow-[0_0_5px_2px_rgba(255,192,203,0.7)] transition-all duration-200'>
                        <IoPersonOutline />
                    </div>
                    <div className='flex items-center justify-center p-2 rounded-full bg-pink-300 size-10 
                        text-white text-xl cursor-pointer hover:shadow-[0_0_5px_2px_rgba(255,192,203,0.7)] 
                          transition-all duration-200'>
                        <IoMdHeartEmpty/>
                    </div>
                    <div className='flex items-center justify-center p-2 rounded-full bg-pink-300 size-10 
                        text-white text-xl cursor-pointer hover:shadow-[0_0_5px_2px_rgba(255,192,203,0.7)] 
                          transition-all duration-200'>

                        <HiOutlineShoppingCart />
                    </div>
                    <div>
                        <button
                            className='block md:hidden text-3xl'
                            onClick={
                                () => setIsMenuOpen(true)
                            }
                        >
                            <IoReorderThreeOutline />
                        </button>
                    </div>
                </div>

                {/* Mobile view */}
                {isMenuOpen && (
                    <>
                        <div className='fixed inset-0 bg-black/30 backdrop-blur-lg '></div>
                        <div
                            ref={menuref}
                            className="md:hidden absolute flex flex-col right-4 top-12 items-center bg-gray-800 rounded-lg mt-3 p-4 gap-3 animate-fadeIn">
                            <Link href="/" className="border-b-2 border-white w-full hover:text-green-400 " onClick={() => setIsMenuOpen(false)}>HOME</Link>
                            <Link href="/about" className="border-b-2 border-white w-full hover:text-green-400" onClick={() => setIsMenuOpen(false)}>DESTINATION</Link>
                            <Link href="/contact" className="border-b-2 border-white w-full hover:text-green-400" onClick={() => setIsMenuOpen(false)}>GALLERY</Link>
                            <Link href="/gallery" className="border-b-2 border-white w-full hover:text-green-400" onClick={() => setIsMenuOpen(false)}>EXPERIENCE</Link>
                            <Link href="/plan" className="border-b-2 border-white w-full hover:text-green-400" onClick={() => setIsMenuOpen(false)}>PLAN TRIP</Link>
                            <Link href="/community" className="border-b-2 border-white w-full hover:text-green-400" onClick={() => setIsMenuOpen(false)}>COMMUNITY</Link>
                            <Link href="/blog" className="border-b-2 border-white w-full hover:text-green-400" onClick={() => setIsMenuOpen(false)}>BLOG</Link>
                        </div>
                    </>
                )}
            </div>


        </div>
    )
}

export default Navbar