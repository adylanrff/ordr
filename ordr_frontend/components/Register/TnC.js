import { Modal, Tab, Nav } from 'react-bootstrap'
import styles from '../../styles/TnC.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function TnC({ data }) {
    return (
        <Modal centered={true} show={data.showModal} backdrop="static" keyboard={false} onHide={data.closeModal} contentClassName={styles.modal} backdropClassName={styles.backdrop} scrollable={false}>
            <Modal.Body>
                <div style={{textAlign: 'end'}} onClick={data.closeModal}>
                    <FontAwesomeIcon icon={faTimes} color='#4D3826' className={styles.closeButton} />
                </div>
                <Tab.Container defaultActiveKey='Terms'>
                    <div className='row'>
                        <div className='col-12'>
                            <Nav variant='pills' className='nav-fill'>
                                <Nav.Item>
                                    <Nav.Link eventKey='Terms' className={styles.pill+' '+styles.termPill}>Terms</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='Conditions' className={styles.pill+' '+styles.conditionPill}>Condition</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className='col-12'>
                            <Tab.Content>
                                <Tab.Pane eventKey='Terms'>
                                    <p className={styles.title}>Terms</p>
                                    <ol className={styles.list}>
                                        <li>You will be redirected to your home page right after you logged in to your account. You can immediately find a short information about your restaurant, once you first landed to your home page. You can also update your restaurant’s information there by tapping ‘Edit’ button.</li>
                                        <br/>
                                        <li>To update your food or drink menu book, you can go to menu book section on the left (or at the bottom of your screen if you are using mobile phone) which is represented by book with fork and knife icon, then choose ‘Add Menu’ button. You can also update each food/drink you have entered, up to your liking.</li>
                                        <br/>
                                        <li>To print the QR code and short user’s guidance, you can go to Print QR Code menu section on the left (or bottom if you are using mobile phone) which is represented by QR Code icon, then choose ‘Print QR Code’ button. You can see more information about the QR code usage there.</li>
                                    </ol>
                                </Tab.Pane>
                                <Tab.Pane eventKey='Conditions'>
                                    <p className={styles.title}>Condition</p>
                                    <ol className={styles.list}>
                                        <li>To update your profile, you can go to Profile menu section which is represented by an icon of a person. Choose ‘Edit’ to update your profile’s information and choose ‘Change password’ to update your password.</li>
                                        <br/>
                                        <li>Aside from the menu section, you can also find navigation bar on top of your screen (which is represented by burger icon on the mobile version). It is consisted of 3 other menus which are how it works, our contact, and logout. Choose ‘Contact us’ to reach us by phone or email and our team will get back to you within 24 hours. Choose ‘Logout’ to sign off and leave. Do not let a stranger control your account.</li>
                                    </ol>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </Modal.Body>
        </Modal>
    )
}