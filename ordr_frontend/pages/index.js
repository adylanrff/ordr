import Head from 'next/head'
import React, { useRef } from 'react';
import NavigationBar from '../components/NavigationBar'
import LandingPage from '../components/Landing'
import Overlay from '../components/Overlay'
import Footer from '../components/Footer'

export default function Home() {

  /* please redirect to home if user has logged in */

  const pageRef = useRef(null)

  return (
    <div ref={pageRef}>
      <Head>
        <title>Qrder | Delicious food at your fingertips</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </Head>
      <NavigationBar type='landingPage' loggedin={false} />
      <Overlay pageRef={pageRef}/>
      <LandingPage />
      <Footer />
    </div>
  )
}
