import Link from 'next/link'
import { Col, Container, Row, Nav } from 'react-bootstrap';
import styles from './Footer.module.css';
export default function FooterTopComponent() {
    return (
        <div className={styles.tq_footer_top}>
            <div className={styles.tq_footer_top_inner}>
                <Container>
                    <Row className="align-items-center">
                        <Col xl="3" className="text-center text-xl-start">
                            <a href="#">
                                <img alt="Logo" src="/images/logo.png" style={{ maxWidth: '100%' }} />
                            </a>
                        </Col>
                        <Col xl="6" className="text-center mt-3 mt-xl-0">
                            <Nav className={styles.tg_footer_top_nav}>
                                <Nav.Item>
                                    <Link href="#">
                                        <a className="nav-link" href="#">Homepage</a>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link href="#about">
                                        <a className="nav-link" href="#about">About</a>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link href="#features">
                                        <a className="nav-link" href="#features">Features</a>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link href="#token">
                                        <a className="nav-link" href="#token">MAT Token</a>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link href="#teams">
                                        <a className="nav-link" href="#teams">Our Teams</a>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link href="#partner">
                                        <a className="nav-link" href="#partner">Partner</a>
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xl="3" className="text-center mt-5 mt-xl-0 text-xl-end">
                            <a href="#" className="tq_btn tq_btn_outline tq_btn_outline_primary">
                                <span className="tq_btn_text">Play Game</span>
                                <div className="tq_btn_hover"></div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
