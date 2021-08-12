import { Container, Row, Col } from 'react-bootstrap';
import styles from './Banner.module.css';
export default function BannerComponent() {
  return (
    <div className={styles.tq_banner}>
      <Container>
        <h1 className="text-center pt-5 mt-3 wow fadeInUp" style={{ fontSize: '60px', color: '#dee6ee' }}>
          <b>Welcome to My Master War !</b>
        </h1>
        <Row>
          <Col lg="4">
            <img alt="banner1" className="d-none d-lg-inline" src="/images/cao2.gif" style={{ marginTop: '0px', marginLeft: '150px' }} />
          </Col>
          <Col lg="4" className="text-center">
            <img alt="banner2" src="/images/bangthong.gif" style={{ marginTop: '-60px', maxWidth: '500px' }} />
          </Col>
          <Col lg="4">
            <img alt="banner3" className="d-none d-lg-inline" src="/images/zhaoyun.gif" style={{ marginTop: '-90px', marginLeft: '-50px' }} />
            <img alt="banner4" className="d-none d-lg-inline" src="/images/liubei.gif" style={{ marginTop: '-250px', marginLeft: '70px' }} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
