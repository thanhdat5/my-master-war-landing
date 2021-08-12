import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Tokens.module.css';
import { Pie, Doughnut } from 'react-chartjs-2';
import $ from 'jquery';

export default function TokensComponent() {
  const canvas_border_color = '#180d1e';
  const pie_color = '#251444';
  const pie_hover_color = '#ff3549';
  const data_set = {
    labels: ['Ecosystem', 'Reward', 'Dev Team', 'Founder Team', 'Advisors', 'Marketing', 'Private sale', 'Public IDO'],
    titles: '',
    datasets: [{
      label: "949",
      lineTension: 0,
      backgroundColor: ['#7228e2', pie_color, pie_color, pie_color, pie_color, pie_color, pie_color, pie_color],
      hoverBackgroundColor: [pie_hover_color, pie_hover_color, pie_hover_color, pie_hover_color, pie_hover_color, pie_hover_color, pie_hover_color, pie_hover_color],
      borderColor: canvas_border_color,
      borderWidth: 2,
      hoverBorderColor: canvas_border_color,
      data: [40, 15, 10, 10, 4, 10, 10, 1],
      animationDuration: 400,
    }]
  };
  const options_set = {
    plugins: {
      legend: {
        display: false
      },
      cutoutPercentage: 0,
      maintainAspectRatio: false,
      tooltip: {
        callbacks: {
          title: function (tooltipItem: any) {
            return [tooltipItem[0]['label']];
          },
          label: function (tooltipItem: any, data: any) {
            return tooltipItem['raw'] + ' %';
          }
        },
        backgroundColor: 'transparent',
        titleFontSize: 11,
        bodyFontColor: '#fff',
        bodyFontSize: 14,
        bodyFontStyle: 'bold',
        bodySpacing: 0,
        yPadding: 0,
        xPadding: 0,
        yAlign: 'center',
        xAlign: 'center',
        footerMarginTop: 5,
        displayColors: false
      },
    },
    onHover: function (e: any, i: any) {
      if (i.length) {
        var _cur_idx = i[0].index + 1;
        $('#tq-chart-legends li').removeClass(styles.active);
        $('#tq-chart-legends li:nth-child(' + _cur_idx + ')').addClass(styles.active);
      } else {
        $('#tq-chart-legends li').removeClass(styles.active);
      }
    }
  };

  useEffect(() => {

  }, [])

  return (
    <div className={styles.tq_tokens} id="token">
      <Container>
        <div className={styles.tq_tokens_inner}>
          <div className={styles.tq_tokens_title}>
            <h1 className="wow slideInLeft">Token<br />Economics</h1>
            <div className={`${styles.tq_tokens_sub_title} wow slideInUp`}>
              <span>#</span>token Economics
            </div>
          </div>
          <p className="fs-18 mb-0 wow fadeInUp">We are committed to building games, communities and ecosystems in a sustainable way.<br />So all the token metrics such as the total number, the allocation ratio, the lock rate ... are carefully considered.</p>

          <div className={styles.tq_tokens_body}>
            <Row className="align-items-center">
              <Col xl="5" lg="6" className="px-xl-5 order-xl-1 mb-5 mb-xl-0">
                <div className="pe-lg-5 wow fadeInUp">
                  <Doughnut onMouseLeave={()=>$('#tq-chart-legends li').removeClass(styles.active)} options={options_set} data={data_set} width={400} height={400} />
                </div>
              </Col>
              <Col xl="4" lg="6">
                <ul className={`${styles.chart_data} row wow slideInLeft`} id="tq-chart-legends">
                  <li className="col-sm-6">
                    <div className={styles.chart_data_item}>
                      <span className={styles.chart_label}>Ecosystem</span>
                      <span className={styles.chart_info}>
                        <span className={styles.chart_percent}>40% </span>
                        <span className={styles.chart_sublabel}>(40,000,000 token)</span>
                      </span>
                    </div>
                  </li>
                  <li className='col-sm-6'>
                    <div className={styles.chart_data_item}>
                      <span className={styles.chart_label}>Reward</span>
                      <span className={styles.chart_info}>
                        <span className={styles.chart_percent}>15% </span>
                        <span className={styles.chart_sublabel}>(15,000,000 token)</span>
                      </span>
                    </div>
                  </li>
                  <li className="col-sm-6">
                    <div className={styles.chart_data_item}>
                      <span className={styles.chart_label}>Dev Team</span>
                      <span className={styles.chart_info}>
                        <span className={styles.chart_percent}>10% </span>
                        <span className={styles.chart_sublabel}>(10,000,000 token)</span>
                      </span>
                    </div>
                  </li>
                  <li className="col-sm-6">
                    <div className={styles.chart_data_item}>
                      <span className={styles.chart_label}>Founder Team</span>
                      <span className={styles.chart_info}>
                        <span className={styles.chart_percent}>10% </span>
                        <span className={styles.chart_sublabel}>(10,000,000 token)</span>
                      </span>
                    </div>
                  </li>
                  <li className="col-sm-6">
                    <div className={styles.chart_data_item}>
                      <span className={styles.chart_label}>Advisors</span>
                      <span className={styles.chart_info}>
                        <span className={styles.chart_percent}>4% </span>
                        <span className={styles.chart_sublabel}>(4,000,000 token)</span>
                      </span>
                    </div>
                  </li>
                  <li className="col-sm-6">
                    <div className={styles.chart_data_item}>
                      <span className={styles.chart_label}>Marketing</span>
                      <span className={styles.chart_info}>
                        <span className={styles.chart_percent}>10% </span>
                        <span className={styles.chart_sublabel}>(10,000,000 token)</span>
                      </span>
                    </div>
                  </li>
                  <li className="col-sm-6">
                    <div className={styles.chart_data_item}>
                      <span className={styles.chart_label}>Private sale</span>
                      <span className={styles.chart_info}>
                        <span className={styles.chart_percent}>10% </span>
                        <span className={styles.chart_sublabel}>(10,000,000 token)</span>
                      </span>
                    </div>
                  </li>
                  <li className="col-sm-6">
                    <div className={styles.chart_data_item}>
                      <span className={styles.chart_label}>Public IDO</span>
                      <span className={styles.chart_info}>
                        <span className={styles.chart_percent}>1% </span>
                        <span className={styles.chart_sublabel}>(1,000,000 token)</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col xl="3" className="order-last mt-5 mt-xl-0">
                <Row className="wow slideInRight">
                  <Col xl="12" lg="6" md="6">
                    <div className={styles.token_info_item}>
                      <div className={styles.token_info_title}>Token Name</div>
                      <h4 className={styles.token_info_des}>My Master War Token</h4>
                    </div>
                  </Col>
                  <Col xl="12" lg="6" md="6">
                    <div className={styles.token_info_item}>
                      <div className={styles.token_info_title}>Token Symbol</div>
                      <h4 className={styles.token_info_des}>MAT</h4>
                    </div>
                  </Col>
                  <Col xl="12" lg="6" md="6">
                    <div className={styles.token_info_item}>
                      <div className={styles.token_info_title}>Total supply</div>
                      <h4 className={styles.token_info_des}>100.000.000 MAT</h4>
                    </div>
                  </Col>
                  <Col xl="12" lg="6" md="6">
                    <div className={styles.token_info_item}>
                      <div className={styles.token_info_title}>Blockchain network</div>
                      <h4 className={styles.token_info_des}>Binance Smart Chain (BSC)</h4>
                    </div>
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
