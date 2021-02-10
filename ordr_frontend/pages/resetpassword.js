import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import ResetPassword from '../components/Register/ResetPassword'
import Footer from '../components/Footer'

export default function Reset() {
    return (
        <div>
            <Head>
                <title>Qrder | Reset your password</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
            </Head>
            <NavigationBar type='resetPassword' />
            <ResetPassword />
            <Footer />
        </div>
    )
}