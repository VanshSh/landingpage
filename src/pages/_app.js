import Head from 'next/head'
import React, { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const [showing, setShowing] = React.useState(false)

    useEffect(() => {
        setShowing(true)
    }, [])

    if (!showing) {
        return null
    }

    if (typeof window === 'undefined') {
        return <></>
    } else {
        return (
            <>
                <Head>
                    <title> Now&amp;Me</title>
                    <meta
                        name='description'
                        content='Anonymity at Now&amp;Me'
                    />
                </Head>

                <Component {...pageProps} />
            </>
        )
    }
}

export default MyApp
