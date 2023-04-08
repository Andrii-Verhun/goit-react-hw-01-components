import PropTypes from 'prop-types';

import css from './Stats.module.css';

export const Stats = ({ stats, tag }) => {
    return <ul className={css.stats}>
        {Object.keys(stats).map((el, index) => {
            return <li key={tag+index} className={css.item}>
                <span className={css.label}>{el}</span>
                <span className={css.quantity}>{stats[el]}</span>
            </li>
        })}   
    </ul>
};

Stats.propTypes = {
    tag: PropTypes.string,
    stats: PropTypes.object,
};