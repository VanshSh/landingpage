const UserReview = (props) => {
    return (
        <blockquote className='text-center '>
            <p className='lg:text-3xl md:text-2xl text-xl font-bold text-[#800000] px-6 pt-10 '>
                {props.review}
            </p>
            <div className='text-[#f4440e] mt-8 text-3xl'>{props.name}</div>
        </blockquote>
    )
}

export default UserReview
