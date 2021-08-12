import { Container, Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';
import styles from './ContactUs.module.css';
export function ContactUsComponent() {
    return <div className={styles.tq_contact} id="contact">
        <Container>
            <div className={styles.tq_contact_inner}>
                <div className={styles.tq_contact_title}>
                    <h1 className="wow fadeInUp">Contact Us</h1>
                </div>
                <div className={styles.tq_contact_body}>
                    <Row className="align-items-center">
                        <Col xl="7" lg="6">
                            <img className="wow fadeInUp" src="/images/welcome.png" alt="" style={{ maxWidth: '100%' }} />
                        </Col>
                        <Col xl="5" lg="6">
                            <p className="fs-18 mb-4 wow fadeInUp">We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.</p>
                            <Form className="tq_contact_form pb-4">
                                <Row className="wow fadeInUp">
                                    <Col md="6">
                                        <FormGroup className="form-group mb-3">
                                            <FormControl placeholder="Your name..." type="text" required />
                                            <div className="form-control-border"></div>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup className="form-group mb-3">
                                            <FormControl placeholder="Your email..." type="email" required />
                                            <div className="form-control-border"></div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className="form-group mb-3 wow fadeInUp">
                                    <FormControl as="textarea" rows={5} placeholder="Your message..." required />
                                    <div className="form-control-border"></div>
                                </FormGroup>
                                <FormGroup className="form-group mb-5 wow fadeInUp">
                                    <a href="#" className="tq_btn tq_btn_outline tq_btn_outline_primary w-100 text-center">
                                        <span className="tq_btn_text">Submit message</span>
                                        <div className="tq_btn_hover"></div>
                                    </a>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </div>
}