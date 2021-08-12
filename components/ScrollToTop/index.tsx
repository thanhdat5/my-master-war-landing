import React, { useCallback, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
import $ from 'jquery';

export default function ScrollToTopComponent() {
    const handleToggleScrollToTop = useCallback(
        e => {
            const window = e.currentTarget;
            if (window.scrollY > 200) {
                $('#to_top').fadeIn(300);
            } else {
                $('#to_top').fadeOut(300);
            }
        }, []
    );

    useEffect(() => {
        window.addEventListener("scroll", handleToggleScrollToTop);

        return () => {
            window.removeEventListener("scroll", handleToggleScrollToTop);
        };
    }, [handleToggleScrollToTop]);

    return (
        <div className={styles.tq_scroll_to_top} id="to_top">
            <a href="#" className="tq_btn tq_btn_outline tq_btn_outline_primary">
                <span className="tq_btn_text"><i className="fas fa-arrow-up"></i></span>
                <div className="tq_btn_hover"></div>
            </a>
        </div>
    )
}
