import { useEffect } from 'react';
import styles from './Loading.module.css';
import $ from 'jquery';

export default function LoadingComponent() {
    useEffect(() => {
        window.onload = () => {
            setTimeout(() => {
                $('#MMW_loading').fadeOut(400);
            }, 1500);
        }
    }, [])

    return <div className={styles.tq_loading} id="MMW_loading">
        <img src="/images/loading.gif" alt="loading..." height="90" />
    </div>
}