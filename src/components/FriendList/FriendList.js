import React from 'react';
import './FriendList.css';
import friends from '../../data/friends.json';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = () => {
  const items = friends.map(props => (
    <FriendListItem key={props.id} {...props} />
  ));
  return <ul className="friend-list">{items}</ul>;
};

export default FriendList;
