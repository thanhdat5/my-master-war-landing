import { Modal } from "react-bootstrap";

interface ProfileModalProps {
    showModal: boolean,
    data: any,
    onDismiss: any
}
export default function ProfileModal({ showModal, data, onDismiss }: ProfileModalProps) {
    return <Modal centered={true} className="tq_modal" show={showModal} onHide={onDismiss}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            {/* <img src="/images/help.png" alt="" /> */}
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto dolor nisi corporis nemo optio quasi tenetur? Alias labore quas ullam eaque perspiciatis dolore quia earum ipsum. Similique, adipisci architecto.
            </div>
        </Modal.Body>
    </Modal>
}