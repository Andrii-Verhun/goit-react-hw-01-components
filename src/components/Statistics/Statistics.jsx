import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics = ({ upload }) => {
    const getRandomHexColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };

    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>

            <ul className={css['stat-list']}>
                {upload.map((el, index) => {
                    if (index >= 4) return '';
                    return (
                        <li key={el.id} className={css.item} style={{background: getRandomHexColor()}}>
                            <span className={css.label}>{el.label}</span>
                            <span className={css.percentage}>{el.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>)
};

Statistics.propTypes = {
    upload: PropTypes.array,
};