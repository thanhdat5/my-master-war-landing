import { Container, Row, Col, Accordion } from 'react-bootstrap';
import styles from './FAQs.module.css';
export default function FAQsComponent() {
  return (
    <div className={styles.tq_faqs} id="faqs">
      <Container>
        <div className={styles.tq_faqs_inner}>
          <div className={styles.tq_faqs_title}>
            <img alt="low" className="d-none d-lg-inline-block wow fadeInUp" src="/images/low.png" style={{ marginBottom: '-60px', maxWidth: '80%', opacity: 1 }} />
            <h1 className="wow fadeInUp">FAQs</h1>
            <p className="fs-18 mb-0 wow fadeInUp">This section includes answers to frequently asked questions concerning My Master War</p>
          </div>
          <div className={styles.tq_faqs_body}>
            <Row className="justify-content-center">
              <Col xl="10">
                <Row>
                  <Col lg="6">
                    <Accordion className={styles.tq_faqs_accordion} defaultActiveKey="0" flush>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="0">
                        <Accordion.Header>What is the difference between MyMasterWar and other traditional Three Kingdoms games</Accordion.Header>
                        <Accordion.Body>
                          <p>MyMasterWar is just the traditional Three Kingdoms game except that players can leverage the blockchain technologies to store their game items, generals permanently, prove their ownership as long as well make profits from <i>play to earn model</i></p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="1">
                        <Accordion.Header>How can I make profits from playing the game</Accordion.Header>
                        <Accordion.Body>
                          <p>Players can make profits by winning the battles, conquering the strongholds, selling the NFT generals on marketplace or simply inviting other people to play the game</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="2">
                        <Accordion.Header>Do I need to buy NFT generals to start playing the game</Accordion.Header>
                        <Accordion.Body>
                          <p>No, Players can start playing without buying anything. Buying NFT generals or game items increases the opportunity to make more profits.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col lg="6">
                    <Accordion className={styles.tq_faqs_accordion} defaultActiveKey="4" flush>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="3">
                        <Accordion.Header>What is the MAT token distribution? Do you make a dump when listing on exchange?</Accordion.Header>
                        <Accordion.Body>
                          <p>Most of the MAT tokens are used for the game ecosystem. Founder and dev team have 10% of the total token for each and the token is locked in smart contracts (only 5% unlocked in the distribution time) so We do not have the ability to dump the price at all.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="4">
                        <Accordion.Header>How can I get MAT token</Accordion.Header>
                        <Accordion.Body>
                          <p>You can get the MAT token by asking to be whitelisted in the private sale round or public IDO round. Or simply play the game and earn the MAT token. Follow our official website (<a href="https://mymasterwar.com" target="_blank" rel="noreferrer">https://mymasterwar.com</a>) for more details.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="5">
                        <Accordion.Header>Do you have a plan to list MAT on exchange</Accordion.Header>
                        <Accordion.Body>
                          <p>Yes, ofcourse. MAT will be listed on PancakeSwap right after the private sales and top-10 centralized exchange in the quarter 4, 2021</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}
