import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import AndroidBtn from '../../public/androidLinkBtn.png'
import IOSBtn from '../../public/iOSLinkBtn.png'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='lg:bg-red- bg-black text-white  pt-14  '>
            <div className='text-center'>
                <p className='text-white text-5xl font-bold '>
                    Join our Community
                </p>
                <div className='pt-10  flex flex-1 justify-center items-center flex-wrap gap-x-10'>
                    <a
                        href='https://apps.apple.com/in/app/now-me-mental-health-community/id1587888702'
                        target={'_blank'}
                    >
                        <Image src={IOSBtn} width={200} height={90} />
                    </a>

                    <a
                        href='https://play.google.com/store/apps/details?id=com.nowandme.app'
                        target={'_blank'}
                    >
                        <Image src={AndroidBtn} width={200} height={90} />
                    </a>
                </div>
            </div>
            <div className='text-4xl flex flex-1 justify-center items-center my-10 gap-x-10 '>
                <a
                    href='https://www.instagram.com/nowandme/?hl=en'
                    target={'_blank'}
                >
                    <BsInstagram />
                </a>
                <a href='https://facebook.com/nowandme' target={'_blank'}>
                    <BsFacebook />
                </a>

                <a href='https://twitter.com/nowandme' target={'_blank'}>
                    <BsTwitter />
                </a>
                <a
                    href='https://www.youtube.com/channel/UC4OxDV6X7SBCb7YD2C5NwPA'
                    target={'_blank'}
                >
                    <BsYoutube />
                </a>
            </div>

            <div className='w-fit  m-auto my-10 flex flex-1 flex-wrap justify-center gap-x-20'>
                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Careers</p>
                    <a
                        className='font-bold px-5'
                        href='mailto:work@nowandme.com'
                    >
                        work@nowandme.com
                    </a>
                </div>

                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Contact us</p>
                    <a
                        className='font-bold px-5'
                        href='mailto:community@nowandme.com'
                    >
                        community@nowandme.com
                    </a>
                </div>
                <div className='text-white  text-center py-5 '>
                    <p className='px-5'>Something else?</p>
                    <a
                        className='font-bold px-5'
                        href='mailto:info@nowandme.com'
                    >
                        info@nowandme.com
                    </a>
                </div>
            </div>
            <div>
                <ul className='flex-1  flex justify-center items-end gap-x-5  flex-wrap '>
                    <li className='mb-5'>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='https://nowandme.com/home'>
                            <a>Community</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='https://nowandme.com/therapy'>
                            <a>Therapy</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <Link href='https://nowandme.com/blog'>
                            <a>Blogs</a>
                        </Link>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/careers'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Careers
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a>
                            &#169; {currentYear} Now&Me Enterprises Pvt. Ltd. –
                            All rights reserved.
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
