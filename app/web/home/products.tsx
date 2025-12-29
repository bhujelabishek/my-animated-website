import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Products = () => {
    return (
        <div className=' flex flex-row justify-between items-center m-10 mb-20'>
            <div className='flex flex-row justify-center items-start shadow-lg bg-white text-neutral-900 hover:shadow-2xl'>
                <div className='h-[500px]'>
                    <Image
                        src='/images/ring.webp'
                        alt='ring diamong'
                        width={500}
                        height={100}
                    >
                    </Image>
                </div>
                <div className='flex flex-col justify-start items-start gap-6 p-10 text-wrap'>
                    <div>Diamond Ring</div>
                    <div className='text-3xl font-bold whitespace-normal'>Yellow Gold <br /> Diamond Ring</div>
                    <div className='underline hover:no-underline' >
                        <Link href='/shopnow'>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-[500px] flex flex-col justify-between  items-start gap-4 text-neutral-900 '>
                <div className='p-2 flex flex-row w-[600px] shadow-lg bg-white hover:shadow-2xl'>
                    <div className='flex justify-center items-center bg-white'>
                        <Image
                            src='/images/ring.webp'
                            alt='ring diamong'
                            width={200}
                            height={200}
                        >
                        </Image>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-6 p-6 text-wrap'>
                        <div>Diamond Bracelets</div>
                        <div className='text-3xl font-bold whitespace-normal'>Infinity Diamond <br /> Bracelet</div>
                        <div className='underline hover:no-underline' >
                            <Link href='/shopnow'>
                                Shop Now
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='p-2 flex flex-row  w-[600px] shadow-lg  bg-white text-neutral-900 hover:shadow-2xl'>
                    <div className='flex flex-col justify-center items-start gap-6 p-6 text-wrap'>
                        <div>Diamond Pendant</div>
                        <div className='text-3xl font-bold whitespace-normal'>TearDrop Diamond <br /> Pendant</div>
                        <div className='underline hover:no-underline' >
                            <Link href='/shopnow'>
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-white'>
                        <Image
                            src='/images/ring.webp'
                            alt='ring diamong'
                            width={200}
                            height={200}
                        >
                        </Image>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Products