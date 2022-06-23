import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import UserReview from './UserReview'

const UserReviewCarousel = () => {
    const items = [
        {
            name: 'Madison',
            review: `"I love the Peanut app! I met my best friend who lives directly
                across the street. I would never have met her if it weren't for
                this app!"`,
        },
        {
            name: 'Lydia A',
            review: `"I wish I knew about Peanut sooner, as it’s so important to surround yourself with women who understand during those overwhelming moments of womanhood."`,
        },
        {
            name: 'Alice P',
            review: `"I  mean, seriously, genius, and so fun! I’ve been using the app for a few weeks and have already been able to connect with several awesome women that are within a local distance from me."`,
        },
    ]

    const reviews = items.map((data) => {
        return <UserReview name={data.name} review={data.review} />
    })
    const responsive = {
        0: {
            items: 1,
        },
    }

    return (
        <div className='bg-red-100'>
            <div className='py-14 w-2/3 m-auto'>
                <AliceCarousel
                    mouseTracking
                    animationDuration={1500}
                    infinite
                    autoPlayInterval={1000}
                    disableDotsControls
                    disableButtonsControls={true}
                    responsive={responsive}
                    items={reviews}
                    autoPlay
                />
            </div>
        </div>
    )
}

export default UserReviewCarousel
