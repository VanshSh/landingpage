import Image from 'next/image'
import { useState, useEffect } from 'react'
import Logo from '../../public/Logo.png'
import Link from 'next/link'
import AppInstall from './app-install-alert'

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isIOS, setIsIOS] = useState(false)

    useEffect(() => {
        if (
            [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod',
                'MacIntel',
            ].includes(navigator.platform) ||
            (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
        ) {
            setIsIOS(true)
        }
    }, [])
    return (
        <nav className='flex flex-1 items-center xl:justify-center justify-between gap-5 px-3 z-40  sticky bg-[#fff6f3] top-0 font-sans '>
            <div className='px-4 md:grow md:text-center lg:text-start grow text-center py-2  order-1 lg:-order-2 max-w-lg'>
                <Image src={Logo} alt='NowandMe Logo' width={90} height={50} />
            </div>
            <div className='lg:grow mx-5 py-5'>
                <section className='MOBILE-MENU flex lg:hidden justify-start items-between'>
                    <div
                        className='HAMBURGER-ICON space-y-2 py-3 order-2 lg:-order-1 w-fit md:justify-start'
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className='block h-0.5 w-8  bg-black'></span>
                        <span className='block h-0.5 w-8 bg-black'></span>
                        <span className='block h-0.5 w-8  bg-black'></span>
                    </div>

                    <div
                        className={`${
                            !isNavOpen && 'hidden'
                        }  bg-black w-full h-full z-10 fixed top-0 left-0 text-white text-5xl font-bold flex  flex-1 flex-col  justify-between items-center`}
                    >
                        <div
                            className='absolute top-0 left-0 px-8 py-8 cursor-pointer'
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className='h-6 w-8 text-white'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='1'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <line x1='18' y1='6' x2='6' y2='18' />
                                <line x1='6' y1='6' x2='18' y2='18' />
                            </svg>
                        </div>
                        <ul className='flex mt-56 p-10 flex-col items-center gap-7 justify-between min-h-[250px] '>
                            <li>
                                <Link href='/'>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://nowandme.com/home'>
                                    <a>Community </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://nowandme.com/therapy'>
                                    <a>Therapy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://nowandme.com/blog'>
                                    <a>Blog</a>
                                </Link>
                            </li>
                        </ul>

                        <AppInstall />
                    </div>
                </section>

                <ul className='DESKTOP-MENU hidden text-xl  space-x-8 lg:flex gap-y-9  flex-1 justify-end '>
                    <li>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://nowandme.com/home'>
                            <a>Community </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://nowandme.com/therapy'>
                            <a>Therapy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://nowandme.com/blog'>
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex-none order-4  '>
                <a
                    className='text-white bg-[#ff6d42] px-5 py-4 text-md rounded-xl'
                    href={
                        isIOS
                            ? 'https://apps.apple.com/in/app/now-me-mental-health-community/id1587888702'
                            : 'https://play.google.com/store/apps/details?id=com.nowandme.app'
                    }
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    Download the App
                </a>
            </div>
        </nav>
    )
}

export default Navigation
