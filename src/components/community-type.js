import Image from 'next/image'
import Link from 'next/link'

const CommunityType = () => {
    return (
        <section className='my-16 lg:mx-52 md:mx-16 mx-5'>
            <p className='text-[#191919] text-center font-bold lg:text-[40px] md:text-[30px] text-[25px]  my-10 px-1 py-4'>
                Now&Me is where people come together to have the most authentic
                and meaningful conversations
            </p>
            <div className='mt-12 mb-10 flex w-full justify-evenly font-normal items-center  flex-wrap '>
                <div>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <span>🧑‍💻</span>
                    </div>
                    <div className='text-center text-xl'>Career help</div>
                </div>
                <div>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <span>🧑 </span>
                    </div>
                    <div className='text-center text-xl'>Fitness plans</div>
                </div>
                <div>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <span>🧑‍💻</span>
                    </div>
                    <div className='text-center text-xl px-3'>
                        One-sided love
                    </div>
                </div>
                <div>
                    <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
                        <span>🧑‍💻</span>
                    </div>
                </div>
                <div className='text-center text-xl'>
                    Deeply emotional things
                </div>
            </div>
        </section>
    )
}

export default CommunityType

//  <div className=' text-center text-xl p-2'>
//                     <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
//                         <span>🧠</span>
//                     </div>
//                     Fitness plans
//                 </div>
//                 <div className=' text-center text-xl p-2'>
//                     <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
//                         <span>😔</span>
//                     </div>
//                     One-sided love
//                 </div>
//                 <div className=' text-center text-xl p-2'>
//                     <div className='bg-[#fff6f3] p-10 text-4xl rounded-full mb-5 '>
//                         <span>🧡</span>
//                     </div>
//                     Deeply emotional things
//                 </div>
