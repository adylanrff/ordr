import styles from '../../styles/HowCard.module.css'
import { Image } from 'react-bootstrap'
import classNames from 'classnames'

export default function HowStep({ how, length }) {
    const rowFlex = classNames('row align-content-center', styles.flex)


    const renderDetail = (texts) => {
        return (
            texts.map(text => (
                <span key={text.id} className={text.class === 'regular' ? styles.description : styles.description+' '+styles.bold}>{text.content}</span>
            ))
        )
    }

    return (
        <div style={how.number !== length ? {paddingBottom: '70px'} : {}}>
            <div className={rowFlex}>
                <div className='col-md-4 col-12' style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Image className={styles.image} src={how.imgSrc} />
                    </div>
                </div>
                <div className='col-md-2 col-12' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p className={styles.number}>{how.number}</p>
                    <div className={styles.line}></div>
                </div>
                <div className='col-md-6 col-12' style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'block', textAlign: 'justify'}}>
                        {renderDetail(how.text)}
                    </div>
                </div>
            </div>
        </div>
    )
}