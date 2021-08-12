import { Container } from 'react-bootstrap';
import styles from './GetFreeMAT.module.css';
export default function GetFreeMATComponent() {
  return (
    <div className={styles.tq_get_free_MAT} id="cta">
      <Container className="text-center">
        <h1>JOIN US AT MY MASTER WAR!<br />Get free MAT now!</h1>
        <div className="mt-5">
          <a href="#" className="tq_btn tq_btn_outline tq_btn_outline_danger">Let&apos;s Go</a>
        </div>
      </Container>
    </div>
  )
}
