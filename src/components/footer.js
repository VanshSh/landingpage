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
                <div className='pt-10  flex flex-1 justify-center items-center flex-wrap gap-x-10 gap-y-4'>
                    <a
                        href='https://apps.apple.com/in/app/now-me-mental-health-community/id1587888702'
                        target={'_blank'}
                        rel=' noreferrer'
                    >
                        <Image
                            src={IOSBtn}
                            alt='IOS Button'
                            width={200}
                            height={90}
                        />
                    </a>

                    <a
                        href='https://play.google.com/store/apps/details?id=com.nowandme.app'
                        target={'_blank'}
                        rel=' noreferrer'
                    >
                        <Image
                            src={AndroidBtn}
                            alt='Android Button'
                            width={200}
                            height={90}
                        />
                    </a>
                </div>
            </div>
            <div className='text-4xl flex flex-1 justify-center items-center my-10 gap-x-10 '>
                <a
                    href='https://www.instagram.com/nowandme/?hl=en'
                    target={'_blank'}
                    rel=' noreferrer'
                >
                    <BsInstagram />
                </a>
                <a
                    href='https://facebook.com/nowandme'
                    target={'_blank'}
                    rel=' noreferrer'
                >
                    <BsFacebook />
                </a>

                <a
                    href='https://twitter.com/nowandme'
                    target={'_blank'}
                    rel=' noreferrer'
                >
                    <BsTwitter />
                </a>
                <a
                    href='https://www.youtube.com/channel/UC4OxDV6X7SBCb7YD2C5NwPA'
                    target={'_blank'}
                    rel=' noreferrer'
                >
                    <BsYoutube />
                </a>
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
                            href='https://nowandme.com/tags/feedback'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Feedback
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/contact'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Contact
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/faq'
                            target='_blank'
                            rel='noreferrer'
                        >
                            FAQ
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/about'
                            target='_blank'
                            rel='noreferrer'
                        >
                            About
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/terms'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Terms
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/privacy'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Privacy
                        </a>
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
                        <a
                            href='https://nowandme.com/press'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Press
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/community-guidelines'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Guidelines
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/anonymity'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Anonymity
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a
                            href='https://nowandme.com/tags'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Tags
                        </a>
                    </li>
                    <li className='mb-5'>
                        <a> &#169; {currentYear} Now&Me</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
