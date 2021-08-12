import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCardComponent from './ProfileCard';
import styles from './Teams.module.css';
import TEAMS from '../../constants/teams.json';

export default function TeamsComponent() {

  return (
    <div className={styles.tq_teams} id="teams">
      <Container>
        <div className={styles.tq_teams_inner}>
          <Row>
            <Col xl="4">
              <div className="d-none d-xl-block position-relative h-100 w-100">
                <img alt="game" src="/images/game.png" height="420" className="position-absolute wow fadeInUp" style={{ left: '0', bottom: '-90px' }} />
              </div>
            </Col>
            <Col xl="8">
              <div className={styles.tq_teams_title}>
                <h1 className="wow fadeInUp">The Leadership<br />teams</h1>
                <div className={`${styles.tq_teams_sub_title} wow fadeIn`}>
                  <span>#</span>Our Leadership
                </div>
              </div>
              <p className="fs-18 text-end mb-0 wow fadeInUp">My Master War NFT game team comes from all over around the world.<br />They have many years of experience and expertise in the working fields.</p>
            </Col>
          </Row>
          <div className={styles.tq_teams_body}>
            <Row className="gx-xl-5 gx-lg-4 gx-md-5 gy-md-3 mt-3">
              {
                TEAMS.map((item, idx) => {
                  return <Col key={idx} lg="3" md="6" className="wow fadeInUp" data-wow-delay={`${idx / 5}s`}>
                    <ProfileCardComponent data={item} />
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
