import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import UserReview from './UserReview'

const UserReviewCarousel = () => {
    const items = [
        {
            name: 'Raunak',
            review: `"Now&Me is a great platform to connect with people who genuinely care"`,
        },
        {
            name: 'Nikhil',
            review: `"I was really lonely and sad, but then I found Now&Me and people who genuinely care about how i feel."`,
        },
        {
            name: 'Vansh',
            review: `"I was really lonely and sad, but then I found Now&Me and people who genuinely care about how i feel."`,
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
        <section className='bg-red-100'>
            <div className='my-20 py-16 lg:mx-44 mx-5'>
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
        </section>
    )
}

export default UserReviewCarousel
