import Head from 'next/head'
import { useState, useEffect, useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil'
import { currentMenuState } from '../../state/global'
import styles from '../../styles/Homepage.module.css'
import SideMenu from './SideMenu/SideMenu'
import RestaurantInfo from './RestaurantInfo/RestaurantInfo'
import MenuBook from './MenuBook/MenuBook'
import PrintQR from './PrintQR/PrintQR'
import Profile from './Profile/Profile'
import NotFound from './NotFound'

export default function Homepage() {

    const [currentMenu, setCurrentMenu] = useRecoilState(currentMenuState)
    const [hasChanged, setHasChanged] = useState(false)
    const [previousMenu, setPreviousMenu] = useState(0)

    const [imgResto, setImgResto] = useState('/home_info.png')
    const [imgMenu, setImgMenu] = useState('/home_menu.png')
    const [imgQR, setImgQR] = useState('/home_qr.png')
    const [imgProfile, setImgProfile] = useState('/home_user.png')

    const [statusResto, setStatusResto] = useState('non-active')
    const [statusMenu, setStatusMenu] = useState('non-active')
    const [statusQR, setStatusQR] = useState('non-active')
    const [statusProfile, setStatusProfile] = useState('non-active')

    const changeMenuHandler = (id) => {
        setPreviousMenu(currentMenu)
        setCurrentMenu(id)
    }

    useEffect(() => {
        if ((currentMenu !== '0') && (!hasChanged)) {
            setPreviousMenu(currentMenu)
            setHasChanged(true)
        }
        if (previousMenu === '1') {
            setImgResto('/home_info.png')
            setStatusResto('non-active')
        } else if (previousMenu === '2') {
            setImgMenu('/home_menu.png')
            setStatusMenu('non-active')
        } else if (previousMenu === '3') {
            setImgQR('/home_qr.png')
            setStatusQR('non-active')
        } else if (previousMenu === '4') {
            setImgProfile('/home_user.png')
            setStatusProfile('non-active')
        }

        if (currentMenu === '1') {
            setImgResto('/home_info_active.png')
            setStatusResto('active')
        } else if (currentMenu === '2') {
            setImgMenu('/home_menu_active.png')
            setStatusMenu('active')
        } else if (currentMenu === '3') {
            setImgQR('/home_qr_active.png')
            setStatusQR('active')
        } else if (currentMenu === '4') {
            setImgProfile('/home_user_active.png')
            setStatusProfile('active')
        }
    }, [previousMenu, currentMenu, hasChanged])

    const menus = [{
        number: '1',
        imgsrc: imgResto,
        desc: "Restaurant's Information",
        status: statusResto,
        setMenu: changeMenuHandler
    }, {
        number: '2',
        imgsrc: imgMenu,
        desc: "Menu Book",
        status: statusMenu,
        setMenu: changeMenuHandler
    }, {
        number: '3',
        imgsrc: imgQR,
        desc: "Print QR Code",
        status: statusQR,
        setMenu: changeMenuHandler
    }, {
        number: '4',
        imgsrc: imgProfile,
        desc: "Profile",
        status: statusProfile,
        setMenu: changeMenuHandler
    }]

    return (
        <div className={styles.container}>
            <Head>
                <title>
                    {currentMenu === '1' ?
                    'Qrder | Your Restaurant'
                    :
                    currentMenu === '2' ?
                    'Qrder | Your Menu Book'
                    :
                    currentMenu === '3' ?
                    'Qrder | Print Your QR Code'
                    :
                    currentMenu === '4' ?
                    'Qrder | Your Profile'
                    :
                    'Qrder | Not found'}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
            </Head>
            {currentMenu === '1' || currentMenu === '2' || currentMenu === '3' || currentMenu === '4' ?
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                    <SideMenu currentView='home' menus={menus} />
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-12 '>
                    {currentMenu === '1' ?
                        <RestaurantInfo />
                    : currentMenu === '2' ?
                        <MenuBook />
                    : currentMenu === '3' ?
                        <PrintQR />
                    :
                    currentMenu === '4' ?
                        <Profile />
                    : ''
                    }
                </div>
            </div>
            :
            <div className={styles.col}>
                <NotFound />
            </div>
            }
        </div>
    )
}