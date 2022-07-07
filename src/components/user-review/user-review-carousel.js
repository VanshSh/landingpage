import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import UserReview from './user-review'

const UserReviewCarousel = () => {
    const items = [
        {
            name: 'Nupur',
            review: `"I joined nowandme long ago...and tbh this site has helped me a lotttt during my bad days like even when i had no one to talk to i wasn't alone...people helping each other there in tough situations and spreading positivity."`,
            id: 1,
        },
        {
            name: 'Surbhi',
            review: `"A friend who is in an almost abusive household asked me if there was a place where she could vent/rant anonymously and it didn't take me a minute to redirect her to @nowandme."`,
            id: 2,
        },
        {
            name: 'Akash MP',
            review: `"Ever thought this app is crazy as heaven? Everyone are speaking their heart out."`,
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
