import Image from 'next/image'
import Header from '../../public/groups.png'
import User1 from '../../public/user1.jpeg'
const Blogs = (props) => {
    return (
        <div className='pt-10 flex flex-1 items-center justify-center'>
            <div className='m-4 relative'>
                <div className='pt-7 w-fit m-auto'>
                    <Image
                        src={Header}
                        className='object-scale-down'
                        width={250}
                        height={150}
                    />
                </div>

                <div className=' absolute  text-white -top-4 m-auto w-full  flex flex-1 justify-center items-center  '>
                    <p className='bg-red-500 px-10'>Wellness</p>
                </div>

                <div>
                    <div className=' w-fit m-auto'>
                        <Image
                            src={User1}
                            height={50}
                            width={50}
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex flex-1 justify-center gap-1 text-gray-600'>
                        <h1>Darcel Being</h1>
                        <p>5 hours ago</p>
                    </div>
                </div>
                <div className='text-black font-bold py-4  flex flex-1 justify-center items-center flex-col '>
                    <h1 className='text-xl'>{props.topic}</h1>

                    <p className='text-md pt-5 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat ipsum ratione eius deserunt quibusdam, eos
                        tempore aperiam dolor placeat autem?
                    </p>
                </div>
                <div className='text-gray-300 flex gap-2 items-center justify-center text-center'>
                    <span>644 Views</span> <span>0 Comments</span>
                </div>
            </div>
        </div>
    )
}

export default Blogs
