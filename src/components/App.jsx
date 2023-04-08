import user from '../data/user.json';
import upload from '../data/data.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"

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
      <Statistics upload={upload} />
    </div>
  );
};
