import React from 'react-dom';
import propTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const itemClasses = ['item'];

  if (isOnline) {
    itemClasses.push('active');
  }

  return (
    <li className={itemClasses.join(' ')}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
export default FriendListItem;
