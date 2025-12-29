import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const Marquees = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className='w-full bg-neutral-100 drop-shadow-md p-4 transform -rotate-2 '>
                <Marquee direction='right' pauseOnHover={true} speed={50} gradient={false}>
                    <div className='flex flex-row gap-30'>
                        <div>
                           <Image 
                           src='/logos/api.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/apple.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/atandt.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/envatomarket.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/joomla.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/microsoft.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/photoshop.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                         <div>
                           <Image 
                           src='/logos/python.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                    </div>
                </Marquee>
            </div>
            <div className='bg-neutral-100 p-4 transform rotate-2 '>
                <Marquee pauseOnHover={true} speed={50} gradient={false}>
                    <div className='flex flex-row gap-30'>
                     <div>
                        <h1>New Logo</h1>
                     </div>
                        <div>
                           <Image 
                           src='/logos/api.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/apple.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/atandt.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/envatomarket.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/joomla.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/microsoft.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                        <div>
                           <Image 
                           src='/logos/photoshop.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                         <div>
                           <Image 
                           src='/logos/python.png'
                           alt='logos'
                           height={60}
                           width={60}
                           ></Image>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default Marquees