import { Modal, Row, Col } from "react-bootstrap";
import styles from './Teams.module.css';

interface ProfileModalProps {
    showModal: boolean,
    data: any,
    onDismiss: any
}
export default function ProfileModal({ showModal, data, onDismiss }: ProfileModalProps) {
    return <Modal size="lg" centered={true} className="tq_modal" show={showModal} onHide={onDismiss}>
        <Modal.Header closeButton>
            <div className="w-100">Profile</div>
        </Modal.Header>
        <Modal.Body>
            {/* <img src="/images/help.png" alt="" /> */}
            <Row className="align-items-start">
                <Col md="6">
                    <div className={`${styles.team_popup_photo} pe-md-3`}>
                        <img src={data?.avatar} alt="team" />
                        <ul className={`${styles.team_popup_social} mt-3`}>
                            <li><a href={data?.linkedin} target="_blank" rel="noreferrer"><em className="fab fa-linkedin-in"></em></a></li>
                        </ul>
                    </div>
                </Col>
                <Col md="6">
                    <div className={`${styles.team_popup_info}`}>
                        <h3 className={`${styles.team_popup_name}`}>{data?.fullName}</h3>
                        <div className={styles.team_popup_position}>{data?.jobTitle}</div>
                        <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                    </div>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
}