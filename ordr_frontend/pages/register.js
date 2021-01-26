import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import RegisterInit from '../components/Register/RegisterInit'

export default function RegisterPage() {
    return (
    <div>
        <Head>
            <title>Qrder | Register your account</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        </Head>
        <NavigationBar type='registerPage' loggedin={false} />
        <RegisterInit />
    </div>)
}