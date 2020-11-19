import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import user from './data/user.json';
import statistics from './data/statistical-data.json';
// import friends from './data/friends.json';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList />
    </>
  );
};
export default App;
