import Image from 'next/image'
import Comment from '../../public/Comment.png'
import Group from '../../public/Group.jpg'
import Share from '../../public/Share.jpg'

const WhatWeDo = () => {
    return (
        <section className='my-[50px] mx-auto w-2/3'>
            <div className='grid lg:grid-cols-2 grid-rows-2 justify-center'>
                <section className=' px-2 py-10 text-center'>
                    <h2 className='text-center text-[#ff6d42] m-auto w-fit px-4 font-bold mb-3 text-6xl mt-12  '>
                        Connections
                    </h2>
                    <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-[50px] '>
                        Beyond chatting, build personal connections with people
                        who understand and care.
                    </p>
                    <div className='w-[280px] height-[400px]  text-center my-0 mx-auto'>
                        <Image src={Share} alt='Share' />
                    </div>
                </section>
                <section className=' px-2 py-10 text-center'>
                    <h2 className='text-center text-[#ff6d42] m-auto w-fit px-4 font-bold mb-3 text-6xl mt-12  '>
                        Anonymous
                    </h2>
                    <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-9 '>
                        So you can do YOU. Not your job, the number of followers
                        or social status, define who you are
                    </p>
                    <div className='w-[280px] height-[400px] text-center my-0 mx-auto'>
                        <Image src={Comment} alt='Comments' />
                    </div>
                </section>
                <section className=' px-2 py-10 text-center'>
                    <h2 className='text-center text-[#ff6d42] m-auto w-fit px-4 font-bold mb-3 text-6xl mt-12  '>
                        Discussions
                    </h2>
                    <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-9 '>
                        The real action is always in the comments! Comforting
                        words, anecdotes from lived experiences & the feeling of
                        solidarity.
                    </p>
                    <div className='w-[280px] height-[400px] text-center my-0 mx-auto'>
                        <Image src={Group} alt='Groups' />
                    </div>
                </section>
                <section className=' px-2 py-10 text-center'>
                    <h2 className='text-center text-[#ff6d42] m-auto w-fit px-4 font-bold mb-3 text-6xl mt-12  '>
                        Groups
                    </h2>
                    <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-9 '>
                        Create your community of like-minded friends to talk
                        about your special interests.
                    </p>
                    <div className='w-[280px] height-[400px] text-center my-0 mx-auto'>
                        <Image src={Group} alt='Events' />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default WhatWeDo
