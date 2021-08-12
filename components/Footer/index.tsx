import ScrollToTopComponent from '../ScrollToTop';
import styles from './Footer.module.css';
import FooterBottomComponent from './FooterBottom';
import FooterTopComponent from './FooterTop';
export default function FooterComponent() {
  return (
    <div className={styles.tq_footer}>
      <FooterTopComponent />
      <FooterBottomComponent/>
      <ScrollToTopComponent/>
    </div>
  )
}
