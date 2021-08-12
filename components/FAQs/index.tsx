import { Container, Row, Col, Accordion } from 'react-bootstrap';
import styles from './FAQs.module.css';
export default function FAQsComponent() {
  return (
    <div className={styles.tq_faqs} id="faqs">
      <Container>
        <div className={styles.tq_faqs_inner}>
          <div className={styles.tq_faqs_title}>
            <img alt="low" className="d-none d-lg-inline-block" src="/images/low.png" style={{ marginBottom: '-60px', maxWidth: '80%', opacity:1 }} />
            <h1>FAQs</h1>
            <p className="fs-18 mb-0">This section includes answers to frequently asked questions concerning My Master War</p>
          </div>
          <div className={styles.tq_faqs_body}>
            <Row className="justify-content-center">
              <Col xl="10">
                <Row>
                  <Col lg="6">
                    <Accordion className={styles.tq_faqs_accordion} defaultActiveKey="0" flush>
                      <Accordion.Item className={styles.tq_faqs_accordion_item} eventKey="0">
                        <Accordion.Header>What is MAT?</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={styles.tq_faqs_accordion_item} eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={styles.tq_faqs_accordion_item} eventKey="2">
                        <Accordion.Header>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col lg="6">
                    <Accordion className={styles.tq_faqs_accordion} defaultActiveKey="3" flush>
                      <Accordion.Item className={styles.tq_faqs_accordion_item} eventKey="3">
                        <Accordion.Header>Accordion Item #4</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={styles.tq_faqs_accordion_item} eventKey="4">
                        <Accordion.Header>Accordion Item #5</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item className={styles.tq_faqs_accordion_item} eventKey="5">
                        <Accordion.Header>Accordion Item #6</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}
