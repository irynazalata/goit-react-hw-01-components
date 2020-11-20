import React from 'react-dom';
import propTypes from 'prop-types';
import styles from '../FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = [
    isOnline ? styles.active : styles.inactive,
  ];

  return (
    <li className={styles.item}>
      <span className={statusClasses}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
export default FriendListItem;
