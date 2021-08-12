import styles from './Game.module.css';
import { useState } from 'react';
import FeatureModal from './FeatureModal';

interface FeatueComponentProps {
    data: any
}
export default function FeatueComponent({ data }: FeatueComponentProps) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className={styles.tg_feature_item} onClick={() => setShowModal(true)}>
                <div className={styles.tg_feature_image}>
                    <img src={data?.image} alt={data?.name} />
                </div>
                <div className={styles.tg_feature_name}>
                    {data?.name}
                </div>
                <div className={styles.tg_feature_description} dangerouslySetInnerHTML={{ __html: data?.description }}></div>
            </div>

            <FeatureModal title={data?.name} data={data?.albums} showModal={showModal} onDismiss={() => setShowModal(false)} />
        </>
    )
}