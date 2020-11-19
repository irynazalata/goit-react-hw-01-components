import React from 'react';
import './Statistics.css';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(props => {
          let random1 = Math.round(Math.random() * 255);
          let random2 = Math.round(Math.random() * 255);
          let random3 = Math.round(Math.random() * 255);
          return (
            <li
              className="item"
              key={props.id}
              style={{
                backgroundColor: `rgb(${random1}, ${random2}, ${random3})`,
              }}
            >
              <span className="label">{props.label}</span>
              <span className="percentage">{props.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
};

export default Statistics;
