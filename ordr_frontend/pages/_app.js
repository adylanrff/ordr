import { RecoilRoot } from 'recoil'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '../components/Loader'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-phone-input-2/lib/style.css'
import { AuthProvider } from '../context/auth'

function MyApp({ Component, pageProps }) {

  const [loaded, setLoaded] = useState(true)

  const router = useRouter()

  const handleRouteChangeStart = () => {
    setLoaded(false)
  }

  const handleRouteChangeComplete = () => {
      setLoaded(true)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
  })

  return (
    <AuthProvider>
      <RecoilRoot>
        {loaded === false ? <Loader /> : ''}
        <Component {...pageProps} />
      </RecoilRoot>
    </AuthProvider>
  )
}

export default MyApp
