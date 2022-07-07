import Image from 'next/image'
import { GoEye, GoWatch, GoComment } from 'react-icons/go'
import Link from 'next/link'

const Blogs = (props) => {
    const { img, link, tag, comments, userName, time, desc, userImg } =
        props.blogsData
    return (
        <Link href={link}>
            <div className=' m-4 cursor-pointer'>
                <div className=' relative'>
                    <a>
                        <Image
                            src={img.src}
                            alt={tag}
                            width={360}
                            height={200}
                        />
                    </a>
                </div>
                <div className='flex justify-center'>
                    <span className='bg-red-800 absolute top-2  px-3 rounded-sm text-white'>
                        {tag}
                    </span>
                </div>
                <div>
                    <div className='flex justify-center '>
                        <img
                            src={userImg}
                            width={40}
                            height={40}
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex gap-x-2 justify-center items-center my-3'>
                        <p className='text-lg'>{userName}</p>
                        {/* <p className='text-gray-400 '>{time}</p> */}
                    </div>
                </div>
                <div className='text-center'>
                    {desc.slice(0, 80)}
                    <span className='text-red-300'> read more..</span>
                </div>
                <div className='text-gray-400 text-center flex flex-1 justify-center items-center gap-x-3 mt-3'>
                    <span className='flex gap-x-2 justify-center items-center'>
                        {time}
                    </span>
                    <span className='flex gap-x-2 justify-center items-center'>
                        <GoComment />
                        {comments} comments
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default Blogs
