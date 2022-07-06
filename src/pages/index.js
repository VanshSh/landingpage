import Banner from '../components/Banner'
import CommunityBlogs from '../components/Community/CommunityBlogs'
import CommunityType from '../components/CommunityType'
import Footer from '../components/Footer'
import Message from '../components/Message'
import Navigation from '../components/Navigation'
import NewsReview from '../components/NewsReview'
import UserReviewCarousel from '../components/UserReview/UserReviewCarousel'
import WhatWeDo from '../components/WhatWeDo'

export default function Home() {
    return (
        <>
            {' '}
            <Navigation />
            <Banner />
            <CommunityType />
            <CommunityBlogs />
            <NewsReview />
            <Message />
            <WhatWeDo />
            <UserReviewCarousel />
            <Footer />
        </>
    )
}

// className = 'md:bg-gray-900 sm:bg-green-500 lg:bg-orange-300 bg-pink-700'
