import { Container, Row, Col } from 'react-bootstrap';
import styles from './AboutUs.module.css';
export default function AboutUsComponent() {
  return (
    <div className={styles.tq_about_us} id="about">
      <Container>
        <Row className="align-items-center">
          <Col xl="6" lg="7">
            <div className={styles.tq_about_us_title}>
              <h1 className="wow slideInLeft">About<br />My Master War</h1>
              <div className={`${styles.tq_about_us_sub_title} wow slideInUp`} >
                <span>#</span>MyMasterWar
              </div>
            </div>
            <div className={styles.tq_about_us_body}>
              <p className="wow fadeInUp">The Three Kingdoms game is a quite famous game in the world, especially in China and Asian countries. The game based on the historical story of China has attracted hundreds of thousands of players of different ages over a decade.</p>
              <p className="wow fadeInUp">The Three Kingdoms NFT game  is just  like traditional games. The difference is that blockchain technology is applied to the game along with the &quot;play to earn&quot; model. Players can enjoy  the game while still being able to make a profit from it.</p>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mt-5 flex-wrap">
              <a href="#" className="tq_btn tq_btn_outline tq_btn_outline_primary wow fadeInUp">
                <span className="tq_btn_text">White Paper</span>
                <div className="tq_btn_hover"></div>
              </a>
              <a href="#" className="ms-md-5 tq_btn_play mt-4 mt-md-0 wow fadeInUp">
                <i className="fas fa-play"></i>
                <span>How it works?</span>
              </a>
            </div>
          </Col>
          <Col xl="6" lg="5" className="text-center">
            <img className="d-none d-lg-block mx-auto wow slideInRight" src="/images/help.png" alt="" style={{ maxWidth: '100%' }} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
