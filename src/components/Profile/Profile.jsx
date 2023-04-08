import PropTypes from 'prop-types';

import css from './Profile.module.css';

import { Descr } from './descr/Descr';
import { Stats } from './stats/Stats';

export const Profile = ({ avatar, username, tag, location, stats }) => {
    return <div className={css.profile}>
        <Descr
            avatar={avatar}
            username={username}
            tag={tag}
            location={location}
        />
        <Stats stats={stats} />
    </div>
};

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
}