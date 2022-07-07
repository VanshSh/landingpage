import Image from 'next/image'
import Hero from '../../public/Hero.png'
import AndroidBtn from '../../public/androidLinkBtn.png'
import IOSBtn from '../../public/iOSLinkBtn.png'

const Banner = () => {
    return (
        <header className='flex flex-1 bg-[#fff6f3] lg:flex-row flex-col justify-start lg:justify-center lg:items-center pt-5 lg:px-24 px-5 '>
            <div className='flex flex-col justify-start max-w-3xl '>
                <div className='text-center lg:text-start md:text-start sm:text-start'>
                    <h1 className='text-5xl  leading-[58px] font-bold  text-[#ff6d42]'>
                        Now&Me is your warm, caring home on the internet.
                    </h1>
                </div>
                <p className=' mt-10 text-xl text-[#262626]'>
                    Conversations about things that matter to you. Your safe
                    space to talk about your feelings, or simply how your day
                    went!
                </p>
                <div className='flex w-fit justify-between mt-12 gap-x-4 '>
                    <a
                        href='https://apps.apple.com/in/app/now-me-mental-health-community/id1587888702'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Image
                            src={IOSBtn}
                            alt='IOS Button'
                            width={180}
                            height={80}
                        />
                    </a>

                    <a
                        href='https://play.google.com/store/apps/details?id=com.nowandme.app'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Image
                            src={AndroidBtn}
                            alt='Android Button'
                            width={180}
                            height={80}
                        />
                    </a>
                </div>
            </div>
            <div className='mt-12 lg:ml-12 pb-14'>
                <Image src={Hero} alt='Hero' height={500} width={400} />
            </div>
        </header>
    )
}

export default Banner
