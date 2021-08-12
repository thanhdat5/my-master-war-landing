import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import styles from './Teams.module.css';
export default function TeamsComponent() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (e: any) => {
    e.preventDefault();
    setShowModal(true);
  }
  return (
    <div className={styles.tq_teams} id="teams">
      <Container>
        <div className={styles.tq_teams_inner}>
          <Row>
            <Col xl="4">
              <div className="d-none d-xl-block position-relative h-100 w-100">
                <img alt="game" src="/images/game.png" height="420" className="position-absolute wow slideInLeft" style={{ left: '0', bottom: '-90px' }} />
              </div>
            </Col>
            <Col xl="8">
              <div className={styles.tq_teams_title}>
                <h1 className="wow slideInRight">The Leadership<br />teams</h1>
                <div className={`${styles.tq_teams_sub_title} slideInUp`}>
                  <span>#</span>Our Leadership
                </div>
              </div>
              <p className="fs-18 text-end mb-0 wow fadeInUp">The Three Kingdoms NFT game team comes from all over around the world.<br />They have many years of experience and expertise in the working fields.</p>
            </Col>
          </Row>
          <div className={styles.tq_teams_body}>
            <Row>
              <Col lg="3" md="6">
                <a href="#" className={`${styles.tq_team} wow fadeInUp`} onClick={handleShowModal} data-wow-delay="1s">
                  <div className={styles.tq_team_inner}>
                    <div className={styles.tq_team_avatar}>
                      <img src="https://mydefipet.com/_nuxt/img/Team8.dde2369.png" alt="Tri Nguyen" />
                    </div>
                    <div className={styles.tq_team_name}>
                      Tri Nguyen
                    </div>
                    <div className={styles.tq_team_title}>
                      Co-Founder
                    </div>
                    {/* <div className={styles.tq_team_socials}>
                      <a href="https://www.linkedin.com/in/nguyenthetri/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div> */}
                  </div>
                </a>
              </Col>
              <Col lg="3" md="6">
                <a href="#" className={`${styles.tq_team} wow fadeInUp`} onClick={handleShowModal} data-wow-delay="1.2s">
                  <div className={styles.tq_team_inner}>
                    <div className={styles.tq_team_avatar}>
                      <img src="https://mydefipet.com/_nuxt/img/Team8.dde2369.png" alt="Quan Tran" />
                    </div>
                    <div className={styles.tq_team_name}>
                      Quan Tran
                    </div>
                    <div className={styles.tq_team_title}>
                      CTO
                    </div>
                    {/* <div className={styles.tq_team_socials}>
                      <a href="https://www.linkedin.com/in/quan-thien-bao-tran-08401a124/" target="_blank"><i className="fab fa-linkedin"></i></a>
                      <a href="https://github.com/quanttb" target="_blank"><i className="fab fa-github"></i></a>
                    </div> */}
                  </div>
                </a>
              </Col>
              <Col lg="3" md="6">
                <a href="#" className={`${styles.tq_team} wow fadeInUp`} onClick={handleShowModal} data-wow-delay="1.4s">
                  <div className={styles.tq_team_inner}>
                    <div className={styles.tq_team_avatar}>
                      <img src="https://mydefipet.com/_nuxt/img/Team8.dde2369.png" alt="Van Vo" />
                    </div>
                    <div className={styles.tq_team_name}>
                      Van Vo
                    </div>
                    <div className={styles.tq_team_title}>
                      Chief Gaming Officer
                    </div>
                    {/* <div className={styles.tq_team_socials}>
                      <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div> */}
                  </div>
                </a>
              </Col>
              <Col lg="3" md="6">
                <a href="#" className={`${styles.tq_team} wow fadeInUp`} onClick={handleShowModal} data-wow-delay="1.6s">
                  <div className={styles.tq_team_inner}>
                    <div className={styles.tq_team_avatar}>
                      <img src="https://mydefipet.com/_nuxt/img/Team8.dde2369.png" alt="Thanh Nguyen" />
                    </div>
                    <div className={styles.tq_team_name}>
                      Thanh Nguyen
                    </div>
                    <div className={styles.tq_team_title}>
                      Product Lead
                    </div>
                    {/* <div className={styles.tq_team_socials}>
                      <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div> */}
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      <Modal centered={true} className="tq_modal" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {/* <img src="/images/help.png" alt="" /> */}
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto dolor nisi corporis nemo optio quasi tenetur? Alias labore quas ullam eaque perspiciatis dolore quia earum ipsum. Similique, adipisci architecto.
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
