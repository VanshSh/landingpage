import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Blogs from './posts'
import PostImg1 from '../../../public/communitypic1.jpeg'
import PostImg2 from '../../../public/communitypic2.jpeg'
import PostImg3 from '../../../public/communitypic3.jpeg'
import PostImg4 from '../../../public/communitypic4.jpeg'

const CommunityBlogs = () => {
    const blogs = [
        {
            img: PostImg1,
            link: 'https://nowandme.com/there-is-no-greater-intelligence-than-kindness-and-MMjP2ZdI_TsBwg4',
            id: 1,
            tag: 'Share',
            userImg: 'https://randomuser.me/api/portraits/men/11.jpg',
            comments: 10,
            userName: 'Nipun',
            time: '2 days ago',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed porro doloremque quaerat quae suscipit maxime ab sit modi dolor atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quaerat repellendus saepe dolore molestiae? Nobis eveniet sed libero doloribus aperiam.',
        },
        {
            img: PostImg2,
            link: 'https://nowandme.com/there-is-no-greater-intelligence-than-kindness-and-MMjP2ZdI_TsBwg4',
            id: 2,
            tag: 'Happy',
            userImg: 'https://randomuser.me/api/portraits/women/11.jpg',
            comments: 15,
            userName: 'Rashmi',
            time: '17min ago',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed porro doloremque quaerat quae suscipit maxime ab sit modi dolor atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quaerat repellendus saepe dolore molestiae? Nobis eveniet sed libero doloribus aperiam.',
        },
        {
            img: PostImg3,
            link: 'https://nowandme.com/there-is-no-greater-intelligence-than-kindness-and-MMjP2ZdI_TsBwg4',
            id: 3,
            tag: 'Kindness',
            userImg: 'https://randomuser.me/api/portraits/men/11.jpg',
            comments: 20,
            userName: 'Bhagesh',
            time: 'Just now',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed porro doloremque quaerat quae suscipit maxime ab sit modi dolor atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quaerat repellendus saepe dolore molestiae? Nobis eveniet sed libero doloribus aperiam.',
        },
        {
            img: PostImg4,
            link: 'https://nowandme.com/we-are-here-to-give-you-a-few-1msk0G1A-GxRQLX',
            id: 4,
            tag: 'Mental Health',
            userImg: 'https://randomuser.me/api/portraits/women/11.jpg',
            comments: 25,
            userName: ' Sakshi',
            time: '5hr ago ',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed porro doloremque quaerat quae suscipit maxime ab sit modi dolor atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quaerat repellendus saepe dolore molestiae? Nobis eveniet sed libero doloribus aperiam.',
        },
    ]

    const blogsComponent = blogs.map((data) => {
        return <Blogs blogsData={data} key={data.id} />
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
            <p className='mt-28 text-center text-3xl font-bold align-middle'>
                Community{' '}
                <span className='bg-gray-200 text-gray-500 rounded px-2 text-center '>
                    ...
                </span>
            </p>
            <div className='mx-12'>
                <div className='pt-6'>
                    <AliceCarousel
                        mouseTracking
                        animationDuration={1500}
                        infinite
                        autoPlayInterval={1000}
                        disableDotsControls
                        disableButtonsControls={false}
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
