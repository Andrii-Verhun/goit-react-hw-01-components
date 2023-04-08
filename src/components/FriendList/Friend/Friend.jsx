import PropTypes from 'prop-types';

import css from './Friend.module.css';

export const Friend = ({isOnline, avatar, name}) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.isOnline : css.status}
            ></span>
            <img className={css.avatar} src={avatar} alt="User avatar"/>
            <p className={css.name}>{name}</p>
        </li>
    );
};

Friend.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}