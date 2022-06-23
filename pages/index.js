import Banner from '../components/Banner'
import Blogs from '../components/Community/Blogs'
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
            <Navigation />
            <Banner />
            <CommunityType />
            <CommunityBlogs />
            <Message />
            <WhatWeDo />
            <UserReviewCarousel />
            <NewsReview />
            <Footer />
        </>
    )
}
