import PropTypes from 'prop-types';

import css from './Stats.module.css';

export const Stats = ({ stats }) => {
    return <ul className={css.stats}>
        {Object.keys(stats).map((el) => {
            return <li key={el} className={css.item}>
                <span className={css.label}>{el}</span>
                <span className={css.quantity}>{stats[el]}</span>
            </li>
        })}   
    </ul>
};

Stats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};