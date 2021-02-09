import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import Menu from '../components/CustomerPage/Menu'
import Footer from '../components/Footer'
import { useRecoilState } from 'recoil'
import { restaurantState } from '../state/restaurant'

export default function MenuPage() {

    const [restaurant, setRestaurant] = useRecoilState(restaurantState)

    return (
        <div>
            <Head>
                <title>Qrder | {restaurant.name}'s Menu</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
            </Head>
            <NavigationBar type='resetPassword' />
            <Menu restaurant={restaurant} />
            <Footer />
        </div>
    )
}