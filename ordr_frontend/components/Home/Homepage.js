import { useState, useEffect } from 'react';
import styles from '../../styles/Homepage.module.css'
import SideMenu from './SideMenu/SideMenu'
import RestaurantInfo from './RestaurantInfo/RestaurantInfo'
import Profile from './Profile/Profile'

export default function Homepage() {

    const [currentMenu, setCurrentMenu] = useState(1)
    const [previousMenu, setPreviousMenu] = useState(0)

    const [imgResto, setImgResto] = useState('/home_info_active.png')
    const [imgMenu, setImgMenu] = useState('/home_menu.png')
    const [imgQR, setImgQR] = useState('/home_qr.png')
    const [imgProfile, setImgProfile] = useState('/home_user.png')

    const [statusResto, setStatusResto] = useState('active')
    const [statusMenu, setStatusMenu] = useState('non-active')
    const [statusQR, setStatusQR] = useState('non-active')
    const [statusProfile, setStatusProfile] = useState('non-active')

    const changeMenuHandler = (id) => {
        setPreviousMenu(currentMenu)
        setCurrentMenu(id)
    }

    useEffect(() => {
        if (previousMenu === 1) {
            setImgResto('/home_info.png')
            setStatusResto('non-active')
        } else if (previousMenu === 2) {
            setImgMenu('/home_menu.png')
            setStatusMenu('non-active')
        } else if (previousMenu === 3) {
            setImgQR('/home_qr.png')
            setStatusQR('non-active')
        } else if (previousMenu === 4) {
            setImgProfile('/home_user.png')
            setStatusProfile('non-active')
        }

        if (currentMenu === 1) {
            setImgResto('/home_info_active.png')
            setStatusResto('active')
        } else if (currentMenu === 2) {
            setImgMenu('/home_menu_active.png')
            setStatusMenu('active')
        } else if (currentMenu === 3) {
            setImgQR('/home_qr_active.png')
            setStatusQR('active')
        } else if (currentMenu === 4) {
            setImgProfile('/home_user_active.png')
            setStatusProfile('active')
        }
    }, [previousMenu, currentMenu])

    const menus = [{
        number: 1,
        imgsrc: imgResto,
        desc: "Restaurant's Information",
        status: statusResto,
        setMenu: changeMenuHandler
    }, {
        number: 2,
        imgsrc: imgMenu,
        desc: "Menu Book",
        status: statusMenu,
        setMenu: changeMenuHandler
    }, {
        number: 3,
        imgsrc: imgQR,
        desc: "Print QR Code",
        status: statusQR,
        setMenu: changeMenuHandler
    }, {
        number: 4,
        imgsrc: imgProfile,
        desc: "Profile",
        status: statusProfile,
        setMenu: changeMenuHandler
    }]

    return (
        <div className={styles.container}>
            <title>
                {currentMenu === 1 ?
                'Qrder | Your Restaurant'
                :
                currentMenu === 2 ?
                'Qrder | Your Menu Book'
                :
                currentMenu === 3 ?
                'Qrder | Print Your QR Code'
                :
                currentMenu === 4 ?
                'Qrder | Your Profile'
                :
                'Qrder | Welcome back'}</title>
            <div className='row'>
                <div className='col-lg-4 col-md-5 col-sm-4 col-12'>
                    <SideMenu menus={menus} />
                </div>
                <div className='col-lg-8 col-md-7 col-sm-8 col-12'>
                    {currentMenu === 1 ?
                        <RestaurantInfo />
                    : currentMenu === 4 ?
                        <Profile />
                    :
                        <h1>To be defined</h1>
                    }
                </div>
            </div>
        </div>
    )
}