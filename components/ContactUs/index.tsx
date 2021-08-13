import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';
import { toast } from 'react-toastify';
import MESSAGES from '../../constants/messages.json';
import styles from './ContactUs.module.css';
import BlockUi from 'react-block-ui';

export function ContactUsComponent() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [isBlocking, setIsBlocking] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        if (form.checkValidity() === false) {
            return;
        }
        const postData = {
            email: email,
            subject: "Contact Form",
            message: message,
            name: name
        }
        sendMail(postData);
    };

    const sendMail = async (data: any) => {
        setIsBlocking(true);
        try {
            let rs = await fetch("/api/contact", {
                "method": "POST",
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(data)
            })
            debugger
            if (rs.status === 200) {
                toast.success(MESSAGES.SEND_CONTACT_SUCCESS);
                setName('');
                setEmail('');
                setMessage('');
                setValidated(false);
                setIsBlocking(false);
            } else {
                toast.error(MESSAGES.SEND_CONTACT_FAILED);
                console.log(rs);
            }
            setIsBlocking(false);
        } catch (error) {
            toast.error(MESSAGES.SEND_CONTACT_FAILED);
            console.log(error);
            setIsBlocking(false);
        }
    }

    return <div className={styles.tq_contact} id="contact">
        <Container>
            <div className={styles.tq_contact_inner}>
                <div className={styles.tq_contact_title}>
                    <h1 className="wow fadeInUp">Contact Us</h1>
                </div>
                <div className={styles.tq_contact_body}>
                    <Row className="align-items-center">
                        <Col xl="6" lg="6">
                            <img className="wow fadeInUp" src="/images/welcome.png" alt="" style={{ maxWidth: '100%' }} />
                        </Col>
                        <Col xl="6" lg="6">

                            <p className="fs-18 mb-4 wow fadeInUp">We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.</p>
                            <Form className="tq_contact_form pb-4" onSubmit={(e) => handleSubmit(e)} noValidate validated={validated}>
                                <Row className="wow fadeInUp">
                                    <Col md="5">
                                        <FormGroup className="form-group mb-4" controlId="ctrlName">
                                            <FormControl placeholder="Your name..." type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                                            <div className="form-control-border"></div>
                                            <Form.Control.Feedback type="invalid" style={{ marginTop: '-9px', position: 'absolute' }}>
                                                Your name is required.
                                            </Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                    <Col md="7">
                                        <FormGroup className="form-group mb-4" controlId="ctrlEmail">
                                            <FormControl placeholder="Your email..." type="email" required onChange={(e) => setEmail(e.target.value)} />
                                            <div className="form-control-border"></div>
                                            <Form.Control.Feedback type="invalid" style={{ marginTop: '-9px', position: 'absolute' }}>
                                                {email && email.trim() !== '' ? 'Email is invalid.' : 'Your email is required.'}
                                            </Form.Control.Feedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className="form-group mb-4 wow fadeInUp" controlId="ctrlMessage">
                                    <FormControl as="textarea" rows={5} placeholder="Your message..." required onChange={(e) => setMessage(e.target.value)} />
                                    <div className="form-control-border"></div>
                                    <Form.Control.Feedback type="invalid" style={{ marginTop: '-9px', position: 'absolute' }}>
                                        Your message is required.
                                    </Form.Control.Feedback>
                                </FormGroup>
                                <FormGroup className="form-group mb-5 wow fadeInUp">
                                    <BlockUi tag="div" blocking={isBlocking} className="block_ui_button">
                                        <button type="submit" className="tq_btn tq_btn_outline tq_btn_outline_primary w-100 text-center">
                                            <span className="tq_btn_text">Submit message</span>
                                            <div className="tq_btn_hover"></div>
                                        </button>
                                    </BlockUi>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </div>
}