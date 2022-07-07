const UserReview = (props) => {
    return (
        <blockquote className='text-center  py-10'>
            <p className='lg:text-3xl md:text-2xl text-xl font-bold text-[#ff6d42] py-12 '>
                {props.review}
            </p>
            <div className='text-[#f4440e]  text-3xl'>{props.name}</div>
        </blockquote>
    )
}

export default UserReview
