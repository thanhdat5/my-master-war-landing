import { Container, Row, Col } from 'react-bootstrap';
import styles from './Partners.module.css';
export default function PartnersComponent() {
  return (
    <div className={styles.tq_partners} id="partners">
      <Container>
        <div className={styles.tq_partners_inner}>
          <Row>
            <Col xl="6">
              <div className={styles.tq_partners_title}>
                <h1>Our<br />Partners</h1>
                <div className={styles.tq_partners_sub_title}>
                  <span>#</span>our partner
                </div>
              </div>
            </Col>
            <Col xl="6">
              <div className="d-none d-xl-block position-relative h-100 w-100">
                <img alt="high" src="/images/high.png" height="450" className="position-absolute" style={{ right: '0', bottom: '-50px' }} />
              </div>
            </Col>
          </Row>
          <div className={styles.tq_partners_body}>
            <Row className='justify-content-start'>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p1.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p2.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p3.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p4.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p5.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p6.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p8.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p9.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p10.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p7.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p11.png" alt="P" />
                </a>
              </Col>
              <Col xl="2" lg="3" md="4" xs="6">
                <a href="#" target="_blank" className={styles.tq_partner}>
                  <img className="w-100" src="/images/partners/p12.png" alt="P" />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}
