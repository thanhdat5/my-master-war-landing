import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.css';

export default function FooterBottomComponent() {
    return (
        <div className={styles.tq_footer_bottom}>
            <div className={styles.tq_footer_bottom_inner}>
                <Container>
                    <Row>
                        <Col md="6" className="text-uppercase text-nowrap text-center text-md-start">
                            &copy;2021 BY <Link href='/'>MYMASTERWAR.COM</Link>
                        </Col>
                        <Col md="6" className="text-uppercase text-nowrap text-center text-md-end mt-2 mt-md-0">
                            All Rights Reserved
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
