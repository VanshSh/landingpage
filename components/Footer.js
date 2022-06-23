import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='bg-black text-white px-4 py-8'>
            <div className='text-center'>
                <p className='text-white font-bold text-5xl'>
                    Get the free app
                </p>
                <div className='pt-10'>
                    <button className='bg-white text-black my-2 px-12 py-2 text-2xl rounded mx-5'>
                        iOS
                    </button>
                    <button className='bg-white text-black px-12 py-2 text-2xl rounded mx-5'>
                        Android
                    </button>
                </div>
            </div>

            <div className='flex-1 flex justify-center items-center gap-6 pt-20 pb-5 text-3xl'>
                <BsInstagram />
                <BsFacebook />
                <BsTwitter />
                <BsPinterest />
            </div>
            <div className='text-white flex flex-1 justify-between gap-4 w-fit m-auto pt-5  flex-wrap items-center'>
                <div className='text-center p-4 mx-5'>
                    <p>Advertising enquries</p>
                    <p className='font-bold'>advertising@team.com</p>
                </div>
                <div className='text-center p-4 mx-5'>
                    <p>Advertising enquries</p>
                    <p className='font-bold'>advertising@team.com</p>
                </div>
                <div className='text-center p-4 mx-5'>
                    <p>Advertising enquries</p>
                    <p className='font-bold'>advertising@team.com</p>
                </div>
            </div>

            <div className='flex flex-1 flex-wrap pt-10 justify-center items-center gap-4'>
                <p>Home</p>
                <p>About</p>
                <p>Community</p>
                <p>Blogs</p>
                <p>Career</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Downloads</p>
                <p> &#169; NownadMe </p>
            </div>
        </div>
    )
}

export default Footer
