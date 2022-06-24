import {
    BsInstagram,
    BsFacebook,
    BsTwitter,
    BsPinterest,
    BsApple,
} from 'react-icons/bs'
import { AiFillAndroid } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='lg:bg-red- bg-black text-white pt-14 px-5 pb-11'>
            <div className='text-center'>
                <p className='text-white text-5xl font-bold '>
                    Get the free app
                </p>
                <div className='pt-10 flex flex-1 justify-center items-center flex-wrap gap-3 '>
                    <button className='bg-white rounded-md text-black px-16 text-3xl py-2'>
                        <BsApple />
                    </button>
                    <button className='bg-white rounded-md text-black px-16 text-3xl py-2'>
                        <AiFillAndroid />
                    </button>
                </div>
            </div>
            <div className='text-4xl flex flex-1 justify-center items-center my-10 gap-x-5 '>
                <BsInstagram />
                <BsFacebook />
                <BsTwitter />
                <BsPinterest />
            </div>

            <div className='w-fit  m-auto my-10 flex flex-1 flex-wrap justify-center gap-x-20'>
                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Advertising enquiries</p>
                    <p className='font-bold px-5'>@advertising@team.com</p>
                </div>
                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Advertising enquiries</p>
                    <p className='font-bold px-5'>@advertising@team.com</p>
                </div>
                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Advertising enquiries</p>
                    <p className='font-bold px-5'>@advertising@team.com</p>
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
                            <a>Sitemap</a>
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
