import React from 'react';
import './Profile.css';
import StatsItem from './Stats_item/Stats_item';
import propTypes from 'prop-types';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
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
