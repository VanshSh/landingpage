import Image from 'next/image'
import Header from '../public/header.png'
const Banner = () => {
    return (
        <header className='bg-red-50 lg:text-start text-center px-3  flex flex-1 lg:flex-row flex-col justify-center  lg:items-center'>
            <div className='lg:w-fit w-full   mr-10 '>
                <h1 className='text-[2.4em] text-red-900 font-extrabold '>
                    A safe space for women <br /> to meet and find support
                </h1>

                <p className=' text-xl my-5'>
                    Connect with women who are at a similar stage in life–from
                    fertility, <br /> pregnancy and motherhood through to
                    menopause.
                </p>

                <div className='flex flex-1 lg:justify-start justify-center gap-2'>
                    <button className='bg-[#ff4f55] px-10 rounded  py-3 text-white font-bold'>
                        iOS
                    </button>
                    <button className='bg-[#ff4f55] px-10 rounded  py-3 text-white font-bold'>
                        Android
                    </button>
                </div>
            </div>
            <div className='my-10 '>
                <Image src={Header} height={450} width={400} />
            </div>
        </header>
    )
}

export default Banner
