import { Modal, Button } from 'react-bootstrap'
import styles from '../../../styles/Sort.module.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountUp, faSortAmountDown } from '@fortawesome/free-solid-svg-icons'

export default function Sort({data, show, onClose, onApply}) {

    const [sortBy, setSortBy] = useState(data.by)
    const [sortType, setSortType] = useState(data.type)

    const onSortBy = (type) => {
        if (type === sortBy) {
            setSortBy('')
        } else {
            setSortBy(type)
        }
    }

    const onSelectType = (type) => {
        setSortType(type)
    }

    const onApplyHandler = () => {
        onApply(sortBy, sortType)
    }

    const onReset = () => {
        setSortBy('')
        setSortType('ascending')
    }

    const onCancel = () => {
        onClose()
        setSortBy(data.by)
        setSortType(data.type)
    }

    return (
        <Modal show={show} centered={true} backdrop="static" keyboard={false} contentClassName={styles.modal} backdropClassName={styles.backdrop} onHide={onClose} >
            <Modal.Body>
                <p className={styles.mainTitle}>Sort by</p>
                <div style={{marginBottom: '25px'}}>
                    <p className={styles.title}>Food's property</p>
                    <p className={styles.info}>Pick one or it will be automatically set to alphabetical</p>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div onClick={() => onSortBy('price')} className={sortBy === 'price' ? styles.pill+' '+styles.active+' '+styles.start : styles.pill+' '+styles.start}>Price</div>
                        <div onClick={() => onSortBy('release')} className={sortBy === 'release' ? styles.pill+' '+styles.active : styles.pill}>Recent</div>
                        <div onClick={() => onSortBy('favorite')} className={sortBy === 'favorite' ? styles.pill+' '+styles.active : styles.pill}>Favorite</div>
                        <div onClick={() => onSortBy('recommended')} className={sortBy === 'recommended' ? styles.pill+' '+styles.active+' '+styles.end : styles.pill+' '+styles.end}>Recommended</div>
                    </div>
                </div>
                <div style={{marginBottom: '30px'}}>
                    <p className={styles.title} style={{marginBottom: '10px'}}>Type</p>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div onClick={() => onSelectType('ascending')} className={sortType === 'ascending' ? styles.pill+' '+styles.active+' '+styles.start : styles.pill+' '+styles.start}>
                            <FontAwesomeIcon icon={faSortAmountUp} /> Ascending
                        </div>
                        <div onClick={() => onSelectType('descending')} className={sortType === 'descending' ? styles.pill+' '+styles.active+' '+styles.end : styles.pill+' '+styles.end}>
                            <FontAwesomeIcon icon={faSortAmountDown} /> Descending
                        </div>
                    </div>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button onClick={onCancel} className={styles.button+' '+styles.cancel}>Cancel</Button>
                    <Button onClick={onApplyHandler} className={styles.button}>Apply</Button>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p className={styles.resetButton} onClick={onReset} >Reset sort</p>
                </div>
            </Modal.Body>
        </Modal>
    )
}