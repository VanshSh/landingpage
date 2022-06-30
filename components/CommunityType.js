import Image from 'next/image'
import Link from 'next/link'

const CommunityType = () => {
    return (
        <section className='my-16 lg:mx-52 md:mx-16 mx-5'>
            <p className='text-[#191919] leading-[40px]   text-center font-bold lg:text-[40px] text-3xl my-10 px-1 py-10'>
                Now&Me provides access to a kind, empathetic and <br />
                supportive community of compassionate people
            </p>
            <div className='mt-16 mb-10 flex w-full justify-evenly font-normal items-center  flex-wrap '>
                <div className=' text-center text-xl p-2'>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <Link href=''>
                            <a>🧠</a>
                        </Link>
                    </div>
                    Mental Health
                </div>
                <div className=' text-center text-xl p-2'>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <Link href=''>
                            <a>😔</a>
                        </Link>
                    </div>
                    Loneliness
                </div>
                <div className=' text-center text-xl p-2'>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <Link href=''>
                            <a>🧑‍💻</a>
                        </Link>
                    </div>
                    Career
                </div>
                <div className=' text-center text-xl p-2'>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <Link href=''>
                            <a>🧡</a>
                        </Link>
                    </div>
                    Relationships
                </div>
            </div>
        </section>
    )
}

export default CommunityType
