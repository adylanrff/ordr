import NavigationBar from '../components/NavigationBar'
import LoginInit from '../components/Register/LoginInit'

export default function LoginPage() {
    return (
    <div>
        <title>Qrder | Sign in to your account</title>
            <NavigationBar type='registerPage' loggedin={false} />
            <LoginInit />
    </div>)
}
