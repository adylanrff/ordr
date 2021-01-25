import styles from '../../../styles/SideMenu.module.css'
import Menu from './Menu'
import classNames from 'classnames'

export default function SideMenu({ menus }) {

    const colMobileActive = classNames('col', styles.colMobile, styles.activeContainer)
    const colMobileNotActive = classNames('col', styles.colMobile, styles.nonActiveContainer)

    const renderMenu = (menus) => {
        return (
            menus.map(menu => (
                <div key={menu.number}>
                    <Menu type='laptop' data={menu} />
                </div>
            ))
        )
    }

    const renderMenuMobile = (menus) => {
        return (
            menus.map(menu => (
                <div key={menu.number} className={menu.status === 'active' ? colMobileActive : colMobileNotActive}>
                    <Menu type='mobile' data={menu} />
                </div>
            ))
        )
    }
    
    return (
        <div>
            <div className={styles.container}>
                {renderMenu(menus)}
            </div>
            <div className={styles.containerMobile}>
                <div className='row'>
                    {renderMenuMobile(menus)}
                </div>
            </div>
        </div>
    )
}