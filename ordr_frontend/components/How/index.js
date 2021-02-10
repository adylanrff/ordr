import Head from 'next/head'
import styles from '../../styles/HowPage.module.css'
import SideMenu from '../Home/SideMenu/SideMenu'
import HowCard from './HowCard'
import { useRouter } from 'next/router'

export default function HowPage() {

    const router = useRouter()

    const changeMenuHandler = (id) => {
        router.push({
            pathname: '/home',
            query: { id: id },
          }, '/home')
    }
    
    const menus = [{
        number: '1',
        imgsrc: '/home_info.png',
        desc: "Restaurant's Information",
        status: 'non-active',
        setMenu: changeMenuHandler
    }, {
        number: '2',
        imgsrc: '/home_menu.png',
        desc: "Menu Book",
        status: 'non-active',
        setMenu: changeMenuHandler
    }, {
        number: '3',
        imgsrc: '/home_qr.png',
        desc: "Print QR Code",
        status: 'non-active',
        setMenu: changeMenuHandler
    }, {
        number: '4',
        imgsrc: '/home_user.png',
        desc: "Profile",
        status: 'non-active',
        setMenu: changeMenuHandler
    }]

    const data = [{
        number: 1,
        imgSrc: '/1.png',
        text: [
            {
                id: 1,
                class: 'regular',
                content: 'You will be redirected to '
            }, {
                id: 2,
                class: 'bold',
                content: 'your home page'
            }, {
                id: 3,
                class: 'regular',
                content: ' right after you logged in to your account. You can immediately find '
            }, {
                id: 4,
                class: 'bold',
                content: 'a short information about your restaurant'
            }, {
                id: 5,
                class: 'regular',
                content: ', once you first landed to your home page. You can also '
            }, {
                id: 6,
                class: 'bold',
                content: 'update your restaurant’s information'
            }, {
                id: 7,
                class: 'regular',
                content: ' there by tapping ‘Edit’ button.'
            }
        ]
    }, {
        number: 2,
        imgSrc: '/2.png',
        text: [
            {
                id: 1,
                class: 'regular',
                content: 'To '
            }, {
                id: 2,
                class: 'bold',
                content: 'update your food or drink menu book'
            }, {
                id: 3,
                class: 'regular',
                content: ', you can go to menu book section on the left (or at the bottom of your screen if you are using mobile phone) which is represented by book with fork and knife icon, then choose ‘Add Menu’ button. You can also '
            }, {
                id: 4,
                class: 'bold',
                content: 'update each food/drink you have entered'
            }, {
                id: 5,
                class: 'regular',
                content: ', up to your liking.'
            }
        ]
    }, {
        number: 3,
        imgSrc: '/3.png',
        text: [
            {
                id: 1,
                class: 'regular',
                content: 'To '
            }, {
                id: 2,
                class: 'bold',
                content: 'print the QR code and short user’s guidance'
            }, {
                id: 3,
                class: 'regular',
                content: ', you can go to Print QR Code menu section on the left (or bottom if you are using mobile phone) which is represented by QR Code icon, then choose ‘Print QR Code’ button. You can '
            }, {
                id: 4,
                class: 'bold',
                content: 'see more information about the QR code usage'
            }, {
                id: 5,
                class: 'regular',
                content: ' there.'
            }
        ]
    }, {
        number: 4,
        imgSrc: '/4.png',
        text: [
            {
                id: 1,
                class: 'regular',
                content: 'To '
            }, {
                id: 2,
                class: 'bold',
                content: 'update your profile'
            }, {
                id: 3,
                class: 'regular',
                content: ', you can go to Profile menu section which is represented by an icon of a person. Choose ‘Edit’ to update your profile’s information and choose ‘Change password’ to '
            }, {
                id: 4,
                class: 'bold',
                content: 'update your password.'
            }
        ]
    }, {
        number: 5,
        imgSrc: '/5.png',
        text: [
            {
                id: 1,
                class: 'regular',
                content: 'Aside from the menu section, you can also '
            }, {
                id: 2,
                class: 'bold',
                content: 'find navigation bar on top of your screen'
            }, {
                id: 3,
                class: 'regular',
                content: ' (which is represented by burger icon on the mobile version). It is consisted of 3 other menus which are '
            }, {
                id: 4,
                class: 'bold',
                content: 'how it works, our contact, and logout'
            }, {
                id: 5,
                class: 'regular',
                content: '. Choose ‘Contact us’ to reach us by phone or email and our team will get back to you within 24 hours. Choose ‘Logout’ to sign off and leave. '
            }, {
                id: 6,
                class: 'bold',
                content: 'Do not let a stranger control your account.'
            }
        ]
    }]

    return (
        <div className={styles.container}>
            <Head>
                <title>Qrder | How it works</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>    
            </Head>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                    <SideMenu currentView='how' menus={menus} />
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
                    <HowCard data={data} />
                </div>
            </div>
        </div>
    )
}