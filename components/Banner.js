import Image from 'next/image'
import Header from '../public/header.png'
import { BsApple } from 'react-icons/bs'
import { AiFillAndroid } from 'react-icons/ai'
const Banner = () => {
    return (
        <header className='flex flex-1 lg:flex-row flex-col justify-start lg:justify-center lg:items-center pt-5 lg:px-24 px-5 '>
            <div className='flex flex-col mt-24 justify-start max-w-3xl '>
                <h1 className='text-5xl font-extrabold text-[#7f0924] '>
                    A safe space for women to meet and find support
                </h1>
                <p className=' mt-10 text-xl'>
                    Connect with women who are at a similar stage in life–from
                    fertility, pregnancy and motherhood through to menopause.
                </p>
                <div className='flex w-fit justify-between mt-8 '>
                    <button className=' px-14 py-2 text-4xl rounded-lg inline-flex bg-[#fe5055] text-white'>
                        <BsApple />
                    </button>
                    <button className=' px-14 py-2 text-4xl lg:ml-10 ml-4 rounded-lg inline-flex bg-[#fe5055] text-white'>
                        <AiFillAndroid />
                    </button>
                </div>
            </div>
            <div className='mt-12 lg:ml-12 pb-14'>
                <Image src={Header} height={550} width={473} />
            </div>
        </header>
    )
}

export default Banner
