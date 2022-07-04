import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Blogs from './Blogs'
import PostImg1 from '../../public/postImage1.webp'
import PostImg2 from '../../public/postImage2.webp'
import PostImg3 from '../../public/postImage3.webp'
import PostImg4 from '../../public/postImage4.webp'

const CommunityBlogs = () => {
    const blogs = [
        {
            title: 'Sharing Circle',
            img: PostImg1,
            link: 'https://nowandme.com/there-is-no-greater-intelligence-than-kindness-and-MMjP2ZdI_TsBwg4',
        },
        {
            title: 'Ask Me Anything',
            img: PostImg2,
            link: 'https://nowandme.com/there-is-no-greater-intelligence-than-kindness-and-MMjP2ZdI_TsBwg4',
        },
        {
            title: 'Kindness And Empathy',
            img: PostImg3,
            link: 'https://nowandme.com/there-is-no-greater-intelligence-than-kindness-and-MMjP2ZdI_TsBwg4',
        },
        {
            title: 'Mental Health Check-in',
            img: PostImg4,
            link: 'https://nowandme.com/we-are-here-to-give-you-a-few-1msk0G1A-GxRQLX',
        },
    ]

    const blogsComponent = blogs.map((data) => {
        return <Blogs blogsData={data} />
    })
    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },

        820: {
            items: 3,
        },

        1500: {
            items: 4,
        },
    }
    return (
        <section>
            <p className='mt-10 text-center text-3xl font-bold'>Community</p>
            <div className='mx-12'>
                <div className='pt-6'>
                    <AliceCarousel
                        mouseTracking
                        animationDuration={1500}
                        infinite
                        autoPlayInterval={1000}
                        disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        items={blogsComponent}
                        autoPlay
                    />
                </div>
            </div>
        </section>
    )
}

export default CommunityBlogs
