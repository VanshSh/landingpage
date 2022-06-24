import Image from 'next/image'
import { useState } from 'react'
import Logo from '../public/logo.svg'

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <div className='flex flex-1 items-center gap-5  bg-red-50 py-4 p-4 z-40  sticky top-0'>
            <div className='flex flex-none order-1  md:flex-grow md:justify-start lg:-order-2 sm:flex-grow sm:justify-start'>
                <Image src={Logo} height={35} width={60} />
            </div>
            <nav className='grow mx-5'>
                <section className='MOBILE-MENU flex lg:hidden justify-start '>
                    <div
                        className='HAMBURGER-ICON space-y-2 py-3 order-2 lg:-order-1 md:flex-grow md:justify-start'
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className='block h-0.5 w-8  bg-black'></span>
                        <span className='block h-0.5 w-8 bg-black'></span>
                        <span className='block h-0.5 w-8  bg-black'></span>
                    </div>

                    <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                        <div
                            className='absolute top-0 left-0 px-8 py-8'
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
                        <ul className='flex flex-col items-center gap-7 justify-between min-h-[250px]'>
                            <li>
                                <a href=''>Home</a>
                            </li>
                            <li>
                                <a href=''>Blog</a>
                            </li>
                            <li>
                                <a href=''>About</a>
                            </li>
                            <li>
                                <a href=''>Groups</a>
                            </li>
                            <li>
                                <a href=''>Community</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className='DESKTOP-MENU hidden justify-end space-x-8 lg:flex gap-y-9  '>
                    <li>
                        <a href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>About</a>
                    </li>
                    <li>
                        <a href=''>Blog</a>
                    </li>
                    <li>
                        <a href=''>Groups</a>
                    </li>
                    <li>
                        <a href=''>Community</a>
                    </li>
                </ul>
            </nav>
            <div className='flex-none order-4 '>
                <button className='text-white bg-[#ff4f55] px-5 py-2  rounded-2xl'>
                    Join App
                </button>
            </div>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        background: black; 
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        color:white;
        z-index: 10;
        font-size:3rem;
        font-weight:bold;
        display: flex;
        flex-direction:column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    )
}

export default Navigation
