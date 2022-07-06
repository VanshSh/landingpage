import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import UserReview from './user-review'

const UserReviewCarousel = () => {
    const items = [
        {
            name: 'Raunak',
            review: `"Now&Me is a great platform to connect with people who genuinely care"`,
            id: 1,
        },
        {
            name: 'Nikhil',
            review: `"I was really lonely and sad, but then I found Now&Me and people who genuinely care about how i feel."`,
            id: 2,
        },
        {
            name: 'Vansh',
            review: `"I was really lonely and sad, but then I found Now&Me and people who genuinely care about how i feel."`,
            id: 3,
        },
    ]

    const reviews = items.map((data) => {
        return (
            <UserReview name={data.name} review={data.review} key={data.id} />
        )
    })
    const responsive = {
        0: {
            items: 1,
        },
    }

    return (
        <section className='bg-[#fff6f3]'>
            <div className=' lg:mx-44 py-10'>
                <AliceCarousel
                    mouseTracking
                    animationDuration={1500}
                    infinite
                    autoPlayInterval={1000}
                    disableDotsControls={false}
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
