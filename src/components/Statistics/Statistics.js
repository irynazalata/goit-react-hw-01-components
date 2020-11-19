import React from 'react';
import styles from './Statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(props => {
          let random1 = Math.round(Math.random() * 255);
          let random2 = Math.round(Math.random() * 255);
          let random3 = Math.round(Math.random() * 255);
          return (
            <li
              className={styles.item}
              key={props.id}
              style={{
                backgroundColor: `rgb(${random1}, ${random2}, ${random3})`,
              }}
            >
              <span className={styles.label}>{props.label}</span>
              <span className={styles.percentage}>{props.percentage}%</span>
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
