import BannerComponent from '../Banner';
import NavigationComponent from '../Navigation';
import ScrollDownComponent from '../ScrollDown';
import styles from './Header.module.css';
export default function HeaderComponent() {
  return (
    <div className={styles.tq_header} id="home">
      <NavigationComponent />
      <BannerComponent />
      <ScrollDownComponent />
    </div>
  )
}
