import Image from 'next/image'
import Link from 'next/link'
import Fertility from '../public/Fertility.webp'
import Pregnancy from '../public/Pregnancy.webp'
import Motherhood from '../public/Motherhood.webp'
import Menopause from '../public/Menopause.webp'

const CommunityType = () => {
    return (
        <section className='my-16 lg:mx-52 md:mx-16 mx-5'>
            <p className='text-[#7f0924] text-center font-semibold lg:text-5xl text-3xl my-10 px-1'>
                Peanut provides access to a community who are there to listen,
                share information and offer valuable advice.
            </p>
            <div className='mt-16 mb-10 flex w-full justify-evenly font-normal items-center  flex-wrap '>
                <div className=' text-center text-xl p-2'>
                    <div>
                        <Link href=''>
                            <a>
                                <Image
                                    src={Fertility}
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </Link>
                    </div>
                    Fertility
                </div>
                <div className=' text-center text-xl p-2'>
                    <div>
                        <Link href=''>
                            <a>
                                <Image
                                    src={Pregnancy}
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </Link>
                    </div>
                    Pregnancy
                </div>
                <div className=' text-center text-xl p-2'>
                    <div>
                        <Link href=''>
                            <a>
                                <Image
                                    src={Motherhood}
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </Link>
                    </div>
                    Motherhood
                </div>
                <div className=' text-center text-xl p-2'>
                    <div>
                        <Link href=''>
                            <a>
                                <Image
                                    src={Menopause}
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </Link>
                    </div>
                    Menopause
                </div>
            </div>
        </section>
    )
}

export default CommunityType

// <div className=' container  my-12  m-auto'>
//     <div className='py-5'>
//         <h2 className=' text-center text-4xl text-red-900 font-bold px-10'>
//             Peanut provides access to a community who are there to
//             listen, share information and offer valuable advice.
//         </h2>
//     </div>
//     <div className='flex  flex-1 flex-wrap py-6 items-center justify-around'>
//         <div>
//             <div className='p-1'>
//                 <div className='bg-red-50 text-black rounded-full p-10'>
//                     FR
//                 </div>
//                 <p className='text-center pt-4'>Fertility</p>
//             </div>
//         </div>
//         <div>
//             <div className='p-2'>
//                 <div className='bg-red-50 text-black rounded-full p-10'>
//                     PR
//                 </div>
//                 <p className='text-center pt-4'>Pregnancy</p>
//             </div>
//         </div>
//         <div>
//             <div className='p-2'>
//                 <div className='bg-red-50 text-black rounded-full p-10'>
//                     MH
//                 </div>
//                 <p className='text-center pt-4'>Motherhood</p>
//             </div>
//         </div>
//         <div>
//             <div className='p-2'>
//                 <div className='bg-red-50 text-black rounded-full p-10'>
//                     MP
//                 </div>
//                 <p className='text-center pt-4'>Menopause</p>
//             </div>
//         </div>
//     </div>
// </div>
