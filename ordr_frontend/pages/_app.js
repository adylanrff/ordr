import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
}

export default MyApp
