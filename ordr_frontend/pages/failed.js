import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import SuccessFail from '../components/SuccessFail'
import Footer from '../components/Footer'

export default function Failed() {
    const handleBack = () => {
        window.location.replace('/')
    }
    
    const layout = {
        type: 'Failed',
        imgSrc: '/not_found.png',
        title: 'Oops!',
        description: "We can't seem to find what you are looking for",
        button: 'Back to homepage',
        handleButton: handleBack
    }

    return (
        <div>
            <Head>
                <title>Qrder | Oops!</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
            </Head>
            <NavigationBar type='resetPassword' />
            <SuccessFail data={layout} />
            <Footer />  
        </div>
    )
}