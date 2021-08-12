import { Row, Col } from "react-bootstrap";
import FeatueComponent from "./Feature";
import FEATURES from '../../constants/features.json';
import styles from './Game.module.css';

export default function GameFeatuesComponent() {
    return (
        <div className={styles.game_features}>
            <div className={`${styles.tq_game_title} ${styles.game_features_title}`}>
                <h1 className="wow fadeInUp">Game<br />features</h1>
                <div className={`${styles.tq_game_features_sub_title} ${styles.tq_game_sub_title} wow fadeIn`}>
                    <span>#</span>Game Features
                </div>
            </div>
            <div className={styles.tq_game_body}>
                <Row className="gx-xl-5 gx-md-5 gy-md-3 mt-3">
                    {
                        FEATURES.map((item, idx) => {
                            return <Col key={idx} xl="4" md="6" className="wow fadeInUp" data-wow-delay={`${idx / 5}s`}>
                                <FeatueComponent data={item} />
                            </Col>
                        })
                    }
                </Row>
            </div>
        </div>
    )
}