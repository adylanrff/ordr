import React, { useRef } from 'react';
import NavigationBar from '../components/NavigationBar'
import LandingPage from '../components/Landing/LandingPage'
import Overlay from '../components/Overlay'
import Footer from '../components/Footer'

export default function Home() {

  const pageRef = useRef(null)

  return (
    <div ref={pageRef}>
      <title>Qrder | Delicious food at your fingertips</title>
      <NavigationBar type='landingPage' loggedin={false} />
      <Overlay pageRef={pageRef}/>
      <LandingPage />
      <Footer />
    </div>
  )
}
