import Image from 'next/image'
import Link from 'next/link'

const CommunityType = () => {
    return (
        <section className='my-16 lg:mx-52 md:mx-16 mx-5'>
            <p className='text-[#191919] text-center font-bold lg:text-[40px] md:text-[30px] text-[25px]  my-10 px-1 py-4'>
                Now&Me provides access to a kind, empathetic and supportive
                community of compassionate people
            </p>
            <div className='mt-12 mb-10 flex w-full justify-evenly font-normal items-center  flex-wrap '>
                <div className=' text-center text-xl p-2'>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <span>🧠</span>
                    </div>
                    Mental Health
                </div>
                <div className=' text-center text-xl p-2'>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <span>😔</span>
                    </div>
                    Loneliness
                </div>
                <div className=' text-center text-xl p-2'>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <span>🧑‍💻</span>
                    </div>
                    Career
                </div>
                <div className=' text-center text-xl p-2'>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <span>🧡</span>
                    </div>
                    Relationships
                </div>
            </div>
        </section>
    )
}

export default CommunityType
