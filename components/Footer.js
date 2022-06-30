import {
    BsInstagram,
    BsFacebook,
    BsTwitter,
    BsPinterest,
    BsApple,
} from 'react-icons/bs'
import { AiFillAndroid } from 'react-icons/ai'
import AndroidBtn from '../public/androidLinkBtn.png'
import IOSBtn from '../public/iOSLinkBtn.png'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='lg:bg-red- bg-black text-white pt-14 px-5 pb-11'>
            <Link href=''>
                <a></a>
            </Link>
            <div className='text-center'>
                <p className='text-white text-5xl font-bold '>
                    Join our Community
                </p>
                <div className='pt-10  flex flex-1 justify-center items-center flex-wrap gap-x-10'>
                    <Link
                        href='https://apps.apple.com/in/app/now-me-mental-health-community/id1587888702'
                        className=''
                    >
                        <a className=''>
                            <Image src={IOSBtn} width={200} height={90} />
                        </a>
                    </Link>
                    <Link
                        href='https://play.google.com/store/apps/details?id=com.nowandme.app'
                        target='_blank'
                        className=''
                    >
                        <a className=''>
                            <Image src={AndroidBtn} width={200} height={90} />
                        </a>
                    </Link>
                </div>
            </div>
            <div className='text-4xl flex flex-1 justify-center items-center my-10 gap-x-10 '>
                <BsInstagram />
                <BsFacebook />
                <BsTwitter />
                <BsPinterest />
            </div>

            <div className='w-fit  m-auto my-10 flex flex-1 flex-wrap justify-center gap-x-20'>
                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Careers</p>
                    <p className='font-bold px-5'>work@nowandme.com </p>
                </div>

                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Contact us</p>
                    <p className='font-bold px-5'>community@nowandme.com</p>
                </div>
                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Something else?</p>
                    <p className='font-bold px-5'>info@nowandme.com</p>
                </div>
            </div>
            <div>
                <ul className='flex-1  flex justify-center gap-x-5  flex-wrap '>
                    <li className='mb-5'>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='/'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='/'>
                            <a>Blogs</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='/'>
                            <a>Community</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='/'>
                            <a>Careers</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='/'>
                            <a>Download</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='/'>
                            <a>&#169; NownadMe</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
