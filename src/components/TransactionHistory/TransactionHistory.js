import React from 'react';
import styles from './TransactionHistory.module.css';
import propTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.text}>
            <td className={styles.item}>{type}</td>
            <td className={styles.item}>{amount}</td>
            <td className={styles.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
};
export default TransactionHistory;
