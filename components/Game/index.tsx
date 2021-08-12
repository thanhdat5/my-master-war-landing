import { Container, Row, Col } from 'react-bootstrap';
import styles from './Game.module.css';
import GameFeatuesComponent from './GameFeatures';
export default function GameComponent() {
  return (
    <div className={styles.tq_game} id="features">
      <Container>
        <div className={styles.tq_game_inner}>
          <Row className="align-items-center">
            <Col lg="6" className="text-center mb-5 mb-lg-0 mb-xl-0">
              <img alt="welcome" className="wow fadeInUp" src="/images/welcome.png" style={{ maxWidth: '100%' }} />
              <a href="https://beta-play.mymasterwar.com/" target="_blank" rel="noreferrer" className="tq_btn tq_btn_outline tq_btn_outline_primary wow fadeInUp" style={{ marginTop: '-30px' }}>
                <span className="tq_btn_text">Play Now</span>
                <div className="tq_btn_hover"></div>
              </a>
            </Col>
            <Col lg="6">
              <div className={styles.tq_game_title}>
                <h1 className="wow fadeInUp">My Master War<br />NFT GAME</h1>
                <div className={`${styles.tq_game_sub_title} wow fadeIn`}>
                  <span>#</span>MMW NFTGANME
                </div>
              </div>
              <div className={styles.tq_game_body}>
                <p className="wow fadeInUp">In the My Master War Game, players can choose their own scenario, each player is like a king of a country, they can choose generals, build armies, devise strategies and fight battles. The secret to winning battles, conquering strongholds and unifying the world lies in the selection of generals, the equipment for the generals and the tactics of the battle. We realize that those things are very important, affecting the player&apos;s experience and the ability to win in the game, so we have put these generals and game items on the blockchain (tokenization), helping players really experience the game  and own these permanently and transparently.</p>
                <p className="wow fadeInUp">There are two types of tokens in the game: the Fungible Token and Non-Fungible Token (NFT)</p>
              </div>
            </Col>
          </Row>

          <GameFeatuesComponent />
        </div>
      </Container>
    </div>
  )
}
