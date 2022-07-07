import React, { useEffect, useState } from 'react'
MdCancel
import { MdCancel } from 'react-icons/md'
const AppInstall = () => {
    const [isIOS, setIsIOS] = useState(false)
    const [showAlert, setShowAlert] = useState(true)

    const handleClose = () => {
        setShowAlert((prevState) => !prevState)
    }

    useEffect(() => {
        if (
            [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod',
                'MacIntel',
            ].includes(navigator.platform) ||
            (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
        ) {
            setIsIOS(true)
        }
    }, [])

    const alertMessage = (
        <div className='flex  text-[22px]'>
            <div className='flex justify-between items-center pl-7 pr-5 bg-[#f27844] py-3 rounded '>
                <span
                    className='text-2xl mx-2 cursor-pointer'
                    onClick={handleClose}
                >
                    <MdCancel />
                </span>
                <p className='text-sm text-white font-bold leading-5 max-w-[205px] sm:max-w-[450px]'>
                    Download the Now&amp;Me app to continue sharing your
                    thoughts 📱
                </p>
                <a
                    href={
                        isIOS
                            ? 'https://apps.apple.com/in/app/now-me-mental-health-community/id1587888702'
                            : 'https://play.google.com/store/apps/details?id=com.nowandme.app'
                    }
                    target={'_blank'}
                    rel={'noreferrer'}
                    className='p-2 bg-white rounded-md flex-shrink-0 text-xs font-semibold text-[#7429C6] relative'
                >
                    Download Now
                </a>
            </div>
        </div>
    )
    return <>{showAlert && alertMessage}</>
}

export default AppInstall
