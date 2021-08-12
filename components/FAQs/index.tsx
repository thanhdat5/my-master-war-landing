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
                        <Accordion.Header>What is My Master War?</Accordion.Header>
                        <Accordion.Body>
                          <p>MyMasterWar is a game based on the Three Kingdoms game which is a quite famous game in the world, especially in China and Asian countries.</p>
                          <p>The game based on the historical story of China has attracted hundreds of thousands of players of different ages over a decade.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="1">
                        <Accordion.Header>What is MAT token?</Accordion.Header>
                        <Accordion.Body>
                          <p>MAT refers to My Master War Token, the token for the game ecosystem.  MAT follows the standard BEP20 token on the Binance Smart Chain platform (BSC)  and is controlled by smart contracts.</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="2">
                        <Accordion.Header>What is MAT token used for?</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>Buying game items: such as weapons, equipments</li>
                            <li>Upgrade levels: such as VIP-01, VIP-02,...</li>
                            <li>Game rewards: players will receive rewards when they win a battle, conquer the stronghold,...</li>
                            <li>Referral system: When players refer friends to play the game, they will receive an amount of MAT tokens proportional to the referral's trading volume.</li>
                            <li>Staking: Players can stake their MAT token in the game system to receive rewards.</li>
                            <li>Exchange on centralized/decentralized exchanges</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col lg="6">
                    <Accordion className={styles.tq_faqs_accordion} defaultActiveKey="3" flush>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="3">
                        <Accordion.Header>How to make money on MyMasterWar?</Accordion.Header>
                        <Accordion.Body>
                          <p>Game players can earn money by the following ways:</p>
                          <ul>
                            <li>Stake MAT token</li>
                            <li>Invite others to play the game</li>
                            <li>Play the game and win challenges</li>
                            <li>Sell the NFT token on marketplace</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="4">
                        <Accordion.Header>When will MAT be listed on exchanges?</Accordion.Header>
                        <Accordion.Body>
                          <p>Q4 2021</p>
                          <ul>
                            <li>Allow players to breed new generals from theirs parents and mint NFT token, evolve and trade on marketplace</li>
                            <li>Listing MAT on PancakeSwap</li>
                            <li>Listing MAT on top-10 centralized exchange</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={`${styles.tq_faqs_accordion_item} wow fadeInUp`} eventKey="5">
                        <Accordion.Header>How can I participate in the MAT Token sale?</Accordion.Header>
                        <Accordion.Body>
                          <p>Once My Master War is launched,<br />You can purchased Token with Etherum, Bitcoin,...</p>
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
