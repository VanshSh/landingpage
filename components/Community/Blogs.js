import Image from 'next/image'
import BlogPic from '../../public/BlogPic1.webp'
import User1 from '../../public/user1.jpeg'
import { GoLocation, GoEye, GoComment } from 'react-icons/go'

const Blogs = (props) => {
    return (
        <div className=' m-4'>
            <div className=' relative'>
                <Image src={BlogPic} height={400} width={450} />
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
                <h2>BALANCE ⭐ </h2>
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

// <div className='pt-10 flex flex-1 items-center justify-center'>
//             <div className='m-4 relative'>
//                 <div className='pt-7 w-fit m-auto'>
//                     <Image
//                         src={Header}
//                         className='object-scale-down'
//                         width={250}
//                         height={150}
//                     />
//                 </div>

// <div className=' absolute  text-white -top-4 m-auto w-full  flex flex-1 justify-center items-center  '>
//     <p className='bg-red-500 px-10'>Wellness</p>
// </div>

//                 <div>
//                     <div className=' w-fit m-auto'>
// <Image
//     src={User1}
//     height={50}
//     width={50}
//     className='rounded-full'
// />
//                     </div>
//                     <div className='flex flex-1 justify-center gap-1 text-gray-600'>
//                         <h1>Darcel Being</h1>
//                         <p>5 hours ago</p>
//                     </div>
//                 </div>
//                 <div className='text-black font-bold py-4  flex flex-1 justify-center items-center flex-col '>
//                     <h1 className='text-xl'>{props.topic}</h1>

//                     <p className='text-md pt-5 text-center'>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Fugiat ipsum ratione eius deserunt quibusdam, eos
//                         tempore aperiam dolor placeat autem?
//                     </p>
//                 </div>
//                 <div className='text-gray-300 flex gap-2 items-center justify-center text-center'>
//                     <span>644 Views</span> <span>0 Comments</span>
//                 </div>
//             </div>
//         </div>
