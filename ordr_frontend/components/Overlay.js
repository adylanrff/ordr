import React, { useEffect, useState } from 'react';
import styles from '../styles/LandingPage.module.css'
import { useRecoilValue } from 'recoil'
import { toggleMenuState } from '../state/global'

const Overlay = ({ pageRef }) => {
    const isToggleMenu = useRecoilValue(toggleMenuState)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (pageRef.current) {
            setHeight(pageRef.current.clientHeight)
        }
    })
    
    return <>       
        {isToggleMenu ? <div className={styles.menuCoverage} style={{height: height}}></div> : ''}
    </>

}

export default Overlay;