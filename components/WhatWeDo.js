import Image from 'next/image'
import Meet from '../public/meet.png'
import Groups from '../public/groups.png'
import Share from '../public/share.png'
import Pods from '../public/pods.png'
const WhatWeDo = () => {
    return (
        <section className='grid lg:grid-cols-2 grid-rows-2 lg:p-20 sm:p-0 '>
            <section className=' px-2  '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-7xl mt-12  '>
                    Share
                </h2>
                <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center '>
                    Voice your thoughts with like-minded people.
                </p>
                <Image src={Meet} />
            </section>
            <section className=' px-2  '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-7xl mt-12  '>
                    Comment
                </h2>
                <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center '>
                    Discover and chat with people who understand what you're
                    going through.
                </p>
                <Image src={Groups} />
            </section>
            <section className=' px-2  '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-7xl mt-12  '>
                    Groups
                </h2>
                <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center '>
                    Make groups and talk about your special interests.
                </p>
                <Image src={Share} />
            </section>
            <section className=' px-2  '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-7xl mt-12  '>
                    Events
                </h2>
                <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-4'>
                    Take part in our Sharing Circles and other community events.
                </p>
                <Image src={Pods} />
            </section>
        </section>
    )
}

export default WhatWeDo
