import PropTypes from 'prop-types';

import css from './Descr.module.css';

export const Descr = ({ avatar, username, tag, location }) => {
    return <div className={css.description}>
        <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
    </div>
};

Descr.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
};