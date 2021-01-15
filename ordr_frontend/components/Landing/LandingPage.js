import React from 'react';
import LandingIntro from './LandingIntro'
import LandingAbout from './LandingAbout'
import LandingHow from './LandingHow'
import LandingContact from './LandingContact'

export default function LandingPage() {
    return (
        <div>
            <div className='containerLandingPage'>
                <LandingIntro />
                <LandingAbout />
                <LandingHow />
                <LandingContact />
            </div>
        </div>
    )
}