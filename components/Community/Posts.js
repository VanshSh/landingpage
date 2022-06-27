import Blogs from '../Community/Blogs'

const Posts = () => {
    const blogs = [
        {
            title: 'Reinvent yourself...',
        },
        {
            title: 'Reinvent yourself...',
        },
    ]

    const blogsComponent = blogs.map((data) => {
        return <Blogs topic={data.title} />
    })
    return (
        <>
            <header className='bg-[#f4cdcc] text-center pb-10 pt-12 '>
                <h1 className='font-semibold text-7xl md:text-5xl '>
                    <span className='text-white '>Community </span>
                    Preview
                </h1>
                <p className='text-lg italic pt-10'>
                    Read what women are talking about on Peanut
                </p>
            </header>
            <section className='mx-14 justify-center items-center '>
                <div className=''>
                    <div className='grid  grid-cols-2'>{blogsComponent}</div>
                    <div className='grid grid-cols-3'>
                        <Blogs />
                        <Blogs />
                        <Blogs />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Posts
