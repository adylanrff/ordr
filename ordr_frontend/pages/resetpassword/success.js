import Head from 'next/head'
import NavigationBar from '../../components/NavigationBar'
import ResetSuccess from '../../components/Register/ResetSuccess'
import Footer from '../../components/Footer'

export default function Success() {
    return (
        <div>
            <Head>
                <title>Qrder | Woo hoo!</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>  
            </Head>
            <NavigationBar type='resetPassword' />
            <ResetSuccess />
            <Footer />
        </div>
    )
}