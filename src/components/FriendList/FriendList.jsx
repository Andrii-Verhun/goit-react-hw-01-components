import PropTypes from 'prop-types';

import css from './FriendList.module.css';

import { Friend } from './Friend/Friend';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map((el) => {
                return (
                    <Friend key={el.id}
                        isOnline={el.isOnline}
                        avatar={el.avatar}
                        name={el.name}
                    />
                );
            })}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.array,
}