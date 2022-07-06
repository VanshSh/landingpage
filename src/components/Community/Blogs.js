import Image from 'next/image'
import User1 from '../../public/user1.jpeg'
import { GoEye, GoComment } from 'react-icons/go'
import Link from 'next/link'

const Blogs = (props) => {
    const { title, img, link } = props.blogsData
    return (
        <Link href={link}>
            <div className=' m-4 cursor-pointer'>
                <div className=' relative'>
                    <a>
                        <Image src={img.src} width={400} height={200} />
                    </a>
                </div>

                <div className='mt-2'>
                    <div className='text-center text-gray-600 text-2xl font-bold flex flex-1 gap-x-2 justify-center items-center mt-8'>
                        {title}
                    </div>
                </div>

                {/* <div className='text-gray-400 text-center flex flex-1 justify-center items-center gap-x-3 mt-3'>
                    <span className='flex gap-x-2 justify-center items-center'>
                        <GoEye />
                        15 Views
                    </span>
                    <span className='flex gap-x-2 justify-center items-center'>
                        <GoComment />
                        39 Comments
                    </span>
                </div> */}
            </div>
        </Link>
    )
}

export default Blogs
