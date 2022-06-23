const UserReview = (props) => {
    return (
        <div className='text-center'>
            <p className='text-3xl font-bold text-red-900 '>{props.review}</p>

            <p className='text-red-400 pt-6 text-lg'>{props.name}</p>
        </div>
    )
}

export default UserReview
