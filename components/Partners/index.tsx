import { Container, Row, Col } from 'react-bootstrap';
import styles from './Partners.module.css';
import PARTNERS from '../../constants/partners.json';

export default function PartnersComponent() {
  return (
    <div className={styles.tq_partners} id="partners">
      <Container>
        <div className={styles.tq_partners_inner}>
          <Row>
            <Col xl="6">
              <div className={styles.tq_partners_title}>
                <h1 className="wow fadeInUp">Our<br />Partners</h1>
                <div className={`${styles.tq_partners_sub_title} wow fadeIn`}>
                  <span>#</span>our partner
                </div>
              </div>
            </Col>
            <Col xl="6">
              <div className="d-none d-xl-block position-relative h-100 w-100">
                <img alt="high" src="/images/high.png" height="450" className="position-absolute wow fadeInUp" style={{ right: '0', bottom: '-50px' }} />
              </div>
            </Col>
          </Row>
          <div className={styles.tq_partners_body}>
            <Row className='justify-content-start'>
              {
                PARTNERS.map((item, idx) => {
                  return <Col key={idx} xl="2" lg="3" md="4" xs="6" className="wow fadeInUp" data-wow-delay={`${idx / 5}s`}>
                    <a href={item?.link} target="_blank" className={styles.tq_partner} title={item?.name}>
                      <img className="w-100" src={item?.logo} alt={item?.name} />
                    </a>
                  </Col>
                })
              }
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}
