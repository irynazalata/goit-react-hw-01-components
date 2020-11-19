import React from 'react';
import './FriendList.css';
import FriendListItem from './FriendListItem/FriendListItem';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const items = friends.map(props => (
    <FriendListItem key={props.id} {...props} />
  ));
  return <ul className="friend-list">{items}</ul>;
};

FriendList.propTypes = {
  friends: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
};

export default FriendList;
