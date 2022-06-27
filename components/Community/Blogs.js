import Image from 'next/image'
import BlogPic from '../../public/BlogPic1.webp'
import User1 from '../../public/user1.jpeg'
import { GoLocation, GoEye, GoComment } from 'react-icons/go'

const Blogs = (props) => {
    return (
        <div className=' m-4 w-80'>
            <div className=' relative'>
                <Image src={BlogPic} />
                <div className=' absolute  text-white -top-4 m-auto w-full  flex flex-1 justify-center items-center  '>
                    <p className='bg-[#7f0924] px-2 py-1'>Wellness </p>
                </div>
            </div>

            <div className='mt-2'>
                <div className='w-fit m-auto'>
                    <Image
                        src={User1}
                        height={30}
                        width={30}
                        className='rounded-full'
                    />
                </div>
                <div className='text-center text-gray-400 flex flex-1 gap-x-2 justify-center items-center mt-1'>
                    <span className='text-black'>Carly</span>
                    <span className=' flex gap-x-2 justify-center items-center'>
                        <GoLocation />
                        New York
                    </span>
                    <span className='text-gray-400'>7 hours ago</span>
                </div>
            </div>
            <div className='font-bold text-2xl text-center my-2'>
                <h2>{props.topic} </h2>
            </div>
            <div className='text-center'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className='text-red-300 ml-2'>read more..</span>{' '}
                </p>
            </div>

            <div className='text-gray-400 text-center flex flex-1 justify-center items-center gap-x-3 mt-3'>
                <span className='flex gap-x-2 justify-center items-center'>
                    <GoEye />
                    15 Views
                </span>
                <span className='flex gap-x-2 justify-center items-center'>
                    <GoComment />
                    39 Comments
                </span>
            </div>
        </div>
    )
}

export default Blogs
