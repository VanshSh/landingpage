import Image from 'next/image'
import Meet from '../public/meet.png'
import Groups from '../public/groups.png'
import Share from '../public/share.png'
import Pods from '../public/pods.png'
const WhatWeDo = () => {
    return (
        <div className='max-w-screen-xl m-auto mt-20 '>
            <div className='grid grid-row md:grid-cols-2'>
                <div className='text-center '>
                    <h1 className='text-7xl  w-1/2 m-auto py-3 text-red-900 font-semibold'>
                        Meet
                    </h1>
                    <p className='text-md w-1/2 m-auto   font-semibold'>
                        Discover women nearby who are at a similar stage in
                        life.
                    </p>
                    <div className=' my-10'>
                        <Image src={Meet} height={370} width={340} />
                    </div>
                </div>
                <div className='text-center '>
                    <h1 className='text-7xl  w-1/2 m-auto py-3 text-red-900 font-semibold'>
                        Group
                    </h1>
                    <p className='text-md w-1/2 m-auto   font-semibold'>
                        Join groups and find communities with common interests.
                    </p>
                    <div className=' my-10'>
                        <Image src={Groups} height={370} width={340} />
                    </div>
                </div>
                <div className='text-center '>
                    <h1 className='text-7xl  w-1/2 m-auto py-3 text-red-900 font-semibold'>
                        Share
                    </h1>
                    <p className='text-md w-1/2 m-auto   font-semibold'>
                        Ask questions, get advice and share stories across
                        meaningful topics.
                    </p>
                    <div className=' my-10'>
                        <Image src={Share} height={370} width={340} />
                    </div>
                </div>
                <div className='text-center '>
                    <h1 className='text-7xl  w-1/2 m-auto py-3 text-red-900 font-semibold'>
                        Pods
                    </h1>
                    <p className='text-md w-1/2 m-auto   font-semibold'>
                        Join live audio conversations hosted by experts.
                    </p>
                    <div className=' my-10'>
                        <Image src={Pods} height={370} width={340} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
