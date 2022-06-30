import Image from 'next/image'
import User1 from '../../public/user1.jpeg'
import { GoEye, GoComment } from 'react-icons/go'
import Link from 'next/link'

const Blogs = (props) => {
    const { title, images, links } = props

    return (
        <div className=' m-4 '>
            <div className=' relative'>
                <Link href={links}>
                    <a>
                        <Image src={images.src} width={400} height={200} />
                    </a>
                </Link>
            </div>

            <div className='mt-2'>
                <div className='text-center text-gray-400 flex flex-1 gap-x-2 justify-center items-center mt-1'>
                    {title}
                </div>
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

//   <span className='text-black'>Carly</span>
//                     <span className=' flex gap-x-2 justify-center items-center'>
//                         <GoLocation />
//                         New York
//                     </span>
//                     <span className='text-gray-400'>7 hours ago</span>
//                 </div>
//             </div>
//             <div className='font-bold text-2xl text-center my-2'>
//                 <h2>{props.topic} </h2>
//             </div>
//             <div className='text-center'>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     <span className='text-red-300 ml-2'>read more..</span>{' '}
//                 </p>
