import styles from '../styles/Navbar.module.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { toggleMenuState } from '../state/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { landingPageRefs, LANDING_PAGE_REDIRECTS } from '../state/global'

export default function NavigationBar(props) {
    const { loggedin } = props

    const [isToggleMenu, setIsToggleMenu] = useRecoilState(toggleMenuState)
    const [landingPageRef, setLandingPageRef] = useRecoilState(landingPageRefs)

    const onSelectHandler = (eventKey) => {
      setIsToggleMenu(!isToggleMenu)
      setLandingPageRef(eventKey)
    }

    return (
      <Navbar collapseOnSelect fixed='top' bg='#FFF3DB' expand='lg' onSelect={onSelectHandler} className={styles.header}>
        <Navbar.Brand href='/' className={styles.logo}>Qrder</Navbar.Brand>
        <Navbar.Toggle bsPrefix={styles.customToggler} aria-controls='responsive-navbar-nav' onClick={() => setIsToggleMenu(!isToggleMenu)}>
          {!isToggleMenu ?
            <FontAwesomeIcon icon={faBars} color='#4D3826' className={styles.toggleButton} />
            :
            <FontAwesomeIcon icon={faTimes} color='#4D3826' className={styles.toggleButton} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className={styles.link} eventKey="INTRO" >What is Qrder?</Nav.Link>
            <Nav.Link className={styles.link} eventKey="HOW">How it works</Nav.Link>
            <Nav.Link className={styles.link} eventKey="CONTACT">About us/Contact</Nav.Link>
            <Nav.Link className={styles.link} href='/'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}