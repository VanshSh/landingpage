import Image from 'next/image'
import Meet from '../public/meet.png'
import Groups from '../public/groups.png'
import Share from '../public/share.png'
import Pods from '../public/pods.png'
const WhatWeDo = () => {
    return (
        <section className='grid lg:grid-cols-2 grid-rows-2  lg:p-20 sm:p-0 '>
            <section className=' px-2 '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-[78px] mt-12  '>
                    Meet
                </h2>
                <p className='mt-4 text-[20px] w-fit lg:m-auto lg:w-2/3 text-center '>
                    Discover women nearby who are at a similar stage in life.
                </p>
                <Image src={Meet} />
            </section>
            <section className='text-center px-2 '>
                <h2 className='text-[#7f0924] m-auto w-fit px-8 font-bold mb-3 text-[78px] mt-12  '>
                    Groups
                </h2>
                <p className='mt-4 text-[20px] w-fit lg:m-auto lg:w-2/3 text-center'>
                    Join groups and find communities with common interests.
                </p>
                <Image src={Groups} />
            </section>
            <section className='text-center px-2 '>
                <h2 className='text-[#7f0924] m-auto w-fit px-8 font-bold mb-3 text-[78px] mt-12  '>
                    Share
                </h2>
                <p className='mt-4 text-[20px] w-fit lg:m-auto lg:w-2/3 text-center'>
                    Ask questions, get advice and share stories across
                    meaningful topics.
                </p>
                <Image src={Share} />
            </section>
            <section className='text-center px-2 '>
                <h2 className='text-[#7f0924] m-auto w-fit px-8 font-bold mb-3 text-[78px] mt-12  '>
                    Pods
                </h2>
                <p className='mt-4 text-[20px] w-fit lg:m-auto lg:w-2/3 text-center '>
                    Join live audio conversations hosted by experts.
                </p>
                <Image src={Pods} />
            </section>
        </section>
    )
}

export default WhatWeDo
