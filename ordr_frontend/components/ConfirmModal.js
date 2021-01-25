import { useState } from 'react'
import { Modal, Image, Button } from 'react-bootstrap'
import styles from '../styles/ConfirmModal.module.css'

export default function ConfirmModal({ layoutData }) {

    return (
        <Modal centered={true} show={layoutData.showModal} onHide={layoutData.handleCancel} backdrop="static" keyboard={false} contentClassName={styles.modal} backdropClassName={styles.backdrop} >
            <Modal.Body>
                <Image src={layoutData.image} className={styles.image} />
                <p className={styles.title}>{layoutData.title}</p>
                <p className={styles.detail}>{layoutData.detail}</p>
                <Button className={styles.button+' '+styles.cancel} onClick={layoutData.handleCancel}>{layoutData.cancel}</Button>
                <Button className={styles.button} onClick={layoutData.handleConfirm}>{layoutData.submit}</Button>
            </Modal.Body>
        </Modal>
    )
}