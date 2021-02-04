import SuccessFail from '../SuccessFail'

export default function ResetSuccess() {
    const handleBacktoLogin = () => {
        window.location.replace('/login')
    }
    
    const layout = {
        type: 'ResetSuccess',
        imgSrc: '/password_changed.png',
        title: 'Woo hoo!',
        description: 'Your password has been changed. Comeback to login page and fill in the password with your new password',
        button: 'Back to login',
        handleButton: handleBacktoLogin
    }

    return (
        <SuccessFail data={layout} />
    )
}