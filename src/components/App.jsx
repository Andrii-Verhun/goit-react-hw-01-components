import user from '../data/user.json';
import upload from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        color: '#010101'
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics
        upload={upload}
        // title={'Upload stats'}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
