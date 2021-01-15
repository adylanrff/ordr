import NavigationBar from '../components/NavigationBar'
import RegisterInit from '../components/Register/RegisterInit'

export default function RegisterPage() {
    return (
    <div>
        <title>Qrder | Register your account</title>
            <NavigationBar type='registerPage' loggedin={false} />
            <RegisterInit />
    </div>)
}