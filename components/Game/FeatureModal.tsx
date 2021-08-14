import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import styles from './Game.module.css';
import "react-image-gallery/styles/css/image-gallery.css";

interface FeatureModalProps {
    showModal: boolean,
    data: any,
    title: string,
    onDismiss: any
}
export default function FeatureModal({ showModal, data, onDismiss, title }: FeatureModalProps) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (data) {
            let rs = data.map((img: string) => { return { original: img, thumbnail: img } });
            setImages(rs);
        } else {
            setImages([]);
        }
    }, [data])

    return <Modal size="xl" className="tq_modal" show={showModal} onHide={onDismiss}>
        <Modal.Header closeButton>
            <div className="w-100">{title}</div>
        </Modal.Header>
        <Modal.Body className={`${styles.feature_image_modal} p-3`}>
            <ImageGallery items={images} />
        </Modal.Body>
    </Modal>
}