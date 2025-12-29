import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { BiSolidOffer } from 'react-icons/bi'
import { GiTakeMyMoney } from 'react-icons/gi'
import { BiSupport } from 'react-icons/bi'

const Services = () => {
    return (
        <div className='flex flex-row text-neutral-700  justify-evenly items-center gap-4 mb-10'>
            <div className='flex flex-row p-2'>
                <div className='flex p-4 justify-center items-center'>
                    <FaShippingFast className='size-10 hover:text-red-500' />
                </div>
                <div className='flex flex-col justify-center items-start p-2'>
                    <div className='font-bold text-md'>
                        Worldwide Shipping
                    </div>
                    <div className='text-xs' >
                        For All Order Over $100
                    </div>
                </div>
            </div>

             <div className='flex flex-row p-2'>
                <div className='flex  p-4 justify-center items-center'>
                    <BiSolidOffer className='size-10 hover:text-red-500' />
                </div>
                <div className='flex flex-col justify-center items-start p-2'>
                    <div className='font-bold text-md'>
                        Money Back Gurantee
                    </div>
                    <div className='text-xs' >
                       Gurantee With In 30 Days
                    </div>
                </div>
            </div>

             <div className='flex flex-row p-2 '>
                <div className='flex  p-4 justify-center items-center'>
                    <GiTakeMyMoney className='size-10 hover:text-red-500'/>
                </div>
                <div className='flex flex-col p-2 justify-center items-start'>
                    <div className='font-bold text-md'>
                        Offers and Discount
                    </div>
                    <div className='text-xs' >
                        Back Return in 7 Days
                    </div>
                </div>
            </div>

             <div className='flex flex-row p-2'>
                <div className='flex  p-4 justify-center items-center'>
                    <BiSupport className='size-10 hover:text-red-500' />
                </div>
                <div className='flex flex-col  justify-center items-start p-2'>
                    <div className='font-bold text-md'>
                        24/7 Customer Support
                    </div>
                    <div className='text-xs' >
                        Contact US Anytime
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services