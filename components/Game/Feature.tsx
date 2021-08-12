import styles from './Game.module.css';
interface FeatueComponentProps {
    data: any
}
export default function FeatueComponent({ data }: FeatueComponentProps) {
    return (
        <div className={styles.tg_feature_item}>
            <div className={styles.tg_feature_image}>
                <img src={data?.image} alt={data?.name} />
            </div>
            <div className={styles.tg_feature_name}>
                {data?.name}
            </div>
            <div className={styles.tg_feature_description} dangerouslySetInnerHTML={{ __html: data?.description }}></div>
        </div>
    )
}