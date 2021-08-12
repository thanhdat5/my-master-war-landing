import React, { useState } from 'react';
import ProfileModal from './ProfileModal';
import styles from './Teams.module.css';

interface ProfileCardComponentProps {
  data: any
}
export default function ProfileCardComponent({ data }: ProfileCardComponentProps) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (e: any) => {
    e.preventDefault();
    setShowModal(true);
  }
  return (
    <>
      <a href="#" className={`${styles.tq_team} wow fadeInUp`} onClick={handleShowModal} data-wow-delay="1s">
        <div className={styles.tq_team_inner}>
          <div className={styles.tq_team_avatar}>
            <img src={data?.avatar} alt={data?.fullName} />
          </div>
          <div className={styles.tq_team_name}>{data?.fullName}</div>
          <div className={styles.tq_team_title}>{data?.fullName}</div>
        </div>
      </a>
      <ProfileModal showModal={showModal} onDismiss={() => setShowModal(false)} data={data} />
    </>
  )
}
