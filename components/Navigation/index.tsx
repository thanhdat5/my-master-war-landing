import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from './Navigation.module.css';
import Scrollspy from 'react-scrollspy';

export default function NavigationComponent() {
  return (
    <div className={styles.tq_navigation} id="navigation">
      <Navbar expand="lg" variant="dark" className={`${styles.tq_navigation_navbar} w-100`}>
        <Container className="text-center">
          <Navbar.Brand href="#" className="d-lg-none">
            <img src="/images/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="d-lg-flex justify-content-lg-between w-100">
            <Scrollspy
              className={`${styles.tq_navigation_navbar_nav} navbar-nav justify-content-lg-between align-items-lg-center`} style={{ flex: 1 }}
              componentTag="div"
              items={['home', 'about', 'features', 'token']}
              currentClassName={styles.tq_nav_active} >
              <a className={styles.tq_nav_active} href="#">
                <span>HOME</span>
              </a>
              <a href="#about">
                <span>ABOUT</span>
              </a>
              <a href="#features">
                <span>FEATURES</span>
              </a>
              <a href="#token">
                <span className="text-nowrap">MAT TOKEN</span>
              </a>
            </Scrollspy>
            <Navbar.Brand className={`me-0 d-lg-block d-none ${styles.tq_mx_1400}`} href="#">
              <img src="/images/logo.png" alt="Logo" />
            </Navbar.Brand>
            <Scrollspy
              className={`${styles.tq_navigation_navbar_nav} navbar-nav justify-content-lg-between align-items-lg-center align-items-end`} style={{ flex: 1 }}
              componentTag="div"
              items={['teams', 'faqs', 'contact']}
              currentClassName={styles.tq_nav_active} >
              <a href="#teams">
                <span className="text-nowrap">OUR TEAM</span>
              </a>
              <a href="#faqs">
                <span>FAQs</span>
              </a>
              <a href="#contact">
                <span>CONTACT</span>
              </a>
              <a href="https://beta-play.mymasterwar.com/" target="_blank" rel="noreferrer" className="tq_btn tq_btn_outline tq_btn_danger nav-link d-lg-flex py-2 px-3" style={{ height: '40px', width: '130px' }}>
                <span className="tq_btn_text no-after">PLAY NOW!</span>
                <div className="tq_btn_hover"></div>
              </a>
            </Scrollspy>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
