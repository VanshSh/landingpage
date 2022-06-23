import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Blogs from './Blogs'

const CommunityBlogs = () => {
    const blogs = [
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
    ]

    const blogsComponent = blogs.map((data) => {
        return <Blogs topic={data.title} />
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
        <div>
            <p className='mt-5 text-center font-bold text-4xl pt-2'>
                Community
            </p>
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
    )
}

export default CommunityBlogs
