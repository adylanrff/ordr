import styles from '../../styles/RegisterForm.module.css'
import classNames from 'classnames'
import CustomForm from '../Form'
import { Image } from 'react-bootstrap'
import Link from 'next/link'

export default function RegisterForm({fillForm, formatText, onSubmitHandler}) {
    const columnLeft = classNames('col-xl-7 col-lg-6 col-md-7 col-12', styles.columnLeft)
    const columnRight = classNames('col-xl-5 col-lg-6 col-md-5 col-12', styles.columnRight)
    const containerFluid = classNames('container-fluid', styles.containerFluid)

    return (
        <div className='row'>
            <div className={columnLeft}>
                <div className={styles.leftContainer}>
                    <div className={containerFluid}>
                        <p className={styles.title}>{formatText.title}</p>
                        <CustomForm 
                            formData={fillForm} 
                            submitText={formatText.submit}
                            onSubmit={onSubmitHandler}
                        />
                        <div className={styles.textToSignIn}>
                            <span className={styles.textRegular}>{formatText.bottomReg}&nbsp;</span>
                            <Link href={formatText.href}>
                                <span className={styles.textBold}>{formatText.bottomBold}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={columnRight}>
                <div className={styles.rightContainer}>
                    <Image className={styles.foodImage} src='/FoodIllustration.png' />
                </div>
            </div>
        </div>
    )
}