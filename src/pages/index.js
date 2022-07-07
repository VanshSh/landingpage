import Banner from '../components/banner'
import CommunityPosts from '../components/community/community-posts'
import CommunityType from '../components/community-type'
import Footer from '../components/footer'
import Message from '../components/message'
import Navigation from '../components/navigation'
import NewsReview from '../components/news'
import UserReviewCarousel from '../components/user-review/user-review-carousel'
import WhatWeDo from '../components/what-we-do'

export default function Home() {
    return (
        <>
            <Navigation />
            <Banner />
            <CommunityType />
            <CommunityPosts />
            <NewsReview />
            <Message />
            <WhatWeDo />
            <UserReviewCarousel />
            <Footer />
        </>
    )
}

// className = 'md:bg-gray-900 sm:bg-green-500 lg:bg-orange-300 bg-pink-700'
