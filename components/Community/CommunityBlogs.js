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
            title: 'Know yourself...',
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
        <section>
            <p className='mt-10 text-center text-3xl font-bold'>
                Community
                <span className='inline-block w-14 h-9 align-middle ml-3 text-xl rounded-tr-xl bg-gray-100  '>
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
