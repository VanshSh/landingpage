import Image from 'next/image'
import Feed from '../public/Feed2.webp'
import Chat from '../public/Chat1.webp'
import Thought from '../public/Thought2.webp'
import Events from '../public/Events2.webp'

const WhatWeDo = () => {
    return (
        <section className='grid lg:grid-cols-2 grid-rows-2 lg:p-20 sm:p-0 '>
            <section className=' px-2 text-center  '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-7xl mt-12  '>
                    Share
                </h2>
                <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-9 '>
                    Voice your thoughts with like-minded people.
                </p>
                <Image src={Feed} width={300} height={600} className='mt-16' />
            </section>
            <section className=' px-2 text-center  '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-7xl mt-12  '>
                    Comment
                </h2>
                <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-3 '>
                    Discover and chat with people who understand what you're
                    going through.
                </p>
                <Image src={Chat} width={300} height={600} />
            </section>
            <section className=' px-2  text-center '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-7xl mt-12  '>
                    Groups
                </h2>
                <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-6 '>
                    Make groups and talk about your special interests.
                </p>
                <Image src={Thought} width={300} height={600} />
            </section>
            <section className=' px-2 text-center '>
                <h2 className='text-center text-[#7f0924] m-auto w-fit px-4 font-bold mb-3 text-7xl mt-12  '>
                    Events
                </h2>
                <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center   mb-6'>
                    Take part in our Sharing Circles and other community events.
                </p>
                <Image src={Events} width={300} height={600} />
            </section>
        </section>
    )
}

export default WhatWeDo
