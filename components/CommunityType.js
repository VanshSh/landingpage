const CommunityType = () => {
    return (
        <div className=' container  my-12  m-auto'>
            <div className='py-5'>
                <h2 className=' text-center text-4xl text-red-900 font-bold px-10'>
                    Peanut provides access to a community who are there to
                    listen, share information and offer valuable advice.
                </h2>
            </div>
            <div className='flex  flex-1 flex-wrap py-6 items-center justify-around'>
                <div>
                    <div className='p-1'>
                        <div className='bg-red-50 text-black rounded-full p-10'>
                            FR
                        </div>
                        <p className='text-center pt-4'>Fertility</p>
                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        <div className='bg-red-50 text-black rounded-full p-10'>
                            PR
                        </div>
                        <p className='text-center pt-4'>Pregnancy</p>
                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        <div className='bg-red-50 text-black rounded-full p-10'>
                            MH
                        </div>
                        <p className='text-center pt-4'>Motherhood</p>
                    </div>
                </div>
                <div>
                    <div className='p-2'>
                        <div className='bg-red-50 text-black rounded-full p-10'>
                            MP
                        </div>
                        <p className='text-center pt-4'>Menopause</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityType
