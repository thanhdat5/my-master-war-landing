import { Container, Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';
import styles from './RoadMap.module.css';
export function RoadMapComponent() {
    return <div className={styles.tq_road_map} id="road_map">
        <Container fluid className="px-xl-5">
            <div className={styles.tq_road_map_inner}>
                <div className={styles.tq_road_map_title}>
                    <h1 className="wow fadeInUp">ROADMAP</h1>
                    <p className="fs-18 mb-0 wow fadeInUp">
                        My Master War is developing a global data-driven platform for the world.<br />Powered by blockchain and smart contracts.
                    </p>
                </div>
                <div className={styles.tq_road_map_body}>
                    <ul className={`${styles.tq_road_map_data} wow slideInRight`}>
                        <li className={styles.tq_road_map_data_active}>
                            <span>Q1, Q2 2021</span>
                            <ul className="wow fadeInUp" data-wow-delay="0.1s">
                                <li>Verify ideals, start designing and building the My Master War games</li>
                                <li>Connect with advisors and prepare for official plans</li>
                            </ul>
                        </li>
                        <li className={styles.tq_road_map_data_active}>
                            <span>Q3 2021</span>
                            <ul className="wow fadeInUp" data-wow-delay="0.2s">
                                <li>Complete coding the game</li>
                                <li>
                                    <div>Apply blockchain technologies into the game</div>
                                    <ul>
                                        <li>Buy game items, upgrade level by MAT tokens</li>
                                        <li>Mint general NFT tokens (by game creator)</li>
                                        <li>Reward MAT token for players who stake MAT, win the game or their referential.</li>
                                    </ul>
                                </li>
                                <li>NFT marketplace for players to buy/sell the bosses, heroes</li>
                                <li>Officially launching the game and starting the staking pool.</li>
                                <li>Private sale round</li>
                            </ul>
                        </li>
                        <li className={styles.tq_road_map_data_start}>
                            <span>Q4 2021</span>
                            <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                <li>
                                    <div>Improve the game</div>
                                    <ul>
                                        <li>Improve UI/UX, animation ...</li>
                                        <li>Allow players to create (mint) general NFT token</li>
                                    </ul>
                                </li>
                                <li>Listing MAT on PancakeSwap</li>
                                <li>Listing MAT on top-10 centralized exchange</li>
                            </ul>
                        </li>
                        <li>
                            <span>From 2022</span>
                            <ul className="wow fadeInUp" data-wow-delay="0.6s">
                                <li>Community development</li>
                                <li>Business  expansion</li>
                                <li>Operating and exploiting</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
}