import React from 'react';
import styles from './Profile.module.css';
import StatsItem from './Stats_item/Stats_item';
import propTypes from 'prop-types';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map(el => {
          return <StatsItem key={stats[el[0]]} el={el} />;
        })}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
};

export default Profile;
