import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const items = friends.map(props => (
    <FriendListItem key={props.id} {...props} />
  ));
  return <ul className={styles.friendList}>{items}</ul>;
};

FriendList.propTypes = {
  friends: propTypes.oneOfType([propTypes.object, propTypes.array]),
};

export default FriendList;
