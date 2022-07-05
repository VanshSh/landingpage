const UserReview = (props) => {
    return (
        <blockquote className='text-center'>
            <p className='lg:text-3xl md:text-2xl text-xl font-bold text-[#ff6d42] '>
                {props.review}
            </p>
            <div className='text-[#ff6d42] font-semibold text-3xl my-6 '>
                {props.name}
            </div>
        </blockquote>
    )
}

export default UserReview
