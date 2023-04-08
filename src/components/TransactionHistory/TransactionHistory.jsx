// import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

import { Transaction } from './Transaction/Transaction';

export const TransactionHistory = ({ transactions }) => {
    console.log(transactions);
    return (
        <table className={css["transaction-history"]}>
            <thead>
                <tr>
                <th className={css.head}>Type</th>
                <th className={css.head}>Amount</th>
                <th className={css.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((el) => {
                    return (
                        <Transaction key={el.id}
                            type={el.type}
                            amount={el.amount}
                            currency={el.currency}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};