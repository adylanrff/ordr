import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import LoginInit from '../components/Register/LoginInit'

export default function LoginPage() {
    return (
    <div>
        <Head>
            <title>Qrder | Sign in to your account</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        </Head>
        <NavigationBar type='registerPage' loggedin={false} />
        <LoginInit />
    </div>)
}
