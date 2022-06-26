const UserReview = (props) => {
    return (
        <blockquote className='text-center'>
            <p className='lg:text-3xl md:text-2xl text-xl font-bold text-[#7f0924] '>
                {props.review}
            </p>
            <div className='text-[#ea515a]  text-3xl my-6 '>{props.name}</div>
        </blockquote>
    )
}

export default UserReview
