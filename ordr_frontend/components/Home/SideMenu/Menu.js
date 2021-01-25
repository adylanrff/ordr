import styles from '../../../styles/SideMenu.module.css'
import { Image } from 'react-bootstrap'
import classNames from 'classnames'

export default function Menu({ type, data }) {
    const colImage = classNames('col-3', styles.colImage)
    const rowActive = classNames('row', styles.rowActive)
    const rowNotActive = classNames('row', styles.rowNotActive)
    const colText = classNames('col-9', styles.colText)

    const onClickHandler = () => {
        data.setMenu(data.number)
        window.scrollTo(0,0)
    }

    return (
        <div>
            {type === 'laptop' ?
                <div onClick={onClickHandler} className={data.status === 'active' ? rowActive : rowNotActive}>
                    <div className={colImage}>
                        <Image src={data.imgsrc} className={styles.menuImage} />
                    </div>
                    <div className={colText}>
                        <p className={data.status === 'active' ? styles.descMenu+' '+styles.activeText : styles.descMenu+' '+styles.nonActiveText}>{data.desc}</p>
                    </div>
                </div>
            :
                <div onClick={onClickHandler}>
                    <Image src={data.imgsrc} className={styles.menuImageMobile} />
                </div>
            }
        </div>
    )
}