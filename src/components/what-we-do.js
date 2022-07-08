import Image from 'next/image'
import Connections from '../../public/Connections.png'
import Group from '../../public/Group.png'
import Anonymity from '../../public/Anonymity.png'
import Discussions from '../../public/Discussions.png'

const WhatWeDo = () => {
    return (
        <section className='my-[50px] mx-auto w-2/3'>
            <div className='grid lg:grid-cols-2 grid-rows-2 justify-center'>
                <section className=' px-2  text-center'>
                    <h2 className='text-center text-[#ff6d42] m-auto w-fit px-4 font-bold mb-3 text-6xl mt-12  '>
                        Connections
                    </h2>
                    <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-[50px] px-3 lg:px-0 '>
                        Beyond chatting, build personal connections with the
                        people who understand and care about you.
                    </p>
                    <div>
                        <Image
                            src={Connections}
                            alt='Connections'
                            className='w-fit m-auto lg:w-2/3'
                        />
                    </div>
                </section>
                <section className=' px-2  text-center'>
                    <h2 className='text-center text-[#ff6d42] m-auto w-fit px-4 font-bold mb-3 text-6xl mt-12'>
                        Anonymity
                    </h2>
                    <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-[50px] px-3 lg:px-0 '>
                        So you can do YOU. Not your job, nor the number of
                        followers or social status, define who you are
                    </p>
                    <div>
                        <Image
                            src={Anonymity}
                            alt='Anonymity'
                            className='w-fit m-auto lg:w-2/3 '
                        />
                    </div>
                </section>
                <section className=' px-2 text-center'>
                    <h2 className='text-center text-[#ff6d42] m-auto w-fit px-4 font-bold mb-3 text-6xl mt-12  '>
                        Discussions
                    </h2>
                    <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-9 '>
                        The real action is always in the comments! Comforting
                        words or anecdotes from lived experiences.
                    </p>
                    <div>
                        <Image
                            src={Discussions}
                            alt='Discussions'
                            className='w-fit m-auto lg:w-2/3'
                        />
                    </div>
                </section>
                <section className=' px-2  text-center'>
                    <h2 className='text-center text-[#ff6d42] m-auto w-fit px-4 font-bold mb-3 text-6xl mt-12  '>
                        Groups
                    </h2>
                    <p className='mt-4 lg:text-xl w-fit m-auto lg:w-2/3 text-center mb-9 px-3 lg:px-0 '>
                        Create your community of like-minded friends to talk
                        about your special interests. True solidarity.
                    </p>
                    <div>
                        <Image
                            src={Group}
                            alt='Group'
                            className='w-fit m-auto lg:w-2/3'
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default WhatWeDo
